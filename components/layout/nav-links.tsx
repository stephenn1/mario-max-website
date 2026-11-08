"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { href, isActivePath } from "@/i18n/paths";
import { cn } from "@/lib/cn";
import type { NavItem } from "./nav-config";

/** Desktop navigation links with active-page state. */
export function NavLinks({ items, locale, label }: { items: NavItem[]; locale: Locale; label: string }) {
  const pathname = usePathname() ?? "";
  return (
    <nav aria-label={label} className="hidden nav:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const active = isActivePath(pathname, item.path);
          return (
            <li key={item.path}>
              <Link
                href={href(locale, item.path)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-2.5 py-2 font-heading text-[14px] font-semibold whitespace-nowrap transition-colors",
                  active ? "text-accent" : "text-primary hover:text-accent",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
