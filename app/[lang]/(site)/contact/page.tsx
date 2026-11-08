import type { Metadata } from "next";
import { Clock, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { site } from "@/content/site";
import { directionsHref, mailtoHref, mapsSearchHref, telHref, whatsappHref } from "@/lib/links";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, schoolJsonLd } from "@/lib/json-ld";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { MapPanel } from "@/components/sections/location";
import { ContactForm } from "@/components/interactive/contact-form";
import { Accordion } from "@/components/interactive/accordion";
import { WhatsAppIcon } from "@/components/icons/brand";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].contact;
  return pageMetadata({ locale, path: routes.contact, title: t.meta.title, description: t.meta.description });
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-card border border-line bg-white p-5 shadow-sh1">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-card-sm bg-primary-50 text-primary-600">{icon}</span>
      <div className="min-w-0 flex-1 text-sm">
        <h2 className="font-heading text-[15px] font-bold text-primary">{title}</h2>
        <div className="mt-1 text-muted">{children}</div>
      </div>
    </div>
  );
}

export default async function ContactPage() {
  const { locale, t } = await getDictionary();
  const c = t.contact;

  return (
    <>
      <JsonLd data={schoolJsonLd(c.meta.description)} />
      <PageHero
        title={c.hero.title}
        lead={c.hero.lead}
        crumbLabel={t.common.breadcrumbLabel}
        crumbs={[{ label: t.common.home, href: href(locale) }, { label: t.common.nav.contact }]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="space-y-4">
            <InfoCard icon={<Mail aria-hidden="true" className="size-5" />} title={t.common.labels.email}>
              <span className="flex items-center gap-2">
                <a href={mailtoHref()} className="break-all text-primary-600 hover:underline">
                  {site.email}
                </a>
                <CopyButton
                  value={site.email}
                  label={t.common.copyEmail}
                  copiedMessage={t.common.emailCopied}
                  failedMessage={t.common.copyFailed}
                  className="bg-primary-50 text-primary-600 hover:bg-primary-50/70"
                />
              </span>
            </InfoCard>
            <InfoCard icon={<Phone aria-hidden="true" className="size-5" />} title={t.common.labels.phoneWhatsapp}>
              <a href={telHref} className="text-primary-600 hover:underline">
                {site.phone.display}
              </a>
            </InfoCard>
            <InfoCard icon={<MapPin aria-hidden="true" className="size-5" />} title={t.common.labels.address}>
              <address className="not-italic">{site.address.full}</address>
            </InfoCard>
            <InfoCard icon={<Clock aria-hidden="true" className="size-5" />} title={t.common.labels.hours}>
              <p className="flex flex-wrap justify-between gap-x-4">
                <span>{t.common.hours.days}</span>
                <span className="font-semibold text-primary">{t.common.hours.time}</span>
              </p>
            </InfoCard>
            <ButtonLink href={whatsappHref(t.common.whatsappMessage)} external newTabLabel={t.common.newTab} className="w-full">
              <WhatsAppIcon className="size-5" />
              {c.whatsappButton}
            </ButtonLink>
          </div>

          <div id="message-form" className="scroll-mt-28 rounded-card border border-line bg-white p-6 shadow-sh2 sm:p-8">
            <h2 className="text-2xl font-bold">{c.form.title}</h2>
            <p className="mt-1.5 mb-6 text-sm text-muted">{c.form.intro}</p>
            <ContactForm text={c.form} privacyHref={href(locale, routes.privacy)} />
          </div>
        </Container>
      </Section>

      <Section labelledBy="visit-title" className="pt-0 lg:pt-0">
        <Container>
          <SectionHeading id="visit-title" eyebrow={c.map.eyebrow} title={c.map.title} />
          <div className="mt-8 overflow-hidden rounded-card border border-line shadow-sh1">
            <MapPanel t={t.common} wide className="aspect-[16/10] min-h-[260px] sm:aspect-[21/8]" />
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={mapsSearchHref} external newTabLabel={t.common.newTab} variant="secondary">
              <ExternalLink aria-hidden="true" className="size-4" />
              {t.common.location.openMaps}
            </ButtonLink>
            <ButtonLink href={directionsHref} external newTabLabel={t.common.newTab} variant="secondary">
              <Navigation aria-hidden="true" className="size-4" />
              {t.common.location.directions}
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section tone="soft" labelledBy="quick-answers-title">
        <Container className="max-w-[860px]">
          <SectionHeading id="quick-answers-title" eyebrow={c.faq.eyebrow} title={c.faq.title} />
          <div className="mt-8">
            <Accordion items={c.faq.items} />
          </div>
        </Container>
      </Section>
    </>
  );
}
