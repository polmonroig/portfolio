'use client'
import Script from 'next/script';
import {ChatBubbleLeftIcon} from "@heroicons/react/16/solid";
import {useEffect, useState} from "react";


export const AppBody = ({
                            children,
                        }: Readonly<{
    children: React.ReactNode;
}>) => {


    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    const handleScroll = () => {
        setIsScrolling(window.scrollY > 0);
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    let headerClass = "w-full text-center  fixed top-0 h-16 z-10 transition-shadow duration-300";
    if (isScrolling) {
        headerClass += " bg-white shadow-md"
    } else {
        headerClass += " bg-white"
    }

    return (
        <div className={"relative w-full h-full bg-white font-average "}>

            <header className={headerClass}>
                <div className={"z-20 absolute top-4 right-12"}>
                    <a className={"text-gray-500 text-lg font-bold flex flex-row gap-2 " +
                        "cursor-pointer  hover:tracking-widest transition-all hover:text-teal-500" }
                       href={"/#contact"}>
                        <span>Hire me</span>
                        <ChatBubbleLeftIcon width={24} height={24} className={"inline-block my-auto "}/>
                    </a>
                </div>

            </header>
            {children}

        </div>
    )
}

export const UmamiAnalytics = () => {1
    return <Script async src="https://cloud.umami.is/script.js"
                   data-website-id="e6a04351-01ff-487c-bd4e-e829dde57d3e"></Script>
}