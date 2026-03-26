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
    default: siteConfig.seoTitle,
    template: `%s — ${siteConfig.siteName}`,
  },
  description: siteConfig.metaDescription,
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.metaDescription,
    url: siteUrl,
    siteName: siteConfig.siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.socialShareImage.path,
        alt: siteConfig.socialShareImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.metaDescription,
    images: [siteConfig.socialShareImage.path],
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
