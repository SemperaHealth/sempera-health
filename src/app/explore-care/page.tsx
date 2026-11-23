import type { Metadata } from "next";
import { CareDetails } from "@/components/explore/CareDetails";
import { CareOverview } from "@/components/explore/CareOverview";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { PersonalCare } from "@/components/explore/PersonalCare";
import { ButtonLink, Container } from "@/components/ui";
import { careJourneySteps, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Explore Care — Sempera Health",
  description:
    "Explore clinician-guided care for hormone health, peptide therapies, weight and metabolic wellness, longevity, sexual wellness, and skin health.",
};

export default function ExploreCarePage() {
  return (
    <>
      <ExploreHero />
      <PersonalCare />
      <CareOverview />
      <CareDetails />

      <section aria-labelledby="care-moves-title" className="on-dark bg-navy-deep py-20 md:py-28">
        <Container>
          <h2 id="care-moves-title" className="text-4xl leading-tight text-white md:text-5xl">
            Care that moves with you.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-mist md:text-xl">
            From exploring your options to follow-up care, your experience is built around your needs.
          </p>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {careJourneySteps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-white/20 px-7 py-10 lg:min-h-72 lg:py-14">
                <span className="text-2xl font-semibold text-aqua">
                  <span className="sr-only">Step </span>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl text-white">{step.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-mist">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="explore-cta-title" className="bg-white py-24 md:py-32">
        <Container className="flex flex-col items-center text-center">
          <h2 id="explore-cta-title" className="max-w-4xl text-4xl leading-tight md:text-5xl">
            A more personalized approach starts with a conversation.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
            Explore your goals, understand your options, and take the next step toward a more proactive approach to your
            health.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-9">
            Get Started
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
