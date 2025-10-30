import type {Metadata} from "next";
import {Average} from "next/font/google";
import "./globals.css";
import {AppBody, UmamiAnalytics} from "@/app/body";
import React from "react";


const averageFont = Average({
    variable: "--font-average",
    weight: "400"
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
            className={` ${averageFont.variable} antialiased `}
        >
        <AppBody children={children}/>
        <UmamiAnalytics/>
        </body>
        </html>
    );
}