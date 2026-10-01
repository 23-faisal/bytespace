import { BadgeCheck, FolderOpen, Handshake, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { formatDuration } from "@/lib/format";
import type { CourseDetail } from "@/lib/queries/types";

const PREVIEW_COUNT = 3;
const cta = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

const includes = [
  { icon: FolderOpen, label: "Learning Resources" },
  { icon: Video, label: "Quality Lesson Videos" },
  { icon: BadgeCheck, label: "Certificate of Completion" },
  { icon: Handshake, label: "Private Consultation" },
];

const heading = "font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-ink";

export function CourseSidebar({ course }: { course: CourseDetail }) {
  const lessons = course.sections.flatMap((s) => s.lessons);
  const previews = [...lessons.filter((l) => l.isPreview), ...lessons.filter((l) => !l.isPreview)].slice(0, PREVIEW_COUNT);
  const remaining = course.lessonCount - previews.length;

  return (
    <aside
      aria-label="Enrollment"
      className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6 sm:p-10"
    >
      <section className="flex flex-col gap-6">
        <h2 className={heading}>
          {course.lessonCount} Lessons ({formatDuration(course.minutes)})
        </h2>
        <ol className="flex flex-col gap-3 text-base">
          {previews.map((lesson, i) => (
            <li key={lesson.id} className="flex items-start justify-between gap-6">
              <span className="flex gap-2 leading-[1.2] font-medium text-ink">
                <span className="w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                {lesson.title}
              </span>
              <span className="shrink-0 leading-[1.2] text-brand">{formatDuration(lesson.durationMinutes)}</span>
            </li>
          ))}
          {remaining > 0 && (
            <li className="leading-[1.6] text-gray-700">
              <Link href={`/courses/${course.slug}/lessons`} scroll={false} className="hover:text-brand hover:underline">
                {remaining} more videos
              </Link>
            </li>
          )}
        </ol>
      </section>

      <section className="flex flex-col gap-6">
        <p className="text-base leading-[1.6] text-gray-700">{cta}</p>
        <p className="flex items-end text-base leading-[1.6] text-gray-700">
          <span className="font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em] text-brand">
            ${course.price}
          </span>
          /lifetime
        </p>
        <Button asChild variant="lime" size="pill" className="w-full font-medium">
          <Link href="/register">Enroll Now</Link>
        </Button>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className={heading}>This course include</h2>
        <ul className="flex flex-col gap-3">
          {includes.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-base leading-[1.6] text-gray-700">
              <Icon className="size-6 shrink-0 text-brand" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-[#d1d1d1]" />

      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image
            src={course.creator.avatar}
            alt=""
            width={52}
            height={52}
            className="size-[52px] shrink-0 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg leading-[1.2] font-medium text-ink">{course.creator.name}</h2>
            <p className="text-base leading-[1.6] text-gray-700">{course.creator.role}</p>
          </div>
        </div>
        <p className="text-base leading-[1.6] text-gray-700">{cta}</p>
        <Link
          href={`/creators/${course.creator.slug}`}
          className="w-fit rounded-3xl border border-gray-200 px-4 py-2 text-base leading-[1.2] font-medium text-gray-700 transition-colors hover:border-brand hover:text-brand"
        >
          See Full Profile
        </Link>
      </section>
    </aside>
  );
}
