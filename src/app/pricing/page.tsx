import type { Metadata } from "next";
import { AdditionalCosts } from "@/components/pricing/AdditionalCosts";
import { HowPricingWorks } from "@/components/pricing/HowPricingWorks";
import { InsuranceNote } from "@/components/pricing/InsuranceNote";
import { PharmacyDelivery } from "@/components/pricing/PharmacyDelivery";
import { PlanCards } from "@/components/pricing/PlanCards";
import { PricingHero } from "@/components/pricing/PricingHero";
import { SemperaDifference } from "@/components/pricing/SemperaDifference";

export const metadata: Metadata = {
  title: "Pricing — Sempera Health",
  description:
    "Clear starting prices for GLP-1s, provider consultations, hormone health and diagnostics. No insurance needed, no contracts, no required membership.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PlanCards />
      <SemperaDifference />
      <HowPricingWorks />
      <AdditionalCosts />
      <InsuranceNote />
      <PharmacyDelivery />
    </>
  );
}
