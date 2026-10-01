import { cn } from "@/lib/utils";

import { Navbar, type NavLabel } from "./navbar";

type BrandHeaderProps = {
  current?: NavLabel;
  className?: string;
  children: React.ReactNode;
};

export function BrandHeader({
  current,
  className,
  children,
}: BrandHeaderProps) {
  return (
    <div className={`${cn("relative isolate bg-brand", className)} bg-grid`}>
      <Navbar current={current} />
      {children}
    </div>
  );
}
