import Image from "next/image";
import Link from "next/link";
import { featuredGuides } from "@/lib/site";
import { Container, cx, Eyebrow } from "../ui";

type Guide = (typeof featuredGuides)[number];

/** Every word of the search must appear in the guide (a trailing "s" is ignored, so "peptides" finds "peptide"). */
function matches(guide: Guide, query: string) {
  const haystack = `${guide.title} ${guide.category} ${guide.keywords}`.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word.replace(/[^a-z0-9-]/g, "").replace(/s$/, "")));
}

export function FeaturedGuides({ query }: { query: string }) {
  const guides = query ? featuredGuides.filter((g) => matches(g, query)) : featuredGuides;
  const left = guides.filter((g) => g.column === "left");
  const right = guides.filter((g) => g.column === "right");

  return (
    <section id="guides" aria-label="Featured guides" className="bg-paper py-20 md:py-28">
      <Container>
        <Eyebrow>Featured Guides</Eyebrow>
        <h2 id="guides-title" className="mt-4 text-4xl leading-tight md:text-5xl">
          Curious about something? Start here.
        </h2>

        {query && (
          <p className="mt-6 text-lg" aria-live="polite">
            {guides.length} {guides.length === 1 ? "guide" : "guides"} for &ldquo;
            <span className="font-medium text-ink">{query}</span>&rdquo;
            <span aria-hidden className="mx-2">
              ·
            </span>
            <Link href="/knowledge-hub#guides" className="font-medium text-teal-600 underline underline-offset-4">
              Show all guides
            </Link>
          </p>
        )}

        {guides.length > 0 ? (
          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-x-10 lg:gap-x-12">
            {[left, right].map((column, i) =>
              column.length ? (
                <ul key={i} className="flex flex-col gap-12">
                  {column.map((guide) => (
                    <li key={guide.title}>
                      <GuideCard guide={guide} />
                    </li>
                  ))}
                </ul>
              ) : null,
            )}
          </div>
        ) : (
          <p className="mt-12 max-w-xl text-lg leading-relaxed">
            We don&rsquo;t have a guide on that yet. Try another topic, or{" "}
            <Link href="/knowledge-hub#guides" className="font-medium text-teal-600 underline underline-offset-4">
              browse all guides
            </Link>
            .
          </p>
        )}
      </Container>
    </section>
  );
}

// Guides aren't written yet, so cards are not links. TODO: link each card to its article page.
function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article>
      <div className={cx("relative overflow-hidden rounded-2xl", guide.tall ? "aspect-[776/463]" : "aspect-[773/301]")}>
        <Image
          src={guide.image}
          alt={guide.imageAlt}
          fill
          sizes="(min-width: 1400px) 660px, (min-width: 768px) 46vw, 100vw"
          quality={90}
          className="object-cover"
        />
      </div>
      <p className="mt-6 text-sm md:text-base">
        <span className="font-medium uppercase tracking-[0.04em] text-teal-600">{guide.category}</span>
        <span aria-hidden className="mx-2.5 text-slate">
          ·
        </span>
        <span className="whitespace-nowrap text-slate">{guide.readTime}</span>
      </p>
      <h3 className="mt-3 text-2xl leading-snug font-semibold md:text-[1.75rem]">{guide.title}</h3>
    </article>
  );
}
