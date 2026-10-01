"use client";

import { Check } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export type FilterOption = { label: string; href: string; active: boolean };

type FilterMenuProps = {
  icon: React.ReactNode;
  label: string;
  /** Shown instead of the label once a value is picked. */
  value?: string;
  options: FilterOption[];
  align?: "start" | "end";
};

export const chipClassName =
  "inline-flex h-12 shrink-0 items-center gap-1 rounded-3xl border bg-white px-4 text-base leading-[1.2] font-medium text-gray-700 transition-colors outline-none hover:border-gray-400 focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:text-ink";

export function FilterMenu({ icon, label, value, options, align = "start" }: FilterMenuProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={cn(chipClassName, value ? "border-ink text-ink" : "border-gray-200")}>
        {icon}
        {value ?? label}
        {value && <span className="sr-only">, change {label.toLowerCase()}</span>}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-auto min-w-52 rounded-2xl p-2">
        <DropdownMenuLabel className="px-2 text-xs text-gray-400">{label}</DropdownMenuLabel>
        {options.map((option) => (
          <DropdownMenuItem key={option.label} asChild className="rounded-xl px-2 py-2 text-base text-gray-700">
            <Link href={option.href} scroll={false} aria-current={option.active ? "true" : undefined}>
              {option.label}
              {option.active && <Check className="ml-auto text-brand" aria-hidden />}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
