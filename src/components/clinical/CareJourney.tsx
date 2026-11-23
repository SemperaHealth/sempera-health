import { careJourney } from "@/lib/site";
import { Container } from "../ui";

export function CareJourney() {
  return (
    <section aria-labelledby="journey-title" className="bg-teal-wash py-20 md:py-24">
      <Container>
        <h2 id="journey-title" className="text-4xl leading-tight md:text-5xl lg:text-center">
          Your care. Your clinician. Your journey.
        </h2>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {careJourney.map((step, i) => (
            <li key={step.title} className="relative lg:text-center">
              {/* Desktop connector: runs from this circle to the next one (none after the last step). */}
              {i < careJourney.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[calc(50%+34px)] top-[34px] hidden h-px w-[calc(100%+2rem-68px)] bg-navy/25 lg:block"
                />
              )}
              {/* Centred over its column on desktop; left-aligned when the steps stack. */}
              <span className="flex size-[68px] items-center justify-center rounded-full bg-paper text-xl font-semibold text-navy ring-1 ring-navy/20 lg:mx-auto">
                <span className="sr-only">Step </span>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-2xl leading-snug">{step.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/85">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
