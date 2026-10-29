import {
  getComplexById,
  getUnitById,
  type Complex,
  type Unit,
} from "./index";

export function resolveAvailableUnit(
  complexId: string,
  unitId: string,
): { complex: Complex; unit: Unit } | null {
  const complex = getComplexById(complexId);
  const unit = getUnitById(unitId);
  if (!complex || !unit) return null;
  if (unit.complexId !== complex.id) return null;
  if (!unit.available) return null;
  return { complex, unit };
}
