import type { MetadataRoute } from "next";
import { indexableLocales, localeSettings } from "@/i18n/config";
import { routes } from "@/i18n/paths";
import { topicSlugs } from "@/content/learning/types";
import { allArticleSlugs } from "@/content/articles";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Lists indexable pages only. Requires NEXT_PUBLIC_SITE_URL (absolute URLs);
 * until a domain is configured the sitemap is intentionally empty.
 * Unreviewed languages (see i18n/config.ts) are excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  const paths = [
    ...Object.values(routes),
    ...topicSlugs.map((slug) => `${routes.resources}/${slug}`),
    ...allArticleSlugs.map((slug) => `${routes.news}/${slug}`),
  ];

  const url = (locale: string, path: string) => new URL(`/${locale}${path}`, siteUrl).toString();

  return paths.flatMap((path) =>
    indexableLocales.map((locale) => ({
      url: url(locale, path),
      alternates: {
        languages: Object.fromEntries(indexableLocales.map((l) => [localeSettings[l].htmlLang, url(l, path)])),
      },
    })),
  );
}
