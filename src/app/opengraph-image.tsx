import { ImageResponse } from "next/og";
import { content as c } from "@/data/content";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#FAF3EE",
        color: "#1F4D3F",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 5,
          marginBottom: 40,
        }}
      >
        {c.hero.eyebrow}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 100,
          fontWeight: 700,
          letterSpacing: -5,
        }}
      >
        {c.name}
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #8FA79A",
          marginTop: 40,
          paddingTop: 30,
          fontSize: 28,
        }}
      >
        {c.hero.descriptor}
      </div>
    </div>,
    size,
  );
}
