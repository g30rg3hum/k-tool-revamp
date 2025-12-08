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
import { Organization, WithContext } from "schema-dts";
import Head from "next/head";

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

const title = "K-Tool Engineering | Precision Engineering in Malaysia";
const description =
    "Precision engineering firm providing high-quality tooling solutions for various industries across the globe. Headquartered in Malaysia, we serve clients worldwide.";
export const metadata: Metadata = {
    metadataBase: new URL("https://ktoolengineering.com"),
    title,
    description,
    openGraph: {
        title,
        description,
        images: ["/images/social-banner.png"],
        url: "https://ktoolengineering.com",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/social-banner.png"],
    },
};

const structuredData: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "K-Tool Engineering | Precision Engineering in Malaysia",
    description: description,
    url: "https://ktoolengineering.com",
    logo: "https://ktoolengineering.com/images/logo.png",
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer service",
        telephone: "+604-645-1518",
        email: "sales@ktoolengineering.com",
        areaServed: "MY",
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "No. 8, Lintang Beringin, Beechwood Light Industrial",
        addressLocality: "Batu Maung",
        addressRegion: "Penang",
        postalCode: "11900",
        addressCountry: "Malaysia",
    },
    areaServed: "MY",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </Head>

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
