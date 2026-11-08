import { cn } from "@/lib/cn";

/** Rounded navy call-to-action panel with a soft gold glow. */
export function CtaBanner({
  title,
  lead,
  align = "center",
  children,
  details,
  className,
  headingLevel = "h2",
}: {
  title: string;
  lead?: string;
  align?: "center" | "left";
  children?: React.ReactNode;
  details?: React.ReactNode;
  className?: string;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <div
      className={cn(
        "cta-surface relative overflow-hidden rounded-card-lg px-6 py-10 text-white sm:px-10 sm:py-12",
        align === "center" && "text-center",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-6 size-56 rounded-full bg-[radial-gradient(circle,rgb(231_169_35/0.35),transparent_65%)]"
      />
      <div className={cn("relative", align === "center" && "mx-auto max-w-[560px]")}>
        <Heading className="text-[1.625rem] font-bold leading-tight text-white sm:text-[2rem]">{title}</Heading>
        {lead ? <p className="mt-3 text-[15px] leading-relaxed text-white/80 sm:text-base">{lead}</p> : null}
        {details}
        {children ? (
          <div className={cn("mt-7 flex flex-col gap-3 sm:flex-row", align === "center" && "sm:justify-center")}>
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
