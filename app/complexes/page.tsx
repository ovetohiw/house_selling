import Image from "next/image";
import Link from "next/link";
import { getComplexes } from "@/lib/catalog";
import { getYandexMapsApiKey } from "@/lib/maps/config";
import { ComplexesMap } from "./ComplexesMap";

export const metadata = {
  title: "Комплексы — Каменный двор",
};

export default function ComplexesPage() {
  const complexes = getComplexes();
  const apiKey = getYandexMapsApiKey();

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-brand text-3xl tracking-wide text-ink sm:text-4xl">
          Жилые комплексы
        </h1>
        <p className="mt-3 font-ui text-base text-ink-muted sm:text-lg">
          Выберите дом в списке или на карте — откроется витрина только его
          квартир в наличии.
        </p>
      </header>

      <section className="mb-12" aria-label="Карта">
        <ComplexesMap complexes={complexes} apiKey={apiKey} />
      </section>

      <section aria-label="Список комплексов">
        <ul className="divide-y divide-brass/20 border-y border-brass/20">
          {complexes.map((complex) => (
            <li key={complex.id}>
              <Link
                href={`/complexes/${complex.id}`}
                className="group flex flex-col gap-4 py-6 transition-colors sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden sm:w-56 sm:shrink-0">
                  <Image
                    src={complex.image}
                    alt=""
                    fill
                    className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, 224px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-brand text-2xl text-ink group-hover:text-brass">
                    {complex.name}
                  </p>
                  <p className="mt-2 font-ui text-base text-ink-muted">
                    {complex.shortDescription}
                  </p>
                  <p className="mt-3 font-ui text-sm text-brass">
                    Смотреть квартиры →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
