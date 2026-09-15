import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Crokta AI pricing";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    kicker: "Pricing",
    title: "Priced per camera. Proven per site.",
    subtitle: "Core, Pro and Enterprise plans. 14-day paid pilot on one site before you commit.",
  });
}
