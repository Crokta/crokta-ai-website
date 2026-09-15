import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Crokta",
    description: siteConfig.tagline,
    start_url: "/",
    display: "browser",
    background_color: "#0a0d12",
    theme_color: "#0a0d12",
    lang: "en",
    categories: ["business", "security", "utilities"],
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
