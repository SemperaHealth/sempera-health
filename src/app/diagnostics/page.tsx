import type { Metadata } from "next";
import {
  AdvancedDiagnostics,
  DepthOptions,
  DiagnosticsContext,
  DiagnosticsHero,
  TestingFits,
} from "@/components/diagnostics/DiagnosticsSections";
import { ButtonLink, Container } from "@/components/ui";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diagnostics — Sempera Health",
  description:
    "Targeted, comprehensive, and ongoing diagnostic testing when it can help, reviewed with your clinician. Diagnostics starting from $99.",
};

export default function DiagnosticsPage() {
  return (
    <>
      <DiagnosticsHero />
      <TestingFits />
      <DiagnosticsContext />
      <DepthOptions />
      <AdvancedDiagnostics />
      <section aria-labelledby="dx-cta-title" className="bg-paper py-24 md:py-32">
        <Container className="flex flex-col items-center text-center">
          <h2 id="dx-cta-title" className="max-w-4xl text-4xl leading-tight md:text-5xl">
            Know more. When knowing more can help.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed md:text-xl">
            Whether you need a specific test or simply want a deeper understanding of your health, Sempera gives you
            access to advanced diagnostics without making testing the center of your care.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-9">
            Get Started
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
