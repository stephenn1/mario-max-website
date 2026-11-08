import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon generated from the "M" monogram. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e4080 0%, #0e2148 100%)",
        }}
      >
        <div style={{ color: "#ffffff", fontSize: 104, fontWeight: 800, lineHeight: 1, display: "flex" }}>M</div>
        <div style={{ width: 92, height: 12, borderRadius: 6, background: "#e7a923", marginTop: 10, display: "flex" }} />
      </div>
    ),
    size,
  );
}
