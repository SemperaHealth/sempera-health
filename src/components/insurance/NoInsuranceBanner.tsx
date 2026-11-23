import Image from "next/image";
import { Container } from "../ui";

export function NoInsuranceBanner() {
  return (
    <section aria-labelledby="no-insurance-title" className="bg-white pb-20 md:pb-28">
      <Container>
        <div className="on-dark grid overflow-hidden rounded-3xl bg-navy-deep lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
            <Image
              src="/images/insurance/clinician-conversation.webp"
              alt="Clinician in navy scrubs listening to a patient in a bright exam room"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              quality={90}
              className="object-cover object-[35%_center]"
            />
            {/* Navy curve forms the photo's right edge on desktop. */}
            <svg
              viewBox="0 0 100 1000"
              preserveAspectRatio="none"
              aria-hidden
              focusable={false}
              className="absolute inset-y-0 -right-px hidden h-full w-[22%] lg:block"
            >
              <path d="M100 0 H40 C72 90 74 300 58 520 C46 690 26 860 0 1000 H100 Z" className="fill-navy-deep" />
            </svg>
          </div>
          <div className="flex flex-col justify-center px-8 py-12 md:px-14 lg:py-16">
            <h2 id="no-insurance-title" className="text-4xl leading-tight text-white md:text-5xl">
              You don&rsquo;t need insurance to get started.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-mist md:text-xl">
              Sempera is designed to make personalized care accessible whether you have insurance or not.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
