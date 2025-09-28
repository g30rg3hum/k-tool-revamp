import type { Metadata } from "next";
import {
  Special_Gothic_Expanded_One,
  Fustat,
  Montagu_Slab,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/footer/footer";
import { Analytics } from "@vercel/analytics/next";

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

const title = "K-Tool Engineering | Precision Engineering";
const description =
  "Precision engineering firm providing high-quality tooling solutions for various industries across the globe.";
export const metadata: Metadata = {
  metadataBase: new URL("https://ktoolengineering.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: "/images/social-banner.png",
    url: "https://ktoolengineering.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: "/images/social-banner.png",
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
        className={`${logoFont.variable} ${sans.variable} ${serif.variable} antialiased font-medium`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
