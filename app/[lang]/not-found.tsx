import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { NotFoundView } from "@/components/sections/not-found-view";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].notFound;
  return { title: t.meta.title, description: t.meta.description };
}

/** Rendered when a page calls notFound(). Unknown URLs are routed to /[lang]/page-not-found by proxy.ts. */
export default async function NotFound() {
  const { locale, t } = await getDictionary();
  return <NotFoundView locale={locale} t={t} />;
}
