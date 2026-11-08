import type { Metadata } from "next";
import { Navigation } from "lucide-react";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { pageMetadata } from "@/lib/metadata";
import { directionsHref } from "@/lib/links";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { IconTile } from "@/components/ui/bits";
import { ClassroomScene, DesksScene } from "@/components/illustrations/scenes";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].about;
  return pageMetadata({ locale, path: routes.about, title: t.meta.title, description: t.meta.description });
}

export default async function AboutPage() {
  const { locale, t } = await getDictionary();
  const a = t.about;

  return (
    <>
      <PageHero
        title={a.hero.title}
        lead={a.hero.lead}
        crumbLabel={t.common.breadcrumbLabel}
        crumbs={[{ label: t.common.home, href: href(locale) }, { label: t.common.nav.about }]}
      />

      <Section labelledBy="story-title">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading id="story-title" eyebrow={a.story.eyebrow} title={a.story.title} />
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">{a.story.p1}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{a.story.p2}</p>
          </div>
          <div className="overflow-hidden rounded-card border border-line shadow-sh1">
            <ClassroomScene word="Willkommen" className="block aspect-[420/250] w-full" />
          </div>
        </Container>
      </Section>

      <Section tone="soft" className="lg:py-16">
        <Container>
          <ul className="grid gap-5 md:grid-cols-3">
            {a.values.map((value) => (
              <li key={value.title} className="rounded-card border border-line bg-white p-6 shadow-sh1">
                <IconTile name={value.icon} />
                <h2 className="mt-5 text-xl font-bold">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="approach-title">
        <Container>
          <SectionHeading id="approach-title" eyebrow={a.approach.eyebrow} title={a.approach.title} lead={a.approach.lead} />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {a.approach.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-card border border-line bg-white p-5 shadow-sh1 sm:block">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-card-sm bg-primary-50 font-heading text-sm font-bold text-primary-600">
                  {index + 1}
                </span>
                <div className="sm:mt-5">
                  <h3 className="text-base font-bold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="soft" labelledBy="teaching-title">
        <Container>
          <SectionHeading id="teaching-title" eyebrow={a.teaching.eyebrow} title={a.teaching.title} lead={a.teaching.lead} />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {a.teaching.cards.map((card) => (
              <li key={card.title} className="rounded-card border border-line bg-white p-6 shadow-sh1">
                <IconTile name={card.icon} />
                <h3 className="mt-5 text-lg font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading id="place-title" eyebrow={a.place.eyebrow} title={a.place.title} />
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{a.place.text}</p>
            <div className="mt-6 overflow-hidden rounded-card border border-line shadow-sh1">
              <DesksScene className="block aspect-[420/200] w-full" />
            </div>
            <ButtonLink href={directionsHref} external newTabLabel={t.common.newTab} variant="secondary" className="mt-5">
              <Navigation aria-hidden="true" className="size-4" />
              {a.place.cta}
            </ButtonLink>
          </div>
          <div>
            <SectionHeading id="focus-title" eyebrow={a.focus.eyebrow} title={a.focus.title} lead={a.focus.lead} />
            <ul className="mt-6 space-y-3">
              {a.focus.items.map((item) => (
                <li key={item.title} className="flex items-center gap-4 rounded-card-sm border border-line bg-soft p-4">
                  <IconTile name={item.icon} size="sm" className="bg-white" />
                  <div>
                    <h3 className="font-heading text-[15px] font-bold">{item.title}</h3>
                    <p className="mt-0.5 text-[13px] text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <section aria-label={a.cta.title} className="pb-14 lg:pb-[84px]">
        <Container>
          <CtaBanner title={a.cta.title} lead={a.cta.lead}>
            <ButtonLink href={href(locale, routes.contact)}>{a.cta.primary}</ButtonLink>
            <ButtonLink href={href(locale, routes.courses)} variant="outline-light">
              {a.cta.secondary}
            </ButtonLink>
          </CtaBanner>
        </Container>
      </section>
    </>
  );
}
