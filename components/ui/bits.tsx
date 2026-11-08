import { Info, SearchX } from "lucide-react";
import { Icon } from "./icon";
import { cn } from "@/lib/cn";
import type { LevelCode, LevelTone } from "@/content/courses";
import { levels } from "@/content/courses";

/** Square tinted tile holding an icon. */
export function IconTile({ name, className, size = "md" }: { name: string; className?: string; size?: "sm" | "md" }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-card-sm bg-primary-50 text-primary-600",
        size === "md" ? "size-10" : "size-9",
        className,
      )}
    >
      <Icon name={name} className={size === "md" ? "size-5" : "size-[18px]"} />
    </span>
  );
}

const toneClasses: Record<LevelTone, string> = {
  red: "bg-accent text-white",
  gold: "bg-gold text-primary",
  blue: "bg-primary-600 text-white",
  navy: "bg-primary-700 text-white",
  ink: "bg-primary text-white",
  crimson: "bg-accent-700 text-white",
};

/** The coloured CEFR level badge (A1 red, A2 gold, B1 blue …). */
export function LevelBadge({ code, size = "md", className }: { code: string; size?: "sm" | "md" | "lg"; className?: string }) {
  const tone = levels.find((l) => l.code === (code as LevelCode))?.tone ?? "ink";
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[10px] font-heading font-extrabold",
        toneClasses[tone],
        size === "sm" && "size-9 text-[13px]",
        size === "md" && "size-10 text-[15px]",
        size === "lg" && "size-12 text-base",
        className,
      )}
    >
      {code}
    </span>
  );
}

/** Light information callout used for disclaimers and confirmed-service notes. */
export function Notice({ children, icon = "info", className }: { children: React.ReactNode; icon?: "info" | "cap"; className?: string }) {
  return (
    <div
      className={cn(
        "flex max-w-[780px] gap-3 rounded-card-sm border border-primary-600/15 bg-primary-50 px-4 py-3.5 text-sm leading-relaxed text-ink sm:px-5",
        className,
      )}
    >
      {icon === "info" ? (
        <Info aria-hidden="true" className="mt-0.5 size-[18px] shrink-0 text-primary-600" strokeWidth={1.75} />
      ) : (
        <Icon name="cap" className="mt-0.5 size-[18px] shrink-0 text-primary-600" />
      )}
      <p>{children}</p>
    </div>
  );
}

/** Empty / no-results state. */
export function EmptyState({
  title,
  body,
  action,
  className,
}: {
  title: string;
  body?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-card border border-dashed border-line bg-white px-6 py-12 text-center", className)}>
      <SearchX aria-hidden="true" className="mx-auto size-8 text-primary-600/50" strokeWidth={1.5} />
      <p className="mt-3 font-heading text-lg font-bold text-primary">{title}</p>
      {body ? <p className="mt-1 text-sm text-muted">{body}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

/** Pill-shaped filter chip (button). */
export function chipClasses(active: boolean) {
  return cn(
    "inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 font-heading text-sm font-bold transition-colors",
    active
      ? "border-primary bg-primary text-white"
      : "border-line bg-white text-primary hover:border-primary-600/40 hover:bg-primary-50",
  );
}
