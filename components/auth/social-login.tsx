import Image from "next/image";

const providers = [
  { name: "Facebook", icon: "/images/icons/facebook.svg" },
  { name: "Google", icon: "/images/icons/google.svg" },
];

/** Social sign-in buttons from the design; providers aren't wired up yet. */
export function SocialLogin() {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex w-full items-center gap-3 text-lg text-[#888]">
        <span className="h-px flex-1 bg-gray-200" />
        or
        <span className="h-px flex-1 bg-gray-200" />
      </div>
      <div className="flex gap-4">
        {providers.map((p) => (
          <button
            key={p.name}
            type="button"
            disabled
            title={`${p.name} sign-in coming soon`}
            aria-label={`Continue with ${p.name} (coming soon)`}
            className="grid size-[72px] place-items-center rounded-3xl border border-[#d1d1d1] transition-colors disabled:cursor-not-allowed enabled:hover:bg-gray-50"
          >
            <Image src={p.icon} alt="" width={40} height={40} />
          </button>
        ))}
      </div>
    </div>
  );
}
