import { affiliateSteps } from "@/lib/site";
import { Container } from "../ui";

export function AffiliateSteps() {
  return (
    <section aria-labelledby="affiliate-steps-title" className="bg-teal-wash py-16 md:py-20">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_auto_minmax(0,2fr)] lg:items-center lg:gap-14">
        <h2 id="affiliate-steps-title" className="text-4xl leading-tight md:text-5xl">
          How <br className="hidden lg:inline" />
          it works.
        </h2>
        <span aria-hidden className="hidden h-48 w-0.5 bg-teal lg:block" />

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {affiliateSteps.map((step, i) => (
            <li key={step.title} className="relative">
              {/* Connector from this badge towards the next (desktop only). */}
              {i < affiliateSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-[34px] left-[80px] hidden h-0.5 w-[calc(100%+2rem-92px)] bg-teal/30 md:block"
                />
              )}
              <span className="flex size-[68px] items-center justify-center rounded-full bg-[#a8dcd9] text-xl font-semibold text-navy">
                <span className="sr-only">Step </span>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-2xl leading-snug font-semibold">{step.title}</h3>
              <p className="mt-2 max-w-xs text-lg leading-relaxed text-ink/85">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
