import Image from "next/image";
import { links } from "@/lib/site";
import { BadgeCheck } from "../icons";
import { ButtonLink, Container, cx, Eyebrow } from "../ui";
import { WaveEdge } from "../WaveEdge";

/*
 * Photos on this page use fixed pixel sizes from 1024px up, so resizing the
 * window never scales them. Below 1024px (tablets/phones) they keep a fixed
 * height and span the screen width, since a fixed width wouldn't fit.
 */

function PriceTag({ className }: { className?: string }) {
  return (
    <p
      className={cx(
        "inline-flex items-baseline gap-4 rounded-xl border border-teal bg-white px-6 py-4 whitespace-nowrap text-teal-600 shadow-sm md:px-7 md:py-5",
        className,
      )}
    >
      <span className="text-base md:text-xl lg:max-xl:text-lg">Diagnostics Starting From</span>
      <span className="font-serif text-4xl">$99</span>
    </p>
  );
}

export function DiagnosticsHero() {
  return (
    <section aria-labelledby="dx-hero-title" className="relative overflow-hidden bg-white">
      <Container className="lg:flex lg:min-h-[600px] lg:items-center">
        <div className="py-16 md:py-24 lg:w-[calc(100%-560px)] lg:py-10 lg:pr-12">
          <h1 id="dx-hero-title" className="max-w-2xl text-5xl leading-[1.05] font-semibold md:max-lg:text-6xl lg:max-xl:text-[2.75rem] xl:text-6xl wide:text-7xl">
            More information when you need it.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed md:max-lg:text-xl xl:text-xl">
            Testing shouldn&rsquo;t be the starting point for everyone. But when you want or need deeper insight,
            Sempera gives you access to advanced, comprehensive diagnostics.
          </p>
          <PriceTag className="mt-9 lg:mt-7" />
          <div>
            <ButtonLink href={links.getStarted} arrow className="mt-8 lg:mt-6">
              Get Started
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* Fixed 560 × 600 from 1024px up, pinned to the right edge. TODO: swap for the full-resolution photo. */}
      <div className="relative h-[320px] w-full sm:h-[420px] lg:absolute lg:top-0 lg:right-0 lg:h-[600px] lg:w-[560px]">
        <Image
          src="/images/diagnostics/hero-lab.webp"
          alt="Lab technician in safety glasses pipetting samples at a bright laboratory bench"
          fill
          preload
          sizes="(min-width: 1024px) 560px, 100vw"
          quality={90}
          className="object-cover object-[60%_center]"
        />
        <WaveEdge />
      </div>
    </section>
  );
}

const testingTypes = [
  {
    title: "Clinically appropriate testing",
    description: "Get testing when it can help inform your treatment plan.",
    icon: "/images/knowledge/icon-clinically-informed.webp",
    dark: false,
  },
  {
    title: "Comprehensive testing",
    description: "Explore a broader range of testing when you want more information.",
    icon: "/images/insurance/icon-diagnostics.webp",
    dark: true,
  },
];

export function TestingFits() {
  return (
    <section aria-labelledby="testing-fits-title" className="bg-white py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)] lg:items-center lg:gap-12">
        <div>
          <h2 id="testing-fits-title" className="text-4xl leading-tight md:text-5xl">
            Testing that fits your care.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
            You don&rsquo;t have to test just because you can. When clinically appropriate, diagnostic testing can
            provide valuable context to inform your care.
          </p>
        </div>
        <span aria-hidden className="hidden h-56 w-0.5 bg-teal/40 lg:block" />
        <ul className="grid gap-5 sm:grid-cols-2">
          {testingTypes.map((type) => (
            <li
              key={type.title}
              className={cx("on-dark rounded-3xl p-7 md:p-8", type.dark ? "bg-navy-deep" : "bg-teal-wash")}
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-white">
                <Image src={type.icon} alt="" width={240} height={240} unoptimized className="size-9" />
              </span>
              <h3 className={cx("mt-5 text-2xl leading-snug font-semibold", type.dark && "text-white")}>{type.title}</h3>
              <p className={cx("mt-3 text-lg leading-relaxed", type.dark ? "text-mist" : "text-ink")}>
                {type.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const contextSteps = [
  { title: "Test", description: "Get the right tests, when you need them.", icon: "/images/knowledge/icon-trusted.webp", tone: "navy" },
  { title: "Understand", description: "Review your results with your clinician.", icon: "/images/knowledge/icon-balanced.webp", tone: "white" },
  { title: "Personalize", description: "Get a care plan tailored to your goals.", icon: "/images/insurance/icon-individual.webp", tone: "white" },
  { title: "Act", description: "Move forward with confidence.", icon: "/images/insurance/icon-step-benefits.webp", tone: "teal" },
] as const;

const contextTones = {
  navy: { card: "on-dark bg-navy-deep", title: "text-white", text: "text-mist" },
  white: { card: "bg-white ring-1 ring-navy/12", title: "", text: "" },
  teal: { card: "bg-[#8ecfcd]", title: "", text: "text-navy" },
} as const;

export function DiagnosticsContext() {
  return (
    <section aria-labelledby="dx-context-title" className="bg-paper py-20 md:py-28">
      <Container className="max-w-5xl text-center">
        <h2 id="dx-context-title" className="text-4xl leading-tight md:text-5xl">
          Clinical context matters
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-ink md:text-xl">
          Get the facts, explore your options, and feel more confident in your care decisions, with information you can
          trust.
        </p>
        <ol className="mt-14 grid gap-6 text-left sm:grid-cols-2 md:gap-8">
          {contextSteps.map((step) => {
            const tone = contextTones[step.tone];
            return (
              <li key={step.title} className={cx("rounded-2xl p-7 md:p-8", tone.card)}>
                <span className="flex size-16 items-center justify-center rounded-full bg-white">
                  <Image src={step.icon} alt="" width={240} height={240} unoptimized className="size-10" />
                </span>
                <h3 className={cx("mt-5 text-2xl font-semibold", tone.title)}>{step.title}</h3>
                <p className={cx("mt-3 text-lg leading-relaxed", tone.text)}>{step.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

const depthOptions = ["Targeted Testing", "Comprehensive Testing", "Ongoing Testing"];

export function DepthOptions() {
  return (
    <section aria-labelledby="depth-title" className="bg-teal-wash py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[540px_minmax(0,1fr)] lg:gap-14 xl:gap-20">
        {/* Fixed 540 × 359 from 1024px up (the photo's own 3:2 shape). */}
        <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-[360px] lg:h-[359px] lg:w-[540px]">
          <Image
            src="/images/diagnostics-kit.webp"
            alt="Sempera at-home diagnostic kit laid out with its box, instructions, sample tube, swab, and specimen return bag"
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            quality={90}
            className="object-cover"
          />
        </div>
        <div>
          <h2 id="depth-title" className="max-w-xl text-4xl leading-tight md:text-5xl">
            Choose the depth that&rsquo;s right for you.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
            Whether you need a targeted test or a more comprehensive panel, Sempera offers flexible options.
          </p>
          <ul className="mt-8 space-y-4">
            {depthOptions.map((option) => (
              <li key={option} className="flex items-center gap-4 text-lg text-ink md:text-xl">
                <BadgeCheck aria-hidden className="size-7 shrink-0 text-teal" />
                {option}
              </li>
            ))}
          </ul>
          <ButtonLink href={links.getStarted} arrow className="mt-10">
            Get Started
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function AdvancedDiagnostics() {
  return (
    <section aria-labelledby="advanced-dx-title" className="bg-white py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-14">
        <div>
          <h2 id="advanced-dx-title" className="max-w-2xl text-4xl leading-tight md:text-5xl">
            Advanced diagnostics without the unnecessary complexity.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
            You shouldn&rsquo;t have to become an expert in laboratory testing to understand your health.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed md:text-xl">
            Sempera makes the process easier, from selecting an appropriate test to receiving your results and
            understanding what comes next.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-9">
            Get Started
          </ButtonLink>
        </div>
        <span aria-hidden className="hidden h-72 w-0.5 bg-teal/40 lg:block" />
        <div className="flex flex-col items-center justify-center rounded-2xl bg-white px-8 py-12 text-center shadow-lg shadow-teal/10 ring-1 ring-teal/25 lg:mx-auto lg:w-full lg:max-w-sm">
          <Image src="/images/icons/diagnostics.webp" alt="" width={240} height={240} unoptimized className="size-14" />
          <Eyebrow className="mt-6 normal-case! tracking-normal!">Diagnostics Starting</Eyebrow>
          <p className="mt-2 font-serif text-5xl text-teal-600">From $99</p>
        </div>
      </Container>
    </section>
  );
}
