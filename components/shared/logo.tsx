import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Hide the "ByteSpace" wordmark and show only the mark. */
  markOnly?: boolean;
};

export function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn("inline-flex items-center gap-2 font-display text-2xl font-bold", className)}
    >
      <Image src="/images/icons/logo-mark.svg" alt="" width={29} height={32} priority />
      {!markOnly && <span>ByteSpace</span>}
    </Link>
  );
}
