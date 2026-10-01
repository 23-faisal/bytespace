import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  className?: string;
};


export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <span role="img" aria-label={`${rating} out of 5 stars`} className={cn("flex gap-1", className)}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn("size-6", i < Math.round(rating) ? "fill-gray-700 text-gray-700" : "fill-gray-200 text-gray-200")}
        />
      ))}
    </span>
  );
}
