import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { mailtoHref, mapsSearchHref, telHref } from "@/lib/links";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/i18n/config";
import { CopyButton } from "@/components/ui/copy-button";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "./language-switcher";

/** Navy contact strip above the header — shown on every breakpoint. */
export function TopBar({ t, locale }: { t: Dictionary["common"]; locale: Locale }) {
  return (
    <div className="bg-primary text-[13px] text-white/85">
      <Container className="flex items-start justify-between gap-4 py-2.5 sm:items-center">
        <ul className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1">
          <li className="flex min-w-0 items-center gap-2">
            <Mail aria-hidden="true" className="size-3.5 shrink-0 text-gold" />
            <a href={mailtoHref()} className="truncate hover:text-white hover:underline">
              <span className="sr-only">{t.labels.email}: </span>
              {site.email}
            </a>
            <CopyButton
              value={site.email}
              label={t.copyEmail}
              copiedMessage={t.emailCopied}
              failedMessage={t.copyFailed}
              className="hidden bg-white/10 text-white/80 hover:bg-white/20 hover:text-white sm:inline-flex"
            />
          </li>
          <li className="flex items-center gap-2">
            <Phone aria-hidden="true" className="size-3.5 shrink-0 text-gold" />
            <a href={telHref} className="hover:text-white hover:underline">
              <span className="sr-only">{t.labels.phone}: </span>
              {site.phone.display}
            </a>
          </li>
          <li className="flex min-w-0 items-start gap-2 sm:items-center">
            <MapPin aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-gold sm:mt-0" />
            <a href={mapsSearchHref} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
              <span className="sr-only">{t.labels.address}: </span>
              {site.address.short}
              <span className="sr-only"> {t.newTab}</span>
            </a>
          </li>
        </ul>
        <LanguageSwitcher locale={locale} label={t.languageLabel} className="shrink-0" />
      </Container>
    </div>
  );
}
