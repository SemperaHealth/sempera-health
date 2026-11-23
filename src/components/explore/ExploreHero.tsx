import Image from "next/image";
import { links } from "@/lib/site";
import { ButtonLink, Container } from "../ui";
import { WaveEdge } from "../WaveEdge";

export function ExploreHero() {
  return (
    <section aria-labelledby="explore-hero-title" className="relative overflow-hidden bg-white">
      <Container className="grid lg:min-h-[600px] lg:grid-cols-[minmax(0,1fr)_50%] lg:items-center">
        <div className="py-16 md:py-24 lg:py-14 lg:pr-12">
          <h1 id="explore-hero-title" className="max-w-xl text-5xl leading-[1.05] font-semibold md:text-7xl">
            A better way to feel your best.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl">
            Explore personalized wellness programs, advanced therapies, and clinician-guided care designed around your
            goals, your needs, and every stage of life.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-9">
            Get Started
          </ButtonLink>
        </div>
      </Container>

      {/* TODO: swap for the full-resolution photo (currently cropped from the design file). */}
      <div className="relative aspect-[4/3] w-full lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:aspect-auto lg:w-[50%]">
        <Image
          src="/images/explore/hero-jogging.webp"
          alt="Smiling couple jogging together along a leafy park path"
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={90}
          className="object-cover object-[40%_center]"
        />
        <WaveEdge />
      </div>
    </section>
  );
}
