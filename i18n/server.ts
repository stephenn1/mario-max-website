import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { dictionaries, type Dictionary } from "@/content/dictionaries";
import { isLocale, type Locale } from "./config";

/** Reads the current locale from the `[lang]` root segment. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

/** Returns the current locale and its dictionary. Server Components only. */
export async function getDictionary(): Promise<{ locale: Locale; t: Dictionary }> {
  const locale = await getLocale();
  return { locale, t: dictionaries[locale] };
}
