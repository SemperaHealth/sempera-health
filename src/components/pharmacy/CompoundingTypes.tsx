import { compoundingTypes } from "@/lib/site";
import { Check } from "../icons";
import { Container, cx, Eyebrow } from "../ui";

export function CompoundingTypes() {
  return (
    <section aria-labelledby="compounding-title" className="on-dark bg-navy py-20 md:py-28">
      <Container>
        <Eyebrow tone="dark">Pharmacy Capabilities</Eyebrow>
        <h2 id="compounding-title" className="mt-4 text-4xl leading-tight text-white md:text-5xl">
          Understanding 503A and 503B.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
          Both can play a role in medication access, but they operate differently. Here&rsquo;s the distinction in
          plain language.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {compoundingTypes.map((type, i) => (
            <article
              key={type.code}
              className={cx(
                "rounded-2xl border border-white/15 p-8 md:p-10",
                i === 0 ? "bg-white/[0.03]" : "bg-white/[0.08]",
              )}
            >
              <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-6">
                <Eyebrow tone="dark">{type.eyebrow}</Eyebrow>
                <span className="font-serif text-4xl text-mist/70 md:text-5xl">{type.code}</span>
              </div>
              <h3 className="mt-8 text-2xl leading-snug text-white md:text-3xl">{type.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-mist">{type.description}</p>
              <ul className="mt-8 space-y-4">
                {type.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-lg text-white">
                    <Check aria-hidden className="mt-1 size-5 shrink-0 text-aqua" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-4xl border-l-4 border-teal pl-5 text-base leading-relaxed text-mist md:text-lg">
          Compounded medications are not FDA-approved. The FDA does not verify their safety, effectiveness, or quality
          before they are marketed. Availability and pharmacy selection depend on the prescription, clinical
          appropriateness, applicable law, and pharmacy capabilities.
        </p>
      </Container>
    </section>
  );
}
