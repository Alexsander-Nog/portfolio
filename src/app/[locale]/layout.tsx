import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProviders } from "@/components/layout/ThemeProviders";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const SITE = new URL("https://portfolio-mocha-five-s11funmkri.vercel.app");
const OG_IMAGE = "/og-image.png";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  metadataBase: SITE,
  // título padrão e template para páginas internas (se vier a ter)
  title: {
    default: "Douglas Figueirôa – iOS & Full‑Stack Developer",
    template: "%s · Douglas Figueirôa",
  },
  description:
    "iOS & Full‑Stack Developer crafting fast, clean apps and web experiences. Swift, SwiftUI, UIKit, Next.js, React, Firebase.",
  keywords: [
    "iOS developer",
    "Swift",
    "SwiftUI",
    "UIKit",
    "Apple Developer",
    "Full‑Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Firebase",
    "Mobile apps",
    "Frontend",
    "Backend",
    "Portfolio",
  ],
  authors: [{ name: "Douglas Figueirôa", url: SITE.toString() }],
  creator: "Douglas Figueirôa",
  publisher: "Douglas Figueirôa",
  category: "Technology",
  alternates: {
    canonical: "/", // Next gera absoluto usando metadataBase
    languages: {
      en: "/en",
      pt: "/pt",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Douglas Figueirôa Portfolio",
    title: "Douglas Figueirôa – iOS & Full‑Stack Developer",
    description: "iOS & Full‑Stack Developer crafting fast, clean apps and web experiences.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Douglas Figueirôa" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@", // se um dia tiver @ no X/Twitter, coloque aqui
    title: "Douglas Figueirôa – iOS & Full‑Stack Developer",
    description: "iOS & Full‑Stack Developer crafting fast, clean apps and web experiences.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/favicon.ico?v=2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  // opcional: cor da UI do browser
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props: LayoutProps) {
  const { children } = props;
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  // JSON‑LD (Person + Portfolio)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Douglas Figueirôa",
    url: SITE.toString(),
    jobTitle: "iOS & Full‑Stack Developer",
    image: `${SITE.origin}${OG_IMAGE}`,
    sameAs: [
      "https://github.com/DouglasiOSDeveloper",
      "https://linkedin.com/in/douglas-figueirôa-1ba2541bb",
      "https://www.instagram.com/douglas.figueiroa/",
    ],
    knowsAbout: ["Swift", "SwiftUI", "UIKit", "iOS", "Next.js", "React", "TypeScript", "Firebase"],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* JSON‑LD para rich results */}
        <script
          type="application/ld+json"
          // vale JSON.stringify, sem risco de XSS porque é objeto local
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProviders>
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
