import type { Metadata } from "next";
import { CoverageAreas } from "@/components/insurance/CoverageAreas";
import { InsuranceHero } from "@/components/insurance/InsuranceHero";
import { NoInsuranceBanner } from "@/components/insurance/NoInsuranceBanner";
import { PlansAndSteps } from "@/components/insurance/PlansAndSteps";
import { ButtonLink, Container } from "@/components/ui";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Health Insurance — Sempera Health",
  description:
    "Sempera Health insurance: comprehensive coverage focused on the care you want, from primary care to advanced wellness. Individual and family plans.",
};

export default function HealthInsurancePage() {
  return (
    <>
      <InsuranceHero />
      <CoverageAreas />
      <PlansAndSteps />
      <NoInsuranceBanner />
      <section aria-labelledby="insurance-cta-title" className="bg-white pb-24 md:pb-32">
        <Container className="flex flex-col items-center text-center">
          <h2 id="insurance-cta-title" className="text-4xl leading-tight md:text-5xl">
            More insight. More possibilities.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
            Explore our insurance options and find the right plan for you.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-9">
            Get Started
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
