"use client";

import { useMemo, useState } from "react";
import { projects as data, type ProjectType, allTags } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

// Definindo os tipos de tabs para 'All' e 'Web'.
const typeTabs: ProjectType[] = ["All", "Web"];

export function Projects() {
  const t = useTranslations("projects");
  const [type, setType] = useState<"All" | ProjectType>("All");
  const [activeTag, setActiveTag] = useState<string | "All">("All");
  const [openLinks, setOpenLinks] = useState<Record<string, boolean>>({});
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const items = useMemo(() => {
    let list = type === "All" ? data : data.filter((p) => p.type === type);
    if (activeTag !== "All") list = list.filter((p) => p.tags?.includes(activeTag));
    return list;
  }, [type, activeTag]);

  function toggleState(
    id: string,
    stateSetter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
  ) {
    stateSetter((s) => ({ ...s, [id]: !s[id] }));
  }

  function hostLabel(url: string, idx: number) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return `Link ${idx + 1}`;
    }
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[#8B0000]/30 bg-[#1a1a1a] text-[#f5f5f5]"
    >
      {/* fundo bordô + dourado sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_-10%,rgba(139,0,0,0.2),transparent_60%),radial-gradient(800px_400px_at_90%_-10%,rgba(184,134,11,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.6))]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-[#8B0000]">{t("title")}</h2>

          {/* Tabs de tipo */}
          <div className="flex items-center gap-2">
            {/* O loop agora renderiza apenas 'All' e 'Web' */}
            {typeTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setType(tab)}
                className={cn(
                  "rounded-full border px-3 py-1 text-sm leading-none transition-colors",
                  type === tab
                    ? "border-[#a52a2a] bg-[#8B0000]/80 text-white"
                    : "border-[#8B0000]/40 text-gray-300 hover:bg-[#8B0000]/30 hover:text-white"
                )}
              >
                {t(`tabs.${tab.toLowerCase().replace(" ", "-")}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Tag filter */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-xs tracking-wide text-[#e0c097] uppercase">{t("filter")}</span>

          <button
            onClick={() => setActiveTag("All")}
            className={cn(
              "rounded-full border border-[#8B0000]/40 px-3 py-1 text-sm text-gray-300 transition-colors hover:bg-[#8B0000]/30 hover:text-white",
              activeTag === "All" && "border-[#a52a2a] bg-[#8B0000]/80 text-white"
            )}
          >
            {t("tabs.all")}
          </button>

          {allTags.map((tg) => (
            <button
              key={tg}
              onClick={() => setActiveTag(tg === activeTag ? "All" : tg)}
              className={cn(
                "rounded-full border border-[#8B0000]/40 px-3 py-1 text-sm text-gray-300 transition-colors hover:bg-[#8B0000]/30 hover:text-white",
                activeTag === tg && "border-[#a52a2a] bg-[#8B0000]/80 text-white"
              )}
            >
              {t(`tagLabels.${tg}`)}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const linksOpen = !!openLinks[p.id];
            const detailsOpen = !!openDetails[p.id];

            const rawDetails = t.raw(`items.${p.id}.details`);
            const details = Array.isArray(rawDetails) ? rawDetails : (p.details ?? []);

            return (
              <Card
                key={p.id}
                className={cn(
                  "group flex flex-col gap-4 border border-[#8B0000]/40 bg-[#2a2a2a]/70 p-4 transition hover:bg-[#2a2a2a]/90"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-col">
                    <h3 className="truncate text-lg font-semibold text-[#f5f5f5]">{p.title}</h3>
                    {p.featured && (
                      <span className="mt-1 inline-flex items-center gap-1 text-xs text-[#e0c097]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#8B0000]" />
                        {p.featured}
                      </span>
                    )}
                  </div>
                  <Badge className="border border-[#e0c097]/40 bg-[#8B0000]/70 text-white">
                    {p.type}
                  </Badge>
                </div>

                <p className="text-sm text-gray-300">{t(`items.${p.id}.summary`)}</p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge
                      key={s}
                      className="border border-[#e0c097]/30 bg-[#1a1a1a] text-[#e0c097]"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>

                {/* actions */}
                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2 text-sm">
                  {/* tags */}
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    {p.tags?.map((tg) => (
                      <span
                        key={tg}
                        className="rounded-full bg-[#8B0000]/50 px-2 py-0.5 text-[11px] text-white"
                      >
                        {/* 💡 Ajuste aqui para fornecer um valor padrão, caso a tradução não exista */}
                        {t(`tagLabels.${tg}`, { defaultValue: tg })}
                      </span>
                    ))}
                  </div>

                  {/* links e ações */}
                  <div className="flex flex-shrink-0 items-center gap-3">
                    {p.links.github && (
                      <Link
                        className="flex-shrink-0 text-[#e0c097] hover:underline"
                        href={p.links.github}
                        target="_blank"
                      >
                        {t("actions.github")}
                      </Link>
                    )}

                    {p.links.websites?.length ? (
                      <button
                        onClick={() => toggleState(p.id, setOpenLinks)}
                        className="flex-shrink-0 text-gray-300 underline-offset-2 hover:text-[#e0c097] hover:underline"
                        aria-expanded={linksOpen}
                        aria-controls={`links-${p.id}`}
                      >
                        {linksOpen ? t("actions.hideLinks") : t("actions.web")}
                      </button>
                    ) : null}

                    {details.length ? (
                      <button
                        onClick={() => toggleState(p.id, setOpenDetails)}
                        className="flex-shrink-0 text-gray-300 underline-offset-2 hover:text-[#e0c097] hover:underline"
                        aria-expanded={detailsOpen}
                        aria-controls={`details-${p.id}`}
                      >
                        {detailsOpen ? t("actions.less") : t("actions.more")}
                      </button>
                    ) : null}
                  </div>
                </div>

                {/* bloco expansível: links */}
                {p.links.websites?.length ? (
                  <div
                    id={`links-${p.id}`}
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                      linksOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <ul className="flex min-h-0 flex-wrap gap-2 pt-2">
                      {p.links.websites.map((u, i) => (
                        <li key={u + i}>
                          <Link
                            href={u}
                            target="_blank"
                            className="rounded-full bg-[#8B0000]/60 px-3 py-1 text-[12px] text-white transition hover:bg-[#a52a2a]"
                            title={u}
                          >
                            {hostLabel(u, i)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* bloco expansível: detalhes */}
                {details.length ? (
                  <div
                    id={`details-${p.id}`}
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                      detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <ul className="min-h-0 list-disc space-y-2 pt-2 pl-5 text-sm text-gray-300">
                      {details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
