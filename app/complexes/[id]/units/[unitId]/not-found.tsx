import Link from "next/link";

export default function UnitNotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-xl flex-col justify-center px-5 py-16 sm:px-8">
      <h1 className="font-brand text-3xl text-ink">Квартира не найдена</h1>
      <p className="mt-4 font-ui text-base text-ink-muted">
        Такой квартиры нет в наличии или она не относится к выбранному
        комплексу. Вернитесь к витрине.
      </p>
      <Link
        href="/complexes"
        className="mt-8 inline-flex w-fit bg-brass px-6 py-3 font-ui text-base font-medium text-night hover:bg-brass-hover"
      >
        К списку комплексов
      </Link>
    </main>
  );
}
