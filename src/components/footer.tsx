import Link from "next/link";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "How it works" },
      { href: "/product#detectors", label: "Detection catalogue" },
      { href: "/hardware", label: "Edge appliances" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/partners", label: "Installers and partners" },
      { href: "/trust", label: "Trust, privacy and ethics" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Markets",
    links: [
      { href: "/contact", label: "Nigeria" },
      { href: "/contact", label: "Ghana" },
      { href: "/contact", label: "Kenya" },
      { href: "/contact", label: "South Africa" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-fg" aria-label="Crokta AI home">
              <Logo className="h-7" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              AI video intelligence for the cameras you already own. Detection at the edge, alerts with
              evidence, built for sites where power and internet do not always hold.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Lagos · Accra · Nairobi · Johannesburg</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-2">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Crokta AI. All rights reserved.</p>
          <p className="max-w-xl text-pretty">
            No emotion recognition. No demographic classification. No &ldquo;suspicious person&rdquo; scoring.
            Face recognition is off by default and consent-gated where it is lawful.
          </p>
        </div>
      </div>
      <p className="sr-only">{siteConfig.contactEmail}</p>
    </footer>
  );
}
