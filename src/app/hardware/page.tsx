import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { jsonLdGraph, pageMetadata, webPageJsonLd } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/container";
import { Button, ArrowIcon } from "@/components/button";
import { CtaBand, Feature } from "@/components/sections";
import { Icon } from "@/components/icons";
import { hardwareTiers } from "@/lib/content";

const description =
  "Crokta Edge AI appliances for CCTV analytics: Lite (4–8 cameras), Pro (16), Max (32–48) and a software image for your own servers. Fanless, 12 V DC, UPS-aware, no inbound ports, built for heat, dust and unreliable power.";

export const metadata = pageMetadata({
  title: "Hardware: Edge AI appliances for CCTV analytics",
  description,
  path: "/hardware",
  keywords: ["edge AI appliance", "NVR AI box", "Jetson Orin video analytics", "Hailo-8", "AI box for CCTV", "on-prem video analytics", "CCTV analytics hardware Nigeria"],
});

const common = [
  ["Outbound only", "No inbound connections. Per-device certificate issued at claim, revocable remotely."],
  ["12 V DC, UPS-aware", "Four hours on a modest UPS; graceful shutdown on a low-battery signal; every stream back within 90 s of boot."],
  ["Dual uplink", "Ethernet, Wi-Fi and 4G failover. Data-cap aware: uploads thumbnails first, clips when there is headroom."],
  ["On-device ring buffer", "Sixty seconds of raw video per camera on NVMe for pre-roll, plus a crash-safe write-ahead log for events."],
  ["Sealed and unbranded", "TPM or secure element on production builds, encrypted disk, small enough to live inside a locked rack."],
  ["Rated to 50 °C", "Fanless or filtered enclosures for dust, heat and humidity. Over-the-air updates with staged rollout and rollback."],
];

export default function HardwarePage() {
  return (
    <>
      <JsonLd data={jsonLdGraph(webPageJsonLd({ name: "Hardware", description, path: "/hardware" }))} />
      <PageHeader
        crumbs={[{ name: "Hardware", path: "/hardware" }]}
        eyebrow="Hardware"
        title="One small box beside the NVR. Two SKUs in the field, on purpose."
        lede="Crokta Edge is an appliance, not a server room. It joins your camera VLAN, pulls the streams, runs the models and keeps working through a power cut. We keep the range deliberately small so that every unit is tested, stocked and swappable by an installer."
      >
        <div className="mt-8 flex gap-3">
          <Button href="/contact?intent=pilot">Request a pilot <ArrowIcon /></Button>
          <Button href="/pricing" variant="secondary">See pricing</Button>
        </div>
      </PageHeader>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading eyebrow="Tiers" title="Sized by camera count, not by ambition." className="mb-10" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {hardwareTiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  t.featured ? "border-amber/50 bg-[linear-gradient(180deg,rgba(246,178,52,0.10),rgba(246,178,52,0.02))]" : "border-line bg-ink-2/60"
                }`}
              >
                <div className="mb-5 flex h-28 items-center justify-center rounded-xl border border-line bg-ink" aria-hidden="true">
                  <svg viewBox="0 0 120 60" className="h-16 w-auto text-fg-2">
                    <rect x="6" y="14" width="108" height="34" rx="6" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="14" y="22" width="40" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="100" cy="31" r="3" fill="#3ddc97" />
                    <circle cx="90" cy="31" r="3" fill="#f6b234" />
                    <path d="M62 26h18M62 31h18M62 36h12" stroke="currentColor" strokeWidth="1" opacity=".6" />
                  </svg>
                </div>
                <p className="font-display text-2xl font-semibold tracking-tight">{t.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber">{t.cameras}</p>
                <p className="mt-4 text-sm text-fg-2">{t.build}</p>
                <p className="mt-2 text-sm text-muted">{t.fit}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {t.notes.map((n) => (
                    <li key={n} className="rounded-md border border-line bg-white/5 px-2 py-0.5 font-mono text-[10.5px] text-fg-2">{n}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Streams per tier are at analytics frame rate. Any tier can also hand the full-resolution stream to the clip extractor for evidence.
          </p>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading eyebrow="Every tier" title="Designed for the site, not the data centre." className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {common.map(([t, b]) => (
              <div key={t} className="rounded-xl border border-line bg-ink-2/50 p-5">
                <p className="font-medium text-fg">{t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Deployment models"
              title="Retrofit first. On-prem when you need it."
              lede="The primary model is a retrofit: the appliance joins the camera VLAN, pulls sub-streams and leaves the NVR untouched. Enterprise and government customers can run the entire control plane inside their own data centre."
            />
            <div className="grid gap-3">
              <Feature icon={<Icon.Plug />} title="Retrofit">
                One appliance, one PoE or switch port, one outbound HTTPS connection. Live in under two hours for sixteen cameras.
              </Feature>
              <Feature icon={<Icon.Lock />} title="Fully on-prem">
                Control plane, storage and identity inside your perimeter. Premium tier for regulated and public-sector estates.
              </Feature>
              <Feature icon={<Icon.Users />} title="Installer supplies the rest">
                UPS, 4G router and SIM, PoE switch, cabling and mounting are the installer&rsquo;s margin. We publish the spec and certify the partner.
              </Feature>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Bundle the box into the subscription. Keep your capital."
        body="Appliances can be purchased outright or bundled into a 24-month subscription with installation charged separately, so the deal fits inside a facility manager's approval limit. We do not sell cameras; we publish a certified list."
      />
    </>
  );
}
