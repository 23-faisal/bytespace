import Link from "next/link";

import { BrandHeader } from "@/components/layout/brand-header";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <BrandHeader className="flex flex-1 flex-col">
        <main className="container-page flex flex-1 flex-col items-center pt-10 pb-20 text-center md:pt-10 md:pb-[125px]">
          <p
            aria-hidden
            className="bg-[linear-gradient(180deg,#d4fb20_0%,rgb(212_251_32/0.96)_25%,rgb(212_251_32/0.81)_50%,rgb(212_251_32/0.61)_68%,rgb(255_255_255/0)_100%)] bg-clip-text font-heading text-[168px] leading-none font-semibold tracking-[-0.01em] text-transparent sm:text-[300px] lg:text-[480px]"
          >
            404
          </p>
          <h1 className="relative -mt-10 max-w-[935px] font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:-mt-[74px] sm:text-6xl lg:-mt-[119px] lg:text-[72px]">
            The page you are looking for doesn&rsquo;t exist
          </h1>
          <p className="mt-8 text-base leading-[1.6] text-gray-100 md:text-lg">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            href="/"
            className={buttonVariants({
              variant: "lime",
              size: "pill",
              className: "mt-8 font-medium",
            })}
          >
            Back to Home
          </Link>
        </main>
      </BrandHeader>
      <Footer />
    </>
  );
}
