import { Container, Eyebrow } from "../ui";

export function CareConversation() {
  return (
    <section aria-labelledby="conversation-title" className="on-dark bg-navy py-20 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-0">
        <div className="lg:pr-20">
          <Eyebrow tone="dark">Care Starts With a Conversation</Eyebrow>
          <h2 id="conversation-title" className="mt-8 text-4xl leading-tight text-white md:text-5xl">
            You don&rsquo;t need to know exactly what treatment you need before you begin.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist md:text-xl">
            Your clinician reviews your information, discusses your goals, and determines what may be
            appropriate.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-white md:text-xl lg:border-l lg:border-teal/60 lg:py-24 lg:pl-20">
          Your care is guided by a licensed clinician, not an algorithm.
        </p>
      </Container>
    </section>
  );
}
