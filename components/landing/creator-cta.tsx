import Link from "next/link";

import { Shape } from "@/components/shared/shape";
import { buttonVariants } from "@/components/ui/button";

export function CreatorCta() {
  return (
    <section className="relative isolate overflow-hidden bg-brand bg-grid">
      <div
        aria-hidden
        className="absolute inset-y-0 left-1/2 -z-10 w-[1440px] -translate-x-1/2 max-lg:opacity-40"
      >
        <Shape
          name="spring-a"
          color="lime"
          className="-top-[162px] -left-[118px] w-[385px]"
        />
        <Shape
          name="spring-a"
          color="white"
          flip
          className="top-[5px] left-[178px] w-[175px]"
        />
        <Shape
          name="cone"
          color="white"
          className="top-[225px] -left-[48px] w-[188px]"
        />
        <Shape
          name="torus"
          color="lime"
          className="top-[299px] left-[20px] w-[342px]"
        />
        <Shape
          name="pyramid"
          color="lime"
          className="top-0 left-[1080px] w-[188px]"
        />
        <Shape
          name="cylinder"
          color="white"
          className="top-[6px] left-[1226px] w-[370px]"
        />
        <Shape
          name="spring-b"
          color="lime"
          className="top-[289px] left-[1110px] w-[330px]"
        />
      </div>

      <div className="container-page flex min-h-[488px] flex-col items-center justify-center gap-10 py-20 text-center text-gray-50">
        <h2 className="max-w-[710px] font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] md:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] text-base leading-[1.6] md:text-lg">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link
          href="/register"
          className={buttonVariants({
            variant: "default",
            size: "pill",
          })}
        >
          Join Us
        </Link>
      </div>
    </section>
  );
}
