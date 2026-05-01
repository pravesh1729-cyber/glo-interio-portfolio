import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glo Interio by Mamta Agarwal — Interior Designer",
  description:
    "Luxury interior design studio by Mamta Agarwal. Specializing in residential, terrace, and bespoke entertainment spaces. Based in Kathmandu, Nepal.",
  keywords: [
    "interior designer",
    "Glo Interio",
    "Mamta Agarwal",
    "luxury interiors",
    "Kathmandu",
    "residential design",
    "terrace design",
  ],
  openGraph: {
    title: "Glo Interio by Mamta Agarwal",
    description: "Crafting spaces that breathe — luxury interior design studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
