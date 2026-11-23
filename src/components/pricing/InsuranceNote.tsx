import { Container, Eyebrow } from "../ui";

export function InsuranceNote() {
  return (
    <section aria-labelledby="insurance-note-title" className="bg-teal-wash py-12 md:py-16">
      <Container className="max-w-[1440px]">
        <div className="on-dark grid gap-8 rounded-2xl bg-navy px-8 py-12 md:px-16 lg:grid-cols-[1.25fr_1fr] lg:gap-0 lg:py-16">
          <div className="lg:pr-16">
            <Eyebrow tone="dark">Health Insurance</Eyebrow>
            <h2 id="insurance-note-title" className="mt-6 text-4xl leading-tight text-white md:text-5xl">
              You don&rsquo;t need insurance to get started.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist md:text-xl">
              Sempera is designed to make personal care accessible whether you have insurance or not.
            </p>
          </div>
          <p className="self-start text-lg leading-relaxed text-white md:text-xl lg:mt-14 lg:border-l lg:border-teal/60 lg:py-2 lg:pl-14">
            And we are working to make more of the care you want accessible through insurance, too.
          </p>
        </div>
      </Container>
    </section>
  );
}
