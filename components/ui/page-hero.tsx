import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { Container } from "./container";
import { cn } from "@/lib/cn";

/** The navy page header used on every inner page. */
export function PageHero({
  title,
  lead,
  crumbs,
  crumbLabel,
  children,
  decoration,
  className,
}: {
  title: string;
  lead?: string;
  crumbs: Crumb[];
  crumbLabel: string;
  children?: React.ReactNode;
  decoration?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("hero-surface relative overflow-hidden text-white", className)}>
      {decoration}
      <Container className="relative py-10 sm:py-12 lg:py-14">
        <Breadcrumbs items={crumbs} label={crumbLabel} />
        <h1 className="mt-4 max-w-[760px] text-[2.125rem] font-extrabold leading-[1.08] text-white sm:text-[2.75rem] lg:text-[3.25rem]">
          {title}
        </h1>
        {lead ? <p className="mt-4 max-w-[640px] text-base leading-relaxed text-white/85 sm:text-lg">{lead}</p> : null}
        {children}
      </Container>
    </div>
  );
}
