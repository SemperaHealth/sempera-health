import { audiences, links } from "@/lib/site";
import { ButtonLink, Container, Eyebrow } from "../ui";

// No approved design yet — styled to sit between the existing light and dark sections.
export function ForOrganizations() {
  return (
    <section id="for-organizations" aria-labelledby="orgs-title" className="bg-cream py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Eyebrow className="text-teal-700!">For Organizations</Eyebrow>
          <h2 id="orgs-title" className="mt-4 text-4xl leading-tight md:text-5xl">
            Bring modern health programs to the people you serve.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
            Sempera partners with organizations to launch and grow clinically guided wellness,
            longevity, and preventive care programs — with the clinical network, pharmacy
            fulfillment, and patient experience handled for you.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={links.partner} arrow>
              Partner With Sempera
            </ButtonLink>
            <ButtonLink href={links.programs} variant="navy">
              View Programs
            </ButtonLink>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {audiences.map((a) => (
            <li
              key={a.title}
              className="rounded-xl bg-white p-6 ring-1 ring-navy/10 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(20,49,89,0.16)] motion-reduce:hover:translate-y-0"
            >
              <h3 className="text-xl md:text-2xl">{a.title}</h3>
              <p className="mt-2 text-base leading-relaxed">{a.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
