import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { learning } from "@/content/learning";
import { pageMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { ResourceExplorer } from "@/components/interactive/resource-explorer";
import { Quiz } from "@/components/interactive/quiz";
import { Flashcards } from "@/components/interactive/flashcards";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].resources;
  return pageMetadata({ locale, path: routes.resources, title: t.meta.title, description: t.meta.description });
}

export default async function ResourcesPage() {
  const { locale, t } = await getDictionary();
  const r = t.resources;
  const content = learning[locale];
  const practiceQuizzes = content.quizzes.filter((q) => ["vocabulary", "articles", "phrases"].includes(q.id));

  return (
    <>
      <ResourceExplorer
        hero={r.hero}
        crumbLabel={t.common.breadcrumbLabel}
        crumbs={[{ label: t.common.home, href: href(locale) }, { label: t.common.nav.resources }]}
        topics={content.topics.map((topic) => ({
          slug: topic.slug,
          icon: topic.icon,
          title: topic.title,
          summary: topic.summary,
          keywords: topic.keywords,
          href: href(locale, `${routes.resources}/${topic.slug}`),
        }))}
        practice={content.practice.map((item) => ({ ...item, href: href(locale, item.href) }))}
        practiceHref="#practice"
        labels={{
          categoriesEyebrow: r.categories.eyebrow,
          categoriesTitle: r.categories.title,
          open: r.categories.open,
          practiceEyebrow: r.practice.eyebrow,
          practiceTitle: r.practice.title,
          tryLink: r.practice.tryLink,
          results: r.search.results,
          noResultsTitle: r.search.noResultsTitle,
          noResultsBody: r.search.noResultsBody,
          clear: r.search.clear,
        }}
      />

      <Section id="practice" labelledBy="practice-title" className="scroll-mt-24">
        <Container>
          <SectionHeading id="practice-title" eyebrow={r.tools.eyebrow} title={r.tools.title} lead={r.tools.lead} />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
            <section id="quizzes" aria-labelledby="quiz-heading" className="scroll-mt-28 rounded-card border border-line bg-white p-5 shadow-sh1 sm:p-7">
              <p className="eyebrow">{r.tools.eyebrow}</p>
              <h3 id="quiz-heading" className="mt-2 text-xl font-bold">{r.tools.quizHeading}</h3>
              <p className="mt-1.5 mb-5 text-sm text-muted">{r.tools.quizIntro}</p>
              <Quiz sets={practiceQuizzes} ui={r.quizUi} chooseLabel={r.tools.chooseQuiz} />
            </section>
            <section id="flashcards" aria-labelledby="flash-heading" className="scroll-mt-28 rounded-card border border-line bg-white p-5 shadow-sh1 sm:p-7">
              <p className="eyebrow">{r.tools.eyebrow}</p>
              <h3 id="flash-heading" className="mt-2 text-xl font-bold">{r.tools.flashHeading}</h3>
              <p className="mt-1.5 mb-5 text-sm text-muted">{r.tools.flashIntro}</p>
              <Flashcards decks={content.decks} ui={r.flashUi} chooseLabel={r.tools.chooseDeck} />
            </section>
          </div>
        </Container>
      </Section>

      <section aria-label={r.cta.title} className="pb-14 lg:pb-[84px]">
        <Container>
          <CtaBanner title={r.cta.title} lead={r.cta.lead}>
            <ButtonLink href="#quizzes">{r.cta.primary}</ButtonLink>
            <ButtonLink href="#flashcards" variant="outline-light">
              {r.cta.secondary}
            </ButtonLink>
          </CtaBanner>
        </Container>
      </section>
    </>
  );
}
