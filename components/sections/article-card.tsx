import Link from "next/link";
import { ArrowRight, BookOpen, Building2, Clock, GraduationCap, MessagesSquare, School } from "lucide-react";
import type { ArticleCategory, ArticleVisual } from "@/content/articles/meta";
import { cn } from "@/lib/cn";

const tints: Record<ArticleCategory, string> = {
  "learning-tips": "from-[#eef2fa] to-[#dce6f5]",
  germany: "from-[#f6e9ee] to-[#ecd5df]",
  "school-news": "from-[#f8f0d8] to-[#f0dfae]",
};

const visualIcons: Record<ArticleVisual, typeof BookOpen> = {
  study: BookOpen,
  classroom: School,
  city: Building2,
  book: BookOpen,
  cap: GraduationCap,
  speech: MessagesSquare,
};

/** Tinted thumbnail with a line icon and category chip — the design's article image treatment. */
export function ArticleThumb({
  category,
  categoryLabel,
  visual,
  className,
  showChip = true,
}: {
  category: ArticleCategory;
  categoryLabel: string;
  visual: ArticleVisual;
  className?: string;
  showChip?: boolean;
}) {
  const VisualIcon = visualIcons[visual];
  return (
    <div className={cn("relative flex items-center justify-center bg-gradient-to-br", tints[category], className)}>
      {showChip ? (
        <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 font-heading text-[11px] font-bold text-white">
          {categoryLabel}
        </span>
      ) : null}
      <VisualIcon aria-hidden="true" className="size-8 text-primary-600/45" strokeWidth={1.5} />
    </div>
  );
}

export type ArticleCardData = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  category: ArticleCategory;
  visual: ArticleVisual;
};

/**
 * Article card. `layout="responsive"` switches to a horizontal list item on
 * small screens, matching the mobile News artboard.
 */
export function ArticleCard({
  article,
  href,
  categoryLabel,
  minRead,
  readLabel,
  layout = "grid",
  headingLevel = "h3",
}: {
  article: ArticleCardData;
  href: string;
  categoryLabel: string;
  minRead: string;
  readLabel: string;
  layout?: "grid" | "responsive";
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const responsive = layout === "responsive";
  return (
    <article
      className={cn(
        "group relative flex overflow-hidden rounded-card border border-line bg-white shadow-sh1 transition-shadow hover:shadow-sh2",
        responsive ? "flex-row sm:flex-col" : "flex-col",
      )}
    >
      <ArticleThumb
        category={article.category}
        categoryLabel={categoryLabel}
        visual={article.visual}
        showChip
        className={cn(responsive ? "w-[38%] shrink-0 sm:h-36 sm:w-auto" : "h-36")}
      />
      <div className={cn("flex flex-1 flex-col", responsive ? "p-4 sm:p-5" : "p-5")}>
        <p className="flex items-center gap-1.5 text-xs text-muted">
          <Clock aria-hidden="true" className="size-3.5" />
          {article.minutes} {minRead}
        </p>
        <Heading className={cn("mt-2 font-bold leading-snug", responsive ? "text-[15px] sm:text-lg" : "text-lg")}>
          <Link href={href} className="after:absolute after:inset-0 hover:text-primary-600">
            {article.title}
          </Link>
        </Heading>
        <p className={cn("mt-2 text-sm leading-relaxed text-muted", responsive && "hidden sm:block")}>{article.excerpt}</p>
        <p
          aria-hidden="true"
          className={cn(
            "mt-auto items-center gap-1.5 pt-4 font-heading text-sm font-bold text-accent group-hover:underline",
            responsive ? "hidden sm:flex" : "flex",
          )}
        >
          {readLabel}
          <ArrowRight className="size-4" />
        </p>
      </div>
    </article>
  );
}
