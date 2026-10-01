import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  pageCount: number;
  href: (page: number) => string;
  /** How many page numbers to show around the current one. */
  window?: number;
  className?: string;
};

const arrowClassName =
  "grid h-12 w-14 place-items-center rounded-3xl border border-gray-200 bg-white transition-colors [&_svg]:size-6";

export function Pagination({ page, pageCount, href, window = 5, className }: PaginationProps) {
  if (pageCount <= 1) return null;

  const start = Math.max(1, Math.min(page - Math.floor(window / 2), pageCount - window + 1));
  const pages = Array.from({ length: Math.min(window, pageCount) }, (_, i) => start + i);

  return (
    <nav aria-label="Pagination" className={cn("flex items-center justify-center gap-3 sm:gap-6", className)}>
      {page > 1 ? (
        <Link href={href(page - 1)} aria-label="Previous page" className={cn(arrowClassName, "text-gray-700 hover:border-gray-400")}>
          <ChevronLeft aria-hidden />
        </Link>
      ) : (
        <span aria-disabled className={cn(arrowClassName, "text-gray-200")}>
          <ChevronLeft aria-hidden />
        </span>
      )}

      <ol className="flex items-center gap-1 sm:gap-2">
        {pages.map((n) => (
          <li key={n}>
            {n === page ? (
              <span
                aria-current="page"
                className="grid size-10 place-items-center font-heading text-xl leading-7 font-semibold tracking-[-0.01em] text-gray-200"
              >
                <span className="sr-only">Page </span>
                {n}
              </span>
            ) : (
              <Link
                href={href(n)}
                className="grid size-10 place-items-center rounded-full font-heading text-xl leading-7 font-semibold tracking-[-0.01em] text-ink transition-colors hover:bg-gray-50"
              >
                <span className="sr-only">Page </span>
                {n}
              </Link>
            )}
          </li>
        ))}
      </ol>

      {page < pageCount ? (
        <Link href={href(page + 1)} aria-label="Next page" className={cn(arrowClassName, "text-ink hover:border-gray-400")}>
          <ChevronRight aria-hidden />
        </Link>
      ) : (
        <span aria-disabled className={cn(arrowClassName, "text-gray-200")}>
          <ChevronRight aria-hidden />
        </span>
      )}
    </nav>
  );
}
