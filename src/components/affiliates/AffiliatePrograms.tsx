import Image from "next/image";
import { affiliatePrograms } from "@/lib/site";
import { BadgeCheck } from "../icons";
import { Container, cx } from "../ui";

export function AffiliatePrograms() {
  return (
    <section aria-label="Ambassador and affiliate programs" className="bg-paper py-16 md:py-24">
      <Container>
        <ul className="grid gap-6 lg:grid-cols-2">
          {affiliatePrograms.map((program) => (
            <li
              key={program.title}
              className={cx("relative overflow-hidden rounded-[2rem] px-8 pt-10 pb-44 md:px-12 md:pt-12 lg:pb-14", program.tone)}
            >
              <h2 className="max-w-sm text-4xl leading-tight md:text-[2.6rem]">{program.title}</h2>
              <p className="mt-4 max-w-xs text-lg leading-relaxed text-ink/80">{program.description}</p>
              <ul className="mt-8 space-y-4 lg:max-w-[70%]">
                {program.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base leading-snug text-ink md:text-lg">
                    <BadgeCheck aria-hidden className="mt-0.5 size-6 shrink-0 text-teal" />
                    {point}
                  </li>
                ))}
              </ul>
              <Image
                src={program.illustration}
                alt=""
                width={249}
                height={219}
                unoptimized
                className="absolute right-0 bottom-0 h-auto w-40 md:w-48"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
