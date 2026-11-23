import Image from "next/image";
import { careFlow } from "@/lib/site";
import { ArrowRight } from "../icons";
import { Container } from "../ui";

export function CareFlow() {
  return (
    <section aria-labelledby="care-flow-title" className="bg-white py-20 md:py-28">
      <Container>
        <h2 id="care-flow-title" className="max-w-3xl text-4xl leading-tight md:text-5xl">
          Care should feel connected, even after the consultation.
        </h2>

        <div className="mt-12 rounded-2xl border-t-[6px] border-teal bg-teal-wash p-6 md:p-10">
          {/* Five identical boxes. Desktop: one row, arrows sit in the gaps so every box gets the same width;
              smaller screens: stacked, arrows pointing down. */}
          <ol className="flex flex-col items-center gap-3 lg:flex-row lg:items-stretch lg:gap-12">
            {careFlow.map((step, i) => (
              <li key={step.title} className="relative flex w-full min-w-0 flex-col items-center gap-3 lg:flex-1">
                <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-white px-4 py-7 text-center lg:px-3 shadow-sm ring-1 ring-navy/10 lg:h-full lg:min-h-48">
                  <Image src={step.icon} alt="" width={240} height={240} unoptimized className="size-16" />
                  <h3 className="text-lg leading-snug md:text-xl lg:min-h-[2lh]">{step.title}</h3>
                </div>
                {i < careFlow.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="size-6 shrink-0 rotate-90 text-teal lg:absolute lg:left-full lg:top-1/2 lg:mx-3 lg:-translate-y-1/2 lg:rotate-0"
                  />
                )}
              </li>
            ))}
          </ol>

          <p className="mt-10 border-t border-navy/15 pt-6 text-base leading-relaxed text-ink/85 md:text-lg">
            Your clinician remains responsible for clinical decisions. Pharmacy partners manage prescription review and
            fulfillment under the requirements that apply to them.
          </p>
        </div>
      </Container>
    </section>
  );
}
