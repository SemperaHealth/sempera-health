import Image from "next/image";
import { pricingSteps } from "@/lib/site";
import { Container, Eyebrow } from "../ui";

export function HowPricingWorks() {
  return (
    <section aria-labelledby="how-pricing-title" className="on-dark bg-navy py-20 md:py-24">
      <Container>
        <Eyebrow tone="dark">
          <span id="how-pricing-title">How Pricing Works</span>
        </Eyebrow>

        <ol className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {pricingSteps.map((step, i) => (
            <li key={step.title} className={i > 0 ? "lg:border-l lg:border-white/20 lg:pl-12" : "lg:pr-12"}>
              <div className="flex items-center gap-6">
                <span className="flex size-[70px] items-center justify-center rounded-full bg-mist font-serif text-4xl text-navy">
                  <span className="sr-only">Step </span>
                  {i + 1}
                </span>
                {/* Dark icon on a light disc, matching the number circle. */}
                <span className="flex size-[84px] items-center justify-center rounded-full bg-mist">
                  <Image src={step.icon} alt="" width={52} height={52} unoptimized className="size-[52px]" />
                </span>
              </div>
              <h3 className="mt-8 text-2xl leading-snug text-white md:min-h-[2.75em]">{step.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-mist">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
