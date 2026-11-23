import Image from "next/image";
import Link from "next/link";
import { hubTopics } from "@/lib/site";
import { Container } from "../ui";

/* Left padding matches the page container so the first card lines up with the heading;
   the row then runs off the right edge and scrolls sideways. */
const gutter =
  "pl-4 sm:max-lg:pl-6 lg:max-xl:pl-8 xl:max-wide:pl-[calc((100%-80rem)/2+2rem)] wide:pl-[calc((100%-1376px)/2+2rem)]";

export function HubTopics() {
  return (
    <section aria-labelledby="topics-title" className="on-dark bg-navy-deep py-20 md:py-24">
      <Container>
        <h2 id="topics-title" className="text-4xl leading-tight text-white md:text-5xl">
          Explore by topic
        </h2>
      </Container>

      <div className="mt-12 overflow-x-auto pb-4 [scrollbar-color:var(--color-navy-line)_transparent] [scrollbar-width:thin]">
        <ul className={`flex w-max snap-x gap-3 pr-4 sm:pr-6 lg:pr-8 ${gutter}`}>
          {hubTopics.map((topic) => (
            <li key={topic.label} className="snap-start">
              <Link
                href={`/knowledge-hub?q=${encodeURIComponent(topic.query)}#guides`}
                className="flex h-48 w-52 flex-col items-center justify-center gap-5 rounded-2xl bg-white px-4 text-center ring-1 ring-white/10 transition-[translate,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 motion-reduce:hover:translate-y-0"
              >
                <Image src={topic.icon} alt="" width={240} height={240} unoptimized className="size-14" />
                <span className="text-lg leading-snug font-medium text-slate">{topic.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
