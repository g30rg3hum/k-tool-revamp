import type { Metadata } from "next";
import {
  Special_Gothic_Expanded_One,
  Fustat,
  Montagu_Slab,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";

const logoFont = Special_Gothic_Expanded_One({
  variable: "--font-logo",
  weight: "400",
  display: "swap",
});

const sans = Fustat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Montagu_Slab({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K-Tool Engineering",
  description:
    "Precision engineering firm located in Malaysia, supplying high-precision tooling to various industries across the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${logoFont.variable} ${sans.variable} ${serif.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
