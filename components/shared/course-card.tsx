import { BarChart3, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { learnerAvatars } from "@/data/seed/landing";
import { formatDuration, formatRating } from "@/lib/format";
import type { CourseSummary } from "@/lib/queries/types";
import { cn } from "@/lib/utils";

import { AvatarStack } from "./avatar-stack";

type CourseCardProps = {
  course: CourseSummary;
  className?: string;
};

export function CourseCard({ course, className }: CourseCardProps) {
  const meta = [
    `${course.lessons} Lessons`,
    formatDuration(course.minutes),
    `${course.reviewCount} Comments`,
  ];

  return (
    <article
      className={cn(
        "relative flex min-w-0 flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-[15px] transition-shadow focus-within:shadow-lg hover:shadow-lg",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt={course.image}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <ul className="absolute right-3 bottom-3 left-3 flex flex-wrap gap-2 sm:gap-3">
          {meta.map((item) => (
            <li
              key={item}
              className="rounded-3xl bg-[#f6f6f6]/60 px-3 py-1.5 text-xs leading-[1.2] font-medium text-body backdrop-blur-[4px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-heading text-xl leading-7 font-semibold tracking-[-0.01em] text-black">
              <Link
                href={`/courses/${course.slug}`}
                className="outline-none after:absolute after:inset-0 after:rounded-3xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
              >
                {course.title}
              </Link>
            </h3>
            <p className="text-xs leading-5 text-body">
              by{" "}
              <Link
                href={`/creators/${course.creatorSlug}`}
                className="relative z-10 text-brand lowercase hover:underline"
              >
                {course.creatorName}
              </Link>
            </p>
          </div>
          <p className="flex shrink-0 items-center gap-0.5 text-lg leading-7 font-medium text-body">
            {formatRating(course.rating)}
            <Star className="size-5 fill-gray-200 text-gray-200" aria-hidden />
            <span className="sr-only">out of 5</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-gray-50 px-3 py-1.5 text-xs leading-[1.2] font-medium text-gray-700">
            <BarChart3 className="size-4" aria-hidden />
            {course.level}
          </span>
          <AvatarStack avatars={learnerAvatars} extra={`26+`} />
        </div>

        <p className="flex items-end text-xs leading-5 text-body">
          <span className="font-heading text-xl leading-6 font-semibold tracking-[-0.01em] text-brand">
            ${course.price}
          </span>
          /lifetime
        </p>
      </div>
    </article>
  );
}
