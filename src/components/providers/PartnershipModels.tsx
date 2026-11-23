import { partnershipModels } from "@/lib/site";
import { Container, cx } from "../ui";

const steps = [
  { height: "lg:h-[20rem]", wave: "fill-[#a8dcd9]" },
  { height: "lg:h-[22rem]", wave: "fill-[#78c8c3]" },
  { height: "lg:h-[24.5rem]", wave: "fill-teal" },
];

export function PartnershipModels() {
  return (
    <section aria-labelledby="models-title" className="bg-white py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
        <div>
          <h2 id="models-title" className="text-4xl leading-tight md:text-5xl">
            Flexible partnership models for your practice.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed md:text-xl">
            Choose the level of support that fits your goals and your workflow.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3 md:items-end">
          {partnershipModels.map((model, i) => (
            <li
              key={model.title}
              className={cx(
                "relative flex min-h-64 flex-col overflow-hidden rounded-[2rem] bg-teal-wash px-7 pt-8 pb-28",
                steps[i].height,
              )}
            >
              <h3 className="text-2xl leading-snug font-semibold">{model.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink">{model.description}</p>
              <svg
                aria-hidden
                focusable={false}
                viewBox="0 0 100 30"
                preserveAspectRatio="none"
                className="absolute inset-x-0 bottom-0 h-24 w-full"
              >
                <path d="M0 2 C20 0 35 2 50 12 C65 22 80 28 100 30 V30 H0 Z" className={steps[i].wave} />
              </svg>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
