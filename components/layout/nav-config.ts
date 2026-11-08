import { routes } from "@/i18n/paths";
import type { Dictionary } from "@/content/dictionaries";

export type NavItem = { label: string; path: string };

/** Main navigation items, in the design's order. */
export function mainNav(t: Dictionary["common"]): NavItem[] {
  return [
    { label: t.nav.home, path: routes.home },
    { label: t.nav.about, path: routes.about },
    { label: t.nav.courses, path: routes.courses },
    { label: t.nav.resources, path: routes.resources },
    { label: t.nav.guide, path: routes.guide },
    { label: t.nav.studentLife, path: routes.studentLife },
    { label: t.nav.news, path: routes.news },
  ];
}
