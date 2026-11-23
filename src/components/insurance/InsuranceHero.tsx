import Image from "next/image";
import { insurancePlans, links } from "@/lib/site";
import { ButtonLink, Container } from "../ui";
import { WaveEdge } from "../WaveEdge";

export function InsuranceHero() {
  const [individual, family] = insurancePlans;

  return (
    <section aria-labelledby="insurance-hero-title" className="relative overflow-hidden bg-white">
      <Container className="grid lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_45%] lg:items-center">
        <div className="py-16 md:py-24 lg:py-14 lg:pr-12">
          <h1 id="insurance-hero-title" className="max-w-2xl text-5xl leading-[1.05] font-semibold md:text-6xl xl:text-7xl">
            Wish your insurance covered more of the care you want?
          </h1>
          <p className="mt-6 text-xl font-medium text-ink md:text-2xl">
            We do too. That&rsquo;s why we created it for you.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
            Sempera Health insurance offers comprehensive coverage with a focus on the care you actually want, from
            primary care to advanced wellness.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-9">
            Get Started
          </ButtonLink>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate">
            Individual plans from <strong className="font-semibold">{individual.price}/month</strong>. Family plans
            from <strong className="font-semibold">{family.price}/month</strong>. Pricing is subject to final plan
            approval, eligibility, state, plan design, and applicable requirements.
          </p>
        </div>
      </Container>

      <div className="relative aspect-[16/10] w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:aspect-auto lg:w-[45%]">
        <Image
          src="/images/insurance/hero-family.webp"
          alt="Parents laughing with their young daughter on a living-room sofa"
          fill
          preload
          sizes="(min-width: 1024px) 45vw, 100vw"
          quality={90}
          className="object-cover object-[65%_center]"
        />
        <WaveEdge />
      </div>
    </section>
  );
}
