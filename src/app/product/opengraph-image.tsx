import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Crokta AI product overview";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    kicker: "Product",
    title: "A 24/7 analyst for the cameras you already own.",
    subtitle: "ONVIF onboarding, zones and rules, edge inference, alerts with evidence, incidents and search.",
  });
}
