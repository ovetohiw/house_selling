const EARTH_RADIUS_KM = 6371;
const BASE_RUB = 250;
const PER_KM_RUB = 45;

export function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(a));
}

/** 250 ₽ + 45 ₽ × целые км по прямой (FEATURE / plan). */
export function estimateTaxiRub(opts: {
  fromLat: number;
  fromLng: number;
  toLat: number;
  toLng: number;
}): { kmCeil: number; rub: number } {
  const km = haversineKm(
    opts.fromLat,
    opts.fromLng,
    opts.toLat,
    opts.toLng,
  );
  const kmCeil = Math.ceil(km);
  return { kmCeil, rub: BASE_RUB + PER_KM_RUB * kmCeil };
}
