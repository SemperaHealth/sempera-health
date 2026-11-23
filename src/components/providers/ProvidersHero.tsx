import Image from "next/image";
import { links, providerHighlights } from "@/lib/site";
import { ButtonLink, Container } from "../ui";

/* Organic outline for the photo, in 0–1 units of its box. The right side is straight because it runs off the page. */
const BLOB =
  "M0.14,0 H1 V0.9 C0.93,0.96 0.86,1 0.78,1 C0.65,1 0.55,0.965 0.42,0.97 C0.3,0.975 0.2,1 0.14,0.93 C0.08,0.86 0.08,0.74 0.045,0.64 C0.01,0.56 -0.005,0.5 0.01,0.42 C0.025,0.33 0.05,0.27 0.04,0.19 C0.03,0.09 0.07,0.035 0.14,0 Z";

export function ProvidersHero() {
  return (
    <section aria-labelledby="providers-hero-title" className="relative overflow-hidden bg-white">
      <svg aria-hidden focusable={false} className="absolute size-0">
        <clipPath id="providers-blob" clipPathUnits="objectBoundingBox">
          <path d={BLOB} />
        </clipPath>
      </svg>

      <div className="relative">
        <Container className="grid lg:min-h-[620px] lg:grid-cols-[minmax(0,1fr)_50%] lg:items-center">
          <div className="pt-16 pb-12 md:pt-24 lg:py-16 lg:pr-10">
            <h1 id="providers-hero-title" className="max-w-2xl text-5xl leading-[1.05] font-semibold md:text-6xl xl:text-7xl">
              Bring more possibilities to your patients.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed md:text-xl">
              Your patients are already asking for more. You don&rsquo;t have to build it all yourself.
            </p>
            <ButtonLink href={links.partner} arrow className="mt-9">
              Discuss Partnership
            </ButtonLink>
          </div>
        </Container>

        {/* Photo hugs the right edge on desktop; full width under the copy on smaller screens. */}
        <div className="relative ml-auto aspect-[1040/900] w-[92%] [clip-path:url(#providers-blob)] lg:absolute lg:top-8 lg:right-0 lg:bottom-0 lg:aspect-auto lg:w-[50%]">
          <Image
            src="/images/providers/hero-clinicians-tablet.webp"
            alt="Physician in a white coat and a nurse in navy scrubs smiling over a tablet at a clinic table"
            fill
            preload
            sizes="(min-width: 1024px) 50vw, 92vw"
            quality={90}
            className="object-cover object-[60%_center]"
          />
        </div>
      </div>

      <Container className="relative py-16 md:py-20">
        <ul className="relative grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {/* Wavy line linking the four dots (desktop). Spans dot centre to dot centre: 12.5% → 87.5%. */}
          <svg
            aria-hidden
            focusable={false}
            viewBox="0 0 300 60"
            preserveAspectRatio="none"
            className="absolute top-0 left-[12.5%] hidden h-[60px] w-[75%] md:block"
          >
            <path
              d="M0 40 C35 75 65 -10 100 40 C135 75 165 -10 200 40 C235 75 265 -10 300 40"
              fill="none"
              className="stroke-teal"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {providerHighlights.map((item) => (
            <li key={item} className="relative flex flex-col items-center text-center md:pt-[32px]">
              <span aria-hidden className="size-4 rounded-full bg-teal ring-4 ring-white" />
              <span className="mt-4 max-w-[12rem] text-lg leading-snug font-medium text-navy md:text-xl">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
