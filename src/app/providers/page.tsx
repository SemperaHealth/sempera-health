import type { Metadata } from "next";
import { PartnershipModels } from "@/components/providers/PartnershipModels";
import { ProviderCareAreas } from "@/components/providers/ProviderCareAreas";
import { PartnershipSteps } from "@/components/providers/PartnershipSteps";
import { ProviderServices } from "@/components/providers/ProviderServices";
import { ProvidersHero } from "@/components/providers/ProvidersHero";
import { ButtonLink, Container } from "@/components/ui";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Providers — Sempera Health",
  description:
    "Partner with Sempera to expand your care offerings: turnkey, hybrid, and clinical & fulfillment support models, plus medical directorships and good faith exams.",
};

export default function ProvidersPage() {
  return (
    <>
      <ProvidersHero />
      <PartnershipModels />
      <ProviderServices />
      <ProviderCareAreas />
      <PartnershipSteps />
      <section aria-labelledby="providers-cta-title" className="bg-white py-24 md:py-32">
        <Container className="flex flex-col items-center text-center">
          <h2 id="providers-cta-title" className="text-4xl leading-tight md:text-5xl">
            Let&rsquo;s build what&rsquo;s next.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
            Share a few details about your practice, and our team will be in touch to discuss the right partnership for
            you.
          </p>
          <ButtonLink href={links.partner} arrow className="mt-9">
            Discuss Partnership
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
