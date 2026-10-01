import { cn } from "@/lib/utils";

type TabSectionProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

/** Heading plus content block used inside the course tabs. */
export function TabSection({ title, className, children }: TabSectionProps) {
  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <h2 className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-ink">{title}</h2>
      {children}
    </section>
  );
}

export function TabText({ children }: { children: React.ReactNode }) {
  return <p className="text-base leading-[1.6] text-gray-700">{children}</p>;
}
