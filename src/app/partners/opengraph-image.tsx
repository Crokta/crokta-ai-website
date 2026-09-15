import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Crokta AI installer partner programme";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    kicker: "Partners",
    title: "You installed the cameras. Now sell what they can see.",
    subtitle: "Recurring margin for CCTV installers and integrators. One portal for every client.",
  });
}
