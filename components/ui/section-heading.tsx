import { cn } from "@/lib/cn";

/** Eyebrow, H2 title and lead paragraph, as used at the top of each section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  eyebrowTone = "red",
  className,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  eyebrowTone?: "red" | "gold";
  className?: string;
  children?: React.ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-[620px]", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow",
            eyebrowTone === "gold" && (dark ? "text-gold-300" : "text-gold-ink"),
            dark && eyebrowTone === "red" && "text-gold-300",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-3 text-[1.75rem] font-bold leading-[1.15] sm:text-[2.125rem] lg:text-[2.375rem]",
          dark && "text-white",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-[1.0625rem]", dark ? "text-white/80" : "text-muted")}>
          {lead}
        </p>
      ) : null}
      {children}
    </div>
  );
}
