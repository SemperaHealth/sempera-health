import { AdvancedWellness } from "@/components/sections/AdvancedWellness";
import { Affiliates } from "@/components/sections/Affiliates";
import { Clinicians } from "@/components/sections/Clinicians";
import { Diagnostics } from "@/components/sections/Diagnostics";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ForOrganizations } from "@/components/sections/ForOrganizations";
import { GettingStarted } from "@/components/sections/GettingStarted";
import { HealthInsurance } from "@/components/sections/HealthInsurance";
import { Hero } from "@/components/sections/Hero";
import { KnowledgeHub } from "@/components/sections/KnowledgeHub";
import { Pharmacy } from "@/components/sections/Pharmacy";
import { Pricing } from "@/components/sections/Pricing";
import { Programs } from "@/components/sections/Programs";
import { ProviderPartners } from "@/components/sections/ProviderPartners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <GettingStarted />
      <Clinicians />
      <Diagnostics />
      <Pharmacy />
      <Pricing />
      <HealthInsurance />
      <AdvancedWellness />
      <ForOrganizations />
      <ProviderPartners />
      <Affiliates />
      <KnowledgeHub />
      <Faq />
      <FinalCta />
    </>
  );
}
