import Image from "next/image";
import { affiliateBenefits, links } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function Affiliates() {
  return (
    <section id="affiliates" aria-labelledby="affiliates-title" className="bg-paper py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Illustrative photo — not presented as a specific Sempera clinician. */}
        <Image
          src="/images/clinician.webp"
          alt="Clinician with a tablet talking with a patient in an exam room"
          width={1254}
          height={1254}
          sizes="(min-width: 1024px) 600px, 100vw"
          quality={90}
          className="aspect-[828/780] h-auto w-full rounded-2xl object-cover"
        />

        <div>
          <Eyebrow>Affiliates &amp; Ambassadors</Eyebrow>
          <h2 id="affiliates-title" className="mt-4 text-4xl leading-tight md:text-5xl">
            Share the journey.
            <br /> Earn together.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
            Join the Sempera community as an affiliate or brand ambassador. Share access to better
            healthcare and wellness and earn meaningful rewards for every person you help.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {affiliateBenefits.map((b) => (
              <li
                key={b.title}
                className="rounded-lg bg-white px-6 py-5 ring-1 ring-navy/10 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(20,49,89,0.14)] motion-reduce:hover:translate-y-0"
              >
                <p className="text-lg font-medium text-navy md:text-xl">{b.title}</p>
                <p className="mt-1 text-base text-navy/85">{b.description}</p>
              </li>
            ))}
          </ul>
          <ButtonLink href={links.affiliates} arrow className="mt-10">
            Get Started
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
