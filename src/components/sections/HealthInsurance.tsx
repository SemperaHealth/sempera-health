import { insuranceTopics, links } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function HealthInsurance() {
  return (
    <section aria-labelledby="insurance-title" className="on-dark bg-navy-deep py-20 md:py-28">
      <Container>
        <Eyebrow tone="dark">Health Insurance</Eyebrow>
        <h2 id="insurance-title" className="mt-8 text-4xl leading-tight text-white md:text-6xl">
          Wish your insurance <br className="hidden md:inline" />
          covered these options?
          <br /> We do too.
        </h2>
        <p className="mt-5 text-lg text-mist md:text-xl">That&rsquo;s why we created it for you.</p>

        {/* Informational tags, not buttons — the CTA below is the action. */}
        <ul className="mt-9 flex flex-wrap gap-3 md:gap-x-12 md:gap-y-4" aria-label="Options covered">
          {insuranceTopics.map((topic) => (
            <li
              key={topic}
              className="rounded-full border-2 border-mist/60 px-4 py-2 text-lg text-white md:text-xl"
            >
              {topic}
            </li>
          ))}
        </ul>

        <ButtonLink href={links.getStarted} arrow className="mt-10">
          Get Started
        </ButtonLink>
      </Container>
    </section>
  );
}
