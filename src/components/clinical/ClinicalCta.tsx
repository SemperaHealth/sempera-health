import { links } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

export function ClinicalCta() {
  return (
    <section aria-labelledby="clinical-cta-title" className="bg-paper py-20 md:py-24">
      <Container className="flex flex-col items-center text-center">
        <h2 id="clinical-cta-title" className="text-4xl leading-tight md:text-5xl">
          Start with what you&rsquo;re looking to accomplish.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
          Tell us about your goals, then connect with a licensed clinician for guidance tailored to you.
        </p>
        <ButtonLink href={links.getStarted} arrow className="mt-9">
          Get Started
        </ButtonLink>
      </Container>
    </section>
  );
}
