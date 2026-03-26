import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const alt =
  "Bark for Life Clark County — Dogs, dahlias and hope for the American Cancer Society. Dahlia tuber sale April 4, 2026, Vancouver WA.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const text = [
    "Bark for Life · Clark County, WA",
    siteConfig.siteTagline,
    "",
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
          background: "linear-gradient(135deg, #f5eef8 0%, #e4d9ee 50%, #ede4f8 100%)",
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
            color: "#2a1832",
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
