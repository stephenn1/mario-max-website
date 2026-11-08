import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { levels } from "@/content/courses";
import { pageMetadata } from "@/lib/metadata";
import { whatsappHref } from "@/lib/links";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Notice } from "@/components/ui/bits";
import { CourseExplorer } from "@/components/interactive/course-explorer";
import { Accordion } from "@/components/interactive/accordion";
import { WhatsAppIcon } from "@/components/icons/brand";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].courses;
  return pageMetadata({ locale, path: routes.courses, title: t.meta.title, description: t.meta.description });
}

export default async function CoursesPage() {
  const { locale, t } = await getDictionary();
  const c = t.courses;
  const courseData = levels.map((level) => ({ code: level.code, group: level.group, ...c.levels[level.code] }));

  return (
    <>
      <PageHero
        title={c.hero.title}
        lead={c.hero.lead}
        crumbLabel={t.common.breadcrumbLabel}
        crumbs={[{ label: t.common.home, href: href(locale) }, { label: t.common.nav.courses }]}
      />

      <Section>
        <Container>
          <Notice icon="cap" className="mb-8">
            <strong className="font-semibold text-primary">{c.notice.label}</strong> <strong className="font-semibold">{c.notice.strongA}</strong>{" "}
            {c.notice.and} <strong className="font-semibold">{c.notice.strongB}</strong>. {c.notice.rest}
          </Notice>
          <CourseExplorer
            courses={courseData}
            filterLabels={c.filters}
            cardLabels={c.labels}
            contactHref={href(locale, routes.contact)}
          />
        </Container>
      </Section>

      <Section tone="soft" labelledBy="comparison-title">
        <Container>
          <SectionHeading id="comparison-title" eyebrow={c.comparison.eyebrow} title={c.comparison.title} />
          <div className="mt-8 overflow-x-auto rounded-card border border-line bg-white shadow-sh1">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">{c.comparison.caption}</caption>
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col" className="w-24 px-5 py-4 font-heading font-bold">{c.comparison.headers.level}</th>
                  <th scope="col" className="px-5 py-4 font-heading font-bold">{c.comparison.headers.can}</th>
                  <th scope="col" className="px-5 py-4 font-heading font-bold">{c.comparison.headers.goal}</th>
                </tr>
              </thead>
              <tbody>
                {levels.map((level) => (
                  <tr key={level.code} className="border-t border-line even:bg-soft">
                    <th scope="row" className="px-5 py-3.5 font-heading font-bold text-primary">{level.code}</th>
                    <td className="px-5 py-3.5 text-ink/85">{c.comparison.rows[level.code].can}</td>
                    <td className="px-5 py-3.5 text-ink/85">{c.comparison.rows[level.code].goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section labelledBy="faq-title">
        <Container className="max-w-[860px]">
          <SectionHeading id="faq-title" eyebrow={c.faq.eyebrow} title={c.faq.title} />
          <div className="mt-8">
            <Accordion items={c.faq.items} />
          </div>
        </Container>
      </Section>

      <section aria-label={c.cta.title} className="pb-14 lg:pb-[84px]">
        <Container>
          <CtaBanner title={c.cta.title} lead={c.cta.lead}>
            <ButtonLink href={href(locale, routes.contact)}>{c.cta.primary}</ButtonLink>
            <ButtonLink href={whatsappHref(t.common.whatsappMessage)} external newTabLabel={t.common.newTab} variant="outline-light">
              <WhatsAppIcon className="size-5" />
              {c.cta.secondary}
            </ButtonLink>
          </CtaBanner>
        </Container>
      </section>
    </>
  );
}
