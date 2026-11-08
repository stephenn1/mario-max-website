"use client";

import { useState } from "react";
import type { LevelGroup } from "@/content/courses";
import { format } from "@/content/dictionaries";
import { chipClasses } from "@/components/ui/bits";
import { CourseCard, type CourseCardData, type CourseCardLabels } from "@/components/sections/course-cards";

type Filter = "all" | LevelGroup;

/** Level filter chips and the six course cards. */
export function CourseExplorer({
  courses,
  filterLabels,
  cardLabels,
  contactHref,
}: {
  courses: (CourseCardData & { group: LevelGroup })[];
  filterLabels: { label: string; all: string; beginner: string; intermediate: string; advanced: string; shown: string };
  cardLabels: CourseCardLabels;
  contactHref: string;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? courses : courses.filter((c) => c.group === filter);
  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: filterLabels.all },
    { value: "beginner", label: filterLabels.beginner },
    { value: "intermediate", label: filterLabels.intermediate },
    { value: "advanced", label: filterLabels.advanced },
  ];

  return (
    <div>
      <div role="group" aria-label={filterLabels.label} className="no-scrollbar contain-paint -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={chipClasses(filter === f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="sr-only">
        {format(filterLabels.shown, { count: visible.length })}
      </p>
      <ul className="mt-6 grid gap-5 lg:grid-cols-2">
        {visible.map((course) => (
          <li key={course.code}>
            <CourseCard
              course={course}
              labels={cardLabels}
              askHref={`${contactHref}?level=${course.code}#message-form`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
