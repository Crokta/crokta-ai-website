import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { jsonLdGraph, pageMetadata, webPageJsonLd } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/container";
import { CtaBand, Feature } from "@/components/sections";
import { Icon } from "@/components/icons";

const description =
  "How Crokta AI handles security, privacy and ethics: outbound-only appliances, raw video kept on site, per-organisation encryption, NDPA, GDPR and POPIA alignment, biometrics off by default, and the detectors we refuse to build.";

export const metadata = pageMetadata({
  title: "Trust: security, privacy and ethics of AI video analytics",
  description,
  path: "/trust",
  keywords: ["CCTV data protection NDPA", "POPIA video surveillance", "GDPR CCTV analytics", "ethical AI surveillance", "face recognition consent", "video analytics security"],
});

const security = [
  ["No inbound connections", "The appliance opens no ports and accepts nothing from the network. All traffic is outbound, mutually authenticated TLS 1.3 with a per-device certificate that can be rotated or revoked."],
  ["Raw video never leaves the site", "Only event metadata, a thumbnail and a short clip are uploaded per confirmed event. Media goes straight from the appliance to encrypted object storage; it never passes through an application server."],
  ["Encrypted at rest, per organisation", "AES-256 with a key per organisation, and a separate key for biometric data. Camera credentials are encrypted and never returned in plaintext, even to administrators."],
  ["Signed firmware and models", "Every update and every model is signed and rolled out in staged cohorts with automatic rollback. A fleet that cannot be bricked by a bad update is a design requirement, not a hope."],
  ["Tenant isolation at the data layer", "Organisation scope is enforced in the data-access layer, not in individual screens or endpoints, and cross-tenant tests run on every release."],
  ["Audit everything that matters", "Who viewed which clip, who exported what, who changed a rule, who turned a biometric feature on. Exportable, and immutable for the retention period."],
];

const privacy = [
  ["Retention you set, with receipts", "Defaults of 90 days for events, 30 days for clips and 7 days for the raw edge buffer. Deletion jobs write verifiable receipts you can show a regulator."],
  ["Privacy masking before inference", "Mask the neighbour's window or the public pavement and the pixels are dropped before the model sees them and before anything is stored."],
  ["Data residency options", "Cloud regions chosen for the market, and a fully on-prem control plane for customers who need the data inside their own perimeter."],
  ["Built for NDPA, GDPR and POPIA", "Designed against Nigeria's NDPA, the GDPR, South Africa's POPIA and the Ghana and Kenya data protection acts, with DPIA templates for face and plate recognition."],
];

const refuse = [
  "Emotion recognition",
  "Demographic classification (age, gender, ethnicity)",
  "\"Suspicious person\" or pre-crime scoring",
  "Automated consequences from behavioural detectors",
  "Covert biometric enrolment",
  "Selling or sharing customer footage or events",
];

export default function TrustPage() {
  return (
    <>
      <JsonLd data={jsonLdGraph(webPageJsonLd({ name: "Trust, privacy and ethics", description, path: "/trust" }))} />
      <PageHeader
        crumbs={[{ name: "Trust", path: "/trust" }]}
        eyebrow="Trust"
        title="Security, privacy and the lines we will not cross."
        lede="A camera system watches people. That is a responsibility before it is a feature. This page is for the IT manager who asks about ports, the data protection officer who asks where the faces go, and anyone who wants to know what we refuse to build."
      />

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading eyebrow="Security" title="Designed to be the least interesting box on your network." className="mb-10" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {security.map(([t, b]) => (
              <div key={t} className="rounded-xl border border-line bg-ink-2/50 p-5">
                <p className="font-medium text-fg">{t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Annual penetration testing from the first commercial release. SOC 2 Type II is on the roadmap for the scale phase.
          </p>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeading
              eyebrow="Privacy"
              title="Privacy is a feature, with switches, receipts and an audit trail."
              lede="Face recognition is off by default at the organisation level. Turning it on records the legal basis, stores the biometric data in a separate schema under a separate key, limits access by role, enforces retention, and audits every lookup."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {privacy.map(([t, b]) => (
                <Feature key={t} icon={<Icon.Shield />} title={t}>
                  {b}
                </Feature>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Ethics"
              title="What we will not build, however much it would sell."
              lede={'Behavioural detectors such as possible aggression or concealment are advisory only. They are worded as "for review", they are shown to a human, and they never trigger an automated consequence. Everything on this list is out of scope permanently, not just for now.'}
            />
            <ul className="grid gap-2.5">
              {refuse.map((r) => (
                <li key={r} className="flex items-center gap-3 rounded-xl border border-critical/25 bg-critical/5 px-4 py-3 text-[15px] text-fg">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-critical/40 text-critical"><Icon.Ban /></span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Explain the decision"
            title="Every alert shows its working."
            lede="The box, the zone, the rule and the confidence are on every thumbnail and every clip. Search results say why they matched. Operators can disagree with one tap, and their disagreement is what tunes the site. We publish precision, recall and false alerts per camera per day for every site, honestly, including when the numbers are not flattering."
          />
        </Container>
      </section>

      <CtaBand
        title="Bring your security questionnaire."
        body="We would rather answer the hard questions before the pilot than after. Send us your IT and data-protection requirements and we will respond point by point."
      />
    </>
  );
}
