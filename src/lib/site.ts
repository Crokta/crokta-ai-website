export const siteConfig = {
  name: "Crokta AI",
  legalName: "Crokta AI Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://crokta.ai",
  tagline: "AI video intelligence for the cameras you already own",
  description:
    "Crokta AI connects to the IP cameras, NVRs and DVRs you already own, runs computer vision at the edge, and turns footage into real-time alerts with evidence and searchable history. Built for sites where the power and the internet do not always hold.",
  contactEmail: "hello@crokta.ai",
  locale: "en_NG",
  twitter: "@croktaai",
  foundingCountry: "Nigeria",
  markets: ["Nigeria", "Ghana", "Kenya", "South Africa"],
  keywords: [
    "AI video analytics",
    "CCTV analytics",
    "video intelligence",
    "edge AI",
    "intrusion detection",
    "PPE detection",
    "ONVIF",
    "RTSP",
    "NVR",
    "WhatsApp alerts",
    "security cameras Nigeria",
    "AI CCTV Nigeria",
    "AI CCTV Lagos",
    "video surveillance software Africa",
    "offline-first video analytics",
    "existing cameras AI",
  ],
  nav: [
    { href: "/product", label: "Product" },
    { href: "/hardware", label: "Hardware" },
    { href: "/pricing", label: "Pricing" },
    { href: "/partners", label: "Partners" },
    { href: "/trust", label: "Trust" },
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
