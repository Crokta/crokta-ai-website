import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Contact Crokta AI";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    kicker: "Contact",
    title: "Fourteen days on one site. Then you decide.",
    subtitle: "Request a pilot, ask about enterprise deployment or apply to become a certified installer.",
  });
}
