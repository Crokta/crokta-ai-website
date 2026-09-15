import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type PageSeo = {
  /** Title as shown in the tab and SERP; the site name is appended by the layout template. */
  title: string;
  description: string;
  /** Path starting with "/", used for the canonical URL. */
  path: string;
  keywords?: readonly string[];
  /** Set false for pages that should not be indexed (none by default). */
  index?: boolean;
  /** Use the title verbatim instead of appending the site name (home page). */
  absoluteTitle?: boolean;
};

/** Builds a complete, consistent Metadata object for a route. */
export function pageMetadata({ title, description, path, keywords = [], index = true, absoluteTitle = false }: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} — ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: { absolute: fullTitle },
      description,
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      title: { absolute: fullTitle },
      description,
    },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
      : { index: false, follow: true },
  };
}

/* ---------- JSON-LD builders ---------- */

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;
export const productId = `${siteConfig.url}/#software`;

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
    email: siteConfig.contactEmail,
    description: siteConfig.description,
    foundingLocation: { "@type": "Country", name: siteConfig.foundingCountry },
    areaServed: siteConfig.markets.map((name) => ({ "@type": "Country", name })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contactEmail,
        availableLanguage: ["en"],
        areaServed: ["NG", "GH", "KE", "ZA"],
      },
    ],
    knowsAbout: ["Computer vision", "Video analytics", "CCTV", "Edge computing", "Physical security", "Workplace safety"],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": organizationId },
  };
}

export function softwareJsonLd() {
  return {
    "@type": "SoftwareApplication",
    "@id": productId,
    name: siteConfig.name,
    applicationCategory: "SecurityApplication",
    applicationSubCategory: "Video analytics",
    operatingSystem: "Edge appliance, Web, iOS, Android",
    description: siteConfig.tagline + ". " + siteConfig.description,
    url: siteConfig.url,
    publisher: { "@id": organizationId },
    featureList: [
      "ONVIF and RTSP camera onboarding",
      "Edge inference on the appliance",
      "Intrusion, loitering, tamper, person and vehicle detection",
      "PPE, man-down, fire and smoke detection",
      "Alerts with evidence over WhatsApp, push, SMS, email and webhooks",
      "Offline-first with 72-hour event buffering",
      "Incident management and evidence export",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      offerCount: 3,
      url: absoluteUrl("/pricing"),
      description: "Per camera per month. Core, Pro and Enterprise plans. 14-day paid pilot.",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function webPageJsonLd({ name, description, path, type = "WebPage" }: { name: string; description: string; path: string; type?: string }) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    about: { "@id": productId },
  };
}

/** Wraps one or more schema nodes into a single @graph document. */
export function jsonLdGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
