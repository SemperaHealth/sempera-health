import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { CareFlow } from "@/components/pharmacy/CareFlow";
import { CompoundingTypes } from "@/components/pharmacy/CompoundingTypes";
import { PharmacyHero } from "@/components/pharmacy/PharmacyHero";
import { PharmacyNetwork } from "@/components/pharmacy/PharmacyNetwork";

export const metadata: Metadata = {
  title: "Pharmacy — Sempera Health",
  description:
    "How Sempera connects clinician-approved prescriptions with pharmacy partners for fulfillment and delivery, and what 503A and 503B pharmacies mean.",
};

export default function PharmacyPage() {
  return (
    <>
      <PharmacyHero />
      <PharmacyNetwork />
      <CompoundingTypes />
      <CareFlow />
      <PageCta id="pharmacy-cta-title" title="Your care plan can move forward from here.">
        Start with your goals. A licensed clinician can help determine what may be appropriate and connect eligible
        prescriptions with pharmacy fulfillment.
      </PageCta>
    </>
  );
}
