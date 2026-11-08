"use client";

import { Link2, Mail } from "lucide-react";
import { FacebookIcon, WhatsAppIcon, XIcon } from "@/components/icons/brand";
import { useToast } from "@/components/ui/toast";
import { format } from "@/content/dictionaries";

/** Share links built from the current page URL at click time (no third-party scripts). */
export function ShareButtons({
  title,
  labels,
}: {
  title: string;
  labels: { share: string; shareOn: string; shareEmail: string; copyLink: string; linkCopied: string };
}) {
  const { show } = useToast();

  function open(build: (url: string) => string) {
    const url = window.location.href;
    window.open(build(url), "_blank", "noopener,noreferrer");
  }

  const networks = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      build: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "X",
      icon: XIcon,
      build: (url: string) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      build: (url: string) => `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
  ];

  const buttonClass =
    "inline-flex size-10 items-center justify-center rounded-btn border border-line bg-white text-primary hover:bg-primary-50";

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="mr-1 font-heading text-sm font-bold text-primary">{labels.share}</span>
      {networks.map((network) => {
        const NetworkIcon = network.icon;
        return (
          <button key={network.name} type="button" onClick={() => open(network.build)} className={buttonClass}>
            <NetworkIcon className="size-4" />
            <span className="sr-only">{format(labels.shareOn, { network: network.name })}</span>
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => {
          window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(window.location.href)}`;
        }}
        className={buttonClass}
      >
        <Mail aria-hidden="true" className="size-4" />
        <span className="sr-only">{labels.shareEmail}</span>
      </button>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(window.location.href);
            show(labels.linkCopied);
          } catch {
            /* Clipboard unavailable — the address bar remains available. */
          }
        }}
        className={buttonClass}
      >
        <Link2 aria-hidden="true" className="size-4" />
        <span className="sr-only">{labels.copyLink}</span>
      </button>
    </div>
  );
}
