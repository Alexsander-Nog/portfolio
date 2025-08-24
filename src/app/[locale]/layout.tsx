import type { Metadata } from "next";
import type { Viewport } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProviders } from "@/components/layout/ThemeProviders";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const SITE = new URL("https://portfolio-mocha-five-s11funmkri.vercel.app");
const OG_IMAGE = "https://placehold.co/1200x630/000000/FFFFFF?text=Alexsander+Portfolio";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  metadataBase: SITE,
  // título padrão e template para páginas internas (se vier a ter)
  title: {
    default: "Alexsander Nogueira De Jesus – Desenvolvedor de Software",
    template: "%s · Alexsander Nogueira De Jesus",
  },
  description:
    "Desenvolvedor de Software com experiência em Python, Flask, HTML, Power Apps, C, Java, e MySQL. Construo aplicações web e soluções de automação.",
  keywords: [
    "Desenvolvedor de Software",
    "Desenvolvedor backend",
    "Python",
    "Flask",
    "HTML",
    "Power Apps",
    "Power Automate",
    "C",
    "Java",
    "MySQL",
    "Typescript",
  ],
  authors: [{ name: "Alexsander Nogueira De Jesus", url: SITE.toString() }],
  creator: "Alexsander Nogueira De Jesus",
  publisher: "Alexsander Nogueira De Jesus",
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
    siteName: "Alexsander Nogueira De Jesus Portfólio",
    title: "Alexsander Nogueira De Jesus – Desenvolvedor de Software",
    description:
      "Construo aplicações web eficientes e soluções de automação usando Python, Flask, HTML, Power Apps, C, Java, e MySQL.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Alexsander Nogueira De Jesus" }],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "Alexsander Nogueira De Jesus – Desenvolvedor de Software",
    description:
      "Desenvolvedor de Software com experiência em Python, Flask, HTML, Power Apps, C, Java, e MySQL.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  /*
  // opcional: cor da UI do browser
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
  */
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
    name: "Alexsander Nogueira De Jesus",
    url: SITE.toString(),
    jobTitle: "Desenvolvedor de Software",
    image: `${SITE.origin}${OG_IMAGE}`,
    sameAs: [
      "https://github.com/AlexsanderTG",
      // Adicione aqui outros links, como LinkedIn e Instagram
    ],
    knowsAbout: ["Python", "Flask", "HTML", "Power Apps", "Power Automate", "C", "Java", "MySQL"],
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};
