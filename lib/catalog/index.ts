import benefitsJson from "@/data/benefits.json";
import complexesJson from "@/data/complexes.json";
import routeStartsJson from "@/data/route-starts.json";
import unitsJson from "@/data/units.json";
import type { Benefit, Complex, RouteStart, Unit } from "./types";

const complexes = complexesJson as Complex[];
const units = unitsJson as Unit[];
const benefits = benefitsJson as Benefit[];
const routeStarts = routeStartsJson as RouteStart[];

export function getComplexes(): Complex[] {
  return complexes;
}

export function getComplexById(id: string): Complex | undefined {
  return complexes.find((c) => c.id === id);
}

export function getUnits(): Unit[] {
  return units;
}

export function getAvailableUnits(): Unit[] {
  return units.filter((u) => u.available);
}

export function getUnitsByComplexId(
  complexId: string,
  options?: { availableOnly?: boolean },
): Unit[] {
  const availableOnly = options?.availableOnly ?? false;
  return units.filter(
    (u) =>
      u.complexId === complexId && (!availableOnly || u.available === true),
  );
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((u) => u.id === id);
}

export function getBenefits(): Benefit[] {
  return benefits;
}

export function getRouteStarts(): RouteStart[] {
  return routeStarts;
}

export function effectivePriceRub(unit: Unit): number {
  if (unit.discountPercent <= 0) return unit.priceRub;
  return Math.round(unit.priceRub * (1 - unit.discountPercent / 100));
}

export type { Benefit, Complex, RouteStart, Unit };
