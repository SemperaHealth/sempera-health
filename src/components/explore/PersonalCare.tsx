import Image from "next/image";
import { Container } from "../ui";

export function PersonalCare() {
  return (
    <section aria-labelledby="personal-care-title" className="relative overflow-hidden bg-white">
      {/* Photo bleeds off the left edge on desktop; a soft curve forms its right side.
          TODO: swap for the full-resolution photo (currently cropped from the design file). */}
      <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[46%]">
        <Image
          src="/images/explore/telehealth-call.webp"
          alt="Smiling woman with a mug on a video call with a clinician on her laptop"
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          quality={90}
          className="object-cover object-[70%_center]"
        />
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          aria-hidden
          focusable={false}
          className="absolute -top-px -right-px hidden h-[calc(100%+2px)] w-[16%] lg:block"
        >
          <path d="M100 0 H55 C84 25 94 80 92 190 C89 420 52 760 0 1000 H100 Z" className="fill-white" />
        </svg>
      </div>

      <Container className="grid lg:min-h-[480px] lg:grid-cols-[46%_minmax(0,1fr)] lg:items-center">
        <div className="py-14 md:py-20 lg:col-start-2 lg:pl-12 xl:pl-16">
          <h2 id="personal-care-title" className="max-w-2xl text-4xl leading-tight md:text-5xl">
            Your health is personal. Your care should be, too.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl">
            Wellness isn&rsquo;t one-size-fits-all. Your health history, lifestyle, and goals all matter when deciding
            what may be right for you.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed md:text-xl">
            Sempera brings together provider access, personalized treatment options, and ongoing support in one
            connected experience.
          </p>
        </div>
      </Container>
    </section>
  );
}
