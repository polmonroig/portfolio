import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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

  const logoWidth = 230 * 0.2;
  const logoHeight = 230 * 0.2;



  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <header className=" w-full text-center">
      <div className={"inline-block"}>
        <div className={"absolute top-10 left-4"}>
          <img width={logoWidth} height={logoHeight} src={"/logo.png"} alt={"logo"}></img>
        </div>
        <div className="flex flex-row gap-12 mx-auto text-lg text-center mx-auto mt-12">
          <Link href={"/"} className={"hover:underline text-center block w-24"}>Home</Link>
          <Link href={"/about"} className={"hover:underline text-center block w-24"}>About</Link>
          <Link href={"/projects"} className={"hover:underline  block w-24 text-center"}>Projects</Link>
          <Link href={"https://blog.pol.company"} className={"hover:underline  block w-24 text-center"}>Blog</Link>
          <Link href={"mailto:hello@pol.company"} className={"hover:underline  block w-24"}>Contact</Link>
        </div>
      </div>
    </header>
    {children}
    <footer className={"fixed left-0 bottom-0 w-full text-center "}>
      <div className="hover:underline-offset-4 py-6">
        Made with ❤️ by Pol Monroig Company
      </div>
    </footer>
    </body>
    <GoogleAnalytics gaId="G-1N9YMC8PZ2" />
    </html>
  );
}