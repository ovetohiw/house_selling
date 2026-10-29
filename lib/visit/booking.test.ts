import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { countBookings, resetBookingsDbCache } from "@/lib/db/bookings";
import { createBookingFromRequest } from "./booking";
import { getOpenVisitDates, parseIsoDateOnly } from "./dates";

describe("createBookingFromRequest", () => {
  let dbFile: string;

  beforeEach(() => {
    dbFile = path.join(
      os.tmpdir(),
      `house-selling-bookings-${Date.now()}-${Math.random()}.db`,
    );
    process.env.SQLITE_PATH = dbFile;
    process.env.VISIT_TODAY = "2026-10-26";
    resetBookingsDbCache();
  });

  afterEach(() => {
    resetBookingsDbCache();
    delete process.env.SQLITE_PATH;
    delete process.env.VISIT_TODAY;
    if (fs.existsSync(dbFile)) fs.unlinkSync(dbFile);
  });

  it("saves booking for an open date", () => {
    const today = parseIsoDateOnly("2026-10-26")!;
    const open = getOpenVisitDates(today)[0]!;
    const result = createBookingFromRequest({
      complexId: "severny-kamen",
      unitId: "sk-214",
      date: open,
      name: "Анна",
      phone: "+7 (495) 111-22-33",
      dateConfirmed: true,
      price: 1,
      role: "admin",
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.booking.name).toBe("Анна");
      expect(result.booking.visitDate).toBe(open);
    }
    expect(countBookings()).toBe(1);
  });

  it("rejects closed date and empty fields", () => {
    expect(
      createBookingFromRequest({
        complexId: "severny-kamen",
        unitId: "sk-214",
        date: "2026-10-28",
        name: "Анна",
        phone: "+74951112233",
      }).ok,
    ).toBe(false);

    expect(
      createBookingFromRequest({
        complexId: "severny-kamen",
        unitId: "sk-214",
        date: "2026-10-26",
        name: "",
        phone: "+74951112233",
      }).ok,
    ).toBe(false);

    expect(
      createBookingFromRequest({
        complexId: "severny-kamen",
        unitId: "sk-214",
        date: "2026-10-26",
        name: "Анна",
        phone: "",
      }).ok,
    ).toBe(false);

    expect(countBookings()).toBe(0);
  });

  it("rejects unavailable unit", () => {
    const result = createBookingFromRequest({
      complexId: "latunny-kvartal",
      unitId: "lk-45",
      date: "2026-10-26",
      name: "Анна",
      phone: "+74951112233",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.status).toBe(404);
  });
});
