import Link from "next/link";
import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { getArticles } from "@/content/articles";
import type { ArticleCategory } from "@/content/articles/meta";
import { pageMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { buttonClasses } from "@/components/ui/button";
import { ClassroomScene } from "@/components/illustrations/scenes";
import { NewsExplorer } from "@/components/interactive/news-explorer";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].news;
  return pageMetadata({ locale, path: routes.news, title: t.meta.title, description: t.meta.description });
}

export default async function NewsPage() {
  const { locale, t } = await getDictionary();
  const n = t.news;
  const articles = getArticles(locale);
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured?.slug);
  const categoryIds = Array.from(new Set(articles.map((a) => a.category))) as ArticleCategory[];

  return (
    <>
      <PageHero
        title={n.hero.title}
        lead={n.hero.lead}
        crumbLabel={t.common.breadcrumbLabel}
        crumbs={[{ label: t.common.home, href: href(locale) }, { label: t.common.nav.news }]}
      />

      <Section>
        <Container>
          {featured ? (
            <article className="relative grid overflow-hidden rounded-card border border-line bg-white shadow-sh1 md:grid-cols-[1.1fr_1fr]">
              <div className="relative">
                <ClassroomScene word="Guten Tag!" className="block aspect-[420/250] size-full" />
                <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 font-heading text-xs font-bold text-white">
                  {n.featured} · {n.categories[featured.category]}
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="flex items-center gap-1.5 text-xs text-muted">
                  <Clock aria-hidden="true" className="size-3.5" />
                  {featured.minutes} {t.common.minRead}
                </p>
                <h2 className="mt-3 text-2xl leading-tight font-bold sm:text-[1.75rem]">{featured.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{featured.excerpt}</p>
                <Link href={href(locale, `${routes.news}/${featured.slug}`)} className={buttonClasses("primary", "md", "mt-6 self-start sm:w-full")}>
                  {n.readFull}
                  <span className="sr-only">: {featured.title}</span>
                </Link>
              </div>
            </article>
          ) : null}

          <div className="mt-10">
            <NewsExplorer
              articles={rest.map(({ slug, title, excerpt, minutes, category, visual }) => ({ slug, title, excerpt, minutes, category, visual }))}
              categories={categoryIds.map((id) => ({ id, label: n.categories[id] }))}
              newsBase={href(locale, routes.news)}
              labels={{
                filterLabel: n.filterLabel,
                all: n.all,
                searchLabel: n.searchLabel,
                searchPlaceholder: n.searchPlaceholder,
                emptyTitle: n.emptyTitle,
                emptyBody: n.emptyBody,
                clear: n.clear,
                results: n.results,
                minRead: t.common.minRead,
                readArticle: t.common.readArticle,
                pagination: n.pagination,
              }}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
