import Image from "next/image";
import { links } from "@/lib/site";
import { ButtonLink, Container } from "../ui";
import { WaveEdge } from "../WaveEdge";

export function ClinicalHero() {
  return (
    <section aria-labelledby="clinical-hero-title" className="relative overflow-hidden bg-white">
      <Container className="grid lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_47%] lg:items-center">
        <div className="py-16 md:py-24 lg:py-14 lg:pr-12">
          <h1 id="clinical-hero-title" className="max-w-xl text-5xl leading-[1.05] font-semibold md:text-7xl">
            Nationwide clinical care. Personalized to you.
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed md:text-xl">
            Sempera connects you with licensed clinicians who take the time to understand your goals,
            your needs, and what you&rsquo;re looking to accomplish.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-10">
            Get Started
          </ButtonLink>
        </div>
      </Container>

      {/* Photo bleeds to the right edge; a soft wave forms its left edge on desktop. */}
      <div className="relative aspect-[16/10] w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:aspect-auto lg:w-[47%]">
        <Image
          src="/images/clinical/consultation-table.webp"
          alt="Clinician talking with a patient across a table in a bright, calm room"
          fill
          preload
          sizes="(min-width: 1024px) 47vw, 100vw"
          quality={90}
          className="object-cover object-[60%_center]"
        />
        <WaveEdge />
      </div>
    </section>
  );
}
