import Link from "next/link";
import { careAreas, links } from "@/lib/site";
import { ArrowRight } from "../icons";
import { Container, cx } from "../ui";

const cardBase =
  "group relative flex h-full min-h-[150px] flex-col justify-end overflow-hidden rounded-xl p-6 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(20,49,89,0.16)] motion-reduce:hover:translate-y-0";

export function CareAreas() {
  return (
    <section aria-labelledby="areas-title" className="bg-paper py-20 md:py-28">
      <Container>
        <h2 id="areas-title" className="max-w-2xl text-4xl leading-tight md:text-5xl">
          Care across the areas that matter to you.
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-5">
          {/* Layout: feature card spans 2 rows on the left; the other 8 auto-fill 2 + 2 beside it, then 4 across. */}
          {/* Feature card — photography pending, so it uses the same soft gradient as the homepage cards. */}
          <li className="sm:col-span-2 lg:col-span-6 lg:row-span-2">
            <Link
              href={links.getStarted}
              className={cx(
                cardBase,
                "isolate min-h-[320px] bg-gradient-to-br from-[#5f8fa6] via-[#3d6a87] to-navy text-white",
              )}
            >
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/40 to-navy/0" />
              <span className="font-serif text-2xl md:text-3xl">Weight and Metabolic Health</span>
              <span className="mt-3 inline-flex items-center gap-1.5 font-medium group-hover:underline">
                Explore Care <ArrowRight className="size-[1.05em]" />
              </span>
            </Link>
          </li>

          {careAreas.map((area) => (
            <li key={area} className="lg:col-span-3">
              <Link href={links.getStarted} className={cx(cardBase, "bg-white ring-1 ring-navy/10")}>
                <span className="font-serif text-2xl leading-snug text-navy md:text-[1.7rem]">{area}</span>
                <span className="mt-3 inline-flex items-center gap-1.5 font-medium text-teal-600 group-hover:underline">
                  Explore Care <ArrowRight className="size-[1.05em]" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
