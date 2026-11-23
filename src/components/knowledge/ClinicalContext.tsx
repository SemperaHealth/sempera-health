import Image from "next/image";
import { clinicalContext } from "@/lib/site";
import { Container } from "../ui";

export function ClinicalContext() {
  return (
    <section aria-labelledby="context-title" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-12 rounded-3xl bg-teal-wash px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10">
          <div>
            <h2 id="context-title" className="text-4xl leading-tight md:text-5xl">
              Clinical context matters
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/85 md:text-xl">
              Get the facts, explore your options, and feel more confident in your care decisions, with information
              you can trust.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {clinicalContext.map((item) => (
              <li
                key={item.label}
                className="flex flex-col items-center gap-5 border-teal/45 px-3 text-center sm:border-l sm:py-2"
              >
                <Image src={item.icon} alt="" width={240} height={240} unoptimized className="size-16" />
                <span className="text-base leading-snug font-medium text-slate md:text-lg">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
