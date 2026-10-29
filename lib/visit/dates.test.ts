import { describe, expect, it } from "vitest";
import {
  formatIsoDateOnly,
  getOpenVisitDates,
  isOpenVisitDate,
  parseIsoDateOnly,
} from "./dates";

describe("visit dates", () => {
  it("excludes Saturday, Sunday and Wednesday within 21 days", () => {
    // Monday 2026-10-26
    const today = parseIsoDateOnly("2026-10-26")!;
    const open = getOpenVisitDates(today);
    expect(open[0]).toBe("2026-10-26");
    for (const iso of open) {
      const d = parseIsoDateOnly(iso)!;
      const wd = d.getUTCDay();
      expect([0, 3, 6]).not.toContain(wd);
    }
    expect(open).not.toContain("2026-10-28"); // Wed
    expect(open).not.toContain("2026-10-31"); // Sat
    expect(open).not.toContain("2026-11-01"); // Sun
    expect(open.length).toBeGreaterThan(0);
    expect(open.length).toBeLessThanOrEqual(21);
  });

  it("isOpenVisitDate matches generated set", () => {
    const today = parseIsoDateOnly("2026-10-26")!;
    expect(isOpenVisitDate("2026-10-26", today)).toBe(true);
    expect(isOpenVisitDate("2026-10-28", today)).toBe(false);
    expect(isOpenVisitDate("not-a-date", today)).toBe(false);
  });

  it("parseIsoDateOnly rejects invalid calendar dates", () => {
    expect(parseIsoDateOnly("2026-02-30")).toBeNull();
    expect(formatIsoDateOnly(parseIsoDateOnly("2026-10-29")!)).toBe(
      "2026-10-29",
    );
  });
});
