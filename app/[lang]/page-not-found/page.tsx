import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { NotFoundView } from "@/components/sections/not-found-view";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].notFound;
  return { title: t.meta.title, description: t.meta.description, robots: { index: false, follow: true } };
}

/**
 * Prerendered 404 page. proxy.ts rewrites unknown URLs here with an HTTP 404
 * status, so visitors get the full server-rendered page in their language.
 */
export default async function PageNotFound() {
  const { locale, t } = await getDictionary();
  return <NotFoundView locale={locale} t={t} />;
}
