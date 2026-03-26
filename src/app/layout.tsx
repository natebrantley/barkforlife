import type { Metadata } from "next";
import { DM_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import { getPublicSiteUrl, siteConfig } from "@/site.config";

const display = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.tuberSale.headline} — ${siteConfig.siteName}`,
    template: `%s — ${siteConfig.siteName}`,
  },
  description:
    "Dahlia tuber cancer benefit sale April 4, 2026 in Vancouver, WA. Bark for Life of Clark County — Relay For Life fundraising for the American Cancer Society.",
  openGraph: {
    title: `${siteConfig.tuberSale.headline} — Bark for Life Clark County`,
    description:
      "April 4, 2026 · Vancouver, WA · Dahlia tuber sale benefiting cancer charity. Plus Bark for Life walk Aug 15 and ways to contribute.",
    url: siteUrl,
    siteName: siteConfig.siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.tuberSale.headline} — Bark for Life Clark County`,
    description:
      "April 4, 2026 dahlia tuber sale · Vancouver, WA · American Cancer Society Relay For Life",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)] text-[var(--bfl-ink)]">
        {children}
      </body>
    </html>
  );
}
