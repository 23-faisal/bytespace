import { Star } from "lucide-react";

import { studentAvatars } from "@/data/seed/landing";
import { cn } from "@/lib/utils";

import { AvatarStack } from "./avatar-stack";
import { ProgressBar } from "./progress-bar";

type CardProps = { className?: string };

const base = "absolute rounded-2xl p-4 backdrop-blur-[10px]";

export function LearningProgressCard({ className, value = 55 }: CardProps & { value?: number }) {
  return (
    <div className={cn(base, "flex flex-col gap-2 bg-white", className)}>
      <p className="text-sm font-medium text-ink">Learning Progress</p>
      <p className="font-heading text-5xl leading-[1.2] font-semibold tracking-[-0.01em] text-ink">
        {value}%
      </p>
      <ProgressBar value={value} />
    </div>
  );
}

export function HappyStudentsCard({ className, variant = "white" }: CardProps & { variant?: "white" | "lime" }) {
  const lime = variant === "lime";
  return (
    <div className={cn(base, "flex w-[258px] flex-col gap-2", lime ? "bg-lime" : "bg-white", className)}>
      <div>
        <p className="font-medium text-ink">Happy Students</p>
        <p className="flex items-center gap-0.5 text-xs text-gray-400">
          <span className="font-bold text-ink">4.5</span> (240)
          <Star className={cn("size-3.5", lime ? "fill-brand text-brand" : "fill-lime text-lime")} />
        </p>
      </div>
      <AvatarStack
        avatars={studentAvatars}
        extra="2K+"
        size="md"
        extraClassName={lime ? "bg-ink text-gray-50" : undefined}
      />
    </div>
  );
}

export function TopicCard({ className }: CardProps) {
  return (
    <div className={cn(base, "bg-white", className)}>
      <p className="font-medium text-ink">UI/UX Design</p>
      <p className="flex items-center gap-2 text-xs text-gray-400">
        200 Courses <span className="text-[10px]">•</span> 1000+ Students
      </p>
    </div>
  );
}

type StatCardProps = CardProps & {
  title: string;
  period: string;
  amount: string;
  delta: string;
  withProgress?: boolean;
};

export function RevenueCard({ className, title, period, amount, delta, withProgress }: StatCardProps) {
  return (
    <div className={cn(base, "flex flex-col gap-2 bg-brand text-gray-50", className)}>
      <div>
        <p className="leading-[1.2] font-medium">{title}</p>
        <p className="text-[10px] leading-[1.2]">{period}</p>
      </div>
      <div className={cn("flex items-center gap-2", withProgress && "w-[200px] justify-between")}>
        <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
        {withProgress && <DeltaPill>{delta}</DeltaPill>}
      </div>
      {withProgress ? <ProgressBar value={56} trackClassName="bg-white" /> : <DeltaPill>{delta}</DeltaPill>}
    </div>
  );
}

function DeltaPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-fit rounded-3xl bg-lime-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-ink">
      {children}
    </span>
  );
}
