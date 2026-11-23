import { partnershipSteps } from "@/lib/site";
import { Container } from "../ui";

export function PartnershipSteps() {
  return (
    <section aria-labelledby="partnership-steps-title" className="bg-paper py-20 md:py-24">
      <Container>
        <h2 id="partnership-steps-title" className="text-4xl leading-tight md:text-5xl">
          How partnership works.
        </h2>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5 lg:gap-8">
          {partnershipSteps.map((step, i) => (
            <li key={step} className="relative flex items-center gap-5 lg:flex-col lg:text-center">
              {/* Connector to the next circle (desktop only, none after the last step). */}
              {i < partnershipSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-[34px] left-[calc(50%+34px)] hidden h-px w-[calc(100%+2rem-68px)] bg-navy/25 lg:block"
                />
              )}
              <span className="flex size-[68px] shrink-0 items-center justify-center rounded-full bg-white text-xl font-semibold text-navy ring-1 ring-navy/25">
                <span className="sr-only">Step </span>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg leading-snug text-navy md:text-xl lg:mt-1 lg:max-w-[13rem]">{step}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
