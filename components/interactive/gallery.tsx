"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { format } from "@/content/dictionaries";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type GalleryItem =
  | { kind: "illustration"; id: string; caption: string; word: string; icon: string; tone: GalleryTone }
  | { kind: "photo"; id: string; caption: string; alt: string; src: string; width: number; height: number };

export type GalleryTone = "navy" | "red" | "gold" | "green" | "blue" | "ink";

const tones: Record<GalleryTone, string> = {
  navy: "from-[#1e4080] to-[#0e2148]",
  red: "from-[#9f0b22] to-[#c8102e]",
  gold: "from-[#b07d10] to-[#e7a923]",
  green: "from-[#1f5f4a] to-[#2e7d65]",
  blue: "from-[#16315f] to-[#1e4080]",
  ink: "from-[#0e2148] to-[#132a58]",
};

function Artwork({ item, large = false }: { item: GalleryItem; large?: boolean }) {
  if (item.kind === "photo") {
    return (
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="size-full object-cover"
        sizes={large ? "(min-width: 1024px) 900px, 100vw" : "(min-width: 1024px) 280px, 50vw"}
      />
    );
  }
  return (
    <div className={cn("relative flex size-full flex-col items-center justify-center bg-gradient-to-br text-white", tones[item.tone])}>
      <Icon name={item.icon} className={cn("text-white/70", large ? "size-10" : "size-6")} />
      <span lang="de" className={cn("mt-3 px-4 text-center font-heading font-extrabold leading-tight", large ? "text-5xl sm:text-6xl" : "text-2xl sm:text-[1.7rem]")}>
        {item.word}
      </span>
    </div>
  );
}

/** Gallery grid with an accessible lightbox (Escape, arrow keys, focus return). */
export function Gallery({
  items,
  labels,
}: {
  items: GalleryItem[];
  labels: { open: string; close: string; previous: string; next: string; position: string };
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  const move = (delta: number) => setActive((i) => (i === null ? i : (i + delta + items.length) % items.length));
  const current = active !== null ? items[active] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-label={format(labels.open, { caption: item.caption })}
              className="group relative block aspect-square w-full overflow-hidden rounded-card-sm shadow-sh1"
            >
              <span aria-hidden="true" className="block size-full transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none">
                <Artwork item={item} />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 pt-8 pb-2.5 text-left font-heading text-xs font-bold text-white sm:text-[13px]"
              >
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={current?.caption}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActive(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") move(1);
          if (event.key === "ArrowLeft") move(-1);
        }}
        className="m-auto w-[min(92vw,900px)] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-[#0b1a3a]/85 open:animate-[fade-in_.18s_ease-out] motion-reduce:open:animate-none"
      >
        {current && active !== null ? (
          <figure className="overflow-hidden rounded-card bg-white shadow-sh3">
            <div className="aspect-[4/3] w-full sm:aspect-[16/10]">
              <Artwork item={current} large />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">
              <span>
                <span className="block font-heading font-bold text-primary">{current.caption}</span>
                <span className="text-xs text-muted">{format(labels.position, { current: active + 1, total: items.length })}</span>
              </span>
              <span className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="inline-flex size-10 items-center justify-center rounded-btn border border-line text-primary hover:bg-primary-50"
                >
                  <ChevronLeft aria-hidden="true" className="size-5" />
                  <span className="sr-only">{labels.previous}</span>
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="inline-flex size-10 items-center justify-center rounded-btn border border-line text-primary hover:bg-primary-50"
                >
                  <ChevronRight aria-hidden="true" className="size-5" />
                  <span className="sr-only">{labels.next}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  autoFocus
                  className="inline-flex size-10 items-center justify-center rounded-btn bg-primary text-white hover:bg-primary-700"
                >
                  <X aria-hidden="true" className="size-5" />
                  <span className="sr-only">{labels.close}</span>
                </button>
              </span>
            </figcaption>
          </figure>
        ) : null}
      </dialog>
    </>
  );
}
