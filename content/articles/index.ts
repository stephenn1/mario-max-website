import type { Locale } from "@/i18n/config";
import { articleMeta, type ArticleCategory, type ArticleMeta } from "./meta";
import { articlesEn } from "./en";
import { articlesDe } from "./de";
import type { ArticleBlock, ArticleContent } from "./types";

const content: Record<Locale, Record<string, ArticleContent>> = { en: articlesEn, de: articlesDe };

export type Article = ArticleMeta & ArticleContent & { minutes: number };

function countWords(blocks: ArticleBlock[]): number {
  let text = "";
  for (const block of blocks) {
    if (block.type === "ul" || block.type === "tip") text += ` ${block.items.join(" ")}`;
    else if (block.type === "sources") text += ` ${block.items.map((i) => i.label).join(" ")}`;
    else text += ` ${block.text}`;
  }
  return text.trim().split(/\s+/).length;
}

/** All articles available in the given language, newest first. */
export function getArticles(locale: Locale): Article[] {
  return articleMeta.flatMap((meta) => {
    const localized = content[locale][meta.slug];
    if (!localized) return [];
    return [{ ...meta, ...localized, minutes: Math.max(1, Math.ceil(countWords(localized.blocks) / 150)) }];
  });
}

export function getArticle(locale: Locale, slug: string): Article | undefined {
  return getArticles(locale).find((a) => a.slug === slug);
}

export function getRelatedArticles(locale: Locale, slug: string, count = 3): Article[] {
  const all = getArticles(locale);
  const current = all.find((a) => a.slug === slug);
  const others = all.filter((a) => a.slug !== slug);
  const sameCategory = others.filter((a) => a.category === current?.category);
  const rest = others.filter((a) => a.category !== current?.category);
  return [...sameCategory, ...rest].slice(0, count);
}

export const allArticleSlugs = articleMeta.map((a) => a.slug);

export type { ArticleCategory };
