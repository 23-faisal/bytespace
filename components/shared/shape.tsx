import Image from "next/image";

import { cn } from "@/lib/utils";

export type ShapeName = "spring-a" | "spring-b" | "torus" | "cylinder" | "pyramid" | "cone";

type ShapeProps = {
  name: ShapeName;
  color?: "lime" | "white";
  flip?: boolean;
  className?: string;
};

/** Decorative 3D ornament. Position and size it with `className`. */
export function Shape({ name, color = "lime", flip = false, className }: ShapeProps) {
  return (
    <Image
      src={`/images/shapes/${name}-${color}.webp`}
      alt=""
      aria-hidden
      width={800}
      height={800}
      className={cn("pointer-events-none absolute select-none", flip && "-scale-x-100", className)}
    />
  );
}
