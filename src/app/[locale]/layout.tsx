import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProviders } from "@/components/layout/ThemeProviders";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Douglas Figueirôa – iOS & Full‑Stack Developer",
  description:
    "iOS & Full‑Stack Developer crafting fast, clean apps and web experiences. Swift, SwiftUI, UIKit, Next.js, React, Firebase.",
  icons: { icon: "/favicon.ico" },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props: LayoutProps) {
  const { children } = props;
  const { locale } = await props.params;

  // valida o locale
  if (!hasLocale(routing.locales, locale)) notFound();

  // habilita render estático sem header dinâmico
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProviders>
          {/* Provider lê as mensagens e timeZone do src/i18n/request.ts */}
          <NextIntlClientProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
