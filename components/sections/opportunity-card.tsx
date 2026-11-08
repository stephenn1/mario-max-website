import Link from "next/link";
import { cn } from "@/lib/cn";

export type OpportunityTone = "navy" | "red" | "gold" | "crimson";

const tones: Record<OpportunityTone, string> = {
  navy: "bg-[linear-gradient(180deg,#1e4080_0%,#132a58_55%,#0b1a3a_100%)]",
  red: "bg-[linear-gradient(180deg,#7d1325_0%,#3a1430_55%,#0b1a3a_100%)]",
  gold: "bg-[linear-gradient(180deg,#8a6a14_0%,#3b3324_55%,#0b1a3a_100%)]",
  crimson: "bg-[linear-gradient(180deg,#c8102e_0%,#6d1430_55%,#1a1530_100%)]",
};

/** Gradient topic card from the "Opportunities in Germany" section and Germany Guide. */
export function OpportunityCard({
  tag,
  title,
  text,
  tone,
  points,
  href,
  id,
  className,
}: {
  tag: string;
  title: string;
  text: string;
  tone: OpportunityTone;
  points?: string[];
  href?: string;
  id?: string;
  className?: string;
}) {
  return (
    <article
      id={id}
      className={cn(
        "group relative flex min-h-[230px] scroll-mt-28 flex-col justify-between overflow-hidden rounded-card p-5 text-white shadow-sh2 sm:p-6",
        tones[tone],
        className,
      )}
    >
      <span className="self-start rounded-full border border-white/30 bg-white/10 px-2.5 py-1 font-heading text-[11px] font-bold">
        {tag}
      </span>
      <div className="mt-10">
        <h3 className="text-xl font-bold text-white">
          {href ? (
            <Link href={href} className="after:absolute after:inset-0 hover:underline">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{text}</p>
        {points && points.length > 0 ? (
          <ul className="mt-4 space-y-1.5 text-[13px] text-white/80">
            {points.map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true" className="mt-[7px] size-1 shrink-0 rounded-full bg-white/70" />
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
