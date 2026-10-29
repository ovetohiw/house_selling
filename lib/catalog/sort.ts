import { effectivePriceRub, type Unit } from "./index";

export type UnitSort = "price" | "area" | "rooms";

export function parseUnitSort(value: string | undefined | null): UnitSort {
  if (value === "area" || value === "rooms" || value === "price") return value;
  return "price";
}

export function sortUnits(units: Unit[], sort: UnitSort): Unit[] {
  const copy = [...units];
  copy.sort((a, b) => {
    switch (sort) {
      case "area":
        return a.areaSqm - b.areaSqm;
      case "rooms":
        return a.rooms - b.rooms;
      case "price":
      default:
        return effectivePriceRub(a) - effectivePriceRub(b);
    }
  });
  return copy;
}
