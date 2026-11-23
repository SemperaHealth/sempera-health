import { faqs } from "@/lib/site";
import { Plus } from "../icons";
import { Container } from "../ui";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-20 md:py-28">
      <Container className="max-w-4xl">
        <h2 id="faq-title" className="text-4xl leading-tight md:text-5xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 divide-y divide-navy/15 border-y border-navy/15">
          {faqs.map((faq) => (
            // Native <details> gives keyboard + screen reader support with no JS.
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-navy md:text-xl [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus className="size-6 shrink-0 text-teal-600 transition-transform group-open:rotate-45" />
              </summary>
              <p className="max-w-3xl pb-6 text-base leading-relaxed md:text-lg">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
