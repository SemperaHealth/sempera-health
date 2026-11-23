import Image from "next/image";
import { providerCareAreas } from "@/lib/site";
import { Container } from "../ui";

export function ProviderCareAreas() {
  return (
    <section aria-labelledby="care-areas-title" className="relative overflow-hidden bg-teal-wash">
      {/* Photo bleeds off the left edge on desktop; a soft curve forms its right side. */}
      <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[48%]">
        <Image
          src="/images/providers/care-areas-consultation.webp"
          alt="Clinician with a stethoscope talking with a patient across a desk in a bright exam room"
          fill
          sizes="(min-width: 1024px) 48vw, 100vw"
          quality={90}
          className="object-cover object-[30%_center]"
        />
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          aria-hidden
          focusable={false}
          className="absolute inset-y-0 -right-px hidden h-full w-[24%] lg:block"
        >
          <path d="M100 0 H62 C84 25 94 80 92 190 C89 420 52 760 0 1000 H100 Z" className="fill-teal-wash" />
        </svg>
      </div>

      <Container className="grid lg:min-h-[440px] lg:grid-cols-[48%_minmax(0,1fr)] lg:items-center">
        <div className="py-14 md:py-20 lg:col-start-2 lg:pl-12 xl:pl-16">
          <h2 id="care-areas-title" className="max-w-xl text-4xl leading-tight md:text-5xl">
            Add more care areas for your patients.
          </h2>
          <ul className="mt-10 flex flex-wrap gap-3 md:gap-4">
            {providerCareAreas.map((area) => (
              <li key={area} className="rounded-full bg-white px-5 py-3 text-base text-ink shadow-sm md:px-6 md:text-lg">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
