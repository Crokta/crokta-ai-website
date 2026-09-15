import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { jsonLdGraph, pageMetadata, webPageJsonLd } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/container";
import { Button, ArrowIcon } from "@/components/button";
import { CtaBand, Feature } from "@/components/sections";
import { Icon } from "@/components/icons";

const description =
  "Crokta AI partner programme for CCTV installers and security integrators in Nigeria, Ghana, Kenya and South Africa: add AI detection to every site you already serve, earn recurring margin, and manage all your clients from one portal.";

export const metadata = pageMetadata({
  title: "Partners: AI analytics for CCTV installers and integrators",
  description,
  path: "/partners",
  keywords: ["CCTV installer partner programme", "security integrator reseller", "recurring revenue CCTV", "CCTV installer Lagos", "video analytics reseller Africa"],
});

const flow = [
  ["Scan", "Scan the QR code on the appliance to claim it to the client's organisation and site."],
  ["Discover", "Cameras appear with a green, amber or red grade per detector. Fix the reds before you leave."],
  ["Template", "Pick warehouse, estate, retail, bank or school. Draw zones on live snapshots."],
  ["Observe", "Start the 14-day tuning window. Days one to seven send only Critical alerts."],
  ["Hand over", "Walk the client through the checklist. Every step is resumable; there are no config files."],
];

export default function PartnersPage() {
  return (
    <>
      <JsonLd data={jsonLdGraph(webPageJsonLd({ name: "Installers and partners", description, path: "/partners" }))} />
      <PageHeader
        crumbs={[{ name: "Partners", path: "/partners" }]}
        eyebrow="Installers and partners"
        title="You already installed the cameras. Now sell what they can see."
        lede="Crokta is distributed through the people who already know the sites: CCTV installers, security integrators and facility managers. We train and certify you, you keep the relationship, and you earn a recurring share for as long as the site stays live."
      >
        <div className="mt-8 flex gap-3">
          <Button href="/contact?intent=partner">Apply to partner <ArrowIcon /></Button>
          <Button href="/hardware" variant="secondary">Appliance specs</Button>
        </div>
      </PageHeader>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading eyebrow="Why partner" title="Recurring revenue from sites you have already won." className="mb-10" />
          <div className="grid gap-4 md:grid-cols-3">
            <Feature icon={<Icon.Chart />} title="Recurring margin, not a finder's fee">
              A share of every referred subscription for its lifetime. Installation is charged separately so you are paid on day one.
            </Feature>
            <Feature icon={<Icon.Users />} title="One portal for every client">
              See every site, every appliance and every camera&rsquo;s health in one place. Remote restart, logs and diagnostics without a site visit.
            </Feature>
            <Feature icon={<Icon.Bolt />} title="Two hours per site">
              A guided install flow built for the field. No laptops full of config files. A spare unit is pre-imaged and swappable by you.
            </Feature>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeading
              eyebrow="The install flow"
              title="Sixteen cameras, one site visit, under two hours."
              lede="The flow is the product for you. It is designed so that a certified installer can bring a site live and hand it over without calling engineering."
            />
            <ol className="flex flex-col gap-3">
              {flow.map(([t, b], i) => (
                <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-xl border border-line bg-ink-2/60 p-5">
                  <span className="font-display text-2xl font-semibold text-amber">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-medium text-fg">{t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading eyebrow="What you supply" title="Your margin, your kit." lede="We publish the specification; you supply and install the site infrastructure you already know how to sell." className="mb-8" />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["UPS", "4G router and SIM", "PoE switch", "Cabling", "Mounting and enclosure"].map((k) => (
              <li key={k} className="rounded-xl border border-line bg-ink-2/50 px-4 py-3 text-center text-sm font-medium text-fg-2">{k}</li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Become a certified Crokta installer."
        body="Training takes a day. Your first pilot site is supported hands-on by our engineers. Tell us which cities you cover and how many sites you maintain today."
      />
    </>
  );
}
