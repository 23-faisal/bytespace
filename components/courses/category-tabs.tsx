"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

export type CategoryTab = { slug: string; name: string; href: string };

type CategoryTabsProps = {
  tabs: CategoryTab[];
  active: string;
  /** Tabs visible before "+ More", matching the single row in the design. */
  collapsedCount?: number;
  className?: string;
};

export function CategoryTabs({ tabs, active, collapsedCount = 8, className }: CategoryTabsProps) {
  const [expanded, setExpanded] = useState(false);
  const activeIndex = tabs.findIndex((t) => t.slug === active);
  const visible =
    expanded || tabs.length <= collapsedCount
      ? tabs
      : tabs.filter((_, i) => i < collapsedCount || i === activeIndex);

  return (
    <nav aria-label="Course categories" className={className}>
      <ul className="flex flex-wrap gap-x-4 gap-y-3">
        {visible.map((tab) => (
          <li key={tab.slug}>
            <Link
              href={tab.href}
              scroll={false}
              aria-current={tab.slug === active ? "page" : undefined}
              className={cn(
                "block rounded-3xl px-4 py-3 text-base leading-[1.2] font-medium transition-colors",
                tab.slug === active ? "bg-lime text-ink" : "bg-gray-50 text-gray-700 hover:bg-gray-100",
              )}
            >
              {tab.name}
            </Link>
          </li>
        ))}
        {tabs.length > collapsedCount && (
          <li>
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
              className="px-2 py-3 text-base leading-[1.2] font-medium text-brand hover:underline"
            >
              {expanded ? "− Less" : "+ More"}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
