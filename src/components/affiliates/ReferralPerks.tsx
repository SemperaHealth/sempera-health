import Image from "next/image";
import { referralPerks } from "@/lib/site";
import { Container } from "../ui";

export function ReferralPerks() {
  return (
    <section aria-labelledby="perks-title" className="bg-paper pb-16 md:pb-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_auto_minmax(0,2.4fr)] lg:gap-12">
        <h2 id="perks-title" className="text-4xl leading-tight md:text-5xl">
          More than <br className="hidden lg:inline" />a referral.
        </h2>
        <span aria-hidden className="hidden w-0.5 bg-teal lg:block" />

        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {referralPerks.map((perk) => (
            <li
              key={perk.title}
              className="flex flex-col items-center rounded-3xl bg-white px-6 py-9 text-center ring-1 ring-teal/25"
            >
              <Image src={perk.icon} alt="" width={240} height={240} unoptimized className="size-16" />
              <h3 className="mt-5 text-2xl leading-snug font-semibold">{perk.title}</h3>
              <p className="mt-4 text-lg leading-relaxed">{perk.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
