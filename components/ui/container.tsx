import { cn } from "@/lib/cn";

/** The 1200px content container with responsive side gutters. */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8", className)}>{children}</div>;
}

/** A page section with the design's vertical rhythm (56px mobile, 84px desktop). */
export function Section({
  className,
  children,
  id,
  tone = "white",
  labelledBy,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "white" | "soft" | "navy";
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "py-14 lg:py-[84px]",
        tone === "soft" && "bg-soft",
        tone === "navy" && "bg-primary text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}
