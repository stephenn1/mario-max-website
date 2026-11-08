import { defaultLocale, isLocale, type Locale } from "./config";

/** Locale-independent route paths. The same structure is used for every language. */
export const routes = {
  home: "",
  about: "/about",
  courses: "/courses",
  resources: "/resources",
  guide: "/germany-guide",
  studentLife: "/student-life",
  news: "/news",
  contact: "/contact",
  privacy: "/privacy",
} as const;

export type RouteKey = keyof typeof routes;

/** Builds a locale-prefixed path, e.g. href("de", "/courses") → "/de/courses". */
export function href(locale: Locale, path: string = ""): string {
  return `/${locale}${path}`;
}

/** Returns the path without its locale prefix ("/en/courses" → "/courses"). */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  if (isLocale(segments[1])) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "";
  }
  return pathname === "/" ? "" : pathname;
}

/**
 * Maps the current path to the equivalent page in another language.
 * Every page exists in both languages with the same URL structure; if the
 * current path has no locale prefix, fall back to the target home page.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  if (!isLocale(segments[1])) return href(target);
  return href(target, stripLocale(pathname));
}

export function isActivePath(pathname: string, path: string): boolean {
  const current = stripLocale(pathname);
  if (path === "") return current === "";
  return current === path || current.startsWith(`${path}/`);
}

export { defaultLocale };
