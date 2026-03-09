import type { Metadata } from "next";
import { Geist, Geist_Mono, Handjet, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav";

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
        className={`${geistSans.variable} ${geistMono.variable} ${handjet.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-(--background) text-(--foreground) font-[family-name:var(--font-space-grotesk)]`}
      >
        <Nav />
        <main>
          {children}
        </main>
        <footer className="border-t border-(--secondary-accent) px-6 py-8 lg:px-12 text-sm text-(--secondary-accent) text-center">
          <p>Disconnect Society — disconnectsociety.org</p>
        </footer>
      </body>
    </html>
  );
}
