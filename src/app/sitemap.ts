import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/* Keep lastModified honest: bump a page's date when its content materially changes. */
const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; lastModified: string }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-09-15" },
  { path: "/product", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/hardware", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/partners", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/trust", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-15" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly", lastModified: "2026-09-15" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: new Date(p.lastModified),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
