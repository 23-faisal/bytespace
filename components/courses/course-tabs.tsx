"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "@/lib/utils";

const tabs = [
  { label: "About", segment: null },
  { label: "Lessons", segment: "lessons" },
  { label: "Reviews", segment: "reviews" },
] as const;

export function CourseTabs({ slug }: { slug: string }) {
  const active = useSelectedLayoutSegment();

  return (
    <nav aria-label="Course sections">
      <ul className="flex gap-4">
        {tabs.map((tab) => (
          <li key={tab.label}>
            <Link
              href={tab.segment ? `/courses/${slug}/${tab.segment}` : `/courses/${slug}`}
              scroll={false}
              aria-current={active === tab.segment ? "page" : undefined}
              className={cn(
                "block rounded-3xl px-4 py-3 text-base leading-[1.2] font-medium transition-colors",
                active === tab.segment ? "bg-lime text-ink" : "bg-gray-50 text-gray-700 hover:bg-gray-100",
              )}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
