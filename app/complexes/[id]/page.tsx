import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getComplexById,
  getUnitsByComplexId,
} from "@/lib/catalog";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const { getComplexes } = await import("@/lib/catalog");
  return getComplexes().map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const complex = getComplexById(id);
  return {
    title: complex ? `${complex.name} — Каменный двор` : "Комплекс не найден",
  };
}

export default async function ComplexStubPage({ params }: Props) {
  const { id } = await params;
  const complex = getComplexById(id);
  if (!complex) notFound();

  const available = getUnitsByComplexId(complex.id, { availableOnly: true });

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8">
      <p className="font-ui text-sm text-ink-muted">
        <Link href="/complexes" className="hover:text-brass">
          ← Все комплексы
        </Link>
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
        <div>
          <h1 className="font-brand text-3xl tracking-wide text-ink sm:text-5xl">
            {complex.name}
          </h1>
          <p className="mt-4 max-w-xl font-ui text-base text-ink-muted sm:text-lg">
            {complex.shortDescription}
          </p>
          <p className="mt-6 font-ui text-base text-ink">
            Квартир в наличии:{" "}
            <span className="text-brass">{available.length}</span>
          </p>
          <p className="mt-2 font-ui text-sm text-ink-muted">
            Список квартир этого комплекса с сортировками откроется на следующем
            экране витрины.
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
      </div>
    </main>
  );
}
