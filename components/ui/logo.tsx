import { cn } from "@/lib/cn";

/** The "M" monogram from the design: navy tile with a gold underline. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn("shrink-0", className)}>
      <rect width="40" height="40" rx="10" fill="#16315f" />
      <path d="M0 10A10 10 0 0 1 10 0h20a10 10 0 0 1 10 10v2L0 34V10Z" fill="#1e4080" opacity=".55" />
      <path
        d="M11 27V13.2h3.3l5.7 8.2 5.7-8.2H29V27h-3.4v-8.6l-4.8 6.8h-1.6l-4.8-6.8V27H11Z"
        fill="#fff"
      />
      <rect x="11" y="30" width="18" height="2.6" rx="1.3" fill="#e7a923" />
    </svg>
  );
}

/** Monogram with the "Mario-Max" wordmark and subtitle. */
export function Logo({
  subtitle,
  subtitleShort,
  tone = "light",
  className,
}: {
  subtitle: string;
  subtitleShort?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Monogram className="size-10 sm:size-11" />
      <span className="flex flex-col leading-none">
        <span className={cn("font-heading text-[17px] font-extrabold tracking-[-0.01em]", tone === "dark" ? "text-white" : "text-primary")}>
          Mario-Max
        </span>
        <span
          className={cn(
            "mt-1.5 whitespace-nowrap font-heading text-[10px] font-bold uppercase tracking-[0.16em]",
            tone === "dark" ? "text-white/65" : "text-muted",
          )}
        >
          {subtitleShort ? (
            <>
              <span className="sm:hidden">{subtitleShort}</span>
              <span className="hidden sm:inline">{subtitle}</span>
            </>
          ) : (
            subtitle
          )}
        </span>
      </span>
    </span>
  );
}
