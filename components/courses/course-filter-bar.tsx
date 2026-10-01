import { ArrowDownWideNarrow, ChartNoAxesColumn, Funnel, Shapes } from "lucide-react";

import { levels, priceRanges, sortOptions, type Category, type CourseFilters } from "@/lib/queries/types";
import { withQuery } from "@/lib/url";

import { FilterMenu } from "./filter-menu";

type CourseFilterBarProps = {
  basePath: string;
  filters: CourseFilters;
  categories: Category[];
};

/** Filter, Level, Category and sort menus. Every option is a link, so filters live in the URL. */
export function CourseFilterBar({ basePath, filters, categories }: CourseFilterBarProps) {
  const current = { q: filters.q, category: filters.category, level: filters.level, price: filters.price, sort: filters.sort };
  const href = (changes: Partial<typeof current>) => withQuery(basePath, { ...current, ...changes });
  const category = categories.find((c) => c.slug === filters.category);

  return (
    <div className="scrollbar-none -mx-4 flex items-center justify-between gap-3 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
      <div className="flex gap-3 sm:gap-4">
        <FilterMenu
          icon={<Funnel aria-hidden />}
          label="Filter"
          value={filters.price && priceRanges[filters.price].label}
          options={[
            { label: "Any price", href: href({ price: undefined }), active: !filters.price },
            ...Object.entries(priceRanges).map(([key, range]) => ({
              label: range.label,
              href: href({ price: key as CourseFilters["price"] }),
              active: filters.price === key,
            })),
          ]}
        />
        <FilterMenu
          icon={<ChartNoAxesColumn aria-hidden />}
          label="Level"
          value={filters.level}
          options={[
            { label: "All levels", href: href({ level: undefined }), active: !filters.level },
            ...levels.map((level) => ({ label: level, href: href({ level }), active: filters.level === level })),
          ]}
        />
        <FilterMenu
          icon={<Shapes aria-hidden />}
          label="Category"
          value={category?.name}
          options={[
            { label: "All categories", href: href({ category: undefined }), active: !category },
            ...categories.map((c) => ({ label: c.name, href: href({ category: c.slug }), active: c.slug === category?.slug })),
          ]}
        />
      </div>
      <FilterMenu
        icon={<ArrowDownWideNarrow aria-hidden />}
        label={sortOptions.relevant}
        value={filters.sort && filters.sort !== "relevant" ? sortOptions[filters.sort] : undefined}
        align="end"
        options={Object.entries(sortOptions).map(([key, label]) => ({
          label,
          href: href({ sort: key === "relevant" ? undefined : (key as CourseFilters["sort"]) }),
          active: (filters.sort ?? "relevant") === key,
        }))}
      />
    </div>
  );
}
