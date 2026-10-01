import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({ title, description, size = "lg", className, titleClassName }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center", className)}>
      <h2
        className={cn(
          "font-heading leading-[1.2] font-semibold tracking-[-0.01em] text-[#040819]",
          size === "lg" ? "text-3xl md:text-[44px]" : "text-3xl md:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && <p className="text-base leading-[1.6] text-gray-400 md:text-lg">{description}</p>}
    </div>
  );
}
