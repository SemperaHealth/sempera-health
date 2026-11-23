"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { links, moreNavItems, navItems } from "@/lib/site";
import { CaretDown, Close, Menu } from "../icons";
import { Logo } from "../Logo";
import { ButtonLink, Container, cx } from "../ui";

const linkStyle =
  "inline-flex items-center gap-1 whitespace-nowrap text-base font-medium text-navy transition-[color,translate,filter] duration-200 ease-out hover:-translate-y-0.5 hover:drop-shadow-[0_4px_6px_rgba(20,49,89,0.28)] active:translate-y-0 motion-reduce:hover:translate-y-0 xl:text-[1.05rem]";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const moreRef = useRef<HTMLLIElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  // Close both menus after navigating to another page.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setMoreOpen(false);
  }

  // Close the mobile menu on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // "More" dropdown: close on Escape (focus back to its button) or a click/focus outside it.
  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        moreButtonRef.current?.focus();
      }
    };
    const onOutside = (e: Event) => {
      if (!moreRef.current?.contains(e.target as Node)) setMoreOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("focusin", onOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("focusin", onOutside);
    };
  }, [moreOpen]);

  const current = (href: string) => (href === pathname ? "page" : undefined);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Sempera Health home" className="shrink-0">
          <Logo layout="stacked" />
        </Link>

        <nav aria-label="Main" className="mr-auto hidden lg:ml-4 lg:block xl:ml-10">
          <ul className="flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={current(item.href)} className={linkStyle}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li ref={moreRef} className="relative">
              <button
                ref={moreButtonRef}
                type="button"
                aria-expanded={moreOpen}
                aria-controls="more-menu"
                onClick={() => setMoreOpen((v) => !v)}
                className={linkStyle}
              >
                More
                <CaretDown className={cx("size-5 transition-transform duration-200", moreOpen && "rotate-180")} />
              </button>
              <ul
                id="more-menu"
                hidden={!moreOpen}
                className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl border border-navy/10 bg-white p-2 shadow-lg shadow-navy/10"
              >
                {moreNavItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMoreOpen(false)}
                      className="block rounded-md px-4 py-2.5 text-base font-medium text-navy hover:bg-teal-wash"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href={links.getStarted} arrow className="min-h-12! px-6! max-sm:hidden">
            Get Started
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-navy hover:bg-navy/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <Close className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      <div id="mobile-menu" hidden={!open} className="border-t border-navy/10 bg-white lg:hidden">
        <Container className="py-4">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {[...navItems, ...moreNavItems].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current(item.href)}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 text-lg font-medium text-navy hover:bg-navy/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href={links.getStarted} onClick={() => setOpen(false)} className="mt-4 w-full" arrow>
            Get Started
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
