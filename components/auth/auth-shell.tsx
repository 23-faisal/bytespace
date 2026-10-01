import { Logo } from "@/components/shared/logo";

import { AuthShowcase } from "./auth-showcase";

type AuthShellProps = {
  intro: { title: string; description: string };
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
};


export function AuthShell({
  intro,
  eyebrow,
  heading,
  children,
}: AuthShellProps) {
  return (
    <main className="min-h-screen bg-brand bg-grid">
      <div className="mx-auto flex max-w-[1440px] flex-col px-4 pb-12 sm:px-8 lg:px-[97px] xl:px-[120px]">
        <div className="flex h-[120px] items-center lg:pl-[25px] xl:pl-0">
          <Logo markOnly />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="hidden flex-col gap-[88px] lg:flex">
            <div className="flex max-w-[475px] flex-col gap-4 text-gray-50 lg:pl-[25px] xl:pl-0">
              <h1 className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.01em]">
                {intro.title}
              </h1>
              <p className="text-lg leading-[1.6]">{intro.description}</p>
            </div>
            <div className="xl:-ml-[25px]">
              <AuthShowcase />
            </div>
          </div>

          <section className="mx-auto flex w-full max-w-[579px] flex-col items-center gap-10 rounded-3xl bg-white px-6 py-10 sm:min-h-[784px] sm:px-[63px] sm:py-[61px] lg:mx-0 lg:shrink-0">
            <div className="w-full">
              <p className="text-lg leading-[1.6] text-brand">{eyebrow}</p>
              <h2 className="font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[44px]">
                {heading}
              </h2>
            </div>
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}
