export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

type LocaleSettings = {
  /** Native name shown in the language switcher. */
  label: string;
  /** Short code shown on the EN/DE toggle. */
  short: string;
  /** Value for <html lang> and hreflang. */
  htmlLang: string;
  /** Open Graph locale. */
  ogLocale: string;
  /**
   * Whether search engines may index this language.
   *
   * German content is a draft until it has been reviewed by a qualified
   * German speaker. While `false`, German pages carry `noindex`, are left
   * out of hreflang alternates and are excluded from the sitemap.
   * Change to `true` once the translations are approved.
   */
  indexable: boolean;
};

export const localeSettings: Record<Locale, LocaleSettings> = {
  en: {
    label: "English",
    short: "EN",
    htmlLang: "en",
    ogLocale: "en_NG",
    indexable: true,
  },
  de: {
    label: "Deutsch",
    short: "DE",
    htmlLang: "de",
    ogLocale: "de_DE",
    indexable: false, // ← set to true after the German translation review
  },
};

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export const indexableLocales = locales.filter((l) => localeSettings[l].indexable);
