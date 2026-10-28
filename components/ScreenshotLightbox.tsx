"use client";

import { useEffect, useRef } from "react";
import { screenshots, type ScreenshotKey } from "@/lib/data";

type Props = { active: ScreenshotKey | null; onClose: () => void };
export function ScreenshotLightbox({ active, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!active) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") { event.preventDefault(); closeRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [active, onClose]);
  if (!active) return null;
  const shot = screenshots[active];
  return (
    <div className="lightbox" role="dialog" aria-label={`Expanded screenshot: ${shot.label}`} aria-modal="true" aria-hidden="false" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <button className="lightbox-close" ref={closeRef} type="button" onClick={onClose}>Close ✕</button>
      <figure className="lightbox-inner" style={{ margin: 0 }}>
        {/* Images are exported WebP files with their full 16:9 ratio intact. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shot.src} alt={shot.alt}/><figcaption>{shot.label}</figcaption>
      </figure>
    </div>
  );
}
