import { describe, expect, it } from "vitest";
import type { Unit } from "./types";
import { sortUnits } from "./sort";

function unit(partial: Partial<Unit> & Pick<Unit, "id">): Unit {
  return {
    complexId: "c",
    rooms: 1,
    areaSqm: 40,
    priceRub: 10_000_000,
    discountPercent: 0,
    available: true,
    title: partial.id,
    description: "",
    planSvg: "",
    image: "",
    ...partial,
  };
}

describe("sortUnits", () => {
  const sample = [
    unit({ id: "a", priceRub: 12_000_000, discountPercent: 50, areaSqm: 60, rooms: 3 }),
    unit({ id: "b", priceRub: 9_000_000, discountPercent: 0, areaSqm: 40, rooms: 1 }),
    unit({ id: "c", priceRub: 11_000_000, discountPercent: 0, areaSqm: 50, rooms: 2 }),
  ];

  it("sorts by effective price (discount applied)", () => {
    // a effective = 6_000_000, b = 9_000_000, c = 11_000_000
    expect(sortUnits(sample, "price").map((u) => u.id)).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  it("sorts by area", () => {
    expect(sortUnits(sample, "area").map((u) => u.id)).toEqual([
      "b",
      "c",
      "a",
    ]);
  });

  it("sorts by rooms", () => {
    expect(sortUnits(sample, "rooms").map((u) => u.id)).toEqual([
      "b",
      "c",
      "a",
    ]);
  });
});
