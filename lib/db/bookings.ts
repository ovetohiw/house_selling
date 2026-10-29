import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

export type BookingInput = {
  complexId: string;
  unitId: string;
  visitDate: string;
  name: string;
  phone: string;
};

export type BookingRow = BookingInput & {
  id: number;
  createdAt: string;
};

function resolveDbPath(): string {
  return (
    process.env.SQLITE_PATH?.trim() ||
    path.join(process.cwd(), "data", "bookings.db")
  );
}

const connections = new Map<string, Database.Database>();

export function getBookingsDb(dbPath = resolveDbPath()): Database.Database {
  const existing = connections.get(dbPath);
  if (existing) return existing;
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const db = new Database(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      complex_id TEXT NOT NULL,
      unit_id TEXT NOT NULL,
      visit_date TEXT NOT NULL,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
  connections.set(dbPath, db);
  return db;
}

export function resetBookingsDbCache(): void {
  for (const db of connections.values()) db.close();
  connections.clear();
}

export function insertBooking(
  input: BookingInput,
  db = getBookingsDb(),
): BookingRow {
  const result = db
    .prepare(
      `INSERT INTO bookings (complex_id, unit_id, visit_date, name, phone)
       VALUES (@complexId, @unitId, @visitDate, @name, @phone)`,
    )
    .run(input);
  const row = db
    .prepare(
      `SELECT id,
              complex_id AS complexId,
              unit_id AS unitId,
              visit_date AS visitDate,
              name,
              phone,
              created_at AS createdAt
       FROM bookings WHERE id = ?`,
    )
    .get(result.lastInsertRowid) as BookingRow;
  return row;
}

export function countBookings(db = getBookingsDb()): number {
  const row = db.prepare(`SELECT COUNT(*) AS c FROM bookings`).get() as {
    c: number;
  };
  return row.c;
}
