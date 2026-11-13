import { ImageResponse } from "next/og";
import { content as c } from "@/data/content";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
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
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        style={{ position: "absolute", top: 54, right: 80 }}
      >
        <rect width="64" height="64" rx="14" fill="#1F4D3F" />
        <path
          d="M46 16H29C19 16 14 22 14 32s5 16 15 16h17v-9H30c-4 0-6-2-6-7s2-7 6-7h16Z"
          fill="#FAF3EE"
        />
      </svg>
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
