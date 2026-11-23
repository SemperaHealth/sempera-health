import Image from "next/image";
import { links, steps } from "@/lib/site";
import { RevealScope } from "../RevealScope";
import { ButtonLink, Container } from "../ui";

export function GettingStarted() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="on-dark bg-navy-deep py-20 md:py-28"
    >
      <Container className="max-w-6xl">
        <h2 id="how-title" className="text-4xl leading-tight text-white md:text-5xl">
          Getting started is simple
        </h2>

        <RevealScope repeat>
          <ol className="mt-14 md:mt-20">
            {steps.map((step, i) => (
              <li
                key={step.number}
                data-reveal="step"
                className="grid grid-cols-[88px_minmax(0,1fr)] gap-x-3 md:grid-cols-[minmax(0,0.85fr)_128px_minmax(0,1.15fr)] md:gap-x-6"
              >
                {/* Text */}
                <div data-reveal-part="text" className="col-start-2 row-start-1 pt-3 md:col-start-1 md:self-center md:pt-0 md:pr-4">
                  <h3 className="text-2xl text-white md:text-[1.7rem]">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-mist md:text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Marker + dashed connector (stretches the full row so lines join up) */}
                <div className="relative col-start-1 row-span-2 row-start-1 md:col-start-2 md:row-span-1">
                  <span
                    aria-hidden
                    data-reveal-line
                    className="absolute inset-y-0 left-[31px] border-l-2 border-dashed border-teal/60 md:left-[43px]"
                  />
                  <div className="relative flex h-full items-start md:items-center">
                    <StepMarker number={step.number} />
                  </div>
                </div>

                {/* Image */}
                <div data-reveal-part="media" className="col-start-2 row-start-2 pb-14 pt-6 md:col-start-3 md:row-start-1 md:py-16">
                  {/* Hover layer, separate from the scroll-reveal layer on the <li>. */}
                  <div className="group/media isolate overflow-hidden rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-white/10 transition-[translate,box-shadow] duration-[450ms] ease-out pointer-fine:hover:-translate-y-1.5 pointer-fine:hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.55)] motion-reduce:transition-none motion-reduce:pointer-fine:hover:translate-y-0">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      width={1671}
                      height={941}
                      sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 90vw"
                      quality={90}
                      className="h-auto w-full transition-[scale] duration-[450ms] ease-out pointer-fine:group-hover/media:scale-105 motion-reduce:transition-none motion-reduce:pointer-fine:group-hover/media:scale-100"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div data-reveal="soft" className="mt-6 flex justify-center">
            <ButtonLink href={links.getStarted} arrow>
              Get Started
            </ButtonLink>
          </div>
        </RevealScope>
      </Container>
    </section>
  );
}

/** Numbered ring with a pointer toward the step image. */
function StepMarker({ number }: { number: string }) {
  return (
    <span data-reveal-part="marker" className="relative inline-flex">
      <svg viewBox="0 0 128 88" className="h-[64px] w-[93px] md:h-[88px] md:w-[128px]" aria-hidden focusable={false}>
        <path d="M70 18 L128 44 L70 70 Z" className="fill-teal" />
        <circle cx="44" cy="44" r="40" className="fill-navy-deep stroke-teal" strokeWidth="4" />
      </svg>
      <span className="absolute left-0 top-0 flex h-full w-[64px] items-center justify-center text-2xl font-medium text-aqua md:w-[88px] md:text-[2rem]">
        <span className="sr-only">Step </span>
        {number}
      </span>
    </span>
  );
}
