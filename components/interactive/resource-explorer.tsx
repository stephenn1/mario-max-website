"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { format } from "@/content/dictionaries";
import type { Crumb } from "@/components/ui/breadcrumbs";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EmptyState, IconTile, LevelBadge } from "@/components/ui/bits";
import { buttonClasses } from "@/components/ui/button";

type TopicCard = { slug: string; icon: string; title: string; summary: string; keywords: string[]; href: string };
type PracticeCard = { level: string; title: string; type: string; href: string; keywords: string[] };

function normalise(value: string) {
  return value.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function matches(query: string, fields: string[]) {
  if (!query) return true;
  const haystack = normalise(fields.join(" "));
  return normalise(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

/** Resources hero with live search, filtering the category cards and practice list. */
export function ResourceExplorer({
  hero,
  crumbs,
  crumbLabel,
  topics,
  practice,
  labels,
  practiceHref,
}: {
  hero: { title: string; lead: string; searchLabel: string; searchPlaceholder: string };
  crumbs: Crumb[];
  crumbLabel: string;
  topics: TopicCard[];
  practice: PracticeCard[];
  labels: {
    categoriesEyebrow: string;
    categoriesTitle: string;
    open: string;
    practiceEyebrow: string;
    practiceTitle: string;
    tryLink: string;
    results: string;
    noResultsTitle: string;
    noResultsBody: string;
    clear: string;
  };
  practiceHref: string;
}) {
  const [query, setQuery] = useState("");
  const visibleTopics = topics.filter((t) => matches(query, [t.title, t.summary, ...t.keywords]));
  const visiblePractice = practice.filter((p) => matches(query, [p.title, p.type, p.level, ...p.keywords]));
  const count = visibleTopics.length + visiblePractice.length;

  return (
    <>
      <PageHero title={hero.title} lead={hero.lead} crumbs={crumbs} crumbLabel={crumbLabel}>
        <form role="search" onSubmit={(event) => event.preventDefault()} className="mt-7 max-w-[540px]">
          <label htmlFor="resource-search" className="sr-only">
            {hero.searchLabel}
          </label>
          <div className="relative">
            <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted" />
            <input
              id="resource-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={hero.searchPlaceholder}
              autoComplete="off"
              className="h-[52px] w-full rounded-btn border border-white/20 bg-white pr-4 pl-12 text-[15px] text-ink placeholder:text-muted focus:outline-2 focus:outline-offset-2 focus:outline-gold"
            />
          </div>
        </form>
        <p aria-live="polite" className="sr-only">
          {query ? format(labels.results, { count }) : ""}
        </p>
      </PageHero>

      {count === 0 ? (
        <Section>
          <Container>
            <EmptyState
              title={labels.noResultsTitle}
              body={labels.noResultsBody}
              action={
                <button type="button" onClick={() => setQuery("")} className={buttonClasses("secondary", "sm")}>
                  {labels.clear}
                </button>
              }
            />
          </Container>
        </Section>
      ) : null}

      {visibleTopics.length > 0 ? (
        <Section labelledBy="categories-title">
          <Container>
            <SectionHeading id="categories-title" eyebrow={labels.categoriesEyebrow} title={labels.categoriesTitle} />
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
              {visibleTopics.map((topic) => (
                <li key={topic.slug}>
                  <article className="group relative flex h-full flex-col rounded-card border border-line bg-white p-4 shadow-sh1 transition-shadow hover:shadow-sh2 sm:p-5">
                    <IconTile name={topic.icon} />
                    <h3 className="mt-3 text-[15px] font-bold sm:mt-4 sm:text-lg">
                      <Link href={topic.href} className="after:absolute after:inset-0">
                        {topic.title}
                      </Link>
                    </h3>
                    <p className="mt-1.5 flex-1 text-[13px] leading-snug text-muted sm:mt-2 sm:text-sm sm:leading-relaxed">{topic.summary}</p>
                    <p aria-hidden="true" className="mt-3 flex items-center gap-1.5 font-heading text-sm font-bold text-accent group-hover:underline sm:mt-5">
                      {labels.open}
                      <ArrowRight className="size-4" />
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {visiblePractice.length > 0 ? (
        <Section tone="soft" labelledBy="practice-list-title">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                id="practice-list-title"
                eyebrow={labels.practiceEyebrow}
                eyebrowTone="gold"
                title={labels.practiceTitle}
              />
              <Link href={practiceHref} className={buttonClasses("secondary", "sm")}>
                {labels.tryLink}
              </Link>
            </div>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {visiblePractice.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-4 rounded-card border border-line bg-white p-4 shadow-sh1 transition-shadow hover:shadow-sh2 sm:p-5"
                  >
                    <LevelBadge code={item.level} className="bg-primary text-white" />
                    <span>
                      <span className="block font-heading text-[15px] font-bold text-primary">{item.title}</span>
                      <span className="mt-0.5 block text-[13px] text-muted">{item.type}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
