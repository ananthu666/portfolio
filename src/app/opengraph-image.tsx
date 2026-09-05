import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0D12",
          backgroundImage:
            "linear-gradient(to right, rgba(217,220,226,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(217,220,226,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            letterSpacing: 4,
            color: "#5EEAD4",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}
        >
          {profile.tagline}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 24,
            fontSize: 100,
            fontWeight: 600,
            lineHeight: 1,
            color: "#F3F5F7",
          }}
        >
          <span>{profile.firstName}</span>
          <span>{profile.lastName}</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 34,
            color: "#B4BAC4",
          }}
        >
          {profile.title}
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 44,
          }}
        >
          {["AI", "ODOO / ERP", "AUTOMATION"].map((tag, i) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: `1px solid ${["#5EEAD4", "#E8A33D", "#8B93F8"][i]}`,
                color: ["#5EEAD4", "#E8A33D", "#8B93F8"][i],
                fontFamily: "monospace",
                fontSize: 20,
                letterSpacing: 1,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}