import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { OrganizationJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://helix.co"),
  title: {
    default: "Helix | We Build the AdTech that Powers Modern Advertising",
    template: "%s | Helix",
  },
  description:
    "AI-native AdTech engineering partner building DSPs, SSPs, DMPs, ad servers, and MetaDSP platforms. $2B+ managed media, 50B+ daily impressions.",
  keywords: [
    "AdTech",
    "DSP",
    "SSP",
    "DMP",
    "MetaDSP",
    "programmatic advertising",
    "ad tech platform",
    "real-time bidding",
    "ad server",
    "white-label advertising",
  ],
  authors: [{ name: "Helix" }],
  creator: "Helix",
  publisher: "Helix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://helix.co",
    siteName: "Helix",
    title: "Helix | We Build the AdTech that Powers Modern Advertising",
    description:
      "AI-native AdTech engineering partner building DSPs, SSPs, DMPs, ad servers, and MetaDSP platforms. $2B+ managed media, 50B+ daily impressions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Helix AdTech Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helix | We Build the AdTech that Powers Modern Advertising",
    description:
      "AI-native AdTech engineering partner building DSPs, SSPs, DMPs, and MetaDSP platforms.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
        <ServiceJsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
