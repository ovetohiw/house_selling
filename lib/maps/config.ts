/** Returns a usable Yandex Maps key from env, or null for empty/placeholder. */
export function getYandexMapsApiKey(): string | null {
  const raw = process.env.YANDEX_MAPS_API_KEY?.trim();
  if (!raw || raw === "CHANGE_ME") return null;
  return raw;
}
