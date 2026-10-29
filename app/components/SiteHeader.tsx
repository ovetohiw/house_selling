const PHONE_DISPLAY = "+7 (495) 120-40-40";
const PHONE_HREF = "tel:+74951204040";

export function SiteHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
      <p className="font-brand text-lg tracking-wide text-ink sm:text-xl">
        Каменный двор
      </p>
      <a
        href={PHONE_HREF}
        className="font-ui text-sm text-ink-muted transition-colors hover:text-brass sm:text-base"
      >
        {PHONE_DISPLAY}
      </a>
    </header>
  );
}
