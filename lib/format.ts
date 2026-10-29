export function formatRub(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

export function formatArea(sqm: number): string {
  return `${sqm.toLocaleString("ru-RU")} м²`;
}
