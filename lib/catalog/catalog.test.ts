import { describe, expect, it } from "vitest";
import {
  getAvailableUnits,
  getComplexes,
  getUnits,
  getUnitsByComplexId,
} from "./index";

describe("catalog", () => {
  it("has three complexes", () => {
    expect(getComplexes()).toHaveLength(3);
  });

  it("has nine units with exactly one unavailable", () => {
    const all = getUnits();
    expect(all).toHaveLength(9);
    const hidden = all.filter((u) => !u.available);
    expect(hidden).toHaveLength(1);
    expect(hidden[0]?.id).toBe("lk-45");
  });

  it("available list excludes the hidden unit", () => {
    const available = getAvailableUnits();
    expect(available).toHaveLength(8);
    expect(available.some((u) => u.id === "lk-45")).toBe(false);
  });

  it("availableOnly filter hides unavailable units for a complex", () => {
    const shown = getUnitsByComplexId("latunny-kvartal", {
      availableOnly: true,
    });
    const raw = getUnitsByComplexId("latunny-kvartal");
    expect(raw).toHaveLength(3);
    expect(shown).toHaveLength(2);
    expect(shown.every((u) => u.available)).toBe(true);
  });
});
