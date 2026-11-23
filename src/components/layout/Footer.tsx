import Link from "next/link";
import { links, moreNavItems, navItems } from "@/lib/site";
import { Logo } from "../Logo";
import { Container } from "../ui";

export function Footer() {
  return (
    <footer className="on-dark bg-navy-deep text-mist">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-4 text-sm leading-relaxed">
              Personalized longevity, wellness, and preventive healthcare — for individuals and the
              organizations that serve them.
            </p>
          </div>

          <nav aria-label="Footer">
            {/* Links are padded into ~36px-tall tap targets for phones; the list spacing is tightened to match. */}
            <ul className="grid grid-cols-2 gap-x-12 gap-y-0 text-base md:text-sm">
              {[...navItems, ...moreNavItems].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-2 hover:text-white md:py-1.5">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={links.partner} className="inline-block py-2 hover:text-white md:py-1.5">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-mist/80">
          <p>
            Sempera Health is not an emergency service. If you are experiencing a medical emergency,
            call 911. Treatment is only provided when a licensed clinician determines it is
            clinically appropriate; not everyone will qualify. Prescriptions are not guaranteed.
            Images are illustrative and may include models.
          </p>
          <p className="mt-4">© {new Date().getFullYear()} Sempera Health. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
