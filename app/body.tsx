'use client'
import Link from "next/link";
import {useEffect, useState} from "react";
import Script from 'next/script';


export const AppBody = ({
                          children,
                        }: Readonly<{
  children: React.ReactNode;
}>) => {

  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const logoWidth = 230 * 0.2;
  const logoHeight = 230 * 0.2;



  return (
    <div className={"relative w-full h-full bg-gray-200"}>
      <div className={"bg-black w-full h-full z-25 absolute transition-transform duration-1500 ease-in-out" + (isLoading ? "" : " -translate-y-full")}>
         <img
           width={logoWidth}
           height={logoHeight}
           className={"mx-auto top-1/3 absolute left-1/2 animate-pulse"}
           style={{width: logoWidth}}
           src={"/logo-white-bg-transparent.webp"}
           alt={"logo"}></img>
      </div>
      <header className={" w-full text-center bg-black text-white sticky top-0"}>
        <div className={"inline-block"}>
          <div className={"absolute top-4 left-4"}>
            <img width={logoWidth} height={logoHeight} src={"/logo-white-bg-transparent.webp"} alt={"logo"}></img>
          </div>
          <div
            className="flex flex-row gap-12 mx-auto text-lg text-center mx-auto mt-4 pt-4 pb-8 font-strong uppercase">
            <Link href={"/"} className={"hover:underline decoration-4 text-center block w-24"}>Home</Link>
            <Link href={"/about"} className={"hover:underline  decoration-4 text-center block w-24"}>About</Link>
            <Link href={"/projects"} className={"hover:underline decoration-4  block w-24 text-center"}>Projects</Link>
            <Link href={"https://blog.pol.company"}
                  className={"hover:underline decoration-4  block w-24 text-center"}>Blog</Link>
            <Link href={"/blog"}
                  className={"hover:underline decoration-4  block w-24"}>Contact</Link>
          </div>
        </div>
      </header>
      {children}
      <footer className={"fixed left-0 bottom-0 w-full text-center "}>
        <div className="hover:underline-offset-4 py-6">
          Made with ❤️ by Pol Monroig Company
        </div>
      </footer>
    </div>
  )
}

export const UmamiAnalytics = () => {
  return <Script async src="https://cloud.umami.is/script.js" data-website-id="e6a04351-01ff-487c-bd4e-e829dde57d3e"></Script>
}