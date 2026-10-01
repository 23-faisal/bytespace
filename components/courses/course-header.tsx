import { ChartNoAxesColumn, Play, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { formatRating } from "@/lib/format";
import type { CourseDetail } from "@/lib/queries/types";

import { ShareButton } from "./share-button";

const pill =
  "flex items-center gap-2 rounded-3xl bg-white px-4 py-2 text-base sm:px-6 leading-[1.2] font-medium text-ink [&_svg]:size-6 [&_svg]:text-brand";

export function CourseTitle({ course }: { course: CourseDetail }) {
  const { average, total } = course.rating;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex max-w-[820px] flex-col gap-6">
        <div className="flex flex-col gap-2 text-gray-50">
          <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] md:text-4xl">
            {course.headline}
          </h1>
          <p className="font-heading text-lg leading-[1.2] font-semibold tracking-[-0.01em] md:text-xl">
            {course.tagline}
          </p>
        </div>
        <p className="text-lg leading-[1.2] font-medium text-[#f1f4fe]">
          by{" "}
          <Link href={`/creators/${course.creator.slug}`} className="text-lime lowercase hover:underline">
            {course.creator.name}
          </Link>
        </p>
        <ul className="flex flex-wrap gap-3 sm:gap-4">
          <li className={pill}>
            <ChartNoAxesColumn aria-hidden />
            {course.level}
          </li>
          <li className={pill}>
            <Star className="fill-brand" aria-hidden />
            {formatRating(average)} ({total} reviews)
          </li>
          <li className={pill}>
            <Users aria-hidden />
            {course.students} Students
          </li>
        </ul>
      </div>
      <div className="shrink-0">
        <ShareButton title={course.headline} />
      </div>
    </div>
  );
}

export function CoursePreview({ course }: { course: CourseDetail }) {
  return (
    <div className="relative aspect-[720/479] overflow-hidden rounded-3xl bg-[#443131]">
      <Image
        src={course.previewImage}
        alt={`Preview of ${course.title}`}
        fill
        priority
        sizes="(min-width: 1280px) 720px, (min-width: 1024px) 55vw, 100vw"
        className="object-cover"
      />
      <Link
        href={`/courses/${course.slug}/lessons`}
        scroll={false}
        aria-label="Watch the free preview lessons"
        className="absolute top-1/2 left-1/2 grid size-[72px] -translate-1/2 place-items-center rounded-3xl border border-body bg-[#3d3d3d]/24 shadow-[0_4px_40px_rgb(0_0_0/0.25)] backdrop-blur-[40px] transition-transform hover:scale-105 md:size-[104px]"
      >
        <Play className="size-10 fill-[#f5f2ff] text-[#f5f2ff] md:size-[52px]" aria-hidden />
      </Link>
    </div>
  );
}
