import { StarRating } from "@/components/shared/star-rating";
import { formatRating } from "@/lib/format";
import type { RatingSummary as Summary } from "@/lib/queries/types";

export function RatingSummary({ rating }: { rating: Summary }) {
  const max = Math.max(...rating.counts, 1);

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:p-10">
      <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-lime p-10 text-ink">
        <p className="text-sm leading-[1.2] font-medium">Ratings</p>
        <p className="font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em]">
          {formatRating(rating.average)}
        </p>
      </div>
      <ul className="flex min-w-0 flex-1 flex-col gap-1">
        {rating.counts.map((count, i) => (
          <li key={i} className="flex items-center gap-4">
            <span className="h-2 min-w-0 flex-1 rounded-3xl bg-gray-100">
              <span className="block h-full rounded-3xl bg-lime" style={{ width: `${(count / max) * 100}%` }} />
            </span>
            <StarRating rating={5 - i} className="max-sm:[&_svg]:size-4" />
            <span className="w-10 text-right text-base leading-[1.6] text-gray-700">
              {count}
              <span className="sr-only"> reviews</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
