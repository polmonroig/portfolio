import type {Metadata} from "next";
import Head from 'next/head';
import {Inter, Playfair_Display} from "next/font/google";
import './_styles/main.scss';
import {AppBody, UmamiAnalytics} from "@/app/body";
import React from "react";


const playFairFont = Playfair_Display({
    variable: "--font-playfair"
})

const interFont = Inter({
    variable: "--font-inter"
})



export const metadata: Metadata = {
    title: "Pol Company - Web Developer and Data Scientist",
    description: "Pol Monroig Company - Expert Web Developer and Data Scientist offering freelance services. " +
        "Specializing in modern web development, data analytics and machine learning solutions.",
    applicationName: "Pol Company",
    keywords: [
        "Pol Company",
        "Pol Monroig",
        "portfolio",
        "freelance",
        "web developer",
        "frontend",
        "full-stack",
        "data scientist",
        "Next.js",
        "React",
    ],
    authors: [{name: "Pol Company", url: "https://pol.company"}],
    creator: "Pol Company",
    publisher: "Pol Company",
    metadataBase: new URL("https://pol.company"),
    alternates: {
        canonical: "https://pol.company",
    },
    openGraph: {
        title: "Pol Company - Web Developer and Data Scientist",
        description: "Pol Monroig Company - Expert Web Developer and Data Scientist offering freelance services. Specializing in modern web development, data analytics and machine learning solutions.",
        url: "https://pol.company",
        siteName: "Pol Company",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pol Company - Web Developer and Data Scientist",
        description: "Expert Web Developer and Data Scientist offering freelance services.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pol Company",
    url: "https://pol.company",
    potentialAction: {
        "@type": "SearchAction",
        target: "https://pol.company/?q={search_term_string}",
        "query-input": "required name=search_term_string",
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pol Monroig Company",
    url: "https://pol.company",
    email: "mailto:hello@pol.company",
    telephone: "+34617004358",
    jobTitle: ["Web Developer", "Data Scientist"],
    worksFor: {
        "@type": "Organization",
        name: "Pol Company",
        url: "https://pol.company",
    },
    sameAs: [
        "https://pol.company",
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <html lang="en">
        <body
            className={` ${playFairFont.variable} ${interFont.variable} antialiased `}
        >
        <AppBody children={children}/>
        <UmamiAnalytics/>
        <script type="application/ld+json">
            {
                JSON.stringify(websiteSchema)
            }
        </script>
        <script type="application/ld+json">
            {
                JSON.stringify(personSchema)
            }
        </script>
        </body>
        </html>
    );
}