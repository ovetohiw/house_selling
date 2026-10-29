import Link from "next/link";
import { notFound } from "next/navigation";
import { resolveAvailableUnit } from "@/lib/catalog/resolve";
import {
  getOpenVisitDates,
  parseIsoDateOnly,
  resolveVisitToday,
} from "@/lib/visit/dates";
import { VisitForm } from "./VisitForm";

type Props = {
  params: Promise<{ id: string; unitId: string }>;
  searchParams: Promise<{
    date?: string;
    confirmed?: string;
    done?: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { id, unitId } = await params;
  const resolved = resolveAvailableUnit(id, unitId);
  return {
    title: resolved
      ? `Запись — ${resolved.unit.title}`
      : "Запись недоступна",
  };
}

export default async function VisitPage({ params, searchParams }: Props) {
  const { id, unitId } = await params;
  const { date, confirmed, done } = await searchParams;
  const resolved = resolveAvailableUnit(id, unitId);
  if (!resolved) notFound();
  const { complex, unit } = resolved;

  const today = resolveVisitToday();
  const openDates = getOpenVisitDates(today);
  const selected =
    date && parseIsoDateOnly(date) && openDates.includes(date) ? date : null;
  const showForm = Boolean(selected && confirmed === "1");
  const showDone = done === "1" && Boolean(selected);

  return (
    <main className="mx-auto max-w-3xl px-5 pb-16 pt-6 sm:px-8">
      <p className="font-ui text-sm text-ink-muted">
        <Link
          href={`/complexes/${complex.id}/units/${unit.id}/route`}
          className="hover:text-brass"
        >
          ← Маршрут
        </Link>
      </p>

      <header className="mt-6">
        <h1 className="font-brand text-3xl tracking-wide text-ink sm:text-4xl">
          Запись на просмотр
        </h1>
        <p className="mt-3 font-ui text-base text-ink-muted">
          {unit.title} · {complex.name}
        </p>
      </header>

      {showDone && selected ? (
        <section className="mt-10" role="status">
          <p className="font-ui text-lg text-ink">
            Заявка сохранена на {selected}.
          </p>
          <p className="mt-2 font-ui text-base text-ink-muted">
            Мы не отправляем письма и SMS — это демонстрационная запись в базе.
          </p>
          <Link
            href={`/complexes/${complex.id}`}
            className="mt-8 inline-flex bg-brass px-7 py-3 font-ui text-base font-medium text-night hover:bg-brass-hover"
          >
            К витрине комплекса
          </Link>
        </section>
      ) : null}

      {!showDone && openDates.length === 0 ? (
        <p className="mt-10 font-ui text-base text-ink-muted" role="status">
          Открытых дней для записи сейчас нет. Анкета недоступна.
        </p>
      ) : null}

      {!showDone && openDates.length > 0 && !selected ? (
        <section className="mt-10" aria-label="Открытые даты">
          <h2 className="font-ui text-lg text-ink">Выберите день</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {openDates.map((iso) => (
              <li key={iso}>
                <Link
                  href={`/complexes/${complex.id}/units/${unit.id}/visit?date=${iso}`}
                  className="block border border-brass/25 px-4 py-3 font-ui text-base text-ink-muted hover:border-brass/50 hover:text-ink"
                >
                  {iso}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {!showDone && selected && !showForm ? (
        <section className="mt-10">
          <p className="font-ui text-base text-ink">
            Подтвердите дату просмотра:{" "}
            <span className="text-brass">{selected}</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={`/complexes/${complex.id}/units/${unit.id}/visit?date=${selected}&confirmed=1`}
              className="bg-brass px-7 py-3 font-ui text-base font-medium text-night hover:bg-brass-hover"
            >
              Подтвердить дату
            </Link>
            <Link
              href={`/complexes/${complex.id}/units/${unit.id}/visit`}
              className="border border-brass/40 px-7 py-3 font-ui text-base text-ink-muted hover:text-ink"
            >
              Выбрать другую
            </Link>
          </div>
        </section>
      ) : null}

      {!showDone && selected && showForm ? (
        <section className="mt-10">
          <p className="font-ui text-base text-ink">
            Дата подтверждена:{" "}
            <span className="text-brass">{selected}</span>
          </p>
          <VisitForm
            complexId={complex.id}
            unitId={unit.id}
            date={selected}
          />
        </section>
      ) : null}
    </main>
  );
}
