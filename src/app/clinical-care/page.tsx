import type { Metadata } from "next";
import { CareAreas } from "@/components/clinical/CareAreas";
import { CareConversation } from "@/components/clinical/CareConversation";
import { CareJourney } from "@/components/clinical/CareJourney";
import { ClinicalCta } from "@/components/clinical/ClinicalCta";
import { ClinicalHero } from "@/components/clinical/ClinicalHero";
import { ClinicalTeam } from "@/components/clinical/ClinicalTeam";

export const metadata: Metadata = {
  title: "Clinical Care — Sempera Health",
  description:
    "Licensed clinicians who take the time to understand your goals — telehealth care across weight, hormones, longevity and more.",
};

export default function ClinicalCarePage() {
  return (
    <>
      <ClinicalHero />
      <ClinicalTeam />
      <CareConversation />
      <CareAreas />
      <CareJourney />
      <ClinicalCta />
    </>
  );
}
