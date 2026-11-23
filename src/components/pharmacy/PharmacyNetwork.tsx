import { pharmacyNetwork } from "@/lib/site";
import { Container, cx } from "../ui";

const tones = {
  navy: { tile: "bg-navy", title: "text-white", text: "text-mist" },
  white: { tile: "bg-white", title: "text-navy", text: "text-slate" },
  teal: { tile: "bg-[#8ecfcd]", title: "text-navy", text: "text-navy" },
} as const;

/* Desktop: row 1 is wide + narrow, row 2 narrow + wide (as in the design). Tablet: plain 2 × 2. */
const layout = [
  "lg:col-span-3 md:border-r md:border-b",
  "lg:col-span-2 border-t md:border-t-0 md:border-b",
  "lg:col-span-2 border-t md:border-t-0 md:border-r",
  "lg:col-span-3 border-t md:border-t-0",
];

export function PharmacyNetwork() {
  return (
    <section aria-labelledby="network-title" className="bg-paper py-20 md:py-28">
      <Container>
        <h2 id="network-title" className="text-4xl leading-tight md:text-5xl">
          Why Our Pharmacy Network Matters
        </h2>
        <ul className="mt-12 grid overflow-hidden rounded-2xl border border-navy/15 md:grid-cols-2 lg:grid-cols-5">
          {pharmacyNetwork.map((item, i) => {
            const tone = tones[item.tone];
            return (
              <li
                key={item.title}
                className={cx(
                  "flex min-h-64 flex-col justify-end border-navy/15 p-8 md:min-h-80 md:p-10 lg:min-h-[22rem]",
                  tone.tile,
                  layout[i],
                )}
              >
                <h3 className={cx("text-3xl leading-tight md:text-4xl", tone.title)}>{item.title}</h3>
                <p className={cx("mt-4 max-w-md text-lg leading-relaxed", tone.text)}>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
