import { ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import { directionsHref, mailtoHref, mapsSearchHref, telHref } from "@/lib/links";
import { ButtonLink } from "@/components/ui/button";
import { MapArt } from "@/components/illustrations/scenes";
import { MapEmbed } from "@/components/interactive/map-embed";
import { cn } from "@/lib/cn";

/** Map panel: a click-to-load map when a verified embed URL exists, otherwise the stylised map. */
export function MapPanel({ t, className, wide = false }: { t: Dictionary["common"]; className?: string; wide?: boolean }) {
  return (
    <div className={cn("relative h-full min-h-[240px] overflow-hidden bg-[#e4ecf7]", className)}>
      {site.map.embedUrl ? (
        <MapEmbed
          src={site.map.embedUrl}
          title={t.location.mapTitle}
          loadLabel={t.location.loadMap}
          consent={t.location.mapConsent}
          pinLabel={t.location.pinLabel}
        />
      ) : (
        <>
          <MapArt label={t.location.pinLabel} wide={wide} className="absolute inset-0 size-full" />
          <p className="absolute right-4 bottom-4 left-4 rounded-card-sm bg-white/95 px-4 py-3 text-[13px] leading-snug text-ink shadow-sh1">
            <span className="font-semibold">{site.address.street}</span>, {site.address.locality} — {site.address.city},{" "}
            {site.address.region}
          </p>
        </>
      )}
    </div>
  );
}

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 border-b border-line py-4 last:border-b-0">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-card-sm bg-primary-50 text-primary-600">
        {icon}
      </span>
      <div className="min-w-0 text-sm">
        <p className="font-heading font-bold text-primary">{label}</p>
        <div className="mt-1 text-muted">{children}</div>
      </div>
    </li>
  );
}

/** "Find us" card: school details beside the map (home page design). */
export function LocationCard({ t }: { t: Dictionary["common"] }) {
  return (
    <div className="grid overflow-hidden rounded-card border border-line bg-white shadow-sh1 lg:grid-cols-[1fr_1.28fr]">
      <div className="order-2 p-6 sm:p-8 lg:order-1">
        <h3 className="text-xl font-bold sm:text-[1.375rem]">{t.location.name}</h3>
        <p className="mt-2 text-sm text-muted">{t.location.intro}</p>
        <ul className="mt-4">
          <Row icon={<MapPin aria-hidden="true" className="size-4" />} label={t.labels.address}>
            {site.address.full}
          </Row>
          <Row icon={<Phone aria-hidden="true" className="size-4" />} label={t.labels.phoneWhatsapp}>
            <a href={telHref} className="text-primary-600 hover:underline">
              {site.phone.display}
            </a>
          </Row>
          <Row icon={<Mail aria-hidden="true" className="size-4" />} label={t.labels.email}>
            <a href={mailtoHref()} className="break-all text-primary-600 hover:underline">
              {site.email}
            </a>
          </Row>
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={directionsHref} external newTabLabel={t.newTab}>
            <Navigation aria-hidden="true" className="size-4" />
            {t.location.directions}
          </ButtonLink>
          <ButtonLink href={mapsSearchHref} external newTabLabel={t.newTab} variant="secondary">
            <ExternalLink aria-hidden="true" className="size-4" />
            {t.location.openMaps}
          </ButtonLink>
        </div>
      </div>
      <MapPanel t={t} className="order-1 min-h-[240px] lg:order-2 lg:min-h-full" />
    </div>
  );
}
