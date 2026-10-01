import Image from "next/image";

import { StarRating } from "@/components/shared/star-rating";
import { formatTimeAgo } from "@/lib/format";
import type { Review } from "@/lib/queries/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-gray-200 p-6 sm:p-10">
      <header className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={review.authorAvatar}
              alt=""
              width={52}
              height={52}
              className="size-[52px] shrink-0 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg leading-[1.2] font-medium text-ink">
                {review.authorName}
              </h3>
              <p className="text-base leading-[1.6] text-gray-700">
                {review.authorRole}
              </p>
            </div>
          </div>
          <StarRating rating={review.rating} />
        </div>
        <time
          dateTime={review.createdAt.toISOString()}
          className="shrink-0 text-base leading-[1.6] text-gray-700"
        >
          {formatTimeAgo(review.createdAt)}
        </time>
      </header>
      <p className="text-base leading-[1.6] text-gray-700">{review.body}</p>
    </article>
  );
}
