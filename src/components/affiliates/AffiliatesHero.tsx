import Image from "next/image";
import { links } from "@/lib/site";
import { ButtonLink, Container } from "../ui";
import { WaveEdge } from "../WaveEdge";

export function AffiliatesHero() {
  return (
    <section aria-labelledby="affiliates-hero-title" className="relative overflow-hidden bg-white">
      <Container className="grid lg:min-h-[600px] lg:grid-cols-[minmax(0,1fr)_53%] lg:items-center">
        <div className="py-16 md:py-24 lg:py-14 lg:pr-12">
          <h1 id="affiliates-hero-title" className="text-5xl leading-[1.05] font-semibold md:text-7xl">
            Sharing is caring.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl">
            Help more people discover a better way to wellness while unlocking opportunities, exclusive savings, and
            collaborations with Sempera.
          </p>
          <ButtonLink href={links.affiliates} arrow className="mt-9">
            Get Started
          </ButtonLink>
        </div>
      </Container>

      <div className="relative aspect-[4/3] w-full lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:aspect-auto lg:w-[53%]">
        <Image
          src="/images/affiliates/hero-community.webp"
          alt="Wellness advocate sharing handouts with a group of friends in activewear at a park table"
          fill
          preload
          sizes="(min-width: 1024px) 53vw, 100vw"
          quality={90}
          className="object-cover object-[35%_center]"
        />
        <WaveEdge />
      </div>
    </section>
  );
}
