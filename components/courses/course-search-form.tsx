import { Search } from "lucide-react";
import Form from "next/form";

import { Button } from "@/components/ui/button";
import type { QueryParams } from "@/lib/url";
import { cn } from "@/lib/utils";

type CourseSearchFormProps = {
  defaultValue?: string;
  placeholder?: string;
  keep?: QueryParams;
  className?: string;
};

export function CourseSearchForm({
  defaultValue,
  placeholder = "Search",
  keep = {},
  className,
}: CourseSearchFormProps) {
  return (
    <Form
      action="/courses"
      role="search"
      className={cn(
        "flex w-full flex-col gap-3 sm:flex-row sm:gap-4",
        className,
      )}
    >
      <label className="flex h-[52px] items-center gap-2 rounded-3xl bg-white px-6 focus-within:ring-3 focus-within:ring-lime/60 sm:flex-1">
        <Search className="size-6 shrink-0 text-gray-400" aria-hidden />
        <span className="sr-only">Search courses</span>
        <input
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full bg-transparent text-lg text-ink outline-none placeholder:text-gray-400"
        />
      </label>
      {Object.entries(keep).map(
        ([name, value]) =>
          value !== undefined && (
            <input key={name} type="hidden" name={name} value={value} />
          ),
      )}
      <Button type="submit" variant="lime" size="pill" className="font-medium">
        Search
      </Button>
    </Form>
  );
}
