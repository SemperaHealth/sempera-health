import type { Metadata } from "next";
import { ClinicalContext } from "@/components/knowledge/ClinicalContext";
import { FeaturedGuides } from "@/components/knowledge/FeaturedGuides";
import { HubHero } from "@/components/knowledge/HubHero";
import { HubTopics } from "@/components/knowledge/HubTopics";
import { PageCta } from "@/components/PageCta";

export const metadata: Metadata = {
  title: "Knowledge Hub — Sempera Health",
  description:
    "Clear information, clinical context, no hype. Guides on GLP-1s, hormone health, peptides, longevity, diagnostics and more.",
};

export default async function KnowledgeHubPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q)?.trim().slice(0, 80) ?? "";

  return (
    <>
      <HubHero query={query} />
      <HubTopics />
      <FeaturedGuides query={query} />
      <ClinicalContext />
      <PageCta id="hub-cta-title" title="Have a question about your care?">
        Tell us what you&rsquo;re looking to accomplish. We&rsquo;ll help you understand the next step.
      </PageCta>
    </>
  );
}
