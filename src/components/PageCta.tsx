import type { ReactNode } from "react";
import { links } from "@/lib/site";
import { ButtonLink, Container } from "./ui";

/** Dark closing call to action used at the bottom of inner pages (Pharmacy, Knowledge Hub). */
export function PageCta({ id, title, children }: { id: string; title: ReactNode; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="on-dark bg-navy-deep py-20 md:py-28">
      <Container>
        <h2 id={id} className="max-w-3xl text-4xl leading-tight text-white md:text-5xl">
          {title}
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">{children}</p>
        <ButtonLink href={links.getStarted} arrow className="mt-10">
          Get Started
        </ButtonLink>
      </Container>
    </section>
  );
}
