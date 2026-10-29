import Link from "next/link";
import { notFound } from "next/navigation";
import { getBenefits } from "@/lib/catalog";
import { resolveAvailableUnit } from "@/lib/catalog/resolve";

type Props = {
  params: Promise<{ id: string; unitId: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id, unitId } = await params;
  const resolved = resolveAvailableUnit(id, unitId);
  return {
    title: resolved
      ? `Льготы — ${resolved.unit.title}`
      : "Льготы недоступны",
  };
}

export default async function BenefitsPage({ params }: Props) {
  const { id, unitId } = await params;
  const resolved = resolveAvailableUnit(id, unitId);
  if (!resolved) notFound();
  const { complex, unit } = resolved;
  const benefits = getBenefits();

  return (
    <main className="mx-auto max-w-3xl px-5 pb-16 pt-6 sm:px-8">
      <p className="font-ui text-sm text-ink-muted">
        <Link
          href={`/complexes/${complex.id}/units/${unit.id}`}
          className="hover:text-brass"
        >
          ← {unit.title}
        </Link>
      </p>

      <header className="mt-6">
        <h1 className="font-brand text-3xl tracking-wide text-ink sm:text-4xl">
          Льготные предложения
        </h1>
        <p className="mt-3 font-ui text-base text-ink-muted">
          Три текстовых предложения для {unit.title} в комплексе «
          {complex.name}». Это обзор условий, не одобрение банка.
        </p>
      </header>

      <ol className="mt-10 space-y-8">
        {benefits.map((benefit, index) => (
          <li key={benefit.id} className="border-t border-brass/20 pt-6">
            <p className="font-ui text-sm text-brass">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-brand text-2xl text-ink">
              {benefit.title}
            </h2>
            <p className="mt-3 font-ui text-base leading-relaxed text-ink-muted">
              {benefit.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 font-ui text-sm text-ink-muted">
        Банк не принимает решение на этом шаге — только знакомство с текстом
        предложений.
      </p>

      <Link
        href={`/complexes/${complex.id}/units/${unit.id}/route`}
        className="mt-8 inline-flex bg-brass px-7 py-3 font-ui text-base font-medium text-night transition-colors hover:bg-brass-hover"
      >
        К оценке маршрута
      </Link>
    </main>
  );
}
