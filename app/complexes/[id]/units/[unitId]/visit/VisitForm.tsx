"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  complexId: string;
  unitId: string;
  date: string;
};

export function VisitForm({ complexId, unitId, date }: Props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complexId, unitId, date, name, phone }),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };
      if (!res.ok) {
        setError(data.error || "Не удалось сохранить заявку.");
        return;
      }
      router.push(
        `/complexes/${complexId}/units/${unitId}/visit?done=1&date=${encodeURIComponent(date)}`,
      );
      router.refresh();
    } catch {
      setError("Не удалось сохранить заявку. Попробуйте позже.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-md space-y-5">
      <div>
        <label htmlFor="visit-name" className="font-ui text-sm text-ink">
          Имя
        </label>
        <input
          id="visit-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full border border-brass/30 bg-night-lift px-3 py-2 font-ui text-base text-ink outline-none focus:border-brass"
          maxLength={80}
          required
        />
      </div>
      <div>
        <label htmlFor="visit-phone" className="font-ui text-sm text-ink">
          Телефон
        </label>
        <input
          id="visit-phone"
          name="phone"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 w-full border border-brass/30 bg-night-lift px-3 py-2 font-ui text-base text-ink outline-none focus:border-brass"
          maxLength={32}
          required
        />
      </div>
      {error ? (
        <p className="font-ui text-sm text-brass" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="bg-brass px-7 py-3 font-ui text-base font-medium text-night transition-colors hover:bg-brass-hover disabled:opacity-60"
      >
        {pending ? "Сохраняем…" : "Отправить заявку"}
      </button>
    </form>
  );
}
