import { CreatorCta } from "@/components/landing/creator-cta";
import { DiscoverCourses } from "@/components/landing/discover-courses";
import { Growth } from "@/components/landing/growth";
import { Hero } from "@/components/landing/hero";
import { LearningPaths } from "@/components/landing/learning-paths";
import { Partners } from "@/components/landing/partners";
import { Testimonials } from "@/components/landing/testimonials";
import { Footer } from "@/components/layout/footer";
import { courses, categories } from "@/lib/data";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Partners />
        <DiscoverCourses courses={courses} categories={categories} />
        <LearningPaths />
        <Growth
          course={courses.find((c) => c.slug === "learn-figma-from-basic")}
        />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
