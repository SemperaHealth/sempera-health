import Image from "next/image";
import Link from "next/link";
import { hubSearchSuggestions } from "@/lib/site";
import { Search } from "../icons";
import { Container } from "../ui";
import { WaveEdge } from "../WaveEdge";

/** The search is a plain GET form, so it works without JavaScript and results land on #guides. */
export function HubHero({ query }: { query: string }) {
  return (
    <section aria-labelledby="hub-hero-title" className="relative overflow-hidden bg-white">
      <Container className="grid lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_45%] lg:items-center">
        <div className="py-16 md:py-24 lg:py-14 lg:pr-12">
          <h1 id="hub-hero-title" className="max-w-2xl text-5xl leading-[1.05] font-semibold md:text-7xl">
            Curious about something? Start here.
          </h1>
          <p className="mt-8 text-xl font-medium text-ink md:text-2xl">Clear information. Clinical context. No hype.</p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed md:text-xl">
            Explore articles, guides, and answers to help you understand your options, treatments, and what to discuss
            with your clinician.
          </p>

          <form role="search" action="/knowledge-hub#guides" method="get" className="mt-10 max-w-xl">
            <label htmlFor="hub-search" className="sr-only">
              Search the Knowledge Hub
            </label>
            <div className="flex items-center gap-3 rounded-full border border-slate/40 bg-white px-5 shadow-sm transition-shadow focus-within:border-teal-600 focus-within:shadow-md">
              <Search className="size-5 shrink-0 text-slate" />
              <input
                id="hub-search"
                type="search"
                name="q"
                defaultValue={query}
                maxLength={80}
                placeholder="What are you curious about?"
                className="h-14 w-full min-w-0 bg-transparent text-lg text-ink placeholder:text-slate focus:outline-none"
              />
              <button type="submit" className="sr-only">
                Search
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="mr-2 text-base md:text-lg">Try searching for:</p>
            {hubSearchSuggestions.map((s) => (
              <Link
                key={s.label}
                href={`/knowledge-hub?q=${encodeURIComponent(s.query)}#guides`}
                className="rounded-full border border-slate/40 px-4 py-2 text-base text-ink transition-[border-color,background-color,translate,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-navy hover:shadow-md motion-reduce:hover:translate-y-0"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <div className="relative aspect-[16/10] w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:aspect-auto lg:w-[45%]">
        <Image
          src="/images/knowledge/hero-laptop.webp"
          alt="Woman with a mug reading on her laptop at a sunny window table"
          fill
          preload
          sizes="(min-width: 1024px) 45vw, 100vw"
          quality={90}
          className="object-cover object-[35%_center]"
        />
        <WaveEdge />
      </div>
    </section>
  );
}
