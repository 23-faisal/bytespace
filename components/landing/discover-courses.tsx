"use client";

import { useState } from "react";

import { CourseCard } from "@/components/shared/course-card";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Category, CourseSummary } from "@/lib/queries/types";
import { cn } from "@/lib/utils";

const COLLAPSED_COUNT = 17;
const GRID_SIZE = 6;
const FEATURED: Category = { slug: "featured", name: "Featured" };

type DiscoverCoursesProps = {
  courses: CourseSummary[];
  categories: Category[];
};

export function DiscoverCourses({ courses, categories }: DiscoverCoursesProps) {
  const [active, setActive] = useState(FEATURED);
  const [expanded, setExpanded] = useState(false);

  const tabs = [FEATURED, ...categories];
  const visibleTabs = expanded ? tabs : tabs.slice(0, COLLAPSED_COUNT);
  const filtered = courses
    .filter((c) =>
      active === FEATURED ? c.featured : c.categorySlug === active.slug,
    )
    .slice(0, GRID_SIZE);

  return (
    <section
      id="courses"
      className="container-page scroll-mt-8 py-20 md:py-[72px]"
    >
      <SectionHeading
        title="Discover Your Passion, Build Your Skills"
        titleClassName="max-w-[588px]"
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      <div
        role="tablist"
        aria-label="Course categories"
        className="mx-auto mt-10 flex max-w-[1086px] flex-wrap justify-center gap-x-4 gap-y-5"
      >
        {visibleTabs.map((category) => (
          <button
            key={category.slug}
            type="button"
            role="tab"
            aria-selected={active.slug === category.slug}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-3xl px-4 py-3 text-sm leading-[1.2] font-medium transition-colors",
              active.slug === category.slug
                ? "bg-lime text-ink"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100",
            )}
          >
            {category.name}
          </button>
        ))}
        {tabs.length > COLLAPSED_COUNT && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="px-2 py-3 text-sm font-medium text-brand hover:underline"
          >
            {expanded ? "− Less" : "+ More"}
          </button>
        )}
      </div>

      <div className="mt-[77px] grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-gray-400">
            New {active.name} courses are coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
