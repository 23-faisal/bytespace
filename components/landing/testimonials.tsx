import Image from "next/image";

import { testimonials } from "@/data/seed/landing";

export function Testimonials() {
  return (
    <section
      className="bg-[#fafafa] py-20 lg:pt-[74px] lg:pb-[120px]"
      style={{
        backgroundImage: [
          "radial-gradient(circle at 95% 10%, rgb(203 252 1 / 0.4), transparent 38%)",
          "radial-gradient(circle at 38% 12%, rgb(203 252 1 / 0.35), transparent 22%)",
          "radial-gradient(circle at 0% 90%, rgb(0 59 226 / 0.14), transparent 35%)",
        ].join(","),
      }}
    >
      <div className="container-page flex flex-col gap-12 lg:gap-[72px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-[43px]">
          <h2 className="max-w-[577px] font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-black md:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-base leading-[1.6] text-body md:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <figcaption>
                  <p className="font-heading text-xl leading-7 font-semibold tracking-[-0.01em] text-black">
                    {t.name}
                  </p>
                  <p className="text-lg leading-[1.6] text-brand">{t.role}</p>
                </figcaption>
                <blockquote className="text-lg leading-[1.6] text-body">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
