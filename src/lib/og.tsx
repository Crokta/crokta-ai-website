import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Shared Open Graph / Twitter card renderer used by every route's opengraph-image.tsx. */
export function renderOgImage({ title, subtitle, kicker }: { title: string; subtitle: string; kicker?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(180deg,#0a0d12 0%,#10151c 100%)",
          color: "#e8ecf1",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "radial-gradient(closest-side, rgba(246,178,52,0.22), transparent)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, border: "3px solid #e8ecf1", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 12, height: 12, borderRadius: 12, background: "#f6b234" }} />
            </div>
            <div style={{ fontSize: 34, fontWeight: 700 }}>Crokta</div>
          </div>
          {kicker ? <div style={{ fontSize: 20, color: "#f6b234", letterSpacing: 4, textTransform: "uppercase" }}>{kicker}</div> : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: title.length > 48 ? 56 : 68, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2, maxWidth: 1040 }}>{title}</div>
          <div style={{ fontSize: 28, color: "#b7c0cb", maxWidth: 960, lineHeight: 1.3 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 20, color: "#f6b234", letterSpacing: 2 }}>
          <span>EDGE-FIRST</span><span>·</span><span>OUTBOUND-ONLY</span><span>·</span><span>WORKS OFFLINE</span><span>·</span><span>crokta.ai</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
