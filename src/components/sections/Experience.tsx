"use client";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type ItemData = {
  role: string;
  company: string;
  period: string;
  headline: string;
  bullets: string[];
  tech?: string[];
};

export function Experience() {
  const t = useTranslations("experience");
  const ids = ["creativePack", "academy", "thifi"] as const;

  const items: ItemData[] = ids.map((id) => ({
    role: t(`items.${id}.role`),
    company: t(`items.${id}.company`),
    period: t(`items.${id}.period`),
    headline: t(`items.${id}.headline`),
    bullets: t.raw(`items.${id}.bullets`) as string[],
    tech: t.raw(`items.${id}.tech`) as string[] | undefined,
  }));

  return (
    <section id="experience" className="relative overflow-hidden border-t border-[#8B0000]/40">
      {/* Fundo com chumbo e leves efeitos */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]" />

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold text-[#e0c097]">{t("title")}</h2>

        <div className="mt-8 grid gap-6">
          {items.map((item, i) => (
            <ExperienceItem
              key={item.company + i}
              {...item}
              className={cn(
                "animate-in fade-in slide-in-from-bottom-2 duration-700",
                i === 1 && "delay-100",
                i === 2 && "delay-200"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  role,
  company,
  period,
  headline,
  bullets,
  tech,
  className,
}: {
  role: string;
  company: string;
  period: string;
  headline: string;
  bullets: string[];
  tech?: string[];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-[#8B0000]/50 bg-[#2a2a2a]/80 p-5 shadow-md shadow-black/40 transition hover:border-[#a52a2a] hover:shadow-lg hover:shadow-[#8B0000]/30 md:p-6",
        className
      )}
    >
      <header className="grid gap-2 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <h3 className="text-lg leading-tight font-semibold text-[#f5f5f5]">
            {role} <span className="text-[#e0c097]/80">— {company}</span>
          </h3>
          <p className="mt-1 text-sm text-[#f5f5f5]/80">{headline}</p>
        </div>
        <time className="text-xs whitespace-nowrap text-[#e0c097]/70 md:pl-6" aria-label="Period">
          {period}
        </time>
      </header>

      <ul className="mt-4 space-y-2">
        {bullets.map((b, idx) => (
          <li key={idx} className="li-dot text-sm text-[#f5f5f5]/90">
            {b}
          </li>
        ))}
      </ul>

      {!!tech?.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="chip rounded-full border border-[#e0c097]/40 bg-[#1a1a1a] px-2 py-1 text-[11px] text-[#e0c097] shadow-sm shadow-black/30"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
