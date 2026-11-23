import Image from "next/image";
import { links } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function PharmacyDelivery() {
  return (
    <section aria-labelledby="delivery-title" className="bg-white py-20 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <Image
          src="/images/pharmacy-bottle.webp"
          alt=""
          width={849}
          height={900}
          sizes="(min-width: 1024px) 352px, 256px"
          quality={90}
          className="pointer-events-none mx-auto h-auto w-52 sm:w-64 lg:mx-0 lg:w-[22rem]"
        />
        <div>
          <Eyebrow>Pharmacy</Eyebrow>
          <h2 id="delivery-title" className="mt-6 text-4xl leading-tight md:text-5xl">
            From your care plan to your doorstep
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink md:text-xl">
            When a prescription is appropriate, our pharmacy partners fulfill and ship your medication
            directly to you.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-9">
            Get Started
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
