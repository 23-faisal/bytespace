import { PlayCircle, Video } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatDuration } from "@/lib/format";
import type { Section } from "@/lib/queries/types";

/** Course modules as an accordion; each opens to its lessons. */
export function LessonList({ sections }: { sections: Section[] }) {
  return (
    <Accordion
      multiple
      defaultValue={sections[0] ? [String(sections[0].id)] : []}
      className="gap-6"
    >
      {sections.map((section, i) => (
        <AccordionItem
          key={section.id}
          value={String(section.id)}
          className="border-none"
        >
          <AccordionTrigger className="items-center gap-3 rounded-3xl p-0 text-left hover:no-underline **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-gray-700">
            <span className="grid size-[72px] shrink-0 place-items-center rounded-3xl bg-lime">
              <Video className="size-10 text-ink" aria-hidden />
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-base leading-[1.2] font-medium text-ink">
                Module {i + 1}: {section.title}
              </span>
              <span className="text-base leading-[1.6] font-normal text-gray-700">
                {section.summary}
              </span>
              <span className="text-sm leading-[1.2] font-normal text-gray-400">
                {section.lessons.length} lessons,{" "}
                {formatDuration(section.minutes)}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-0 sm:pl-[85px]">
            <ol className="flex flex-col divide-y divide-gray-100 rounded-2xl border border-gray-100">
              {section.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className="flex items-center gap-3 px-4 py-3 text-base"
                >
                  <PlayCircle
                    className="size-5 shrink-0 text-brand"
                    aria-hidden
                  />
                  <span className="min-w-0 flex-1 leading-[1.4] text-ink">
                    {lesson.title}
                  </span>
                  {lesson.isPreview && (
                    <span className="rounded-3xl bg-lime px-2 py-0.5 text-xs leading-5 font-medium text-ink">
                      Preview
                    </span>
                  )}
                  <span className="shrink-0 text-brand">
                    {formatDuration(lesson.durationMinutes)}
                  </span>
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
