import Image from "next/image";
import { pricingPlans } from "@/lib/site";
import { Container, Eyebrow, TextLink, cx } from "../ui";

export function PlanCards() {
  return (
    <section aria-labelledby="plans-title" className="bg-white py-20 md:py-24">
      <Container>
        <h2 id="plans-title" className="text-4xl leading-tight md:text-5xl">
          Start with what you need.
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {pricingPlans.map((plan) => (
            <li
              key={plan.tag}
              className="group/card relative flex flex-col rounded-xl bg-paper p-6 shadow-[0_4px_20px_rgba(20,49,89,0.12)] ring-1 ring-navy/5 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(20,49,89,0.2)] has-[a:focus-visible]:outline-3 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-teal-600 motion-reduce:hover:translate-y-0"
            >
              {/* Dark icon, no backing — this section has a light background. */}
              <Image src={plan.icon} alt="" width={64} height={64} unoptimized className="size-16" />
              {/* "GLP-1s" keeps its lowercase "s" (as in the design); other labels are uppercase. */}
              <Eyebrow className={cx("mt-8 text-sm! md:text-[0.95rem]!", "keepCase" in plan && "normal-case!")}>
                {plan.tag}
              </Eyebrow>
              <p className="mt-4 font-serif text-[2.4rem] leading-none text-ink">
                <span className="whitespace-nowrap">From {plan.price}</span>
                {"unit" in plan && (
                  <>
                    <span aria-hidden className="ml-1 align-[-0.6em] text-xl text-slate">
                      {plan.unit}
                    </span>
                    <span className="sr-only"> per month</span>
                  </>
                )}
              </p>
              <p className="mt-6 flex-1 text-base leading-relaxed font-medium md:text-lg">
                {plan.description}
              </p>
              {/* Stretched link makes the whole card clickable while staying a single link. */}
              <TextLink
                href={plan.href}
                className="mt-6 self-start text-base after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-none group-hover/card:underline md:text-lg"
              >
                Learn more<span className="sr-only"> about {plan.tag}</span>
              </TextLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
