import type { Metadata } from "next";
import { AffiliatePrograms } from "@/components/affiliates/AffiliatePrograms";
import { AffiliatesHero } from "@/components/affiliates/AffiliatesHero";
import { AffiliateSteps } from "@/components/affiliates/AffiliateSteps";
import { NotAnExpert } from "@/components/affiliates/NotAnExpert";
import { ReferralPerks } from "@/components/affiliates/ReferralPerks";
import { ButtonLink, Container } from "@/components/ui";
import { affiliateAudiences, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliates & Ambassadors — Sempera Health",
  description:
    "Share Sempera with your community. Join as an Ambassador or Affiliate for rewards, exclusive savings, and collaboration opportunities.",
};

export default function AffiliatesPage() {
  return (
    <>
      <AffiliatesHero />
      <AffiliateSteps />
      <AffiliatePrograms />
      <ReferralPerks />
      <NotAnExpert />

      <section aria-labelledby="audiences-title" className="bg-paper py-16 md:py-24">
        <Container>
          <div className="grid gap-10 rounded-3xl bg-teal-wash px-8 py-12 md:px-14 md:py-16 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.3fr)] lg:items-center lg:gap-12">
            <div>
              <h2 id="audiences-title" className="text-4xl leading-tight md:text-5xl">
                A fit for diverse voices
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink md:text-xl">
                We work with people and communities who believe in accessible, personalized, and clinically guided
                wellness.
              </p>
            </div>
            <span aria-hidden className="hidden h-36 w-0.5 bg-teal lg:block" />
            <ul className="flex flex-wrap gap-3">
              {affiliateAudiences.map((audience) => (
                <li key={audience} className="rounded-full bg-white px-5 py-3 text-base text-ink shadow-sm md:text-lg">
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="affiliates-cta-title" className="bg-white py-24 md:py-32">
        <Container className="flex flex-col items-center text-center">
          <h2 id="affiliates-cta-title" className="text-4xl leading-tight md:text-5xl">
            Let&rsquo;s grow wellness together.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
            Choose the program that fits you and start sharing a better way to wellness today.
          </p>
          <ButtonLink href={links.affiliates} arrow className="mt-9">
            Get Started
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
