import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Crokta AI — AI video intelligence for the cameras you already own";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    title: "Your cameras already saw it. Now they can tell you.",
    subtitle: "AI video intelligence for the CCTV you already own. Detection at the edge, alerts with evidence, works offline.",
    kicker: "Nigeria first",
  });
}
