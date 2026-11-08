import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/i18n/server";
import { dictionaries } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { site } from "@/content/site";
import { mailtoHref, telHref } from "@/lib/links";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale].privacy;
  return pageMetadata({ locale, path: routes.privacy, title: t.meta.title, description: t.meta.description });
}

export default async function PrivacyPage() {
  const { locale, t } = await getDictionary();
  const p = t.privacy;

  return (
    <>
      <PageHero
        title={p.hero.title}
        lead={p.hero.lead}
        crumbLabel={t.common.breadcrumbLabel}
        crumbs={[{ label: t.common.home, href: href(locale) }, { label: t.common.footer.privacy }]}
      />
      <Container className="max-w-[860px] py-12 lg:py-16">
        <p className="text-[13px] text-muted">
          {p.applies} {p.updated}
        </p>
        <div className="prose-content mt-6">
          {p.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-[15px] text-ink/85">
                  {paragraph}
                </p>
              ))}
              {section.list.length > 0 ? (
                <ul className="mt-3 text-[15px] text-ink/85">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.after.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-[15px] text-ink/85">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-card border border-line bg-soft p-6 sm:p-7">
          <h2 className="text-lg font-bold">{p.box.title}</h2>
          <p className="mt-2 text-sm text-muted">
            {p.box.emailBefore}{" "}
            <a href={mailtoHref()} className="font-medium text-primary-600 hover:underline">
              {site.email}
            </a>{" "}
            {p.box.callBefore}{" "}
            <a href={telHref} className="font-medium text-primary-600 hover:underline">
              {site.phone.display}
            </a>
            .
          </p>
          <ButtonLink href={href(locale, routes.contact)} variant="secondary" size="sm" className="mt-5">
            {p.box.cta}
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
