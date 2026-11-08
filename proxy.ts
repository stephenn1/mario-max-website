import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "./i18n/config";
import { routes, stripLocale } from "./i18n/paths";
import { topicSlugs } from "./content/learning/types";
import { articleMeta } from "./content/articles/meta";

/**
 * Every page that exists, without its locale prefix. Derived from the same
 * route and content lists the site is built from — add new routes to
 * `routes` in i18n/paths.ts.
 */
const knownPaths = new Set<string>([
  ...Object.values(routes),
  ...topicSlugs.map((slug) => `${routes.resources}/${slug}`),
  ...articleMeta.map((article) => `${routes.news}/${article.slug}`),
]);

const NOT_FOUND_PATH = "/page-not-found";
const INTERNAL_HEADER = "x-mm-not-found";

/**
 * 1. Adds a language prefix to unprefixed URLs ("/" → "/en", "/courses" → "/en/courses").
 * 2. Serves the prerendered, localised 404 page with an HTTP 404 status for unknown URLs.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (!isLocale(firstSegment)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  const path = stripLocale(pathname).replace(/\/+$/, "");
  if (path === NOT_FOUND_PATH && request.headers.get(INTERNAL_HEADER) === "1") {
    return NextResponse.next();
  }

  if (!knownPaths.has(path)) {
    const target = new URL(`/${firstSegment}${NOT_FOUND_PATH}`, request.url);

    // Client-side router requests receive the 404 page's payload directly.
    if (request.headers.has("rsc") || request.headers.has("next-router-prefetch")) {
      return NextResponse.rewrite(target);
    }

    // Full page loads: return the prerendered 404 HTML with a real 404 status
    // (a plain rewrite to a static page would be served with 200).
    try {
      const page = await fetch(target, { headers: { [INTERNAL_HEADER]: "1" } });
      return new NextResponse(await page.text(), {
        status: 404,
        headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
      });
    } catch {
      return NextResponse.rewrite(target, { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next.js internals, metadata routes and any path with a file extension.
  matcher: ["/((?!_next|api|icon|apple-icon|sitemap|robots|.*\\..*).*)"],
};
