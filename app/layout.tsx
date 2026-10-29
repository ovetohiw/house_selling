import type { Metadata } from "next";
import { Fraunces, Noto_Sans, Noto_Serif, Outfit } from "next/font/google";
import { SiteHeader } from "./components/SiteHeader";
import { StepTransition } from "./components/StepTransition";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

/* Soft: Fraunces/Outfit без кириллицы — Noto закрывает русские глифы. */
const notoSerif = Noto_Serif({
  variable: "--font-brand-cyr",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-ui-cyr",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Каменный двор",
  description:
    "Жилые комплексы «Каменный двор»: спокойный путь от первого взгляда до записи на просмотр.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${fraunces.variable} ${notoSerif.variable} ${outfit.variable} ${notoSans.variable} min-h-screen antialiased`}
      >
        <SiteHeader />
        <StepTransition>{children}</StepTransition>
      </body>
    </html>
  );
}
