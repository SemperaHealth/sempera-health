"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Fraction of an element that must be visible before it reveals. */
const REVEAL_AT = 0.2;

/**
 * Reveals each `[data-reveal]` descendant independently as it scrolls into
 * view (styles live in globals.css). By default an element stays visible once
 * revealed; with `repeat`, it re-hides when fully off-screen and animates in
 * again on return, entering from above when the user is scrolling up.
 *
 * Content is only hidden when the `js` class is on <html> (set by an inline
 * script in the root layout), so it stays visible if JavaScript never runs.
 */
export function RevealScope({
  children,
  className,
  repeat = false,
}: {
  children: ReactNode;
  className?: string;
  repeat?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const reveal = (el: Element) => el.setAttribute("data-revealed", "");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      items.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio >= REVEAL_AT) {
            reveal(el);
            if (!repeat) observer.unobserve(el);
          } else if (repeat && !entry.isIntersecting) {
            // Fully off-screen: reset, remembering which edge it left by so the
            // next reveal slides in from that side.
            el.removeAttribute("data-revealed");
            el.setAttribute("data-reveal-from", entry.boundingClientRect.top < 0 ? "above" : "below");
          }
        }
      },
      { threshold: [0, REVEAL_AT], rootMargin: "0px 0px -5% 0px" },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
