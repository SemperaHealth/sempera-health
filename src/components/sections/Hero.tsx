import { hero, links } from "@/lib/site";
import { ButtonLink, Container } from "../ui";
import { HeroMedia } from "./HeroMedia";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 -z-10">
        <HeroMedia image={hero.image} alt={hero.imageAlt} video={hero.video} />
        {/* Gradients keep the headline readable over the photo/video. */}
        {/* From 1280px the tint stays behind the text and clears before the subject, so her side stays crisp. */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/55 to-navy-deep/0 xl:via-navy-deep/60 xl:via-35% xl:to-60%" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent md:hidden" />
      </div>

      {/* Fills the first screen exactly (viewport minus the 5rem header + 1px border); content sits slightly below centre. */}
      <Container className="flex min-h-[calc(100svh-5rem-1px)] items-end pb-16 pt-32 md:items-center md:pb-16 md:pt-44">
        <div className="max-w-xl">
          <h1 id="hero-title" className="text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/90 md:text-xl">{hero.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={links.programs} arrow>
              Explore Programs
            </ButtonLink>
            <ButtonLink href={links.forOrganizations} variant="light">
              For Organizations
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
