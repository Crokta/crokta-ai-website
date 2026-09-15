import Link from "next/link";
import { Button, ArrowIcon } from "@/components/button";
import { Container, Eyebrow, SectionHeading } from "@/components/container";
import { HeroVisual } from "@/components/hero-visual";
import { WhatsAppAlert } from "@/components/whatsapp-alert";
import { OfflineVisual } from "@/components/offline-visual";
import { Icon } from "@/components/icons";
import { CompatMarquee, CtaBand, DetectorCatalogue, Faq, Feature, InlineLink, StatStrip } from "@/components/sections";
import { faq, segments, steps } from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd, jsonLdGraph, pageMetadata, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${siteConfig.name} — AI video analytics for existing CCTV cameras`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          webPageJsonLd({ name: siteConfig.tagline, description: siteConfig.description, path: "/" }),
          faqJsonLd(faq),
          {
            "@type": "HowTo",
            name: "How Crokta AI makes existing CCTV cameras intelligent",
            description: "Sixteen cameras live and detecting in under two hours, without replacing cameras.",
            totalTime: "PT2H",
            step: steps.map((st, i) => ({ "@type": "HowToStep", position: i + 1, name: st.title, text: st.body })),
          },
        )}
      />
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-80" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(246,178,52,0.14),transparent)] blur-2xl" />
        <Container className="relative pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            <div className="flex min-w-0 max-w-xl flex-col gap-6 animate-rise">
              <Eyebrow>AI video intelligence · Edge-first · Nigeria first</Eyebrow>
              <h1 className="font-display text-balance text-[2.75rem] font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.4rem]">
                Your cameras already saw it. Now they can tell you.
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-fg-2">
                Crokta plugs in beside the CCTV you already own, runs computer vision on the appliance, and turns
                footage into real-time alerts with evidence and a searchable record. It keeps working when the power
                and the internet do not.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact?intent=pilot" size="lg">
                  Request a pilot <ArrowIcon />
                </Button>
                <Button href="/product" variant="secondary" size="lg">
                  See how it works
                </Button>
              </div>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11.5px] text-muted">
                <li className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-signal" />No new cameras</li>
                <li className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-signal" />Raw video never leaves the site</li>
                <li className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-signal" />Outbound-only, no open ports</li>
              </ul>
            </div>
            <div className="min-w-0 animate-rise [animation-delay:150ms]">
              <HeroVisual />
            </div>
          </div>
        </Container>
        <CompatMarquee />
      </section>

      {/* ---------------- Problem ---------------- */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="The problem"
            title="Most cameras only become useful after something has gone wrong."
            lede="Organisations across West and East Africa have spent years installing CCTV. The footage is there. Nobody is watching sixteen tiles at 3 a.m., and by the time the MD asks for the clip, it takes an afternoon to find."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Feature icon={<Icon.Eye />} title="Nobody can watch 16 tiles for 12 hours">
              Attention collapses within twenty minutes. Incidents are noticed by the outcome, not the camera.
            </Feature>
            <Feature icon={<Icon.Clip />} title="Finding the clip takes 45 minutes or more">
              Scrubbing NVR timelines by hand, across channels, on a screen in the guard house. Evidence arrives late or not at all.
            </Feature>
            <Feature icon={<Icon.Wifi />} title="Cloud analytics assume power and bandwidth">
              Grid power and 4G uplinks drop routinely. A system that stops detecting when the internet does is not security.
            </Feature>
          </div>
        </Container>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section id="how-it-works" className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionHeading
                eyebrow="How it works"
                title="Sixteen cameras live and detecting in under two hours."
                lede="No rip and replace. No config files. No inbound ports. The installer scans a QR code, the box finds the cameras, you draw the zones."
              />
              <div className="mt-8">
                <InlineLink href="/product">The full product tour</InlineLink>
              </div>
            </div>
            <ol className="flex flex-col gap-3">
              {steps.map((s) => (
                <li key={s.n} className="group grid gap-4 rounded-2xl border border-line bg-ink-2/60 p-6 transition-colors hover:border-line-2 sm:grid-cols-[3.5rem_1fr]">
                  <span className="font-display text-3xl font-semibold text-amber/80 transition-colors group-hover:text-amber">{s.n}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-fg-2">{s.body}</p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{s.meta}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ---------------- Offline-first ---------------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(95,211,243,0.10),transparent)] blur-2xl" />
        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Degrade, don't die"
                title="Built for sites where the power and the internet do not always hold."
                lede="Detection runs on the appliance. The siren fires from the appliance. Every confirmed event is written to a crash-safe log before anything is sent anywhere. The cloud is the record of what happened, never a runtime dependency."
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["72 h", "of event metadata buffered offline, 24 h of clips"],
                  ["4 h", "runtime on a modest UPS, then a graceful shutdown"],
                  ["90 s", "from boot to every stream resumed after a power cut"],
                  ["Zero", "confirmed events lost on an ungraceful shutdown"],
                ].map(([v, l]) => (
                  <li key={l} className="rounded-xl border border-line bg-ink-2/60 p-4">
                    <p className="font-display text-2xl font-semibold tracking-tight">{v}</p>
                    <p className="mt-1 text-sm text-muted">{l}</p>
                  </li>
                ))}
              </ul>
            </div>
            <OfflineVisual />
          </div>
        </Container>
      </section>

      {/* ---------------- Evidence ---------------- */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <WhatsAppAlert />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Every alert carries evidence"
                title="Never a notification without a thumbnail, a clip and a reason."
                lede="Alerts land where your people already are: WhatsApp, push, SMS, email, the console, a siren, or a webhook into your own systems. Each one shows the box, the zone, the rule and the confidence, and takes one tap to acknowledge, assign, or mark false."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Feature icon={<Icon.Bolt />} title="Under 8 seconds to WhatsApp">
                  Design target from detection to a delivered message with the thumbnail attached.
                </Feature>
                <Feature icon={<Icon.Tag />} title="Teach it in one tap">
                  Mark an alert false and pick a reason. Similar events from that camera collapse for 30 minutes, and the site tightens.
                </Feature>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Trust metrics ---------------- */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Precision beats coverage"
            title="Alerts your operators will still trust in month six."
            lede="A muted system has zero value, so we measure ourselves on the false-alert rate, not the number of detectors we ship. Every site gets a 14-day tuning window and a published precision figure before contractual targets apply."
            className="mb-10"
          />
          <StatStrip
            items={[
              { value: "≤ 3", label: "false alerts per camera per day, from day 15" },
              { value: "< 2 min", label: "median time from incident to evidence in hand" },
              { value: "≤ 300 ms", label: "frame to detection on the appliance" },
              { value: "< 5 kbps", label: "steady-state upload per camera when nothing is happening" },
            ]}
            note="Design targets from the product specification. Measured and published per site."
          />
        </Container>
      </section>

      {/* ---------------- Detectors ---------------- */}
      <section id="detectors" className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Detection catalogue"
              title="Start with the four every site needs. Add what your vertical demands."
              lede="Person, vehicle, intrusion, loitering and tamper on day one. PPE, man-down, fire and smoke, weapons and counting on Pro. Conservative thresholds by default; a detector that cannot hit its precision target does not ship."
            />
            <Button href="/product#detectors" variant="secondary" className="shrink-0">
              Full catalogue <ArrowIcon />
            </Button>
          </div>
          <DetectorCatalogue compact />
        </Container>
      </section>

      {/* ---------------- Segments ---------------- */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Who it is for"
            title="Anywhere the cameras are already up and nobody is watching."
            className="mb-10"
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((s, i) => (
              <li key={s.name} className="flex gap-4 rounded-xl border border-line bg-ink-2/50 p-5">
                <span className="font-mono text-[11px] text-amber">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-medium text-fg">{s.name}</p>
                  <p className="mt-1 text-sm text-muted">{s.use}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------- Privacy strip ---------------- */}
      <section className="border-b border-line bg-ink-2/40">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>Privacy is a feature</Eyebrow>
              <h2 className="mt-4 font-display text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">
                Built to pass your IT manager, your DPO and your conscience.
              </h2>
              <div className="mt-6">
                <InlineLink href="/trust">Read the trust and ethics page</InlineLink>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                [<Icon.Lock key="a" />, "Outbound-only appliance", "No inbound connections, no open ports, per-device certificates, signed firmware and models."],
                [<Icon.Camera key="b" />, "Raw video stays on site", "Only event metadata, thumbnails and short clips leave the appliance, over TLS, straight to encrypted storage."],
                [<Icon.Shield key="c" />, "Biometrics off by default", "Face recognition is an org-level switch with a recorded consent basis, a separate store and a separate key."],
                [<Icon.Ban key="d" />, "Lines we will not cross", "No emotion recognition, no demographic classification, no \"suspicious person\" scoring. Ever."],
              ].map(([icon, t, b]) => (
                <li key={String(t)} className="flex gap-3.5 rounded-xl border border-line bg-ink p-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber/25 bg-amber/10 text-amber">{icon}</span>
                  <div>
                    <p className="font-medium text-fg">{t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section>
        <Container className="py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionHeading eyebrow="Questions" title="The questions Ifeoma in IT asks first." />
              <p className="mt-6 text-sm text-muted">
                Something else?{" "}
                <Link href="/contact" className="font-medium text-amber underline-offset-4 hover:underline">
                  Ask us directly
                </Link>
                .
              </p>
            </div>
            <Faq />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
