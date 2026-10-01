import Image from "next/image";

import { cn } from "@/lib/utils";

type AvatarStackProps = {
  avatars: string[];
  extra?: string;
  size?: "sm" | "md";
  extraClassName?: string;
};

const sizes = {
  sm: { px: 32, className: "size-8 -mr-2", text: "text-xs" },
  md: { px: 43, className: "size-[43px] -mr-4", text: "text-xs font-bold" },
};

export function AvatarStack({
  avatars,
  extra,
  size = "sm",
  extraClassName,
}: AvatarStackProps) {
  const s = sizes[size];
  return (
    <div className="flex items-center">
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={s.px}
          height={s.px}
          className={cn("shrink-0 rounded-full object-cover", s.className)}
        />
      ))}
      {extra && (
        <span
          className={cn(
            "grid shrink-0 place-items-center rounded-full bg-lime text-ink",
            s.className,
            "mr-0",
            s.text,
            extraClassName,
          )}
        >
          {extra}
        </span>
      )}
    </div>
  );
}
