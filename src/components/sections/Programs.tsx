import Image from "next/image";
import Link from "next/link";
import { links, programs, type Program } from "@/lib/site";
import { ArrowRight, ChevronRight } from "../icons";
import { Container, cx } from "../ui";

export function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="programs-title" className="text-4xl leading-tight md:text-5xl">
            Start with what matters to you
          </h2>
          <Link
            href={links.advancedWellness}
            // Text-only hover: the words lift with a soft drop shadow (no button box).
            className="group/more inline-flex items-center gap-1 self-start text-lg font-medium text-teal-600 transition-[translate,filter] duration-200 ease-out hover:-translate-y-0.5 hover:drop-shadow-[0_4px_6px_rgba(20,49,89,0.28)] active:translate-y-0 motion-reduce:hover:translate-y-0 sm:self-auto"
          >
            More
            <ChevronRight className="size-5 transition-[translate] duration-200 ease-out group-hover/more:translate-x-0.5 motion-reduce:group-hover/more:translate-x-0" />
          </Link>
        </div>

        {/* 2 wide cards on top, 3 below — mirrors the approved layout. */}
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {programs.map((program, i) => (
            // On tablets (2 columns) the fifth card would sit alone, so it spans the full row there.
            <li key={program.tag} className={cx(i < 2 ? "lg:col-span-3" : "lg:col-span-2", "md:max-lg:last:col-span-2")}>
              <ProgramCard program={program} tall={i >= 2} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ProgramCard({ program, tall }: { program: Program; tall: boolean }) {
  return (
    <Link
      href={program.href}
      className={cx(
        "group relative isolate flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl p-6",
        tall ? "lg:min-h-[500px]" : "lg:min-h-[480px]",
        !program.image && cx("bg-gradient-to-br", program.tint),
      )}
    >
      {program.image ? (
        <Image
          src={program.image}
          alt={program.imageAlt ?? ""}
          fill
          sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
          // Top two cards are wide (landscape photos); the three below are tall (portrait photos).
          quality={90}
          className="-z-10 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        // Photography pending: soft decorative texture so the card still reads as finished.
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.55),transparent_45%),radial-gradient(circle_at_20%_60%,rgba(255,255,255,0.25),transparent_40%)]"
        />
      )}
      {/* The photos already fade to navy at the bottom, so this only needs to deepen it a little. */}
      <div
        aria-hidden
        className={cx(
          "absolute inset-0 -z-10 bg-gradient-to-t",
          program.image && !program.plainPhoto ? "from-navy/70 via-navy/20 to-navy/0" : "from-navy via-navy/55 to-navy/0",
        )}
      />

      <span className="self-start rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white md:text-base">
        {program.tag}
      </span>

      <div className="mt-24 text-white">
        <h3 className="text-2xl leading-snug text-white md:text-3xl">{program.title}</h3>
        <p className="mt-3 text-base text-white/90 md:text-lg">{program.description}</p>
        <span className="mt-8 inline-flex items-center gap-1.5 font-medium group-hover:underline">
          Explore Care <ArrowRight className="size-[1.05em]" />
        </span>
      </div>
    </Link>
  );
}
