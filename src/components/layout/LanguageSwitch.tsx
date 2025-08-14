"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

function replaceLocaleInPath(pathname: string, nextLocale: "en" | "pt") {
  const parts = pathname.split("/").filter(Boolean); // ex: ["en","projects"]
  if (parts.length === 0) return `/${nextLocale}`;
  parts[0] = nextLocale;
  return `/${parts.join("/")}`;
}

export function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as "en" | "pt";

  const go = (nextLocale: "en" | "pt") => {
    if (nextLocale === locale) return;
    const target = replaceLocaleInPath(pathname || "/", nextLocale);
    router.push(target);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => go("en")}
        className={`text-sm ${locale === "en" ? "font-semibold" : "opacity-70"}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="opacity-50">/</span>
      <button
        onClick={() => go("pt")}
        className={`text-sm ${locale === "pt" ? "font-semibold" : "opacity-70"}`}
        aria-label="Mudar para Português"
      >
        PT
      </button>
    </div>
  );
}
