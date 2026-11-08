import type { Metadata } from "next";
import { ExternalLink, Link2 } from "lucide-react";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { officialLinks, type OfficialLinkKey } from "@/content/official-links";
import { pageMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { IconTile, Notice } from "@/components/ui/bits";
import { SkylineDecor } from "@/components/illustrations/scenes";
import { OpportunityCard, type OpportunityTone } from "@/components/sections/opportunity-card";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].guide;
  return pageMetadata({ locale, path: routes.guide, title: t.meta.title, description: t.meta.description });
}

export default async function GermanyGuidePage() {
  const { locale, t } = await getDictionary();
  const g = t.guide;

  return (
    <>
      <PageHero
        title={g.hero.title}
        lead={g.hero.lead}
        crumbLabel={t.common.breadcrumbLabel}
        crumbs={[{ label: t.common.home, href: href(locale) }, { label: t.common.nav.guide }]}
        decoration={<SkylineDecor />}
      />

      <Section>
        <Container>
          <Notice className="mb-8">
            <strong className="font-semibold text-primary">{g.notice.label}</strong> {g.notice.text}
          </Notice>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {g.topics.map((topic) => (
              <li key={topic.id}>
                <OpportunityCard
                  id={topic.id}
                  tag={topic.tag}
                  title={topic.title}
                  text={topic.text}
                  points={topic.points}
                  tone={topic.tone as OpportunityTone}
                  className="h-full min-h-[260px]"
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="soft">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="cost-title" eyebrow={g.cost.eyebrow} title={g.cost.title} lead={g.cost.lead} />
            <ul className="mt-6 space-y-3">
              {g.cost.items.map((item) => (
                <li key={item.title} className="flex items-center gap-4 rounded-card border border-line bg-white p-4 shadow-sh1">
                  <IconTile name={item.icon} size="sm" />
                  <div>
                    <h3 className="font-heading text-[15px] font-bold">{item.title}</h3>
                    <p className="mt-0.5 text-[13px] text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={officialLinks.study[locale]}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:underline"
            >
              {g.cost.source}
              <ExternalLink aria-hidden="true" className="size-3.5" />
              <span className="sr-only">{t.common.newTab}</span>
            </a>
          </div>
          <div>
            <SectionHeading
              id="references-title"
              eyebrow={g.references.eyebrow}
              eyebrowTone="gold"
              title={g.references.title}
              lead={g.references.lead}
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {g.references.links.map((link) => (
                <li key={link.key}>
                  <a
                    href={officialLinks[link.key as OfficialLinkKey][locale]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full items-center gap-3.5 rounded-card border border-line bg-white p-4 shadow-sh1 transition-shadow hover:shadow-sh2"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-card-sm bg-primary-50 text-primary-600">
                      <Link2 aria-hidden="true" className="size-4" />
                    </span>
                    <span>
                      <span className="block font-heading text-[15px] font-bold text-primary">{link.title}</span>
                      <span className="mt-0.5 block text-[13px] text-muted">{link.text}</span>
                      <span className="sr-only"> {t.common.newTab}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <section aria-label={g.cta.title} className="py-14 lg:py-[84px]">
        <Container>
          <CtaBanner title={g.cta.title} lead={g.cta.lead}>
            <ButtonLink href={href(locale, routes.courses)}>{g.cta.primary}</ButtonLink>
            <ButtonLink href={href(locale, routes.contact)} variant="outline-light">
              {g.cta.secondary}
            </ButtonLink>
          </CtaBanner>
        </Container>
      </section>
    </>
  );
}
