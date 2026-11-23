import Image from "next/image";
import { insurancePlans, insuranceSteps, links } from "@/lib/site";
import { ArrowRight } from "../icons";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function PlansAndSteps() {
  return (
    <section aria-labelledby="plans-title" className="bg-white py-20 md:py-28">
      <Container>
        {/* Plans */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
          <div>
            <h2 id="plans-title" className="text-4xl leading-tight md:text-5xl">
              Coverage that fits your life.
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed md:text-xl">
              Flexible plans for individuals and families, with competitive pricing.
            </p>
            <ButtonLink href={links.getStarted} arrow className="mt-8">
              Get Started
            </ButtonLink>
          </div>

          <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
            {insurancePlans.map((plan) => (
              <li key={plan.label} className="relative isolate min-h-64 overflow-hidden rounded-3xl bg-teal-wash">
                <Image
                  src={plan.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw"
                  quality={85}
                  className="-z-10 object-cover object-right"
                />
                {/* White fade keeps the navy text readable over the photo. */}
                <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/10" />
                <div className="flex h-full flex-col p-8 md:p-10">
                  <span className="flex size-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-navy/10">
                    <Image src={plan.icon} alt="" width={240} height={240} unoptimized className="size-10" />
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-medium text-teal-600">{plan.label}</h3>
                  <p className="mt-6 font-serif text-2xl text-navy">From</p>
                  <p className="font-serif text-navy">
                    <span className="text-5xl">{plan.price}</span>
                    <span className="ml-2 text-2xl text-slate">/month</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* How it works */}
        <div className="mt-24 grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,2fr)] lg:items-center lg:gap-12">
          <div>
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-[2.3rem] xl:text-[2.6rem] wide:text-[2.85rem]">
              <span className="lg:whitespace-nowrap">Simple. Transparent.</span>
              <br /> Built around you.
            </h2>
          </div>
          <span aria-hidden className="hidden h-56 w-0.5 bg-teal lg:block" />
          <ol className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-10">
            {insuranceSteps.map((step, i) => (
              <li key={step.label} className="relative flex flex-col items-center text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-teal/25 text-xl font-semibold text-teal-700">
                  <span className="sr-only">Step </span>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Image src={step.icon} alt="" width={240} height={240} unoptimized className="mt-5 size-16" />
                <span className="mt-5 text-lg leading-snug font-medium text-ink">{step.label}</span>
                {i < insuranceSteps.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    // Centred in the 2.5rem gap, level with the middle of the icon (badge 56 + 20 + half of 64 − half arrow).
                    className="absolute top-24 left-[calc(100%+0.5rem)] hidden size-6 text-teal md:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
