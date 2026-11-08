import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { learning, isTopicSlug, topicSlugs } from "@/content/learning";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { IconTile } from "@/components/ui/bits";
import { TopicBlocks } from "@/components/sections/topic-blocks";

export async function generateStaticParams() {
  return topicSlugs.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/resources/[topic]">): Promise<Metadata> {
  const { topic: slug } = await params;
  const locale = await getLocale();
  const topic = isTopicSlug(slug) ? learning[locale].topics.find((t) => t.slug === slug) : undefined;
  if (!topic) return { title: dictionaries[locale].notFound.meta.title };
  return pageMetadata({ locale, path: `${routes.resources}/${slug}`, title: topic.title, description: topic.summary });
}

export default async function TopicPage({ params }: PageProps<"/[lang]/resources/[topic]">) {
  const { topic: slug } = await params;
  const { locale, t } = await getDictionary();
  const content = learning[locale];
  const topic = isTopicSlug(slug) ? content.topics.find((item) => item.slug === slug) : undefined;
  if (!topic) notFound();

  const others = content.topics.filter((item) => item.slug !== topic.slug);
  const sectionLinks = topic.blocks.filter(
    (b): b is typeof b & { id: string; title: string } => Boolean(b.id) && "title" in b && Boolean(b.title),
  );

  return (
    <>
      <PageHero
        title={topic.title}
        lead={topic.lead}
        crumbLabel={t.common.breadcrumbLabel}
        crumbs={[
          { label: t.common.home, href: href(locale) },
          { label: t.resources.topicPage.breadcrumb, href: href(locale, routes.resources) },
          { label: topic.title },
        ]}
      />
      <Container className="grid gap-12 py-12 lg:grid-cols-[1fr_280px] lg:py-16">
        <div className="min-w-0">
          <TopicBlocks blocks={topic.blocks} ctx={{ locale, learning: content, t }} />
          <p className="mt-12 text-xs text-muted">{t.resources.speakUi.note}</p>
        </div>
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          {sectionLinks.length > 1 ? (
            <nav aria-label={t.resources.topicPage.contents} className="rounded-card border border-line bg-soft p-5">
              <h2 className="font-heading text-sm font-extrabold tracking-[0.1em] text-primary uppercase">
                {t.resources.topicPage.contents}
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {sectionLinks.map((block) => (
                  <li key={block.id}>
                    <a href={`#${block.id}`} className="text-primary-600 hover:underline">
                      {block.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          <nav aria-label={t.resources.topicPage.otherTopics}>
            <h2 className="font-heading text-sm font-extrabold tracking-[0.1em] text-primary uppercase">
              {t.resources.topicPage.otherTopics}
            </h2>
            <ul className="mt-3 space-y-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={href(locale, `${routes.resources}/${item.slug}`)}
                    className="flex items-center gap-3 rounded-card-sm border border-line bg-white p-3 text-sm font-semibold text-primary hover:bg-primary-50"
                  >
                    <IconTile name={item.icon} size="sm" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={href(locale, routes.resources)}
              className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-bold text-accent hover:underline"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              {t.resources.topicPage.backToResources}
            </Link>
          </nav>
        </aside>
      </Container>
    </>
  );
}
