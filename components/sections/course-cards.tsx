import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { LevelBadge } from "@/components/ui/bits";
import { buttonClasses } from "@/components/ui/button";

/** Compact course level card (home page preview). */
export function CoursePreviewCard({
  code,
  name,
  text,
  href,
  detailsLabel,
}: {
  code: string;
  name: string;
  text: string;
  href: string;
  detailsLabel: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-white shadow-sh1 transition-shadow hover:shadow-sh2">
      <div className="border-b border-line px-5 pt-5 pb-4">
        <LevelBadge code={code} />
      </div>
      <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{text}</p>
        <div className="mt-4 border-t border-dashed border-line pt-4">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-accent hover:underline"
          >
            {detailsLabel}
            <span className="sr-only">: {code} {name}</span>
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export type CourseCardData = {
  code: string;
  name: string;
  cefr: string;
  summary: string;
  objectives: string[];
  suitable: string;
};

export type CourseCardLabels = {
  objectives: string;
  suitable: string;
  duration: string;
  schedule: string;
  fee: string;
  onEnquiry: string;
  ask: string;
};

/** Full course level card (Courses page). */
export function CourseCard({
  course,
  labels,
  askHref,
}: {
  course: CourseCardData;
  labels: CourseCardLabels;
  askHref: string;
}) {
  const id = course.code.toLowerCase();
  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      className="flex h-full scroll-mt-28 flex-col rounded-card border border-line bg-white shadow-sh1"
    >
      <header className="flex items-center gap-4 border-b border-line px-5 py-5 sm:px-6">
        <LevelBadge code={course.code} size="lg" />
        <div>
          <h3 id={`${id}-title`} className="text-xl font-bold">
            {course.name}
          </h3>
          <p className="mt-0.5 text-[13px] font-medium text-muted">{course.cefr}</p>
        </div>
      </header>
      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
        <p className="text-[15px] leading-relaxed text-ink/85">{course.summary}</p>
        <h4 className="mt-5 font-heading text-xs font-extrabold tracking-[0.1em] text-primary uppercase">
          {labels.objectives}
        </h4>
        <ul className="mt-3 space-y-2">
          {course.objectives.map((objective) => (
            <li key={objective} className="flex gap-2.5 text-sm text-ink/85">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.25} />
              {objective}
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-card-sm bg-soft px-4 py-3">
          <p className="font-heading text-[13px] font-bold text-primary">{labels.suitable}</p>
          <p className="mt-0.5 text-[13px] text-muted">{course.suitable}</p>
        </div>
        <dl className="mt-5 grid grid-cols-3 gap-3 text-[13px]">
          {[labels.duration, labels.schedule, labels.fee].map((term) => (
            <div key={term}>
              <dt className="font-heading font-bold text-primary">{term}</dt>
              <dd className="mt-0.5 text-muted">{labels.onEnquiry}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto pt-6">
          <Link href={askHref} className={buttonClasses("secondary", "sm")}>
            {labels.ask} {course.code}
          </Link>
        </div>
      </div>
    </article>
  );
}
