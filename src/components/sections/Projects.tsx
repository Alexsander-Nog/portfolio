"use client";

import { useMemo, useState } from "react";
import { projects as data, type ProjectType, allTags } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const typeTabs: ProjectType[] = ["All", "iOS", "Web"];

export function Projects() {
  const [type, setType] = useState<"All" | ProjectType>("All");
  const [activeTag, setActiveTag] = useState<string | "All">("All");

  // estados independentes
  const [openLinks, setOpenLinks] = useState<Record<string, boolean>>({});
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const items = useMemo(() => {
    let list = type === "All" ? data : data.filter((p) => p.type === type);
    if (activeTag !== "All") list = list.filter((p) => p.tags?.includes(activeTag));
    return list;
  }, [type, activeTag]);

  function toggleLinks(id: string) {
    setOpenLinks((s) => ({ ...s, [id]: !s[id] }));
  }
  function toggleDetails(id: string) {
    setOpenDetails((s) => ({ ...s, [id]: !s[id] }));
  }

  // rótulo enxuto para cada URL (domínio sem www)
  function hostLabel(url: string, idx: number) {
    try {
      const h = new URL(url).hostname.replace(/^www\./, "");
      return h;
    } catch {
      // fallback se vier algo não-URL
      return `Link ${idx + 1}`;
    }
  }

  return (
    <section id="projects" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="flex items-center gap-2">
            {typeTabs.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  "rounded-full px-3 py-1 text-sm transition-colors",
                  type === t ? "bg-foreground/10" : "hover:bg-foreground/5"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Tag filter */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-foreground/60 text-xs tracking-wide uppercase">Filter:</span>
          <button
            onClick={() => setActiveTag("All")}
            className={cn(
              "chip chip--interactive",
              activeTag === "All" && "ring-foreground/30 ring-1"
            )}
          >
            All
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t === activeTag ? "All" : t)}
              className={cn(
                "chip chip--interactive",
                activeTag === t && "ring-foreground/30 ring-1"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const linksOpen = !!openLinks[p.id];
            const detailsOpen = !!openDetails[p.id];

            return (
              <Card
                key={p.id}
                className={cn(
                  "group border-foreground/10 bg-foreground/[0.03] project-card flex flex-col gap-4 p-4"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-col">
                    <h3 className="truncate text-lg font-semibold">{p.title}</h3>
                    {p.featured && (
                      <span className="text-foreground/70 mt-1 inline-flex items-center gap-1 text-xs">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-500" />
                        {p.featured}
                      </span>
                    )}
                  </div>
                  <Badge variant="secondary">{p.type}</Badge>
                </div>

                <p className="text-foreground/80 text-sm">{p.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s} className="border border-[#d17aff]/30 bg-black text-[#d17aff]">
                      {s}
                    </Badge>
                  ))}
                </div>

                {/* actions */}
                <div className="mt-auto flex items-center justify-between pt-2 text-sm">
                  <div className="flex items-center gap-2">
                    {p.tags?.map((t) => (
                      <span key={t} className="chip text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {/* GitHub link */}
                    {p.links.github && (
                      <Link className="hover:underline" href={p.links.github} target="_blank">
                        GitHub →
                      </Link>
                    )}

                    {/* Botão para mostrar/ocultar URLs (quando existirem) */}
                    {p.links.websites?.length ? (
                      <button
                        onClick={() => toggleLinks(p.id)}
                        className="text-foreground/80 underline-offset-2 hover:underline"
                        aria-expanded={linksOpen}
                        aria-controls={`links-${p.id}`}
                      >
                        {linksOpen ? "Hide Links" : "Web →"}
                      </button>
                    ) : null}

                    {/* Botão More/Less para detalhes SEMPRE que houver details */}
                    {!!p.details?.length && (
                      <button
                        onClick={() => toggleDetails(p.id)}
                        className="text-foreground/80 underline-offset-2 hover:underline"
                        aria-expanded={detailsOpen}
                        aria-controls={`details-${p.id}`}
                      >
                        {detailsOpen ? "Less" : "More"}
                      </button>
                    )}
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
                            className="chip chip--interactive text-[12px]"
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
                {p.details?.length ? (
                  <div
                    id={`details-${p.id}`}
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                      detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <ul className="text-foreground/75 min-h-0 list-disc space-y-2 pt-2 pl-5 text-sm">
                      {p.details.map((d, i) => (
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
