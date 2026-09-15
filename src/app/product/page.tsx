import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { jsonLdGraph, pageMetadata, webPageJsonLd } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/container";
import { Button, ArrowIcon } from "@/components/button";
import { CtaBand, DetectorCatalogue, Feature, StatStrip } from "@/components/sections";
import { Icon } from "@/components/icons";
import { HeroVisual } from "@/components/hero-visual";
import { steps } from "@/lib/content";

const description =
  "How Crokta AI turns existing CCTV into a 24/7 analyst: ONVIF and RTSP onboarding, zones and rules, edge inference, alerts with evidence, incidents, AI video search and reports.";

export const metadata = pageMetadata({
  title: "Product: AI video analytics for existing CCTV cameras",
  description,
  path: "/product",
  keywords: ["video analytics software", "intrusion detection camera", "loitering detection", "camera tamper detection", "PPE detection camera", "man-down detection", "fire and smoke detection camera", "rules engine", "incident management", "video search"],
});

const surfaces = [
  {
    title: "Console",
    body: "A live grid of 1, 4, 9 or 16 tiles with detection overlays, a filterable event feed, per-camera timelines, and incident management. Fully usable at 1366×768, because that is what the control room has.",
  },
  {
    title: "Mobile",
    body: "Push notification with the thumbnail on the lock screen. Two taps to the clip. Acknowledge, assign or mark false from the alert itself. Low-data mode by default on 4G.",
  },
  {
    title: "Integrations",
    body: "Signed webhooks with retries, a REST API with org-scoped keys, and connectors for WhatsApp, Slack, Teams, email and SMS. Access-control and alarm receiving centre integrations on the roadmap.",
  },
  {
    title: "Reports",
    body: "Weekly PDF for the auditor: compliance rate by zone and shift, week-on-week change, and the lowest-compliance clips with faces blurred by default. CSV and API export of everything.",
  },
];

export default function ProductPage() {
  return (
    <>
      <JsonLd data={jsonLdGraph(webPageJsonLd({ name: "Product", description, path: "/product" }))} />
      <PageHeader
        crumbs={[{ name: "Product", path: "/product" }]}
        eyebrow="Product"
        title="A 24/7 analyst for the cameras you already own."
        lede="Crokta is three things working together: an edge appliance that watches your streams, a cloud that keeps the record and runs the rules, and the console and mobile app your team actually uses."
      >
        <div className="mt-8 flex gap-3">
          <Button href="/contact?intent=pilot">Request a pilot <ArrowIcon /></Button>
          <Button href="#detectors" variant="secondary">Detection catalogue</Button>
        </div>
      </PageHeader>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="min-w-0 lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Onboarding"
                title="Plug in beside the NVR. Your cameras appear."
                lede="The appliance discovers cameras over ONVIF, enumerates NVR channels, and lets the installer add RTSP streams by hand with a live preview. It pulls the analytics sub-stream and leaves your recording untouched."
              />
              <ul className="mt-8 flex flex-col gap-3 text-[15px] text-fg-2">
                {[
                  "H.264, H.265 and MJPEG, hardware-decoded",
                  "Every camera graded green, amber or red for each detector at its resolution, angle and light",
                  "Stream health with automatic backoff and reconnect; offline, defocus and reposition alerts",
                  "CSV import for large fleets; encrypted camera credentials never returned in plaintext",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <HeroVisual />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Zones and rules"
            title="Rules that read like a sentence."
            lede="Draw polygon zones and directional lines on a live snapshot. Then write the rule: WHEN a detector fires IN a zone DURING a schedule THEN do something. The same rule runs on the appliance and in the cloud against one specification, so what you tested is what fires at 3 a.m."
            className="mb-10"
          />
          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-line bg-ink-2/70 p-5 font-mono text-[13px] leading-relaxed">
              <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-muted">rule · after-hours-intrusion · v3</p>
              <p><span className="text-amber">WHEN</span> <span className="text-fg">person</span> <span className="text-muted">confidence ≥ 0.80, dwell ≥ 2 s</span></p>
              <p><span className="text-amber">IN</span> <span className="text-fg">yard-perimeter</span> <span className="text-muted">(CAM-07, CAM-08)</span></p>
              <p><span className="text-amber">DURING</span> <span className="text-fg">after-hours</span> <span className="text-muted">Mon–Sun 19:00–06:00 Africa/Lagos</span></p>
              <p><span className="text-amber">UNLESS</span> <span className="text-fg">gate-opened-by-badge</span> <span className="text-muted">within 60 s</span></p>
              <p><span className="text-amber">THEN</span> <span className="text-fg">alert Critical</span> <span className="text-muted">→ WhatsApp security-group, push, siren relay 1</span></p>
              <p><span className="text-amber">COOLDOWN</span> <span className="text-fg">5 min</span> <span className="text-muted">per track · storm control 10/min per camera</span></p>
            </div>
            <div className="grid gap-3">
              <Feature icon={<Icon.Tag />} title="Vertical templates">
                Warehouse, estate, retail, bank and school templates get a site to 80% in minutes. Tune the last 20% on real footage.
              </Feature>
              <Feature icon={<Icon.Chart />} title="Simulate before you arm">
                Replay yesterday against a new rule and see what would have fired before anyone is woken up.
              </Feature>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading eyebrow="Pipeline" title="What happens in the four seconds after someone steps over the line." className="mb-10" />
          <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="flex flex-col gap-3 rounded-2xl border border-line bg-ink-2/60 p-5">
                <span className="font-display text-2xl font-semibold text-amber">{s.n}</span>
                <p className="font-medium text-fg">{s.title}</p>
                <p className="text-sm leading-relaxed text-muted">{s.body}</p>
                <p className="mt-auto pt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">{s.meta}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <StatStrip
              items={[
                { value: "≤ 300 ms", label: "frame to detection, p95" },
                { value: "≤ 1 s", label: "event to siren or relay, p95" },
                { value: "≤ 3 s", label: "event persisted in the cloud on a healthy uplink" },
                { value: "≤ 8 s", label: "event to WhatsApp or push delivered" },
              ]}
              note="Design targets, p95. Measured per site."
            />
          </div>
        </Container>
      </section>

      <section id="detectors" className="border-b border-line scroll-mt-20">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Detection catalogue"
            title="Fewer detectors, each one trustworthy."
            lede="Every detector is a versioned, licensable unit with its own precision target on a site-specific test set of at least 200 positives and 500 negatives. If it cannot hit the target, it does not ship. Advisory detectors are worded as such and never trigger automated consequences."
            className="mb-12"
          />
          <DetectorCatalogue />
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Incidents, search and evidence"
            title="From alert to a courtroom-ready pack without leaving the console."
            lede="Group related events into an incident, add notes and attachments, and export a pack with every clip hashed with SHA-256 and an audit trail of who saw what. Search history by camera, class, colour, time and zone, and read why each result matched."
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {surfaces.map((s) => (
              <div key={s.title} className="rounded-2xl border border-line bg-ink-2/60 p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-2">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
