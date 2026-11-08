import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/content/dictionaries";
import { href, routes } from "@/i18n/paths";
import { site } from "@/content/site";
import { mailtoHref, telHref } from "@/lib/links";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

/** The custom 404 design: simplified header, "404" mark, actions and quick links. */
export function NotFoundView({ locale, t }: { locale: Locale; t: Dictionary }) {
  const nf = t.notFound;
  const links = [
    { label: t.common.nav.courses, path: routes.courses },
    { label: t.common.nav.resources, path: routes.resources },
    { label: t.common.nav.guide, path: routes.guide },
    { label: t.common.nav.studentLife, path: routes.studentLife },
    { label: t.common.nav.news, path: routes.news },
  ];

  return (
    <>
      <header className="border-b border-line bg-white">
        <Container className="flex h-[72px] items-center justify-between gap-4">
          <Link href={href(locale)} aria-label={t.common.homeLinkLabel} className="rounded-md">
            <Logo subtitle={t.common.logoSubtitle} subtitleShort={t.common.logoSubtitleShort} />
          </Link>
          <ButtonLink href={href(locale)} variant="secondary" size="sm">
            {nf.back}
          </ButtonLink>
        </Container>
      </header>
      <main
        id="main"
        tabIndex={-1}
        className="flex flex-1 items-start bg-[radial-gradient(60%_50%_at_50%_0%,#eef2fa_0%,transparent_70%)] focus:outline-none"
      >
        <Container className="py-16 text-center sm:py-24">
          <p aria-hidden="true" className="font-heading text-[5.5rem] leading-none font-extrabold tracking-tight text-primary sm:text-[7rem]">
            4<span className="text-gold">0</span>4
          </p>
          <p lang={nf.subtitleLang} className="mt-2 font-heading text-sm font-bold text-muted">
            {nf.subtitle}
          </p>
          <h1 className="mt-8 text-[1.75rem] font-bold sm:text-[2rem]">{nf.title}</h1>
          <p className="mx-auto mt-4 max-w-[460px] text-muted">{nf.body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={href(locale)}>{nf.home}</ButtonLink>
            <ButtonLink href={href(locale, routes.contact)} variant="secondary">
              {nf.contact}
            </ButtonLink>
          </div>
          <nav aria-label={nf.linksLabel} className="mt-10">
            <ul className="flex flex-wrap justify-center gap-2.5">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={href(locale, link.path)}
                    className="inline-flex min-h-10 items-center rounded-full border border-line bg-soft px-4 font-heading text-sm font-bold text-primary hover:bg-primary-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-8 text-sm text-muted">
            {nf.stuckBefore}{" "}
            <a href={mailtoHref()} className="font-medium text-primary-600 hover:underline">
              {site.email}
            </a>{" "}
            {nf.stuckMiddle}{" "}
            <a href={telHref} className="font-medium text-primary-600 hover:underline">
              {site.phone.display}
            </a>
            .
          </p>
        </Container>
      </main>
    </>
  );
}
