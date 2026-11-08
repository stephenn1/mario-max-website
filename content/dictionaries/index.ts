import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { de } from "./de";
import type { Dictionary } from "./types";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { en, de };

/** Replaces {placeholders} in a dictionary string. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
