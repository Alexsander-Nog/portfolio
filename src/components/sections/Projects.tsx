"use client";

import { useMemo, useState } from "react";
import { projects as data } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const tabs: Array<"All" | "iOS" | "Web"> = ["All", "iOS", "Web"];

export function Projects() {
  const [tab, setTab] = useState<"All" | "iOS" | "Web">("All");

  const items = useMemo(() => {
    if (tab === "All") return data;
    return data.filter((p) => p.type === tab);
  }, [tab]);

  return (
    <section id="projects" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-3 py-1 text-sm ${tab === t ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Card key={p.id} className="flex flex-col gap-4 border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <Badge variant="secondary">{p.type}</Badge>
              </div>
              <p className="text-sm text-zinc-300">{p.summary}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s} className="border border-white/10 bg-black text-zinc-300">
                    {s}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex gap-3 pt-2 text-sm">
                {p.links.github && (
                  <Link className="hover:underline" href={p.links.github} target="_blank">
                    GitHub →
                  </Link>
                )}
                {p.links.live && (
                  <Link className="hover:underline" href={p.links.live} target="_blank">
                    Live →
                  </Link>
                )}
                {p.links.appstore && (
                  <Link className="hover:underline" href={p.links.appstore} target="_blank">
                    App Store →
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
