"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

/** Uses the native share sheet when there is one, otherwise copies the link. */
export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => {});
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button type="button" variant="lime" size="pill" onClick={share} className="gap-2 py-2 text-base">
      {copied ? <Check className="size-6" aria-hidden /> : <Share2 className="size-6" aria-hidden />}
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </Button>
  );
}
