import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  className?: string;
  trackClassName?: string;
};

export function ProgressBar({ value, className, trackClassName }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-[200px] rounded-3xl bg-[#f6f6f6]", trackClassName, className)}
    >
      <div className="h-full rounded-3xl bg-lime" style={{ width: `${value}%` }} />
    </div>
  );
}
