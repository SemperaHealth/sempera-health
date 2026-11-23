import { additionalCosts } from "@/lib/site";
import { Container } from "../ui";

export function AdditionalCosts() {
  return (
    <section aria-labelledby="costs-title" className="bg-paper py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_1.6fr] lg:items-center lg:gap-0">
        <h2 id="costs-title" className="text-4xl leading-tight text-teal-600 md:text-5xl lg:pr-12 xl:text-[3.5rem]">
          Some care has <br className="hidden lg:inline" />
          additional costs.
        </h2>

        <div className="lg:border-l lg:border-slate/25 lg:py-8 lg:pl-14 xl:pl-20">
          <p className="text-lg text-slate md:text-xl">
            Depending on your care plan you may have separate costs for:
          </p>
          <ul className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {additionalCosts.map((cost) => (
              <li key={cost} className="flex items-start gap-5 text-lg md:text-xl">
                <span aria-hidden className="mt-2.5 size-2.5 shrink-0 rounded-full bg-teal" />
                {cost}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
