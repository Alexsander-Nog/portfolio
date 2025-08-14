"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";
import { useTranslations, useLocale } from "next-intl";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale(); // "en" | "pt"

  return (
    <header className="border-border bg-background/70 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Brand (locale-aware) */}
        <Link href={`/${locale}`} className="font-semibold tracking-tight" aria-label="Home">
          Doug<span className="text-pink-500">.</span>dev
        </Link>

        {/* Links (desktop) */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavItem href="#projects" label={t("projects")} />
              <NavItem href="#experience" label={t("experience")} />
              <NavItem href="#contact" label={t("contact")} />
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Ações à direita: Lang, Theme e GitHub */}
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <ThemeToggle />
          <Link
            href="https://github.com/DouglasiOSDeveloper"
            target="_blank"
            prefetch={false}
            className="border-border hover:bg-foreground/5 rounded-xl border px-3 py-1 text-sm"
            aria-label="GitHub"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <NavigationMenuItem>
      <Link
        href={href}
        className={cn(
          "text-foreground/80 rounded-xl px-3 py-2 text-sm",
          "hover:bg-foreground/5 hover:text-foreground transition-colors"
        )}
      >
        {label}
      </Link>
    </NavigationMenuItem>
  );
}
