import { useId } from "react";
import { cx } from "./ui";

const INFINITY =
  "M24 12c-4.2-5.6-7.6-8-11.2-8C8.4 4 5 7.6 5 12s3.4 8 7.8 8c3.6 0 7-2.4 11.2-8Zm0 0c4.2 5.6 7.6 8 11.2 8 4.4 0 7.8-3.6 7.8-8s-3.4-8-7.8-8C31.6 4 28.2 6.4 24 12Z";

/**
 * Interim SVG recreation of the Sempera infinity mark + wordmark.
 * `stacked` (header) puts the navy→teal mark above the wordmark, as in the nav design;
 * `inline` (footer) keeps the mark beside it. Replace with the brand-kit file when available.
 */
export function Logo({
  tone = "light",
  layout = "inline",
  className,
}: {
  tone?: "light" | "dark";
  layout?: "inline" | "stacked";
  className?: string;
}) {
  const gradientId = useId();
  const word = tone === "light" ? "text-navy" : "text-white";
  const sub = tone === "light" ? "text-teal-600" : "text-aqua";

  if (layout === "stacked") {
    return (
      <span className={cx("inline-flex flex-col items-center", className)}>
        <svg viewBox="0 0 48 24" className="h-8 w-16 shrink-0" aria-hidden focusable={false}>
          <defs>
            <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
              <stop offset="0.15" stopColor="var(--color-navy)" />
              <stop offset="0.5" stopColor="var(--color-navy-line)" />
              <stop offset="0.9" stopColor="var(--color-aqua)" />
            </linearGradient>
          </defs>
          <path d={INFINITY} fill="none" stroke={`url(#${gradientId})`} strokeWidth="4" strokeLinecap="round" />
        </svg>
        <span className={cx("-mt-0.5 pl-[0.3em] text-[1.05rem] leading-none font-normal tracking-[0.3em]", word)}>
          SEMPERA
        </span>
        <span
          className={cx("mt-1 flex items-center gap-1.5 text-[0.5rem] leading-none font-medium tracking-[0.45em]", sub)}
        >
          <span aria-hidden className="h-px w-5 bg-current opacity-70" />
          HEALTH
        </span>
      </span>
    );
  }

  return (
    <span className={cx("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 48 24" className="h-6 w-12 shrink-0 text-teal" aria-hidden focusable={false}>
        <path d={INFINITY} fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cx("text-lg font-medium tracking-[0.28em]", word)}>SEMPERA</span>
        <span className={cx("mt-0.5 text-[0.6rem] font-medium tracking-[0.42em]", sub)}>HEALTH</span>
      </span>
    </span>
  );
}
