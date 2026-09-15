import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { jsonLdGraph, pageMetadata, webPageJsonLd } from "@/lib/seo";
import { Container } from "@/components/container";
import { PilotForm } from "@/components/pilot-form";
import { siteConfig } from "@/lib/site";

const description =
  "Contact Crokta AI: request a 14-day pilot of AI video analytics on your existing cameras, ask about enterprise or on-prem deployment, or apply to become a certified installer.";

export const metadata = pageMetadata({
  title: "Contact: request a pilot",
  description,
  path: "/contact",
  keywords: ["request a pilot", "AI CCTV demo Nigeria", "contact video analytics vendor"],
});

const copy: Record<string, { eyebrow: string; title: string; lede: string }> = {
  pilot: {
    eyebrow: "Request a pilot",
    title: "Fourteen days on one site. Then you decide.",
    lede: "Tell us about the site and what you need the cameras to catch. We will come back within one working day with a compatibility check on your camera fleet and a pilot proposal.",
  },
  enterprise: {
    eyebrow: "Enterprise",
    title: "Multi-site, regulated, on-prem or all three.",
    lede: "Tell us about your estate and constraints. We will bring the security questionnaire answers and a deployment plan to the first call.",
  },
  partner: {
    eyebrow: "Partner application",
    title: "Add detection to every site you already serve.",
    lede: "Tell us which cities you cover and how many sites you maintain. Certification takes a day and your first pilot is supported hands-on.",
  },
  default: {
    eyebrow: "Contact",
    title: "Talk to a person who has stood in a guard house at 2 a.m.",
    lede: "Pilots, partnerships, press or a hard question about privacy. Use the form or write to us directly.",
  },
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const params = await searchParams;
  const intent = typeof params.intent === "string" ? params.intent : "default";
  const c = copy[intent] ?? copy.default;

  return (
    <>
      <JsonLd data={jsonLdGraph(webPageJsonLd({ name: "Contact", description, path: "/contact", type: "ContactPage" }))} />
      <PageHeader crumbs={[{ name: "Contact", path: "/contact" }]} eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
      <section>
        <Container className="py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div className="rounded-2xl border border-line bg-ink-2/40 p-6 sm:p-8">
              <PilotForm intent={intent} />
            </div>
            <aside className="flex flex-col gap-8 text-sm">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Email</p>
                <a href={`mailto:${siteConfig.contactEmail}`} className="mt-2 block text-lg font-medium text-fg hover:text-amber">
                  {siteConfig.contactEmail}
                </a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Where we work</p>
                <p className="mt-2 leading-relaxed text-fg-2">Nigeria first, with Ghana, Kenya and South Africa following. Pilots in Lagos, Abuja and Port Harcourt are supported on site.</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">What a pilot looks like</p>
                <ol className="mt-2 flex flex-col gap-2 leading-relaxed text-fg-2">
                  <li>1. Camera fleet check from your NVR model list.</li>
                  <li>2. Appliance installed by a certified partner in one visit.</li>
                  <li>3. Days 1–7 observation, days 8–14 tuning with your operators.</li>
                  <li>4. Published precision figure. You decide from day 15.</li>
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
