import type {Metadata} from "next";
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
    title: "Pol Company",
    description: "Pol Monroig Company portfolio website. Web Developer and Data Scientist.",
    applicationName: "Pol Company",
    keywords: [
        "Pol Company",
        "Pol Monroig",
        "portfolio",
        "web developer",
        "frontend",
        "full-stack",
        "data scientist",
        "Next.js",
        "React",
    ],
    authors: [{ name: "Pol Company", url: "https://pol.company" }],
    creator: "Pol Company",
    publisher: "Pol Company",
    metadataBase: new URL("https://pol.company"),
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
        </body>
        </html>
    );
}