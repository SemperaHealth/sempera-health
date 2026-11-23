import Image from "next/image";
import { links } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function Diagnostics() {
  return (
    <section aria-labelledby="diagnostics-title" className="bg-white py-20 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Image
          src="/images/diagnostics-kit.webp"
          alt="Sempera at-home diagnostic kit laid out with its box, instructions, sample tube, swab, and specimen return bag"
          width={936}
          height={622}
          sizes="(min-width: 1024px) 640px, 100vw"
          quality={90}
          className="h-auto w-full rounded-xl"
        />

        <div>
          <Eyebrow>Diagnostics</Eyebrow>
          <h2 id="diagnostics-title" className="mt-4 text-4xl leading-tight md:text-5xl">
            Clarity through better data
          </h2>
          <p className="mt-6 text-lg md:text-xl">Testing doesn’t have to be where your journey begins.</p>
          <p className="mt-6 text-lg leading-relaxed md:text-xl">
            When clinically appropriate, Sempera offers diagnostic testing starting at $99 to provide
            additional information that can help inform your care.
          </p>
          <p className="mt-4 text-lg font-medium leading-relaxed text-ink md:text-xl">
            Your clinician can determine whether additional information could help inform your care.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-10">
            Get Started
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
