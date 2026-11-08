"use client";

import { useEffect, useRef } from "react";
import type { HeroVideo as HeroVideoAsset } from "@/content/media";

/**
 * Background video for the home hero. Only rendered when an approved video is
 * configured in content/media.ts. Muted, looping, decorative, and paused for
 * visitors who prefer reduced motion.
 */
export function HeroVideo({ video }: { video: HeroVideoAsset }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (query.matches) element.pause();
      else void element.play().catch(() => {});
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 size-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={video.poster}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={video.src} type={video.type} />
    </video>
  );
}
