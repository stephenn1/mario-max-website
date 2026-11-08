"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { href, isActivePath, routes } from "@/i18n/paths";
import { site } from "@/content/site";
import { mailtoHref, mapsSearchHref, telHref, whatsappHref } from "@/lib/links";
import type { Dictionary } from "@/content/dictionaries";
import { cn } from "@/lib/cn";
import { buttonClasses } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { WhatsAppIcon } from "@/components/icons/brand";
import { LanguageSwitcher } from "./language-switcher";
import type { NavItem } from "./nav-config";

/**
 * Mobile/tablet navigation drawer built on the native <dialog> element,
 * which provides focus containment, Escape-to-close and an inert background.
 */
export function MobileMenu({ items, locale, t }: { items: NavItem[]; locale: Locale; t: Dictionary["common"] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="nav:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex size-11 items-center justify-center rounded-card-sm border border-line text-primary hover:bg-primary-50"
      >
        <Menu aria-hidden="true" className="size-6" />
        <span className="sr-only">{t.openMenu}</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={t.menuTitle}
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-[min(92vw,400px)] max-w-none overflow-y-auto bg-white p-0 shadow-sh3 backdrop:bg-primary/55 open:animate-[drawer-in_.22s_ease-out] motion-reduce:open:animate-none"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Link href={href(locale)} onClick={close} aria-label={t.homeLinkLabel}>
              <Logo subtitle={t.logoSubtitle} />
            </Link>
            <button
              type="button"
              onClick={close}
              className="inline-flex size-11 items-center justify-center rounded-card-sm border border-line text-primary hover:bg-primary-50"
            >
              <X aria-hidden="true" className="size-6" />
              <span className="sr-only">{t.closeMenu}</span>
            </button>
          </div>

          <nav aria-label={t.mainNavLabel} className="px-3 py-3">
            <ul>
              {[...items, { label: t.nav.contact, path: routes.contact }].map((item) => {
                const active = isActivePath(pathname, item.path);
                return (
                  <li key={item.path}>
                    <Link
                      href={href(locale, item.path)}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-12 items-center rounded-card-sm px-3 font-heading text-[17px] font-bold transition-colors",
                        active ? "bg-primary-50 text-accent" : "text-primary hover:bg-soft",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto space-y-5 border-t border-line bg-soft px-5 py-6">
            <div className="flex flex-col gap-3">
              <Link href={href(locale, routes.contact)} onClick={close} className={buttonClasses("primary", "md", "w-full")}>
                {t.contactCta}
              </Link>
              <a
                href={whatsappHref(t.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses("secondary", "md", "w-full")}
              >
                <WhatsAppIcon className="size-5 text-[#1fa855]" />
                WhatsApp
                <span className="sr-only">{t.newTab}</span>
              </a>
            </div>

            <ul className="space-y-3 text-sm text-ink">
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary-600" />
                <a href={mailtoHref()} className="break-all hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary-600" />
                <a href={telHref} className="hover:underline">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary-600" />
                <a href={mapsSearchHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {site.address.full}
                  <span className="sr-only"> {t.newTab}</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary-600" />
                <span>{t.hours.short}</span>
              </li>
            </ul>

            <div className="flex items-center justify-between gap-3">
              <span className="font-heading text-sm font-bold text-primary">{t.languageLabel}</span>
              <LanguageSwitcher locale={locale} label={t.languageLabel} tone="light" onNavigate={close} />
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
