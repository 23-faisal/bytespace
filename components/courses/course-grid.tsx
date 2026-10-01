import { SearchX } from "lucide-react";
import Link from "next/link";

import { CourseCard } from "@/components/shared/course-card";
import { buttonVariants } from "@/components/ui/button";
import type { CourseSummary } from "@/lib/queries/types";
import { cn } from "@/lib/utils";

type CourseGridProps = {
  courses: CourseSummary[];
  /** Where "Clear filters" goes when nothing matches. */
  resetHref: string;
  className?: string;
};

export function CourseGrid({ courses, resetHref, className }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-3xl bg-gray-50 px-6 py-16 text-center",
          className,
        )}
      >
        <span className="grid size-16 place-items-center rounded-3xl bg-lime">
          <SearchX className="size-8 text-ink" aria-hidden />
        </span>
        <h2 className="font-heading text-2xl leading-[1.2] font-semibold tracking-[-0.01em] text-ink">
          No courses match your search
        </h2>
        <p className="max-w-md text-base leading-[1.6] text-gray-700">
          Try a different keyword, pick another category or clear the filters to
          see every course.
        </p>
        <Link
          href={resetHref}
          className={buttonVariants({
            variant: "lime",
            size: "pill",
            className: "mt-2 font-medium",
          })}
        >
          Clear filters
        </Link>
      </div>
    );
  }

  return (
    <ul className={cn("grid gap-10 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {courses.map((course) => (
        <li key={course.slug} className="flex min-w-0">
          <CourseCard course={course} className="w-full" />
        </li>
      ))}
    </ul>
  );
}
