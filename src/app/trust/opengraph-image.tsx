import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Crokta AI trust, privacy and ethics";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    kicker: "Trust",
    title: "Security, privacy and the lines we will not cross.",
    subtitle: "Outbound-only appliances, raw video on site, biometrics off by default, no emotion or demographic scoring.",
  });
}
