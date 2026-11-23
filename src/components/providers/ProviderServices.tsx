import Image from "next/image";
import { providerServices } from "@/lib/site";
import { Container, cx } from "../ui";

export function ProviderServices() {
  return (
    <section aria-label="Clinical services for providers" className="bg-white pb-16 md:pb-24">
      <Container>
        <div className="on-dark rounded-[2rem] bg-navy-deep p-3 md:p-4">
          <ul className="grid overflow-hidden rounded-3xl border border-white/20 lg:grid-cols-2">
            {providerServices.map((service, i) => (
              <li
                key={service.title}
                className={cx(
                  "px-8 py-12 md:px-14 md:py-16",
                  i === 0 ? "bg-navy-deep" : "border-t border-white/20 bg-navy lg:border-t-0 lg:border-l",
                )}
              >
                <span className="flex size-24 items-center justify-center rounded-full bg-white md:size-28">
                  <Image src={service.icon} alt="" width={240} height={240} unoptimized className="size-16 md:size-20" />
                </span>
                <h2 className="mt-10 text-4xl leading-tight text-white md:text-[2.75rem]">{service.title}</h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-mist md:text-xl">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
