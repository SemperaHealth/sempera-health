import Image from "next/image";
import { coverageAreas } from "@/lib/site";
import { Container, Eyebrow } from "../ui";

export function CoverageAreas() {
  return (
    <section aria-labelledby="coverage-title" className="bg-teal-wash py-20 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.4fr)] lg:items-center lg:gap-10 xl:gap-14">
        <div>
          {/* Darker teal: the standard teal-600 is only 4.15:1 on this tinted background. */}
          <Eyebrow className="text-teal-700!">Comprehensive Coverage</Eyebrow>
          <h2 id="coverage-title" className="mt-6 text-4xl leading-tight md:text-5xl">
            More coverage.
            <br /> More possibilities.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink md:text-xl">
            Comprehensive coverage shouldn&rsquo;t have to come with an extraordinary price.
          </p>
        </div>

        <span aria-hidden className="hidden h-56 w-0.5 bg-teal lg:block" />

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {coverageAreas.map((area) => (
            <li
              key={area.label}
              className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-2xl bg-white px-3 py-6 text-center ring-1 ring-teal/20"
            >
              <Image src={area.icon} alt="" width={240} height={240} unoptimized className="size-14" />
              <span className="text-base leading-snug font-medium text-slate md:text-lg">{area.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
