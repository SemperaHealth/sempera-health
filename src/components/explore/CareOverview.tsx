import Link from "next/link";
import { careOverview } from "@/lib/site";
import { ArrowRight } from "../icons";
import { Container, Eyebrow } from "../ui";

export function CareOverview() {
  return (
    <section aria-labelledby="care-overview-title" className="bg-paper py-20 md:py-28">
      <Container>
        <h2 id="care-overview-title" className="text-4xl leading-tight md:text-5xl">
          Wellness designed around you.
        </h2>
        <p className="mt-4 text-lg text-ink md:text-xl">Discover areas of care that align with what matters most to you.</p>

        {/* The last card sits centred on its own row on desktop, as in the design. */}
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {careOverview.map((card) => (
            <li key={card.title} className="lg:last:col-start-2">
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-navy/12 bg-white p-8 transition-[translate,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 motion-reduce:hover:translate-y-0 md:p-9"
              >
                <Eyebrow>{card.eyebrow}</Eyebrow>
                <h3 className="mt-4 text-2xl leading-snug font-semibold">{card.title}</h3>
                <p className="mt-3 text-lg leading-relaxed">{card.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-10 text-lg font-medium text-teal-600">
                  {card.link}
                  <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
