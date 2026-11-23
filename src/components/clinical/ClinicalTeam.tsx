import Image from "next/image";
import { clinicalTeam } from "@/lib/site";
import { Container } from "../ui";

export function ClinicalTeam() {
  return (
    <section aria-label="Our clinical team" className="bg-white py-20 md:py-28">
      {/* From 1400px the photo uses the exact design size (476 × 602); the shared Container is wider there to fit it. */}
      <Container className="grid items-center gap-14 lg:max-wide:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:max-wide:items-stretch lg:max-wide:gap-16 wide:gap-12 wide:grid-cols-[minmax(0,1fr)_auto] wide:items-center">
        <div>
          <h2 id="team-title" className="text-4xl leading-tight md:max-lg:text-5xl lg:max-xl:text-[2.75rem] xl:max-wide:text-5xl wide:text-[2.6rem]">
            Nationwide clinical care.
            <br /> Personalized to you.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl wide:mt-6">
            Sempera brings clinical judgment and telehealth convenience into one thoughtful experience so
            your care begins with context, not assumptions.
          </p>
          <ol className="mt-12 divide-y divide-slate/25 wide:mt-9">
            {clinicalTeam.map((item, i) => (
              <li key={item} className="flex items-baseline gap-6 py-5 first:pt-0 last:pb-0 wide:py-[1.05rem]">
                <span className="text-lg font-semibold text-teal-600 md:max-wide:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium text-ink md:max-wide:text-xl">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Collage: tall photo, then a small photo above a navy tile. 1024–1399px: it stretches to the
            text column's height; 1400px+: fixed design size, centred beside the (tightened) copy. */}
        <div className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,0.7fr)] gap-5 md:gap-10 lg:max-wide:h-full lg:max-wide:grid-cols-[minmax(0,2.1fr)_minmax(0,0.7fr)] lg:gap-8 wide:grid-cols-[476px_203px]">
          <div className="relative aspect-[660/836] overflow-hidden rounded-2xl lg:aspect-auto lg:max-wide:h-full wide:h-[602px] wide:w-[476px]">
            <Image
              src="/images/clinical/care-team-tablet.webp"
              alt="Physician and two nurses reviewing a tablet together, with a clinician on a video call behind them"
              fill
              sizes="(min-width: 1400px) 476px, (min-width: 1024px) 420px, 65vw"
              quality={90}
              className="object-cover object-[62%_center]"
            />
          </div>
          <div className="flex flex-col justify-end gap-5 md:gap-10">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/clinical/clinician-telehealth-desk.webp"
                alt="Smiling clinician in navy scrubs working at a computer"
                fill
                sizes="(min-width: 1400px) 203px, (min-width: 1024px) 190px, 30vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div aria-hidden className="aspect-[282/262] rounded-2xl bg-navy" />
          </div>
        </div>
      </Container>
    </section>
  );
}
