import type { Metadata } from "next";
import { Geist, Geist_Mono, Handjet, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handjet = Handjet({
  variable: "--font-handjet",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Disconnect Society",
  description: "A grassroots movement helping people step back from algorithm-driven social media. The Madison, WI chapter is live now.",
  metadataBase: new URL("https://disconnectsociety.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://disconnectsociety.org",
    title: "Disconnect Society",
    description: "A grassroots movement helping people step back from algorithm-driven social media. The Madison, WI chapter is live now.",
    siteName: "Disconnect Society",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disconnect Society",
    description: "A grassroots movement helping people step back from algorithm-driven social media. The Madison, WI chapter is live now.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${handjet.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
