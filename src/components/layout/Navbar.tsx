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
    <header className="sticky top-0 z-50 border-b border-[#a52a2a] bg-[#1a1a1a]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Brand (locale-aware) */}
        <Link
          href={`/${locale}`}
          className="font-semibold tracking-tight text-[#f5f5f5]"
          aria-label="Home"
        >
          Alexsander
          <span className="text-[#e0c097]">.</span>
          Nogueira
        </Link>

        {/* Links (desktop) */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavItem href="#about" label={t("about")} />
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
            href="https://github.com/AlexsanderTG"
            target="_blank"
            prefetch={false}
            className="rounded-xl border border-[#a52a2a] px-3 py-1 text-sm text-[#f5f5f5] transition-colors hover:bg-[#a52a2a] hover:text-[#f5f5f5]"
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
          "rounded-xl px-3 py-2 text-sm text-[#f5f5f5] transition-colors",
          "hover:bg-[#a52a2a] hover:text-[#f5f5f5]"
        )}
      >
        {label}
      </Link>
    </NavigationMenuItem>
  );
}
