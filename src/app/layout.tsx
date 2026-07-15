import type { Metadata, Viewport } from "next";

import { inter, jetbrainsMono, spaceGrotesk } from "@/lib/font";
import ThemeProvider from "@/providers/ThemeProvider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://musx.app"),

  title: {
    default: "musX",
    template: "%s | musX",
  },

  description:
    "musX is a premium AI-powered music platform that delivers mood-based playlists, intelligent recommendations, smart notifications, and a personalized listening experience.",

  applicationName: "musX",

  keywords: [
    "musX",
    "music",
    "music player",
    "AI music",
    "playlist",
    "music streaming",
    "mood playlist",
    "AI assistant",
  ],

  authors: [
    {
      name: "Neelabh Shukla",
    },
  ],

  creator: "Neelabh Shukla",

  openGraph: {
    title: "musX",
    description:
      "A premium AI-powered music experience built for every mood.",
    siteName: "musX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "musX",
    description:
      "A premium AI-powered music experience built for every mood.",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#F7F9FC",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0F1115",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div id="musx-root">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}