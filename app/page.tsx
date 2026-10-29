import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative isolate min-h-[calc(100vh-4.5rem)] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_70%_20%,#2a261f_0%,#12110f_55%,#0c0b09_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full bg-[linear-gradient(105deg,transparent_35%,rgba(176,141,87,0.08)_55%,transparent_75%)] sm:w-3/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14] [background-image:url('/hero-stone.svg')] [background-position:right_center] [background-repeat:no-repeat] [background-size:min(72vw,920px)]"
      />

      <section className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-6xl flex-col justify-center px-5 pb-16 pt-6 sm:px-8">
        <p className="font-brand text-4xl leading-none tracking-wide text-ink sm:text-6xl md:text-7xl">
          Каменный двор
        </p>
        <h1 className="mt-6 max-w-xl font-ui text-xl font-light text-ink sm:text-2xl">
          Дома, в которых хочется остаться
        </h1>
        <p className="mt-4 max-w-md font-ui text-base leading-relaxed text-ink-muted sm:text-lg">
          Три жилых комплекса — спокойный путь от первого взгляда до записи на
          просмотр.
        </p>
        <div className="mt-10">
          <Link
            href="/complexes"
            className="inline-flex items-center justify-center bg-brass px-7 py-3 font-ui text-base font-medium text-night transition-colors hover:bg-brass-hover"
          >
            Смотреть дома
          </Link>
        </div>
      </section>
    </main>
  );
}
