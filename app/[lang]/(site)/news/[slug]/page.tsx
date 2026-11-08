import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { allArticleSlugs, getArticle, getRelatedArticles, type Article } from "@/content/articles";
import type { ArticleBlock } from "@/content/articles/types";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/lib/json-ld";
import { site } from "@/content/site";
import { Container, Section } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { Monogram } from "@/components/ui/logo";
import { ClassroomScene, CityScene, SpeechScene, StudyScene } from "@/components/illustrations/scenes";
import { ArticleCard } from "@/components/sections/article-card";
import { ShareButtons } from "@/components/interactive/share-buttons";

export async function generateStaticParams() {
  return allArticleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const article = getArticle(locale, slug);
  if (!article) return { title: dictionaries[locale].notFound.meta.title };
  return pageMetadata({
    locale,
    path: `${routes.news}/${slug}`,
    title: article.title,
    description: article.excerpt,
    type: "article",
  });
}

function HeaderVisual({ article }: { article: Article }) {
  const className = "block aspect-[640/260] size-full";
  switch (article.visual) {
    case "study":
      return <StudyScene className={className} />;
    case "city":
    case "cap":
      return <CityScene className={className} />;
    case "speech":
      return <SpeechScene one="Hallo!" two="Wie geht's?" className={className} />;
    default:
      return <ClassroomScene word="der · die · das" className={className} />;
  }
}

function Block({ block, tryThis, further, newTab }: { block: ArticleBlock; tryThis: string; further: string; newTab: string }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2>{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="rounded-r-card-sm border-l-4 border-gold bg-soft px-5 py-4 font-heading text-[1.0625rem] leading-relaxed font-semibold text-primary">
          {block.text}
        </blockquote>
      );
    case "tip":
      return (
        <div>
          <h3>{tryThis}</h3>
          <ul>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "sources":
      return (
        <div className="rounded-card-sm border border-line p-5">
          <h3 className="!mt-0">{further}</h3>
          <ul className="!list-none !pl-0">
            {block.items.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                  {item.label}
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                  <span className="sr-only">{newTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export default async function ArticlePage({ params }: PageProps<"/[lang]/news/[slug]">) {
  const { slug } = await params;
  const { locale, t } = await getDictionary();
  const article = getArticle(locale, slug);
  if (!article) notFound();
  const a = t.news.article;
  const related = getRelatedArticles(locale, slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          inLanguage: locale,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
        }}
      />
      <article>
        <Container className="max-w-[880px] pt-10 sm:pt-12">
          <Breadcrumbs
            tone="light"
            label={t.common.breadcrumbLabel}
            items={[
              { label: t.common.home, href: href(locale) },
              { label: t.common.nav.news, href: href(locale, routes.news) },
              { label: a.crumb },
            ]}
          />
          <p className="mt-6">
            <span className="inline-flex rounded-full bg-red-50 px-3 py-1 font-heading text-xs font-bold text-accent">
              {t.news.categories[article.category]}
            </span>
          </p>
          <h1 className="mt-4 max-w-[680px] text-[2rem] leading-[1.12] font-extrabold sm:text-[2.5rem]">{article.title}</h1>
          <p className="mt-5 flex items-center gap-3 text-sm text-muted">
            <Monogram className="size-9" />
            <span>
              {a.by} <span className="font-semibold text-primary">{a.author}</span> · {article.minutes} {t.common.minRead}
            </span>
          </p>
        </Container>
        <Container className="max-w-[1000px] pt-8">
          <div className="overflow-hidden rounded-card border border-line">
            <HeaderVisual article={article} />
          </div>
        </Container>
        <Container className="max-w-[880px] pt-10 pb-14 lg:pb-16">
          <div className="prose-content max-w-[680px]">
            {article.blocks.map((block, i) => (
              <Block key={i} block={block} tryThis={a.tryThis} further={a.further} newTab={t.common.newTab} />
            ))}
          </div>
          <div className="mt-10 max-w-[680px] border-y border-line py-5">
            <ShareButtons
              title={article.title}
              labels={{ share: a.share, shareOn: a.shareOn, shareEmail: a.shareEmail, copyLink: a.copyLink, linkCopied: a.linkCopied }}
            />
          </div>
          <div className="mt-8 flex max-w-[680px] gap-4 rounded-card border border-line bg-soft p-6">
            <Monogram className="size-12" />
            <div>
              <p className="font-heading font-bold text-primary">{a.author}</p>
              <p className="text-[13px] font-semibold text-accent">{a.authorRole}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.authorBio}</p>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <Section tone="soft" labelledBy="related-title">
          <Container>
            <SectionHeading id="related-title" eyebrow={a.relatedEyebrow} title={a.relatedTitle} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <ArticleCard
                    article={item}
                    href={href(locale, `${routes.news}/${item.slug}`)}
                    categoryLabel={t.news.categories[item.category]}
                    minRead={t.common.minRead}
                    readLabel={t.common.readArticle}
                    layout="responsive"
                  />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
