"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import type { Complex } from "@/lib/catalog/types";

type Props = {
  complexes: Complex[];
  apiKey: string | null;
};

type YMapsMap = {
  geoObjects: { add: (obj: unknown) => void };
  destroy: () => void;
};

declare global {
  interface Window {
    ymaps?: {
      ready: (cb: () => void) => void;
      Map: new (
        el: HTMLElement,
        state: { center: number[]; zoom: number },
        opts?: { suppressMapOpenBlock?: boolean },
      ) => YMapsMap;
      Placemark: new (
        coords: number[],
        props: { balloonContent: string; hintContent: string },
        opts?: { preset?: string },
      ) => {
        events: { add: (type: string, fn: () => void) => void };
      };
    };
  }
}

function MapUnavailable() {
  return (
    <div
      className="flex min-h-[280px] items-center justify-center border border-brass/25 bg-night-lift px-6 py-10 text-center"
      role="status"
    >
      <p className="font-ui max-w-sm text-base leading-relaxed text-ink-muted">
        Карта недоступна: не задан ключ Яндекс.Карт. Список комплексов ниже
        работает без карты.
      </p>
    </div>
  );
}

export function ComplexesMap({ complexes, apiKey }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!apiKey || !hostRef.current) return;

    const scriptId = "yandex-maps-api";
    let cancelled = false;
    let map: YMapsMap | null = null;

    const mount = () => {
      if (cancelled || !hostRef.current || !window.ymaps) return;
      window.ymaps.ready(() => {
        if (cancelled || !hostRef.current || !window.ymaps) return;
        const center = [complexes[0]?.lat ?? 55.75, complexes[0]?.lng ?? 37.62];
        map = new window.ymaps.Map(
          hostRef.current,
          { center, zoom: 10 },
          { suppressMapOpenBlock: true },
        );
        for (const complex of complexes) {
          const mark = new window.ymaps.Placemark(
            [complex.lat, complex.lng],
            {
              balloonContent: complex.name,
              hintContent: complex.name,
            },
            { preset: "islands#brownIcon" },
          );
          mark.events.add("click", () => {
            router.push(`/complexes/${complex.id}`);
          });
          map.geoObjects.add(mark);
        }
      });
    };

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (window.ymaps) {
      mount();
    } else if (existing) {
      existing.addEventListener("load", mount);
    } else {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${encodeURIComponent(apiKey)}&lang=ru_RU`;
      script.async = true;
      script.onload = mount;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      map?.destroy();
    };
  }, [apiKey, complexes, router]);

  if (!apiKey) return <MapUnavailable />;

  return (
    <div
      ref={hostRef}
      className="min-h-[280px] w-full border border-brass/25 bg-night-lift"
      aria-label="Карта жилых комплексов"
    />
  );
}
