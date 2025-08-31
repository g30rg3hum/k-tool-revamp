import type { Metadata } from "next";
import { Special_Gothic_Expanded_One, Fustat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";

const specialGothicExpandedOne = Special_Gothic_Expanded_One({
  variable: "--font-special-gothic-expanded-one",
  weight: "400",
});

const fustat = Fustat({
  variable: "--font-fustat",
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
        className={`${specialGothicExpandedOne.variable} ${fustat.variable} antialiased`}
      >
        <div className="max-w-7xl mx-auto">
          <Header />
          <div className="px-9">{children}</div>
        </div>
      </body>
    </html>
  );
}
