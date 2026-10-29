import Link from "next/link";
import { notFound } from "next/navigation";
import { getRouteStarts } from "@/lib/catalog";
import { resolveAvailableUnit } from "@/lib/catalog/resolve";
import { formatRub } from "@/lib/format";
import { estimateTaxiRub } from "@/lib/taxi/estimate";

type Props = {
  params: Promise<{ id: string; unitId: string }>;
  searchParams: Promise<{ from?: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { id, unitId } = await params;
  const resolved = resolveAvailableUnit(id, unitId);
  return {
    title: resolved
      ? `Маршрут — ${resolved.unit.title}`
      : "Маршрут недоступен",
  };
}

export default async function RoutePage({ params, searchParams }: Props) {
  const { id, unitId } = await params;
  const { from: fromParam } = await searchParams;
  const resolved = resolveAvailableUnit(id, unitId);
  if (!resolved) notFound();
  const { complex, unit } = resolved;
  const starts = getRouteStarts();
  const selected =
    starts.find((s) => s.id === fromParam) ?? starts[0] ?? null;
  if (!selected) notFound();

  const estimate = estimateTaxiRub({
    fromLat: selected.lat,
    fromLng: selected.lng,
    toLat: complex.lat,
    toLng: complex.lng,
  });

  return (
    <main className="mx-auto max-w-3xl px-5 pb-16 pt-6 sm:px-8">
      <p className="font-ui text-sm text-ink-muted">
        <Link
          href={`/complexes/${complex.id}/units/${unit.id}/benefits`}
          className="hover:text-brass"
        >
          ← Льготы
        </Link>
      </p>

      <header className="mt-6">
        <h1 className="font-brand text-3xl tracking-wide text-ink sm:text-4xl">
          Маршрут до дома
        </h1>
        <p className="mt-3 font-ui text-base text-ink-muted">
          Оценка такси до «{complex.name}» для квартиры «{unit.title}».
          Выберите точку старта.
        </p>
      </header>

      <nav className="mt-8 flex flex-col gap-3" aria-label="Точки старта">
        {starts.map((start) => {
          const active = start.id === selected.id;
          return (
            <Link
              key={start.id}
              href={`/complexes/${complex.id}/units/${unit.id}/route?from=${start.id}`}
              className={
                active
                  ? "border border-brass bg-night-lift px-4 py-3 font-ui text-base text-brass"
                  : "border border-brass/25 px-4 py-3 font-ui text-base text-ink-muted hover:border-brass/50 hover:text-ink"
              }
              aria-current={active ? "true" : undefined}
            >
              {start.name}
            </Link>
          );
        })}
      </nav>

      <section className="mt-10 border-t border-brass/20 pt-8" aria-live="polite">
        <p className="font-ui text-sm text-ink-muted">Старт: {selected.name}</p>
        <p className="mt-2 font-ui text-3xl text-brass">
          {formatRub(estimate.rub)}
        </p>
        <p className="mt-2 font-ui text-sm text-ink-muted">
          ≈ {estimate.kmCeil} км по прямой · 250 ₽ + 45 ₽ × км
        </p>
        <p className="mt-4 font-ui text-base text-ink">
          Оценка, не вызов такси
        </p>
      </section>

      <Link
        href={`/complexes/${complex.id}/units/${unit.id}/visit`}
        className="mt-10 inline-flex bg-brass px-7 py-3 font-ui text-base font-medium text-night transition-colors hover:bg-brass-hover"
      >
        Записаться на просмотр
      </Link>
    </main>
  );
}
