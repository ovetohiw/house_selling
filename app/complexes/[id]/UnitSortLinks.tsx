import Link from "next/link";
import type { UnitSort } from "@/lib/catalog/sort";

const OPTIONS: { id: UnitSort; label: string }[] = [
  { id: "price", label: "По цене" },
  { id: "area", label: "По площади" },
  { id: "rooms", label: "По комнатам" },
];

type Props = {
  complexId: string;
  current: UnitSort;
};

export function UnitSortLinks({ complexId, current }: Props) {
  return (
    <nav
      className="flex flex-wrap gap-x-6 gap-y-2"
      aria-label="Сортировка квартир"
    >
      {OPTIONS.map((opt) => {
        const active = opt.id === current;
        return (
          <Link
            key={opt.id}
            href={`/complexes/${complexId}?sort=${opt.id}`}
            className={
              active
                ? "font-ui text-sm text-brass"
                : "font-ui text-sm text-ink-muted hover:text-ink"
            }
            aria-current={active ? "true" : undefined}
          >
            {opt.label}
          </Link>
        );
      })}
    </nav>
  );
}
