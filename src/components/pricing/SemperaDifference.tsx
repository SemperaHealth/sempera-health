import { pricingDifference } from "@/lib/site";
import { BadgeCheck } from "../icons";
import { Container, Eyebrow } from "../ui";

export function SemperaDifference() {
  return (
    <section aria-labelledby="difference-title" className="bg-teal-wash py-20 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          {/* Darker teal: teal-600 is only 4.15:1 on this tinted background. */}
          <Eyebrow className="text-teal-700! font-semibold!">The Sempera Difference</Eyebrow>
          <h2 id="difference-title" className="mt-8 text-4xl leading-tight md:text-6xl">
            Care without the <br className="hidden sm:inline" />
            <em className="italic">commitment.</em>
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-relaxed font-semibold text-ink md:text-xl">
            You shouldn&rsquo;t have to pay for a membership just to access personalized care.
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
            Sempera gives you access to clinical consultations, treatments, prescriptions, diagnostics
            and wellness programs without requiring a monthly subscription.
          </p>
        </div>

        <ul className="divide-y divide-slate/25 rounded-2xl bg-white px-6 py-4 sm:px-12 sm:py-8">
          {pricingDifference.map((item) => (
            <li key={item.title} className="flex gap-5 py-6">
              <BadgeCheck className="size-10 shrink-0 text-teal" />
              <div>
                <p className="text-lg font-semibold text-ink md:text-xl">{item.title}</p>
                <p className="mt-2 text-base leading-relaxed text-ink/85 md:text-lg">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
