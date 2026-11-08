import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { galleryPhotos } from "@/content/media";
import { pageMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { IconTile } from "@/components/ui/bits";
import { SpeechScene } from "@/components/illustrations/scenes";
import { Gallery, type GalleryItem } from "@/components/interactive/gallery";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].studentLife;
  return pageMetadata({ locale, path: routes.studentLife, title: t.meta.title, description: t.meta.description });
}

export default async function StudentLifePage() {
  const { locale, t } = await getDictionary();
  const s = t.studentLife;
  const g = s.gallery.items;

  // Designed illustrations stand in until the school supplies genuine photographs.
  const illustrations: GalleryItem[] = [
    { kind: "illustration", id: "greetings", caption: g.greetings, word: "Hallo!", icon: "messages", tone: "navy" },
    { kind: "illustration", id: "articles", caption: g.articles, word: "der · die · das", icon: "fileText", tone: "red" },
    { kind: "illustration", id: "levels", caption: g.levels, word: "A1 → C2", icon: "chart", tone: "gold" },
    { kind: "illustration", id: "conversation", caption: g.conversation, word: "Wie geht's?", icon: "message", tone: "green" },
    { kind: "illustration", id: "polite", caption: g.polite, word: "Danke!", icon: "users", tone: "blue" },
    { kind: "illustration", id: "exam", caption: g.exam, word: "Prüfung", icon: "award", tone: "ink" },
    { kind: "illustration", id: "reading", caption: g.reading, word: "Lesen", icon: "book", tone: "gold" },
    { kind: "illustration", id: "culture", caption: g.culture, word: "Kultur", icon: "globe", tone: "navy" },
  ];
  const items: GalleryItem[] =
    galleryPhotos.length > 0
      ? galleryPhotos.map((photo, i) => ({
          kind: "photo",
          id: `photo-${i}`,
          src: photo.src,
          width: photo.width,
          height: photo.height,
          alt: photo.alt[locale],
          caption: photo.caption[locale],
        }))
      : illustrations;

  return (
    <>
      <PageHero
        title={s.hero.title}
        lead={s.hero.lead}
        crumbLabel={t.common.breadcrumbLabel}
        crumbs={[{ label: t.common.home, href: href(locale) }, { label: t.common.nav.studentLife }]}
      />

      <Section labelledBy="experiences-title">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading id="experiences-title" eyebrow={s.experiences.eyebrow} title={s.experiences.title} />
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">{s.experiences.p1}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.experiences.p2}</p>
          </div>
          <div className="overflow-hidden rounded-card border border-line shadow-sh1">
            <SpeechScene one={s.experiences.bubbleOne} two={s.experiences.bubbleTwo} className="block aspect-[420/240] w-full" />
          </div>
        </Container>
      </Section>

      <Section tone="soft" labelledBy="classroom-title">
        <Container>
          <SectionHeading id="classroom-title" eyebrow={s.classroom.eyebrow} title={s.classroom.title} lead={s.classroom.lead} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.classroom.items.map((item) => (
              <li key={item.title} className="flex gap-4 rounded-card border border-line bg-white p-5 shadow-sh1 sm:block">
                <IconTile name={item.icon} />
                <div className="sm:mt-4">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="beyond-title">
        <Container>
          <SectionHeading id="beyond-title" eyebrow={s.beyond.eyebrow} title={s.beyond.title} lead={s.beyond.lead} />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {s.beyond.items.map((item) => (
              <li key={item.title} className="flex items-center gap-4 rounded-card border border-line bg-white p-5 shadow-sh1">
                <IconTile name={item.icon} />
                <div>
                  <h3 className="font-heading text-base font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <ButtonLink href={href(locale, routes.resources)} variant="secondary" className="mt-6">
            {s.beyond.resourcesLink}
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        </Container>
      </Section>

      <Section tone="soft" labelledBy="gallery-title">
        <Container>
          <SectionHeading id="gallery-title" eyebrow={s.gallery.eyebrow} eyebrowTone="gold" title={s.gallery.title} lead={s.gallery.lead} />
          <div className="mt-10">
            <Gallery items={items} labels={s.gallery} />
          </div>
        </Container>
      </Section>

      <section aria-label={s.cta.title} className="py-14 lg:py-[84px]">
        <Container>
          <CtaBanner title={s.cta.title} lead={s.cta.lead}>
            <ButtonLink href={href(locale, routes.contact)}>{s.cta.primary}</ButtonLink>
            <ButtonLink href={href(locale, routes.courses)} variant="outline-light">
              {s.cta.secondary}
            </ButtonLink>
          </CtaBanner>
        </Container>
      </section>
    </>
  );
}
