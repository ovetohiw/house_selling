const CLOSED_WEEKDAYS = new Set([0, 3, 6]); // Sun, Wed, Sat

function toUtcDateOnly(d: Date): Date {
  return new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()),
  );
}

export function parseIsoDateOnly(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [y, m, day] = value.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, day));
  if (
    dt.getUTCFullYear() !== y ||
    dt.getUTCMonth() !== m - 1 ||
    dt.getUTCDate() !== day
  ) {
    return null;
  }
  return dt;
}

export function formatIsoDateOnly(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Open dates: today..today+20 (21 days), excluding Sat/Sun/Wed. */
export function getOpenVisitDates(
  todayInput: Date,
  horizonDays = 21,
): string[] {
  const start = toUtcDateOnly(todayInput);
  const open: string[] = [];
  for (let i = 0; i < horizonDays; i++) {
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate() + i);
    if (CLOSED_WEEKDAYS.has(d.getUTCDay())) continue;
    open.push(formatIsoDateOnly(d));
  }
  return open;
}

export function isOpenVisitDate(isoDate: string, todayInput: Date): boolean {
  return getOpenVisitDates(todayInput).includes(isoDate);
}

/** Server "today": VISIT_TODAY=YYYY-MM-DD for tests, else UTC calendar day. */
export function resolveVisitToday(): Date {
  const raw = process.env.VISIT_TODAY?.trim();
  if (raw) {
    const parsed = parseIsoDateOnly(raw);
    if (parsed) return parsed;
  }
  return toUtcDateOnly(new Date());
}
