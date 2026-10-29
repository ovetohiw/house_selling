import { describe, expect, it } from "vitest";
import { estimateTaxiRub, haversineKm } from "./estimate";

describe("taxi estimate", () => {
  it("uses 250 + 45 * ceil(km)", () => {
    // Force ~1.2 km → ceil 2 → 250 + 90 = 340
    const km = haversineKm(55.75, 37.62, 55.75 + 1.2 / 111, 37.62);
    expect(km).toBeGreaterThan(1);
    expect(km).toBeLessThan(2);
    const { kmCeil, rub } = estimateTaxiRub({
      fromLat: 55.75,
      fromLng: 37.62,
      toLat: 55.75 + 1.2 / 111,
      toLng: 37.62,
    });
    expect(kmCeil).toBe(2);
    expect(rub).toBe(340);
  });

  it("changes when start point changes", () => {
    const complex = { lat: 55.8601, lng: 37.5412 };
    const a = estimateTaxiRub({
      fromLat: 55.7539,
      fromLng: 37.6208,
      toLat: complex.lat,
      toLng: complex.lng,
    });
    const b = estimateTaxiRub({
      fromLat: 55.9726,
      fromLng: 37.4146,
      toLat: complex.lat,
      toLng: complex.lng,
    });
    expect(a.rub).not.toBe(b.rub);
  });
});
