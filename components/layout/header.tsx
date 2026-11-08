import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/i18n/config";
import { href, routes } from "@/i18n/paths";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { TopBar } from "./top-bar";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { mainNav } from "./nav-config";

/** Site header: contact strip, then the sticky main bar with navigation. */
export function Header({ t, locale }: { t: Dictionary["common"]; locale: Locale }) {
  const items = mainNav(t);
  return (
    <>
      <TopBar t={t} locale={locale} />
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <Container className="flex h-[72px] items-center justify-between gap-4">
          <Link href={href(locale)} aria-label={t.homeLinkLabel} className="shrink-0 rounded-md">
            <Logo subtitle={t.logoSubtitle} subtitleShort={t.logoSubtitleShort} />
          </Link>
          <div className="flex items-center gap-3">
            <NavLinks items={items} locale={locale} label={t.mainNavLabel} />
            <div className="hidden sm:block">
              <ButtonLink href={href(locale, routes.contact)} size="sm">
                {t.contactCta}
              </ButtonLink>
            </div>
            <MobileMenu items={items} locale={locale} t={t} />
          </div>
        </Container>
      </header>
    </>
  );
}
