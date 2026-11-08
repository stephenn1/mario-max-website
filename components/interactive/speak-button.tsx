"use client";

import { Volume2 } from "lucide-react";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Reads German text aloud using the browser's built-in speech synthesis, where available. */
export function SpeakButton({ text, label }: { text: string; label: string }) {
  const supported = useSyncExternalStore(
    subscribe,
    () => typeof window !== "undefined" && "speechSynthesis" in window,
    () => false,
  );
  if (!supported) return null;

  function speak() {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text.replace(/…/g, "").trim());
    utterance.lang = "de-DE";
    utterance.rate = 0.9;
    const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith("de"));
    if (voice) utterance.voice = voice;
    synth.cancel();
    synth.speak(utterance);
  }

  return (
    <button
      type="button"
      onClick={speak}
      aria-label={label}
      title={label}
      className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-white text-primary-600 hover:bg-primary-50"
    >
      <Volume2 aria-hidden="true" className="size-4" />
    </button>
  );
}
