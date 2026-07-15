import type { Metadata, Viewport } from "next";
import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musx.app"),

  title: {
    default: "mus𝕏",
    template: "%s | mus𝕏",
  },

  description:
    "mus𝕏 is a premium AI-powered music platform delivering intelligent recommendations, mood-based playlists, and a beautiful listening experience.",

  applicationName: "mus𝕏",

  keywords: [
    "musX",
    "AI Music",
    "Music Streaming",
    "Playlist",
    "Songs",
    "Music Player",
    "Recommendations",
    "Mood Music",
  ],

  authors: [
    {
      name: "Neelabh Shukla",
    },
  ],

  creator: "Neelabh Shukla",

  openGraph: {
    title: "mus𝕏",
    description:
      "Premium AI-powered music streaming platform.",
    siteName: "mus𝕏",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "mus𝕏",
    description:
      "Premium AI-powered music streaming platform.",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1115",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        <div id="musx-root">
          {children}
        </div>
      </body>
    </html>
  );
}