import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className=" w-full text-center bg-white">
          <div className={"inline-block"}>
            <div className="flex flex-row gap-12 mx-auto text-lg text-center mx-auto mt-12">
                <Link href={"/"} className={"hover:underline text-center block w-24"}>Home</Link>
                <Link href={"/about"} className={"hover:underline text-center block w-24"}>About</Link>
                <Link href={"/projects"} className={"hover:underline  block w-24 text-center"}>Projects</Link>
                <Link href={"mailto:hello@pol.company"} className={"hover:underline  block w-24"}>Contact</Link>
            </div>
          </div>
        </header>
        {children}
        <footer className={"fixed left-0 bottom-0 w-full text-center "}>
          <div className="hover:underline-offset-4 py-6" >
            Made with ❤️ by Pol Monroig Company
          </div>
        </footer>
      </body>
    </html>
  );
}