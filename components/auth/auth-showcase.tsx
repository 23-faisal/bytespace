import { CourseCard } from "@/components/shared/course-card";
import { HappyStudentsCard } from "@/components/shared/floating-cards";
import { ScaledStage } from "@/components/shared/scaled-stage";
import { Shape } from "@/components/shared/shape";
import { digitalAsset, bigData } from "@/lib/data";

export function AuthShowcase() {
  return (
    <ScaledStage width={548} height={585} className="mx-0">
      {digitalAsset && (
        <CourseCard
          course={digitalAsset}
          className="absolute top-[89px] left-[25px] w-[373px] hover:shadow-none"
        />
      )}

      {bigData && (
        <CourseCard
          course={bigData}
          className="absolute top-0 left-[136px] w-[373px] hover:shadow-none"
        />
      )}

      <HappyStudentsCard variant="lime" className="top-[435px] left-[251px]" />

      <Shape
        name="spring-a"
        color="white"
        flip
        className="top-[321px] left-[373px] w-[175px]"
      />

      <Shape
        name="torus"
        color="lime"
        className="top-[15px] left-[54px] w-[146px]"
      />

      <Shape
        name="pyramid"
        color="lime"
        className="top-[397px] left-0 w-[188px]"
      />
    </ScaledStage>
  );
}
