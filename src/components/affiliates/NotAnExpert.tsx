import Image from "next/image";
import { Container } from "../ui";

export function NotAnExpert() {
  return (
    <section aria-labelledby="not-expert-title" className="on-dark relative overflow-hidden bg-navy-deep">
      {/* Photo bleeds off the left edge on desktop; a soft curve forms its right side. */}
      <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[49%]">
        <Image
          src="/images/affiliates/market-friends.webp"
          alt="Two friends laughing over a phone while walking through an outdoor market"
          fill
          sizes="(min-width: 1024px) 49vw, 100vw"
          quality={90}
          className="object-cover object-[45%_center]"
        />
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          aria-hidden
          focusable={false}
          className="absolute inset-y-0 -right-px hidden h-full w-[24%] lg:block"
        >
          <path d="M100 0 H62 C84 25 94 80 92 190 C89 420 52 760 0 1000 H100 Z" className="fill-navy-deep" />
        </svg>
      </div>

      <Container className="grid lg:min-h-[440px] lg:grid-cols-[49%_minmax(0,1fr)] lg:items-center">
        <div className="py-14 md:py-20 lg:col-start-2 lg:pl-12 xl:pl-16">
          <h2 id="not-expert-title" className="text-4xl leading-tight text-white md:text-5xl">
            You don&rsquo;t have <br className="hidden md:inline" />
            to be an expert.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
            You don&rsquo;t need a healthcare background to share Sempera. Let us win your business. If you believe in
            accessible, personalized care, you&rsquo;re in the right place.
          </p>
        </div>
      </Container>
    </section>
  );
}
