"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import type { ArticleCategory } from "@/content/articles/meta";
import { format } from "@/content/dictionaries";
import { ArticleCard, type ArticleCardData } from "@/components/sections/article-card";
import { EmptyState, chipClasses } from "@/components/ui/bits";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const PAGE_SIZE = 6;

/** News list with category chips, search and pagination. */
export function NewsExplorer({
  articles,
  categories,
  newsBase,
  labels,
}: {
  articles: ArticleCardData[];
  categories: { id: ArticleCategory; label: string }[];
  newsBase: string;
  labels: {
    filterLabel: string;
    all: string;
    searchLabel: string;
    searchPlaceholder: string;
    emptyTitle: string;
    emptyBody: string;
    clear: string;
    results: string;
    minRead: string;
    readArticle: string;
    pagination: { label: string; previous: string; next: string; page: string };
  };
}) {
  const [category, setCategory] = useState<ArticleCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const q = query.trim().toLocaleLowerCase();
  const filtered = articles.filter(
    (a) =>
      (category === "all" || a.category === category) &&
      (!q || `${a.title} ${a.excerpt}`.toLocaleLowerCase().includes(q)),
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const labelFor = (id: ArticleCategory) => categories.find((c) => c.id === id)?.label ?? id;

  function selectCategory(next: ArticleCategory | "all") {
    setCategory(next);
    setPage(1);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label={labels.filterLabel} className="no-scrollbar contain-paint -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          <button type="button" aria-pressed={category === "all"} onClick={() => selectCategory("all")} className={chipClasses(category === "all")}>
            {labels.all}
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              onClick={() => selectCategory(c.id)}
              className={chipClasses(category === c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div role="search" className="relative w-full lg:w-[260px]">
          <label htmlFor="article-search" className="sr-only">
            {labels.searchLabel}
          </label>
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted" />
          <input
            id="article-search"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder={labels.searchPlaceholder}
            autoComplete="off"
            className="h-11 w-full rounded-btn border-[1.5px] border-line bg-white pr-3 pl-10 text-sm text-ink placeholder:text-muted focus:border-primary-600 focus:outline-none focus:ring-4 focus:ring-primary/15"
          />
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {format(labels.results, { count: filtered.length })}
      </p>

      {visible.length === 0 ? (
        <EmptyState
          className="mt-8"
          title={labels.emptyTitle}
          body={labels.emptyBody}
          action={
            <button
              type="button"
              onClick={() => {
                setQuery("");
                selectCategory("all");
              }}
              className={buttonClasses("secondary", "sm")}
            >
              {labels.clear}
            </button>
          }
        />
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {visible.map((article) => (
            <li key={article.slug}>
              <ArticleCard
                article={article}
                href={`${newsBase}/${article.slug}`}
                categoryLabel={labelFor(article.category)}
                minRead={labels.minRead}
                readLabel={labels.readArticle}
                layout="responsive"
                headingLevel="h2"
              />
            </li>
          ))}
        </ul>
      )}

      {pageCount > 1 ? (
        <nav aria-label={labels.pagination.label} className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage(current - 1)}
            disabled={current === 1}
            className="inline-flex size-10 items-center justify-center rounded-btn border border-line bg-white text-primary disabled:opacity-40"
          >
            <ChevronLeft aria-hidden="true" className="size-4" />
            <span className="sr-only">{labels.pagination.previous}</span>
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={n === current ? "page" : undefined}
              aria-label={format(labels.pagination.page, { n })}
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-btn border font-heading text-sm font-bold",
                n === current ? "border-primary bg-primary text-white" : "border-line bg-white text-primary hover:bg-primary-50",
              )}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage(current + 1)}
            disabled={current === pageCount}
            className="inline-flex size-10 items-center justify-center rounded-btn border border-line bg-white text-primary disabled:opacity-40"
          >
            <ChevronRight aria-hidden="true" className="size-4" />
            <span className="sr-only">{labels.pagination.next}</span>
          </button>
        </nav>
      ) : null}
    </div>
  );
}
