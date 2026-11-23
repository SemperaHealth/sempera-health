import Image from "next/image";
import { links } from "@/lib/site";
import { ButtonLink, Container } from "../ui";
import { WaveEdge } from "../WaveEdge";

export function PharmacyHero() {
  return (
    <section aria-labelledby="pharmacy-hero-title" className="relative overflow-hidden bg-white">
      <Container className="grid lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_47%] lg:items-center">
        <div className="py-16 md:py-24 lg:py-14 lg:pr-12">
          <h1 id="pharmacy-hero-title" className="max-w-xl text-5xl leading-[1.05] font-semibold md:text-7xl">
            From your care plan to your doorstep.
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
            When your clinician determines that a prescription is appropriate, Sempera makes getting your medication
            simple.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed md:text-xl">
            Prescriptions are sent to pharmacy partners for fulfillment, helping connect your clinical care with a
            convenient delivery experience.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-10">
            Get Started
          </ButtonLink>
        </div>
      </Container>

      {/* Photo bleeds to the right edge; a soft wave forms its left edge on desktop. */}
      <div className="relative aspect-[16/10] w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:aspect-auto lg:w-[47%]">
        <Image
          src="/images/pharmacy/hero-delivery.webp"
          alt="Smiling courier handing a cardboard package to a customer at the door"
          fill
          preload
          sizes="(min-width: 1024px) 47vw, 100vw"
          quality={90}
          className="object-cover object-center"
        />
        <WaveEdge />
      </div>
    </section>
  );
}
