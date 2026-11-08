"use client";

import { Copy } from "lucide-react";
import { useToast } from "./toast";
import { cn } from "@/lib/cn";

/** Copies text to the clipboard and confirms with a toast. */
export function CopyButton({
  value,
  label,
  copiedMessage,
  failedMessage,
  className,
}: {
  value: string;
  label: string;
  copiedMessage: string;
  failedMessage: string;
  className?: string;
}) {
  const { show } = useToast();

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      show(copiedMessage);
    } catch {
      show(failedMessage);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-7 items-center justify-center rounded-md transition-colors",
        className,
      )}
    >
      <Copy aria-hidden="true" className="size-3.5" />
    </button>
  );
}
