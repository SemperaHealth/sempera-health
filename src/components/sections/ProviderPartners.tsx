import Image from "next/image";
import { links, providerBenefits } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function ProviderPartners() {
  return (
    <section id="provider-partners" aria-labelledby="providers-title" className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Provider Partners</Eyebrow>
          <h2 id="providers-title" className="mt-4 max-w-md text-4xl leading-tight md:text-5xl">
            Building better care together.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
            Sempera partners with physicians, clinics, and healthcare organizations to expand access to
            modern wellness care. Join our growing network of provider partners.
          </p>
          <ul className="mt-8 space-y-4">
            {providerBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-5 text-lg md:text-xl">
                <span aria-hidden className="size-2.5 shrink-0 rounded-full bg-teal" />
                {benefit}
              </li>
            ))}
          </ul>
          <ButtonLink href={links.partner} arrow className="mt-10">
            Get Started
          </ButtonLink>
        </div>

        {/* Illustrative photo — not presented as a specific Sempera clinician. */}
        <Image
          src="/images/clinician.webp"
          alt="Clinician with a tablet talking with a patient in an exam room"
          width={1254}
          height={1254}
          sizes="(min-width: 1024px) 600px, 100vw"
          quality={90}
          className="aspect-[828/746] h-auto w-full rounded-2xl object-cover"
        />
      </Container>
    </section>
  );
}
