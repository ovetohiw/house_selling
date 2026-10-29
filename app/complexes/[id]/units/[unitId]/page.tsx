import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { effectivePriceRub } from "@/lib/catalog";
import { resolveAvailableUnit } from "@/lib/catalog/resolve";
import { formatArea, formatRub } from "@/lib/format";

type Props = {
  params: Promise<{ id: string; unitId: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id, unitId } = await params;
  const resolved = resolveAvailableUnit(id, unitId);
  return {
    title: resolved
      ? `${resolved.unit.title} — ${resolved.complex.name}`
      : "Квартира не найдена",
  };
}

export default async function UnitPage({ params }: Props) {
  const { id, unitId } = await params;
  const resolved = resolveAvailableUnit(id, unitId);
  if (!resolved) notFound();
  const { complex, unit } = resolved;
  const priceNow = effectivePriceRub(unit);
  const hasDiscount = unit.discountPercent > 0;

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8">
      <p className="font-ui text-sm text-ink-muted">
        <Link href={`/complexes/${complex.id}`} className="hover:text-brass">
          ← {complex.name}
        </Link>
      </p>

      <header className="mt-6 max-w-2xl">
        <h1 className="font-brand text-3xl tracking-wide text-ink sm:text-5xl">
          {unit.title}
        </h1>
        <p className="mt-3 font-ui text-base text-ink-muted sm:text-lg">
          {unit.rooms} комн. · {formatArea(unit.areaSqm)} · {complex.name}
        </p>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <p className="font-ui text-xl text-brass">{formatRub(priceNow)}</p>
          {hasDiscount ? (
            <>
              <p className="font-ui text-sm text-ink-muted line-through">
                {formatRub(unit.priceRub)}
              </p>
              <p className="font-ui text-sm text-brass">
                −{unit.discountPercent}%
              </p>
            </>
          ) : null}
        </div>
      </header>

      <section className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="font-ui text-lg text-ink">План</h2>
          <div className="mt-4 border border-brass/25 bg-night-lift p-4">
            {/* SVG floor plan from catalog */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={unit.planSvg}
              alt={`План: ${unit.title}`}
              className="h-auto w-full"
            />
          </div>
        </div>
        <div>
          <h2 className="font-ui text-lg text-ink">Описание</h2>
          <p className="mt-4 font-ui text-base leading-relaxed text-ink-muted">
            {unit.description}
          </p>
          <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden">
            <Image
              src={unit.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <Link
            href={`/complexes/${complex.id}/units/${unit.id}/benefits`}
            className="mt-10 inline-flex bg-brass px-7 py-3 font-ui text-base font-medium text-night transition-colors hover:bg-brass-hover"
          >
            Смотреть льготы
          </Link>
        </div>
      </section>
    </main>
  );
}
