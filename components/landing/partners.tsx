import Image from "next/image";

import { partners } from "@/data/seed/landing";

export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-gray-50">
      <ul className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-8 py-14 sm:gap-x-[72px] sm:py-20">
        {partners.map((partner, i) => (
          <li key={partner.src}>
            <Image
              src={partner.src}
              alt={`Partner logo ${i + 1}`}
              width={partner.width}
              height={partner.height}
              className="h-auto w-[130px] sm:w-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
