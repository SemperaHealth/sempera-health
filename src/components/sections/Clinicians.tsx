import Image from "next/image";
import { clinicianPoints, links } from "@/lib/site";
import { Check } from "../icons";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function Clinicians() {
  return (
    <section aria-labelledby="clinicians-title" className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="mx-auto w-full max-w-xl lg:max-w-none">
          {/* Illustrative photo — not presented as a specific Sempera clinician. */}
          <Image
            src="/images/clinician.webp"
            alt="Smiling clinician holding a tablet while talking with a patient in a bright exam room"
            width={1254}
            height={1254}
            sizes="(min-width: 1024px) 600px, 100vw"
            quality={90}
            className="aspect-square h-auto w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <Eyebrow>Our Clinicians</Eyebrow>
          <h2 id="clinicians-title" className="mt-3 text-4xl leading-tight md:text-5xl">
            Real clinicians. Real guidance.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
            Connect with our nationwide network of clinicians for personalized evaluation, clinical
            guidance, treatment, and ongoing care.
          </p>
          <ul className="mt-8 space-y-4">
            {clinicianPoints.map((point) => (
              <li key={point} className="flex items-start gap-4 text-lg md:text-xl">
                <Check className="mt-1 size-6 shrink-0 text-teal-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href={links.getStarted} arrow className="mt-10">
            Get Started
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
