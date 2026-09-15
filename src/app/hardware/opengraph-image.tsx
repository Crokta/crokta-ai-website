import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Crokta Edge appliances";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    kicker: "Hardware",
    title: "One small box beside the NVR.",
    subtitle: "Edge Lite, Pro and Max appliances. Fanless, 12 V DC, no inbound ports, built for heat and unreliable power.",
  });
}
