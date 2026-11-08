"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeSettings, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/paths";
import { cn } from "@/lib/cn";

/** EN/DE toggle linking to the same page in the other language. */
export function LanguageSwitcher({
  locale,
  label,
  tone = "dark",
  className,
  onNavigate,
}: {
  locale: Locale;
  label: string;
  tone?: "dark" | "light";
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  return (
    <nav aria-label={label} className={className}>
      <ul
        className={cn(
          "flex items-center rounded-full border p-0.5",
          tone === "dark" ? "border-white/25" : "border-line bg-white",
        )}
      >
        {locales.map((l) => {
          const active = l === locale;
          const settings = localeSettings[l];
          return (
            <li key={l}>
              <Link
                href={switchLocalePath(pathname, l)}
                hrefLang={settings.htmlLang}
                lang={settings.htmlLang}
                aria-current={active ? "true" : undefined}
                aria-label={settings.label}
                onClick={onNavigate}
                className={cn(
                  "flex h-7 min-w-10 items-center justify-center rounded-full px-2.5 font-heading text-xs font-bold transition-colors",
                  active
                    ? "bg-gold text-primary"
                    : tone === "dark"
                      ? "text-white/85 hover:text-white"
                      : "text-primary hover:bg-primary-50",
                )}
              >
                {settings.short}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
