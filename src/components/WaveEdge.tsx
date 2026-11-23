import { cx } from "./ui";

/**
 * White wave that forms the soft left edge of a photo bleeding off the right
 * side of a hero (Pricing and Clinical Care). Place inside the photo's
 * positioned wrapper; it stretches to the wrapper's full height. `from` is the
 * breakpoint where the photo sits beside the copy (the wave is hidden below it).
 */
export function WaveEdge({ from = "lg", className }: { from?: "lg" | "xl"; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      className={cx("absolute inset-y-0 -left-px hidden h-full w-[13%]", from === "lg" ? "lg:block" : "xl:block", className)}
      aria-hidden
      focusable={false}
    >
      <path
        d="M0 0 H30 C52 30 60 80 52 140 C42 200 2 260 4 340 C6 420 60 470 60 560 C60 650 20 700 20 800 C20 880 30 950 4 1000 H0 Z"
        className="fill-white"
      />
    </svg>
  );
}
