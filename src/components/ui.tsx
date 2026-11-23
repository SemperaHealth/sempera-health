import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "./icons";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Page-width wrapper. Content is 1280px max, widening to 1376px from the `wide`
 * breakpoint (1400px) so fixed-size design elements fit. Sections that set their
 * own max-w-* (e.g. the FAQ) keep it at every width.
 */
export function Container({ className, ...props }: ComponentProps<"div">) {
  const customWidth = /(^|[\s:])max-w-/.test(className ?? "");
  return (
    <div
      className={cx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", !customWidth && "wide:max-w-[1376px]", className)}
      {...props}
    />
  );
}

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cx(
        "text-sm font-medium uppercase tracking-[0.06em] md:text-base",
        tone === "light" ? "text-teal-600" : "text-aqua",
        className,
      )}
    >
      {children}
    </p>
  );
}

const variants = {
  /** Filled teal — the main call to action. */
  primary: "bg-teal-600 text-white shadow-sm hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-700/30",
  /** Filled navy — solid secondary action, distinct from the teal primary. */
  navy: "bg-navy text-white shadow-sm hover:bg-navy-deep hover:shadow-lg hover:shadow-navy/35",
  /** Filled white — solid secondary action on dark or photographic backgrounds. */
  light: "bg-white text-navy shadow-sm hover:bg-cream hover:shadow-lg hover:shadow-black/30",
  /** Outlined navy — secondary action on light backgrounds. */
  secondary: "border-2 border-navy text-navy hover:bg-navy hover:text-white hover:shadow-lg hover:shadow-navy/30",
  /** Outlined white — secondary action on dark or photographic backgrounds. */
  inverse: "border-2 border-white/85 text-white hover:bg-white hover:text-navy hover:shadow-lg hover:shadow-black/30",
} as const;

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({
  variant = "primary",
  arrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cx(
        "group/btn inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-base font-medium md:text-lg",
        // Hover: lift slightly with a soft shadow; press settles back down.
        "transition-[color,background-color,border-color,translate,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm motion-reduce:hover:translate-y-0",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && (
        <ArrowRight className="size-[1.1em] transition-[translate] duration-200 ease-out group-hover/btn:translate-x-0.5 motion-reduce:group-hover/btn:translate-x-0" />
      )}
    </Link>
  );
}

export function TextLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cx(
        "inline-flex items-center gap-1.5 font-medium text-teal-600 underline-offset-4 hover:underline",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight className="size-[1.05em]" />
    </Link>
  );
}
