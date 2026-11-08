"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/links";
import { WhatsAppIcon } from "@/components/icons/brand";
import { cn } from "@/lib/cn";

/** Floating WhatsApp button (mobile/tablet, as in the design) and back-to-top button. */
export function FloatingActions({
  whatsappLabel,
  whatsappMessage,
  backToTopLabel,
  newTabLabel,
}: {
  whatsappLabel: string;
  whatsappMessage: string;
  backToTopLabel: string;
  newTabLabel: string;
}) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("main")?.focus({ preventScroll: true });
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={whatsappHref(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex size-[52px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-sh3 transition-transform hover:scale-105 lg:hidden"
      >
        <WhatsAppIcon className="size-7" />
        <span className="sr-only">
          {whatsappLabel} {newTabLabel}
        </span>
      </a>
      <button
        type="button"
        onClick={toTop}
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-btn bg-accent text-white shadow-sh3 transition-all hover:bg-accent-700",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <ArrowUp aria-hidden="true" className="size-5" />
        <span className="sr-only">{backToTopLabel}</span>
      </button>
    </div>
  );
}
