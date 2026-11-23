import { links } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function Pharmacy() {
  return (
    <section aria-labelledby="pharmacy-title" className="on-dark relative overflow-hidden bg-navy-deep py-20 md:py-28">
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative z-10 max-w-2xl">
          <Eyebrow tone="dark">Pharmacy</Eyebrow>
          <h2 id="pharmacy-title" className="mt-6 text-4xl leading-tight text-white md:text-6xl">
            From prescription
            <br /> to your door
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-mist md:text-xl">
            When a prescription is appropriate, our pharmacy partners help make fulfillment simple and
            convenient.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-mist md:text-xl">
            Sempera makes accessing prescribed care simple and convenient, with compounding pharmacies
            and direct-to-consumer shipping nationwide.
          </p>
          <ButtonLink href={links.getStarted} arrow className="mt-10">
            Get Started
          </ButtonLink>
        </div>

        <PharmacyIllustration className="pointer-events-none mx-auto w-56 text-navy-line sm:w-72 lg:ml-auto lg:mr-0 lg:w-[420px]" />
      </Container>
    </section>
  );
}

/** Decorative line illustration: medicine bottle with capsules. */
export function PharmacyIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 300"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="11"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
    >
      {/* cap */}
      <rect x="44" y="10" width="140" height="62" rx="16" />
      <ellipse cx="114" cy="22" rx="66" ry="12" strokeWidth="8" />
      <path d="M68 40v18M90 40v18M114 40v18M138 40v18M160 40v18" strokeWidth="8" />
      {/* neck + body */}
      <path d="M58 72v12c-20 12-32 30-32 54v110c0 22 18 36 40 36h96c22 0 40-14 40-36V138c0-24-12-42-32-54V72" />
      <path d="M70 92c14-6 30-8 44-8s30 2 44 8" strokeWidth="8" />
      {/* label */}
      <path d="M28 150c28 8 58 12 86 12s58-4 86-12M28 252c28 8 58 12 86 12s58-4 86-12" strokeWidth="8" />
      <path d="M44 172v22M44 212v24" strokeWidth="8" />
      {/* cross */}
      <path d="M100 178h28v24h24v28h-24v24h-28v-24H76v-28h24z" strokeWidth="9" />
      {/* capsules */}
      <g transform="rotate(-32 228 230)">
        <rect x="180" y="210" width="96" height="40" rx="20" />
        <path d="M228 210v40" strokeWidth="8" />
      </g>
      <g transform="rotate(6 205 280)">
        <rect x="150" y="262" width="80" height="34" rx="17" />
        <path d="M190 262v34" strokeWidth="8" />
      </g>
      <ellipse cx="252" cy="278" rx="26" ry="14" />
      <path d="M252 264v28" strokeWidth="7" />
    </svg>
  );
}
