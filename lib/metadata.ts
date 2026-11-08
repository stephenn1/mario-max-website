import type { Metadata } from "next";
import { indexableLocales, localeSettings, type Locale } from "@/i18n/config";
import { getSiteUrl } from "./site-url";
import { site } from "@/content/site";

type PageMetaInput = {
  locale: Locale;
  /** Locale-independent path, e.g. "/courses" ("" for home). */
  path: string;
  title: string;
  description: string;
  /** Use the title as-is (skip the "| Mario-Max…" template). */
  absoluteTitle?: boolean;
  type?: "website" | "article";
};

/**
 * Builds page metadata with language-aware Open Graph data, and — only when a
 * site URL is configured — canonical and hreflang alternates. Unreviewed
 * languages are marked noindex and left out of the alternates.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
  type = "website",
}: PageMetaInput): Metadata {
  const settings = localeSettings[locale];
  const siteUrl = getSiteUrl();
  const fullTitle = absoluteTitle ? title : `${title} | ${site.shortName}`;

  const metadata: Metadata = {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    openGraph: {
      type,
      title: fullTitle,
      description,
      siteName: site.shortName,
      locale: settings.ogLocale,
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };

  if (!settings.indexable) {
    metadata.robots = { index: false, follow: true };
  }

  if (siteUrl && settings.indexable) {
    const languages: Record<string, string> = {};
    for (const l of indexableLocales) {
      languages[localeSettings[l].htmlLang] = `/${l}${path}`;
    }
    languages["x-default"] = `/en${path}`;

    metadata.alternates = {
      canonical: `/${locale}${path}`,
      languages,
    };
    metadata.openGraph = { ...metadata.openGraph, url: `/${locale}${path}` };
  }

  return metadata;
}
