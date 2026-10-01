import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { CourseCard } from "@/components/shared/course-card";
import {
  HappyStudentsCard,
  LearningProgressCard,
  RevenueCard,
} from "@/components/shared/floating-cards";
import { ScaledStage } from "@/components/shared/scaled-stage";
import { Shape } from "@/components/shared/shape";

import { creatorPerks, stats } from "@/data/seed/landing";
import type { CourseSummary } from "@/lib/queries/types";

const headingClass =
  "font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-ink md:text-[44px]";

export function Growth({ course }: { course?: CourseSummary }) {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-[#fafafa] py-20 lg:py-[120px]"
      style={{
        backgroundImage: [
          "radial-gradient(circle at 34% 8%, rgb(203 252 1 / 0.35), transparent 30%)",
          "radial-gradient(circle at 100% 8%, rgb(0 59 226 / 0.06), transparent 30%)",
          "radial-gradient(circle at 5% 50%, rgb(0 59 226 / 0.1), transparent 25%)",
          "radial-gradient(circle at 5% 90%, rgb(203 252 1 / 0.35), transparent 22%)",
          "radial-gradient(circle at 92% 85%, rgb(0 59 226 / 0.1), transparent 28%)",
        ].join(","),
      }}
    >
      <div className="container-page flex flex-col gap-20 lg:gap-[72px]">
        {/* Professional growth */}
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:gap-[63px]">
          <div className="flex max-w-[574px] flex-col gap-10 xl:shrink-0">
            <h2 className={headingClass}>
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] text-lg leading-[1.6] text-gray-700">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="flex gap-10 sm:gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-lg leading-[1.6] text-gray-700">
                    {stat.label}
                  </dt>
                  <dd className="font-heading text-4xl leading-[44px] font-medium tracking-[-0.01em] text-brand">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ScaledStage width={621} height={552}>
            {course && (
              <CourseCard
                course={course}
                className="absolute top-0 left-0 w-[373px]"
              />
            )}
            <Image
              src="/images/people/growth-student.png"
              alt="Student learning online"
              width={577}
              height={540}
              className="absolute top-3 left-0 drop-shadow-[25px_37px_36px_rgb(0_0_0/0.18)]"
            />
            <LearningProgressCard className="top-[213px] left-[345px]" />
            <Shape
              name="spring-b"
              color="lime"
              className="top-[67px] left-[406px] w-[215px]"
            />
          </ScaledStage>
        </div>

        {/* Create & manage */}
        <div className="flex flex-col-reverse items-center gap-12 xl:flex-row xl:gap-[79px]">
          <ScaledStage width={541} height={596}>
            <div className="absolute top-0 left-[28px] h-[596px] w-[435px] overflow-hidden">
              <Image
                src="/images/people/creator.png"
                alt="Course creator holding a tablet"
                width={683}
                height={683}
                className="absolute top-0 left-[-28.5%] h-[114.6%] w-[157%] max-w-none"
              />
            </div>
            <RevenueCard
              title="Total Revenue"
              period="July 1-28"
              amount="$120.29"
              delta="+12$"
              withProgress
              className="top-11 left-0"
            />
            <RevenueCard
              title="Year to Date"
              period="2023"
              amount="$1,200.38"
              delta="+12$"
              className="top-[194px] left-0 w-[134px]"
            />
            <Shape
              name="spring-a"
              color="lime"
              className="top-[114px] left-[305px] w-[215px]"
            />
            <HappyStudentsCard className="top-[413px] left-[283px]" />
          </ScaledStage>

          <div className="flex max-w-[580px] flex-col gap-10 xl:shrink-0">
            <h2 className={`${headingClass} max-w-[391px]`}>
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="text-lg leading-[1.6] text-gray-700">
              <strong className="font-bold text-ink">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorPerks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 text-lg leading-[1.2] font-medium text-ink"
                >
                  <CheckCircle2
                    className="size-6 fill-brand text-white"
                    aria-hidden
                  />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
