"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";
import { MapArt } from "@/components/illustrations/scenes";

/**
 * Click-to-load Google Maps embed. Nothing is requested from Google until the
 * visitor chooses to load the map. Only used once a verified embed URL is set
 * in content/site.ts.
 */
export function MapEmbed({
  src,
  title,
  loadLabel,
  consent,
  pinLabel,
}: {
  src: string;
  title: string;
  loadLabel: string;
  consent: string;
  pinLabel: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 size-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <>
      <MapArt label={pinLabel} className="absolute inset-0 size-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/40 p-6 text-center">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="inline-flex min-h-11 items-center gap-2 rounded-btn bg-primary px-4 font-heading text-sm font-bold text-white shadow-sh2 hover:bg-primary-700"
        >
          <MapPin aria-hidden="true" className="size-4" />
          {loadLabel}
        </button>
        <p className="max-w-[280px] text-xs text-ink">{consent}</p>
      </div>
    </>
  );
}
