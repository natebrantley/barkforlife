import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const alt =
  "Bark for Life Clark County — Cancer benefit dahlia tuber sale April 4, 2026 in Vancouver, WA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const text = [
    "Bark for Life · Clark County, WA",
    siteConfig.tuberSale.headline,
    `${siteConfig.tuberSale.shortDate} · ${siteConfig.tuberSale.time}`,
    `${siteConfig.tuberSale.addressLine1}, ${siteConfig.tuberSale.cityStateZip}`,
  ].join("\n");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fdf2f8 0%, #e0f2fe 45%, #f5f3ff 100%)",
          padding: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 960,
            fontFamily: "system-ui, sans-serif",
            fontSize: 36,
            fontWeight: 600,
            color: "#1e1b4b",
            lineHeight: 1.35,
            textAlign: "center",
            whiteSpace: "pre-line",
          }}
        >
          {text}
        </div>
      </div>
    ),
    { ...size },
  );
}
