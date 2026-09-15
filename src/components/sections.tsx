import Link from "next/link";
import type { ReactNode } from "react";
import { Button, ArrowIcon } from "./button";
import { Container, Eyebrow } from "./container";
import { detectorGroups, faq, pricing, type Detector } from "@/lib/content";

/* ---------- Stats ---------- */
export function StatStrip({
  items,
  note,
}: {
  items: { value: string; label: string }[];
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-ink-2/60">
      <dl className="grid grid-cols-2 divide-y divide-line sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {items.map((s) => (
          <div key={s.label} className="flex flex-col px-5 py-5 sm:px-6">
            <dt className="order-2 mt-1 text-[13px] leading-snug text-muted">{s.label}</dt>
            <dd className="order-1 font-display text-3xl font-semibold tracking-tight text-fg sm:text-[2.1rem]">{s.value}</dd>
          </div>
        ))}
      </dl>
      {note ? <p className="border-t border-line px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">{note}</p> : null}
    </div>
  );
}

/* ---------- Compatibility marquee ---------- */
const compat = [
  "ONVIF Profile S",
  "RTSP",
  "H.264",
  "H.265",
  "Hikvision",
  "Dahua",
  "Uniview",
  "Axis",
  "OEM rebrands",
  "NVR channels",
  "DVR with RTSP",
  "PoE and Wi-Fi cameras",
];

export function CompatMarquee() {
  const row = [...compat, ...compat];
  return (
    <div className="mask-fade-x overflow-hidden border-y border-line py-4">
      <div className="flex w-max animate-marquee gap-3 pr-3" aria-hidden="true">
        {row.map((c, i) => (
          <span key={i} className="whitespace-nowrap rounded-full border border-line bg-ink-2 px-4 py-1.5 font-mono text-[12px] text-fg-2">
            {c}
          </span>
        ))}
      </div>
      <p className="sr-only">Works with {compat.join(", ")}.</p>
    </div>
  );
}

/* ---------- Detector grid ---------- */
function PhaseTag({ phase, advisory }: { phase: Detector["phase"]; advisory?: boolean }) {
  const cls =
    phase === "Available at launch"
      ? "border-signal/30 bg-signal/10 text-signal"
      : phase === "Pro"
        ? "border-amber/30 bg-amber/10 text-amber"
        : "border-line-2 bg-white/5 text-muted";
  return (
    <span className="flex flex-wrap gap-1.5">
      <span className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${cls}`}>{phase}</span>
      {advisory ? (
        <span className="rounded-md border border-cyan/30 bg-cyan/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan">Advisory</span>
      ) : null}
    </span>
  );
}

export function DetectorCatalogue({ compact = false }: { compact?: boolean }) {
  const groups = compact ? detectorGroups.slice(0, 2) : detectorGroups;
  return (
    <div className="flex flex-col gap-10">
      {groups.map((g) => (
        <div key={g.title}>
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-display text-xl font-semibold tracking-tight">{g.title}</h3>
            <p className="max-w-lg text-sm text-muted">{g.intro}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((d) => (
              <li
                key={d.name}
                className="group flex flex-col justify-between gap-4 rounded-xl border border-line bg-ink-2/60 p-4 transition-colors hover:border-line-2 hover:bg-ink-2"
              >
                <div>
                  <p className="font-medium text-fg">{d.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{d.blurb}</p>
                </div>
                <PhaseTag phase={d.phase} advisory={d.advisory} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ---------- Pricing ---------- */
export function PricingTable() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {pricing.map((p) => (
        <div
          key={p.name}
          className={`relative flex flex-col rounded-2xl border p-6 ${
            p.highlight
              ? "border-amber/50 bg-[linear-gradient(180deg,rgba(246,178,52,0.10),rgba(246,178,52,0.02))] shadow-[0_0_0_1px_rgba(246,178,52,0.2),0_30px_60px_-30px_rgba(246,178,52,0.35)]"
              : "border-line bg-ink-2/60"
          }`}
        >
          {p.highlight ? (
            <span className="absolute -top-3 left-6 rounded-full bg-amber px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink">
              Most sites
            </span>
          ) : null}
          <p className="font-display text-2xl font-semibold tracking-tight">{p.name}</p>
          <p className="mt-1 text-sm text-muted">{p.tagline}</p>
          <div className="mt-5">
            <p className="font-display text-3xl font-semibold tracking-tight">{p.price}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{p.unit}</p>
          </div>
          <ul className="mt-6 flex flex-col gap-2.5 text-sm text-fg-2">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2.5">
                <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-amber" fill="none" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={p.name === "Enterprise" ? "/contact?intent=enterprise" : "/contact?intent=pilot"} variant={p.highlight ? "primary" : "secondary"} className="w-full">
              {p.cta}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- FAQ ---------- */
export function Faq({ items = faq }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-ink-2/40">
      {items.map((f) => (
        <details key={f.q} className="group px-5 sm:px-6">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-base font-medium text-fg outline-none focus-visible:ring-2 focus-visible:ring-amber sm:text-[17px]">
            {f.q}
            <span className="faq-chevron flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-2 text-muted transition-transform">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="-mt-1 pb-6 pr-10 text-[15px] leading-relaxed text-fg-2">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- CTA band ---------- */
export function CtaBand({
  title = "Make the cameras you already own earn their keep.",
  body = "Start with a 14-day paid pilot on one site. We tune it with your operators, publish the false-alert rate honestly, and you decide from day fifteen.",
}: {
  title?: ReactNode;
  body?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
      <div className="absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(246,178,52,0.18),transparent_70%)]" />
      <Container className="relative py-24 sm:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Pilot programme</Eyebrow>
          <h2 className="font-display text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-fg-2 sm:text-lg">{body}</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact?intent=pilot" size="lg">
              Request a pilot <ArrowIcon />
            </Button>
            <Button href="/partners" variant="secondary" size="lg">
              Become an installer partner
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Feature list row ---------- */
export function Feature({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-line bg-ink-2/50 p-5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber/25 bg-amber/10 text-amber">{icon}</span>
      <p className="font-medium text-fg">{title}</p>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}

export function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1 font-medium text-amber underline-offset-4 hover:underline">
      {children} <ArrowIcon className="h-3.5 w-3.5" />
    </Link>
  );
}
