import Link from "next/link";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/i18n/config";
import { href, routes } from "@/i18n/paths";
import { mailtoHref, mapsSearchHref, telHref } from "@/lib/links";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon } from "@/components/icons/brand";
import { LanguageSwitcher } from "./language-switcher";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  x: XIcon,
} as const;

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-[13px] font-extrabold tracking-[0.12em] text-white uppercase">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href: to, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={to} className="text-white/70 transition-colors hover:text-white hover:underline">
        {children}
      </Link>
    </li>
  );
}

export function Footer({ t, locale }: { t: Dictionary["common"]; locale: Locale }) {
  // Fixed at build time (a live date would make every page dynamic). Update annually.
  const year = 2026;
  const social = site.social.filter((s) => s.network in socialIcons);
  return (
    <footer className="bg-primary text-white">
      <Container className="py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_3.1fr]">
          <div>
            <Link href={href(locale)} aria-label={t.homeLinkLabel} className="inline-flex rounded-md">
              <Logo subtitle={t.logoSubtitle} tone="dark" />
            </Link>
            <p className="mt-5 max-w-[320px] text-sm leading-relaxed text-white/70">{t.footer.tagline}</p>
            <address className="mt-5 space-y-2 text-sm not-italic">
              <p>
                <a href={mailtoHref()} className="text-white hover:underline">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={telHref} className="text-white hover:underline">
                  {site.phone.display}
                </a>
              </p>
              <p>
                <a href={mapsSearchHref} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  {site.address.street}, {site.address.locality}, {site.address.city}, {site.address.region}
                  <span className="sr-only"> {t.newTab}</span>
                </a>
              </p>
              <p className="text-white/60">{t.hours.short}</p>
            </address>
            {social.length > 0 ? (
              <ul className="mt-5 flex gap-2">
                {social.map((s) => {
                  const SocialIcon = socialIcons[s.network as keyof typeof socialIcons];
                  return (
                    <li key={s.network}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-9 items-center justify-center rounded-btn bg-white/10 text-white hover:bg-white/20"
                      >
                        <SocialIcon className="size-4" />
                        <span className="sr-only">
                          {s.network} {t.newTab}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          <nav aria-label={t.footer.navLabel} className="grid gap-10 sm:grid-cols-3">
            <FooterColumn title={t.footer.explore}>
              <FooterLink href={href(locale)}>{t.nav.home}</FooterLink>
              <FooterLink href={href(locale, routes.about)}>{t.nav.about}</FooterLink>
              <FooterLink href={href(locale, routes.studentLife)}>{t.nav.studentLife}</FooterLink>
              <FooterLink href={href(locale, routes.news)}>{t.nav.news}</FooterLink>
              <FooterLink href={href(locale, routes.contact)}>{t.nav.contact}</FooterLink>
            </FooterColumn>
            <FooterColumn title={t.footer.courses}>
              {t.footer.courseLinks.map((link) => (
                <FooterLink key={link.anchor} href={`${href(locale, routes.courses)}${link.anchor}`}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title={t.footer.resources}>
              <FooterLink href={href(locale, `${routes.resources}/vocabulary`)}>{t.footer.resourceLinks.vocabulary}</FooterLink>
              <FooterLink href={href(locale, `${routes.resources}/pronunciation`)}>{t.footer.resourceLinks.pronunciation}</FooterLink>
              <FooterLink href={`${href(locale, routes.resources)}#practice`}>{t.footer.resourceLinks.practice}</FooterLink>
              <FooterLink href={href(locale, routes.guide)}>{t.footer.resourceLinks.guide}</FooterLink>
              <FooterLink href={`${href(locale, routes.guide)}#study`}>{t.footer.resourceLinks.study}</FooterLink>
            </FooterColumn>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} {t.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <Link href={href(locale, routes.privacy)} className="text-white/80 hover:text-white hover:underline">
              {t.footer.privacy}
            </Link>
            <LanguageSwitcher locale={locale} label={t.languageLabel} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
