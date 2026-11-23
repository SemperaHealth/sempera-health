import Image from "next/image";
import Link from "next/link";
import { links, wellnessCategories } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function AdvancedWellness() {
  return (
    <section id="advanced-wellness" aria-labelledby="wellness-title" className="bg-paper py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Advanced Wellness &amp; Longevity</Eyebrow>
        <h2 id="wellness-title" className="mt-6 max-w-4xl text-4xl leading-tight md:text-6xl">
          More ways to support how you want to feel
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed md:text-xl">
          Explore the broader Sempera wellness ecosystem, with personalized clinical guidance across
          wellness, healthy aging, recovery, and performance.
        </p>
        <ButtonLink href={links.getStarted} arrow className="mt-9">
          Get Started
        </ButtonLink>

        {/* 4 + 3 on desktop, last row centred — mirrors the approved layout. */}
        <ul className="mt-16 flex max-w-[1136px] flex-wrap justify-center gap-x-4 gap-y-8 sm:gap-x-6 lg:mt-20 lg:gap-x-9 lg:gap-y-12">
          {wellnessCategories.map((c) => (
            <li
              key={c.label}
              className="w-[calc((100%-1rem)/2)] sm:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-6.75rem)/4)]"
            >
              <Link
                href={links.getStarted}
                className="group block h-full overflow-hidden rounded-xl transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(20,49,89,0.16)] motion-reduce:hover:translate-y-0"
              >
                <div className="relative aspect-[257/290] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw"
                    quality={90}
                    className="object-cover transition-[scale] duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
                  />
                </div>
                {/* White label overlaps the photo slightly, as in the design. */}
                <span className="relative -mt-3 flex min-h-[4.5rem] items-center justify-center rounded-t-lg bg-white px-4 py-3 text-base leading-snug text-ink md:text-lg">
                  {c.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
