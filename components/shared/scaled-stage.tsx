import { cn } from "@/lib/utils";

type ScaledStageProps = {
  width: number;
  height: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Fixed-size canvas for absolutely positioned illustrations (matching the Figma
 * coordinates) that scales down on phones instead of reflowing.
 */
export function ScaledStage({ width, height, className, children }: ScaledStageProps) {
  return (
    <div
      className={cn("relative mx-auto h-(--h) w-full max-w-(--w) shrink-0 lg:w-(--w) max-sm:h-[calc(var(--h)*0.55)]", className)}
      style={{ "--w": `${width}px`, "--h": `${height}px` } as React.CSSProperties}
    >
      <div className="absolute top-0 left-1/2 h-(--h) w-(--w) -translate-x-1/2 origin-top max-sm:scale-[0.55]">
        {children}
      </div>
    </div>
  );
}
