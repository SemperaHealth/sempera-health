import { links } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="border-t border-navy/10 bg-white py-24 md:py-32">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Join Now</Eyebrow>
        <h2 id="cta-title" className="mt-6 text-4xl leading-tight md:text-6xl">
          A Better Way to
          <br /> Wellness Starts Here.
        </h2>
        {/* TODO: "Join thousands of people" is from the design — confirm it's accurate before launch. */}
        <p className="mt-8 max-w-3xl text-lg leading-relaxed md:text-xl">
          Join thousands of people who have discovered a better, simpler, more human way to access
          healthcare and wellness with Sempera.
        </p>
        <ButtonLink href={links.getStarted} arrow className="mt-9">
          Get Started
        </ButtonLink>
      </Container>
    </section>
  );
}
