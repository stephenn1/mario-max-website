"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Deck } from "@/content/learning/types";
import type { Dictionary } from "@/content/dictionaries";
import { format } from "@/content/dictionaries";
import { chipClasses } from "@/components/ui/bits";
import { cn } from "@/lib/cn";

type FlashUi = Dictionary["resources"]["flashUi"];

/** Flip cards: tap/click or Enter to flip, arrows or swipe to move between cards. */
export function Flashcards({ decks, ui, chooseLabel }: { decks: Deck[]; ui: FlashUi; chooseLabel?: string }) {
  const [deckIndex, setDeckIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const startX = useRef<number | null>(null);
  const swiped = useRef(false);

  const deck = decks[deckIndex];
  const card = deck.cards[index];
  const total = deck.cards.length;

  function go(delta: number) {
    setIndex((i) => (i + delta + total) % total);
    setFlipped(false);
  }

  function selectDeck(i: number) {
    setDeckIndex(i);
    setIndex(0);
    setFlipped(false);
  }

  return (
    <div>
      {decks.length > 1 && chooseLabel ? (
        <div role="group" aria-label={chooseLabel} className="mb-5 flex flex-wrap gap-2">
          {decks.map((d, i) => (
            <button key={d.id} type="button" aria-pressed={i === deckIndex} onClick={() => selectDeck(i)} className={chipClasses(i === deckIndex)}>
              {d.title}
            </button>
          ))}
        </div>
      ) : null}

      <div
        className="mx-auto max-w-[360px] perspective-[1000px]"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(1);
          if (event.key === "ArrowLeft") go(-1);
        }}
      >
        <button
          type="button"
          onClick={() => {
            if (swiped.current) {
              swiped.current = false;
              return;
            }
            setFlipped((f) => !f);
          }}
          onPointerDown={(event) => {
            startX.current = event.clientX;
          }}
          onPointerUp={(event) => {
            if (startX.current === null) return;
            const dx = event.clientX - startX.current;
            startX.current = null;
            if (Math.abs(dx) > 40) {
              swiped.current = true;
              go(dx < 0 ? 1 : -1);
            }
          }}
          aria-label={`${ui.flip}: ${flipped ? card.back : card.front}`}
          className="relative block h-[200px] w-full touch-pan-y rounded-card text-left select-none"
        >
          <span
            className={cn(
              "absolute inset-0 transition-transform duration-500 transform-3d motion-reduce:transition-none",
              flipped && "rotate-y-180",
            )}
          >
            <span
              aria-hidden={flipped}
              className="absolute inset-0 flex flex-col items-center justify-center rounded-card bg-[linear-gradient(135deg,#1e4080,#0e2148)] p-6 text-center text-white shadow-sh2 backface-hidden"
            >
              <span className="font-heading text-[11px] font-bold tracking-[0.16em] text-white/70 uppercase">{ui.frontLabel}</span>
              <span lang="de" className="mt-3 font-heading text-[1.75rem] leading-tight font-extrabold">
                {card.front}
              </span>
              <span className="absolute bottom-4 text-xs text-white/60">{ui.tapToFlip}</span>
            </span>
            <span
              aria-hidden={!flipped}
              className="absolute inset-0 flex rotate-y-180 flex-col items-center justify-center rounded-card border border-line bg-white p-6 text-center text-primary shadow-sh2 backface-hidden"
            >
              <span className="font-heading text-[11px] font-bold tracking-[0.16em] text-muted uppercase">{ui.backLabel}</span>
              <span lang="en" className="mt-3 font-heading text-2xl leading-tight font-extrabold">
                {card.back}
              </span>
              <span className="absolute bottom-4 text-xs text-muted">{ui.tapToFlip}</span>
            </span>
          </span>
        </button>

        <div className="mt-4 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex size-10 items-center justify-center rounded-btn border border-line bg-white text-primary hover:bg-primary-50"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
            <span className="sr-only">{ui.previous}</span>
          </button>
          <span className="min-w-12 text-center text-sm font-semibold text-primary" aria-live="polite">
            {format(ui.counter, { current: index + 1, total })}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex size-10 items-center justify-center rounded-btn border border-line bg-white text-primary hover:bg-primary-50"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
            <span className="sr-only">{ui.next}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
