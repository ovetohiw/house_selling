import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  effectivePriceRub,
  getComplexById,
  getUnitsByComplexId,
} from "@/lib/catalog";
import { parseUnitSort, sortUnits } from "@/lib/catalog/sort";
import { formatArea, formatRub } from "@/lib/format";
import { UnitSortLinks } from "./UnitSortLinks";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ sort?: string }>;
};

/** Sort query must be applied at request time. */
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const complex = getComplexById(id);
  return {
    title: complex ? `${complex.name} — Каменный двор` : "Комплекс не найден",
  };
}

export default async function ComplexShowcasePage({
  params,
  searchParams,
}: Props) {
  const { id } = await params;
  const { sort: sortParam } = await searchParams;
  const complex = getComplexById(id);
  if (!complex) notFound();

  const sort = parseUnitSort(sortParam);
  const available = getUnitsByComplexId(complex.id, { availableOnly: true });
  const units = sortUnits(available, sort);

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8">
      <p className="font-ui text-sm text-ink-muted">
        <Link href="/complexes" className="hover:text-brass">
          ← Все комплексы
        </Link>
      </p>

      <header className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
        <div>
          <h1 className="font-brand text-3xl tracking-wide text-ink sm:text-5xl">
            {complex.name}
          </h1>
          <p className="mt-4 max-w-xl font-ui text-base text-ink-muted sm:text-lg">
            {complex.shortDescription}
          </p>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={complex.image}
            alt={complex.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </header>

      <section className="mt-12" aria-label="Витрина квартир">
        <div className="flex flex-col gap-4 border-b border-brass/20 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-ui text-lg text-ink">
            В наличии:{" "}
            <span className="text-brass">{units.length}</span>
          </h2>
          {units.length > 0 ? (
            <UnitSortLinks complexId={complex.id} current={sort} />
          ) : null}
        </div>

        {units.length === 0 ? (
          <p className="mt-8 font-ui text-base text-ink-muted" role="status">
            В этом комплексе сейчас нет квартир в наличии. Выберите другой
            комплекс.
          </p>
        ) : (
          <ul className="divide-y divide-brass/20">
            {units.map((unit) => {
              const priceNow = effectivePriceRub(unit);
              const hasDiscount = unit.discountPercent > 0;
              return (
                <li key={unit.id}>
                  <Link
                    href={`/complexes/${complex.id}/units/${unit.id}`}
                    className="group flex flex-col gap-4 py-6 transition-colors sm:flex-row sm:gap-8"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden sm:w-56 sm:shrink-0">
                      <Image
                        src={unit.image}
                        alt=""
                        fill
                        className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                        sizes="(max-width: 640px) 100vw, 224px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-brand text-xl text-ink group-hover:text-brass sm:text-2xl">
                        {unit.title}
                      </p>
                      <p className="mt-2 font-ui text-sm text-ink-muted sm:text-base">
                        {unit.rooms} комн. · {formatArea(unit.areaSqm)}
                      </p>
                      <p className="mt-3 font-ui text-base leading-relaxed text-ink-muted">
                        {unit.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <p className="font-ui text-lg text-brass">
                          {formatRub(priceNow)}
                        </p>
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
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
