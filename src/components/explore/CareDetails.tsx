import Image from "next/image";
import { careDetails, links } from "@/lib/site";
import { ButtonLink, Container, cx, Eyebrow } from "../ui";

/** Six care areas; photo side and background alternate (white/photo-left, teal-wash/photo-right). */
export function CareDetails() {
  return (
    <>
      {careDetails.map((area, i) => {
        const tinted = i % 2 === 1;
        return (
          <section
            key={area.id}
            id={area.id}
            aria-labelledby={`${area.id}-title`}
            className={cx("py-16 md:py-24", tinted ? "bg-teal-wash" : "bg-white")}
          >
            <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <div className={cx("relative aspect-[792/762] overflow-hidden rounded-2xl", tinted && "lg:order-2")}>
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  fill
                  sizes="(min-width: 1400px) 640px, (min-width: 1024px) 46vw, 100vw"
                  quality={90}
                  className="object-cover"
                />
              </div>

              <div>
                {/* teal-700 on the tinted rows: teal-600 is only 4.15:1 on teal-wash. */}
                <Eyebrow className={tinted ? "text-teal-700!" : undefined}>{area.eyebrow}</Eyebrow>
                <h2 id={`${area.id}-title`} className="mt-4 max-w-lg text-4xl leading-tight font-semibold md:text-5xl">
                  {area.title}
                </h2>
                {area.body.map((paragraph) => (
                  <p key={paragraph} className="mt-6 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
                    {paragraph}
                  </p>
                ))}
                {area.tags.length > 0 && (
                  <ul className="mt-8 flex flex-wrap gap-3">
                    {area.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-teal bg-teal/10 px-5 py-2 text-base font-medium text-teal-700 md:text-lg"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
                {area.note && <p className="mt-6 max-w-xl text-base leading-relaxed text-slate">{area.note}</p>}
                <ButtonLink href={links.getStarted} arrow className="mt-9">
                  {area.cta}
                </ButtonLink>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
