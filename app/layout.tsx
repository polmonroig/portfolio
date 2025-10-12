import type {Metadata} from "next";
import {Geist, Geist_Mono, Alfa_Slab_One, Pacifico} from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import {AppBody} from "@/app/body";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const alfaSlabOneFont = Alfa_Slab_One({
    variable: "--font-alfa-slab-one",
    weight: "400",
    style : "normal"
});

const pacificoFont = Pacifico({
  variable: "--font-pacifico",
  weight: "400"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} ${alfaSlabOneFont.variable} ${pacificoFont.variable} antialiased bg-texture`}
    >
      <AppBody children={children}/>
    </body>
    <GoogleAnalytics gaId="G-1N9YMC8PZ2" />
    </html>
  );
}