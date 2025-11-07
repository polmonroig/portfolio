import type {Metadata} from "next";
import {Inter, Playfair} from "next/font/google";
import './_styles/base.scss';
import './_styles/components.scss';
import './_styles/layout.scss';
import './_styles/animation.scss';
import {AppBody, UmamiAnalytics} from "@/app/body";
import React from "react";


const playFairFont = Playfair({
    variable: "--font-playfair",
    weight: "400"
})

const interFont = Inter({
    variable: "--font-inter",
    weight: "300"
})

export const metadata: Metadata = {
    title: "Pol Company",
    description: "Portfolio",
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