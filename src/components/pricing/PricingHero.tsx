import Image from "next/image";
import { links } from "@/lib/site";
import { ButtonLink, Container } from "../ui";
import { WaveEdge } from "../WaveEdge";

export function PricingHero() {
  return (
    <section aria-labelledby="pricing-hero-title" className="relative overflow-hidden bg-white">
      {/* Side-by-side from 1280px up; narrower windows stack the photo under the copy so neither gets squeezed. */}
      <Container className="grid xl:min-h-[600px] xl:grid-cols-[minmax(0,1fr)_45%] xl:items-center">
        <div className="py-16 md:py-24 xl:py-14 xl:pr-12">
          <h1
            id="pricing-hero-title"
            className="text-5xl leading-[1.05] font-semibold md:text-7xl"
          >
            Clear pricing.
            <br /> No surprises.
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
            Personalized care shouldn&rsquo;t come with confusing pricing or a membership you don&rsquo;t
            need.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed md:text-xl">
            At Sempera, you pay for the care you need with straightforward starting prices and no
            required commitment.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-10">
            Get Started
          </ButtonLink>
          <p className="mt-4 text-base text-slate">
            No insurance needed. No contracts. No monthly membership or subscription.
          </p>
        </div>
      </Container>

      {/* Photo bleeds to the right edge with a soft wave on its left on wide screens; stacks below on smaller ones. */}
      <div className="relative aspect-[4/3] w-full md:aspect-[16/9] xl:absolute xl:right-0 xl:top-0 xl:bottom-0 xl:aspect-auto xl:w-[45%]">
        <Image
          src="/images/pricing-hero-consultation.webp"
          alt="Clinician in a cream blazer talking through a plan with a patient at a table by a large window"
          fill
          preload
          sizes="(min-width: 1280px) 45vw, 100vw"
          quality={90}
          className="object-cover object-[90%_center]"
        />
        <WaveEdge from="xl" />
      </div>
    </section>
  );
}
