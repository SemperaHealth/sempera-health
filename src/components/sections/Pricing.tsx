import { commitments, pricing } from "@/lib/site";
import { BadgeCheck } from "../icons";
import { Container, Eyebrow, TextLink } from "../ui";

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-white py-20 md:py-28">
      <Container>
        <h2 id="pricing-title" className="text-4xl leading-tight md:text-6xl">
          What does it cost?
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {pricing.map((item) => (
            <li
              key={item.tag}
              className="group/card relative flex flex-col rounded-xl bg-white p-6 has-[a:focus-visible]:outline-3 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-teal-600 shadow-[0_4px_20px_rgba(20,49,89,0.12)] ring-1 ring-navy/5 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(20,49,89,0.2)] motion-reduce:hover:translate-y-0"
            >
              <Eyebrow className="text-sm! md:text-[0.95rem]!">{item.tag}</Eyebrow>
              <p className="mt-4 font-serif text-[2.4rem] leading-none text-ink oldstyle-nums">
                <span className="whitespace-nowrap">From {item.price}</span>
                {"unit" in item && (
                  <>
                    <span aria-hidden className="ml-1 align-[-0.6em] text-xl text-slate">
                      {item.unit}
                    </span>
                    <span className="sr-only"> per month</span>
                  </>
                )}
              </p>
              <p className="mt-6 flex-1 text-base leading-relaxed md:text-lg">{item.description}</p>
              {/* Stretched link: the ::after overlay makes the whole card clickable while it stays a single link. */}
              <TextLink
                href={item.href}
                className="mt-6 self-start text-base after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-none group-hover/card:underline md:text-lg"
              >
                Learn more<span className="sr-only"> about {item.tag}</span>
              </TextLink>
            </li>
          ))}
        </ul>

        <div className="mt-24 grid gap-12 lg:mt-32 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-4xl leading-tight md:text-6xl">
              Care without the <br className="hidden sm:inline" />
              <em className="italic">commitment.</em>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
              We believe access to great healthcare shouldn’t come with hidden fees or lock-in
              contracts. Sempera is built on transparency.
            </p>
          </div>

          <ul className="divide-y divide-slate/25 self-center">
            {commitments.map((item) => (
              <li key={item} className="flex items-center gap-4 py-6 first:pt-0 last:pb-0">
                <BadgeCheck className="size-11 shrink-0 text-teal" />
                <span className="text-lg font-medium text-ink md:text-2xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
