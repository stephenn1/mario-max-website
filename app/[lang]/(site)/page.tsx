import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { levels } from "@/content/courses";
import { heroVideo } from "@/content/media";
import { getArticles } from "@/content/articles";
import { site } from "@/content/site";
import { mailtoHref, telHref, whatsappHref } from "@/lib/links";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, schoolJsonLd } from "@/lib/json-ld";
import { cn } from "@/lib/cn";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { IconTile } from "@/components/ui/bits";
import { ClassroomScene, HeroAudience } from "@/components/illustrations/scenes";
import { CoursePreviewCard } from "@/components/sections/course-cards";
import { OpportunityCard, type OpportunityTone } from "@/components/sections/opportunity-card";
import { ArticleCard } from "@/components/sections/article-card";
import { LocationCard } from "@/components/sections/location";
import { HeroVideo } from "@/components/sections/hero-video";
import { WhatsAppIcon } from "@/components/icons/brand";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].home;
  return pageMetadata({ locale, path: "", title: t.meta.title, description: t.meta.description, absoluteTitle: true });
}

const resourceTargets: Record<string, { path: string; icon: string; mobile?: boolean }> = {
  vocabulary: { path: "/resources/vocabulary", icon: "book", mobile: true },
  grammar: { path: "/resources/grammar", icon: "fileText", mobile: true },
  pronunciation: { path: "/resources/pronunciation", icon: "mic" },
  conversations: { path: "/resources/everyday-expressions", icon: "message" },
  reading: { path: "/resources/reading", icon: "book" },
  listening: { path: "/resources/listening-speaking", icon: "headphones" },
  quizzes: { path: "/resources#quizzes", icon: "squareCheck", mobile: true },
  flashcards: { path: "/resources#flashcards", icon: "layers", mobile: true },
};

const opportunityMeta: Record<string, { tone: OpportunityTone; anchor: string; mobile?: boolean }> = {
  study: { tone: "navy", anchor: "#study", mobile: true },
  ausbildung: { tone: "red", anchor: "#ausbildung", mobile: true },
  work: { tone: "gold", anchor: "#work", mobile: true },
  culture: { tone: "navy", anchor: "#culture" },
  living: { tone: "navy", anchor: "#living" },
};

export default async function HomePage() {
  const { locale, t } = await getDictionary();
  const h = t.home;
  const latest = getArticles(locale).slice(0, 3);

  return (
    <>
      <JsonLd data={schoolJsonLd(h.meta.description)} />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-primary text-white">
        {heroVideo ? (
          <>
            <HeroVideo video={heroVideo} />
            <div aria-hidden="true" className="absolute inset-0 bg-[#0b1a3a]/75" />
          </>
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(90%_120%_at_80%_10%,#1e4080_0%,transparent_55%),linear-gradient(180deg,#132a58_0%,#0e2148_45%,#0b1a3a_100%)]"
          />
        )}
        <HeroAudience />
        <Container className="relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-heading text-xs font-bold text-white sm:text-[13px]">
              <span aria-hidden="true" className="size-2 rounded-full bg-gold" />
              {h.hero.badge}
            </p>
            <h1
              id="hero-title"
              className="mt-6 max-w-[620px] text-[2.5rem] leading-[1.05] font-extrabold text-white sm:text-[3.25rem] lg:text-[3.75rem]"
            >
              {h.hero.title}
            </h1>
            <p className="mt-5 max-w-[520px] text-base leading-relaxed text-white/85 sm:text-lg">{h.hero.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={href(locale, routes.courses)}>
                {h.hero.primary}
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink href={href(locale, routes.contact)} variant="outline-light">
                {h.hero.secondary}
              </ButtonLink>
            </div>
          </div>
          <div aria-hidden="true" className="hidden lg:block">
            <div className="ml-auto max-w-[420px] rounded-card-lg border border-white/10 bg-[#0e2148]/60 p-8 shadow-sh3 backdrop-blur-sm">
              <p className="font-heading text-[2.5rem] font-extrabold text-gold-300">{h.hero.cardGreeting}</p>
              <p className="mt-2 font-heading text-xl font-bold text-white/60">{h.hero.cardArticles}</p>
              <div className="mt-8 space-y-2.5">
                <span className="block h-2 w-3/4 rounded-full bg-white/15" />
                <span className="block h-2 w-1/2 rounded-full bg-white/10" />
              </div>
              <p className="mt-8 font-heading text-sm font-bold tracking-wide text-white/55">{h.hero.cardLevels}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Welcome */}
      <Section labelledBy="welcome-title">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading id="welcome-title" eyebrow={h.welcome.eyebrow} title={h.welcome.title} />
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">{h.welcome.p1}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{h.welcome.p2}</p>
            <dl className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
              {h.welcome.facts.map((fact) => (
                <div key={fact.title} className="min-w-0">
                  <dt className="font-heading text-[15px] font-extrabold break-words hyphens-auto text-primary sm:text-xl">{fact.title}</dt>
                  <dd className="mt-1 text-xs text-muted sm:text-[13px]">{fact.text}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href={href(locale, routes.about)} variant="secondary" className="mt-8 lg:hidden">
              {h.welcome.cta}
            </ButtonLink>
          </div>
          <div className="overflow-hidden rounded-card border border-line shadow-sh1">
            <ClassroomScene word={h.hero.cardGreeting} className="block aspect-[420/290] w-full" />
          </div>
        </Container>
      </Section>

      {/* Courses */}
      <Section tone="soft" labelledBy="courses-title" className="pb-8 lg:pb-12">
        <Container>
          <SectionHeading id="courses-title" eyebrow={h.courses.eyebrow} title={h.courses.title} lead={h.courses.lead} align="center" />
          <ul
            className="no-scrollbar contain-paint -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3 lg:gap-5"
            aria-label={h.courses.title}
          >
            {levels.map((level) => {
              const course = t.courses.levels[level.code];
              return (
                <li key={level.code} className="w-[78%] shrink-0 snap-start sm:w-auto">
                  <CoursePreviewCard
                    code={level.code}
                    name={course.name}
                    text={course.short}
                    href={`${href(locale, routes.courses)}#${level.code.toLowerCase()}`}
                    detailsLabel={h.courses.details}
                  />
                </li>
              );
            })}
          </ul>
          <p className="mt-3 flex items-center gap-2 text-xs text-muted sm:hidden">
            <ArrowRight aria-hidden="true" className="size-3.5" />
            {h.courses.swipeHint}
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={href(locale, routes.courses)} variant="secondary">
              {h.courses.viewAll}
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Why Mario-Max */}
      <Section tone="soft" labelledBy="why-title" className="pt-14 lg:pt-20">
        <Container>
          <SectionHeading id="why-title" eyebrow={h.why.eyebrow} title={h.why.title} lead={h.why.lead} />
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {h.why.items.map((item) => (
              <li key={item.title} className="flex gap-4">
                <IconTile name={item.icon} className="bg-white shadow-sh1" />
                <div>
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Learning resources */}
      <Section labelledBy="resources-title">
        <Container>
          <SectionHeading
            id="resources-title"
            eyebrow={h.resources.eyebrow}
            eyebrowTone="gold"
            title={h.resources.title}
            lead={h.resources.lead}
            align="center"
          />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {h.resources.items.map((item) => {
              const target = resourceTargets[item.key];
              return (
                <li key={item.key} className={cn(!target.mobile && "hidden sm:block")}>
                  <Link
                    href={href(locale, target.path)}
                    className="flex h-full flex-col gap-3 rounded-card-sm border border-line bg-white p-4 shadow-sh1 transition-shadow hover:shadow-sh2 sm:flex-row sm:items-center"
                  >
                    <IconTile name={target.icon} size="sm" />
                    <span>
                      <span className="block font-heading text-sm font-bold text-primary">{item.title}</span>
                      <span className="mt-0.5 block text-xs text-muted">{item.text}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Opportunities in Germany */}
      <Section tone="navy" labelledBy="opportunities-title">
        <Container>
          <SectionHeading
            id="opportunities-title"
            eyebrow={h.opportunities.eyebrow}
            eyebrowTone="gold"
            title={h.opportunities.title}
            lead={h.opportunities.lead}
            tone="dark"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {h.opportunities.cards.map((card) => {
              const meta = opportunityMeta[card.key];
              return (
                <li key={card.key} className={cn(!meta.mobile && "hidden sm:block")}>
                  <OpportunityCard
                    tag={card.tag}
                    title={card.title}
                    text={card.text}
                    tone={meta.tone}
                    href={`${href(locale, routes.guide)}${meta.anchor}`}
                    className="h-full"
                  />
                </li>
              );
            })}
            <li className="flex min-h-[230px] flex-col items-center justify-center gap-4 rounded-card bg-[linear-gradient(180deg,#16315f_0%,#0b1a3a_100%)] p-6 text-center">
              <p className="font-heading text-xl font-bold text-white">{h.opportunities.exploreTitle}</p>
              <ButtonLink href={href(locale, routes.guide)}>{h.opportunities.exploreCta}</ButtonLink>
            </li>
          </ul>
        </Container>
      </Section>

      {/* Latest articles */}
      <Section labelledBy="news-title">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading id="news-title" eyebrow={h.news.eyebrow} title={h.news.title} />
            <ButtonLink href={href(locale, routes.news)} variant="secondary" size="sm">
              {h.news.all}
            </ButtonLink>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <li key={article.slug}>
                <ArticleCard
                  article={article}
                  href={href(locale, `${routes.news}/${article.slug}`)}
                  categoryLabel={t.news.categories[article.category]}
                  minRead={t.common.minRead}
                  readLabel={t.common.readArticle}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Contact CTA */}
      <section aria-label={h.cta.title} className="pb-14 lg:pb-[84px]">
        <Container>
          <CtaBanner
            title={h.cta.title}
            lead={h.cta.lead}
            align="left"
            details={
              <ul className="mt-6 flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:gap-8">
                <li className="flex items-center gap-2">
                  <Mail aria-hidden="true" className="size-4 text-gold" />
                  <a href={mailtoHref()} className="break-all hover:underline">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone aria-hidden="true" className="size-4 text-gold" />
                  <a href={telHref} className="hover:underline">
                    {site.phone.display}
                  </a>
                </li>
              </ul>
            }
          >
            <ButtonLink href={href(locale, routes.contact)}>{h.cta.primary}</ButtonLink>
            <ButtonLink href={whatsappHref(t.common.whatsappMessage)} external newTabLabel={t.common.newTab} variant="outline-light">
              <WhatsAppIcon className="size-5" />
              {h.cta.secondary}
            </ButtonLink>
          </CtaBanner>
        </Container>
      </section>

      {/* Find us */}
      <Section labelledBy="find-us-title" className="pt-0 lg:pt-0">
        <Container>
          <SectionHeading id="find-us-title" eyebrow={t.common.location.eyebrow} title={t.common.location.title} />
          <div className="mt-8">
            <LocationCard t={t.common} />
          </div>
        </Container>
      </Section>
    </>
  );
}
