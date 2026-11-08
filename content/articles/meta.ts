export type ArticleCategory = "learning-tips" | "germany" | "school-news";

export type ArticleVisual = "study" | "classroom" | "city" | "book" | "cap" | "speech";

export type ArticleMeta = {
  slug: string;
  category: ArticleCategory;
  visual: ArticleVisual;
  featured?: boolean;
};

/**
 * Published articles, newest first.
 * These are educational draft articles for the school to review. No school
 * announcements are published until the school supplies the facts.
 * Publication dates are intentionally omitted until articles are approved.
 */
export const articleMeta: ArticleMeta[] = [
  { slug: "habits-that-help-you-learn-german", category: "learning-tips", visual: "study", featured: true },
  { slug: "understanding-ausbildung", category: "germany", visual: "city" },
  { slug: "der-die-das-remembering-articles", category: "learning-tips", visual: "book" },
  { slug: "studying-in-germany-where-to-begin", category: "germany", visual: "cap" },
  { slug: "speaking-exercises-at-home", category: "learning-tips", visual: "speech" },
];
