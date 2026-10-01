import Image from "next/image";

import { CourseSearchForm } from "@/components/courses/course-search-form";
import { Navbar } from "@/components/layout/navbar";
import {
  HappyStudentsCard,
  LearningProgressCard,
  TopicCard,
} from "@/components/shared/floating-cards";
import { Shape } from "@/components/shared/shape";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand bg-grid">
      <div
        aria-hidden
        className="absolute inset-y-0 left-1/2 -z-10 w-[1440px] -translate-x-1/2 max-md:hidden"
      >
        <Shape
          name="spring-a"
          color="lime"
          className="top-[221px] -left-[118px] w-[385px]"
        />
        <Shape
          name="spring-a"
          color="white"
          flip
          className="top-[477px] left-[183px] w-[175px]"
        />
        <Shape
          name="torus"
          color="white"
          className="top-[682px] left-[18px] w-[342px]"
        />
        <Shape
          name="cylinder"
          color="lime"
          className="top-[221px] left-[1231px] w-[370px]"
        />
        <Shape
          name="pyramid"
          color="white"
          className="top-[464px] left-[1106px] w-[188px]"
        />
        <Shape
          name="spring-b"
          color="white"
          className="top-[672px] left-[1127px] w-[330px]"
        />
      </div>

      <Navbar current="Home" />

      <div className="container-page flex flex-col items-center gap-10 pt-6 text-center md:gap-[60px] md:pt-[49px]">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h1 className="max-w-[935px] font-heading text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-6xl lg:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[820px] text-[18px] font-medium text-heading leading-[1.6] text-gray-100 md:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        <CourseSearchForm
          placeholder="Course, topic, creator"
          className="max-w-[590px]"
        />
      </div>

      {/* Illustration: lime disc, student and floating stat cards */}
      <div className="relative mx-auto h-[280px] w-full sm:h-[512px]">
        <div className="absolute top-0 left-1/2 h-[512px] w-[578px] -translate-x-1/2 origin-top max-sm:scale-[0.52]">
          <div className="absolute top-[70px] -left-[285px] -z-10 size-[1149px] rounded-full bg-lime-500" />
          <Image
            src="/images/people/hero-student.png"
            alt="Smiling student with headphones holding a laptop"
            width={578}
            height={541}
            priority
            className="absolute top-0 left-0 drop-shadow-[25px_37px_36px_rgb(0_0_0/0.18)]"
          />
          <TopicCard className="top-[127px] -left-[27px] text-left max-sm:hidden" />
          <LearningProgressCard className="top-[139px] left-[411px] text-left" />
          <HappyStudentsCard className="top-[325px] -left-[103px] text-left" />
        </div>
      </div>
    </section>
  );
}
