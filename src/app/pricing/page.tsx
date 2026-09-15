import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd, jsonLdGraph, pageMetadata, webPageJsonLd } from "@/lib/seo";
import { pricing } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";
import { Container, SectionHeading } from "@/components/container";
import { CtaBand, Faq, PricingTable } from "@/components/sections";

const description =
  "Crokta AI pricing: per-camera, per-month plans on Core, Pro and Enterprise. Hardware outright or bundled into a 24-month subscription. 14-day paid pilot on one site before you commit.";

export const metadata = pageMetadata({
  title: "Pricing: per-camera plans for AI CCTV analytics",
  description,
  path: "/pricing",
  keywords: ["video analytics pricing", "AI CCTV cost per camera", "CCTV analytics subscription", "security camera AI price Nigeria"],
});

const pricingFaq = [
  {
    q: "How is it priced?",
    a: "Per camera per month, on a Core, Pro or Enterprise plan. Pro is roughly twice Core. Enterprise is quoted per site or fleet. Add-ons cover extended media retention, additional detectors, custom model training and, later, managed monitoring.",
  },
  {
    q: "What about the hardware?",
    a: "Buy the appliance outright, or bundle it into a 24-month subscription and let us retain ownership. Installation is charged separately so your installer is paid on day one. Prices are set in USD with an FX review clause because the units are imported.",
  },
  {
    q: "Is there a trial?",
    a: "There is a 14-day paid pilot on one site. Days one to seven are observation mode, days eight to fourteen tune on your operators' labels, and from day fifteen the precision figure is published and the contractual target applies. If it does not hold, you walk away.",
  },
  {
    q: "How do I pay?",
    a: "Card, bank transfer and invoice, through Paystack and Flutterwave in Nigeria and Ghana, with usage visible in the console at all times.",
  },
  {
    q: "Do installers and partners earn on this?",
    a: "Yes, a recurring share on referred subscriptions, not a one-time finder's fee. See the partners page.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          webPageJsonLd({ name: "Pricing", description, path: "/pricing" }),
          faqJsonLd(pricingFaq),
          ...pricing.map((p) => ({
            "@type": "Offer",
            name: `Crokta AI ${p.name}`,
            description: `${p.tagline} ${p.features.join(". ")}.`,
            priceCurrency: "USD",
            priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "USD", unitText: "camera per month" },
            url: absoluteUrl("/pricing"),
            availability: "https://schema.org/PreOrder",
          })),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Pricing", path: "/pricing" }]}
        eyebrow="Pricing"
        title="Priced per camera. Proven per site."
        lede="Plans are per camera per month. Every new site starts with a 14-day paid pilot so you see the real false-alert rate before you commit. Figures below are the published structure; a quote takes one conversation."
      />
      <section className="border-b border-line">
        <Container className="py-16 sm:py-24">
          <PricingTable />
          <p className="mt-6 text-center text-sm text-muted">
            All plans include the 14-day tuning window, offline buffering, outbound-only networking and the mobile app.
          </p>
        </Container>
      </section>
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <SectionHeading eyebrow="Details" title="The commercial questions, answered plainly." />
            <Faq items={pricingFaq} />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
