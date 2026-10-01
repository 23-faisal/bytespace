import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { CreatorProfile } from "@/lib/queries/types";

const stat =
  "flex items-center gap-2 rounded-3xl bg-white px-6 py-3 text-lg leading-[1.2] font-medium text-ink";

export function CreatorHeader({ creator }: { creator: CreatorProfile }) {
  const stats = [
    {
      value: creator.courseCount,
      label: creator.courseCount === 1 ? "Product" : "Products",
    },
    {
      value: creator.followers,
      label: creator.followers === 1 ? "Follower" : "Followers",
    },
  ];

  return (
    <div className="container-page flex flex-col gap-10 pt-6 pb-16 text-gray-50 md:pt-[52px] md:pb-[82px]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src={creator.avatar}
          alt=""
          width={96}
          height={96}
          priority
          className="size-24 shrink-0 rounded-3xl object-cover"
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] md:text-4xl">
              {creator.name}
            </h1>
            <span className="rounded-3xl bg-lime px-6 py-2 text-base leading-[1.2] font-medium text-ink">
              Creator
            </span>
          </div>
          <p className="text-lg leading-[1.6]">{creator.headline}</p>
        </div>
      </div>

      <div className="flex flex-col text-base leading-[1.6] md:text-lg">
        {creator.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-4">
          {stats.map((s) => (
            <li key={s.label} className={stat}>
              <span className="text-brand">{s.value}</span>
              {s.label}
            </li>
          ))}
        </ul>
        <Link
          href="/register"
          className={buttonVariants({
            variant: "lime",
            size: "pill",
            className: "font-medium",
          })}
        >
          Follow
        </Link>
      </div>
    </div>
  );
}
