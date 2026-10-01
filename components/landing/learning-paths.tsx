import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { learningPaths } from "@/data/seed/landing";

export function LearningPaths() {
  return (
    <section className="container-page pt-[57px] pb-[120px]">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        size="md"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />
      <ul className="mt-[68px] grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
        {learningPaths.map((path) => (
          <li key={path.label}>
            <Link
              href={`/courses?category=${path.category}`}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200 transition-colors hover:border-brand"
            >
              <span className="grid place-items-center rounded-[40px] bg-lime p-3">
                <Image src={path.icon} alt="" width={36} height={36} />
              </span>
              <span className="text-lg leading-[1.2] font-medium text-ink md:text-xl">
                {path.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
