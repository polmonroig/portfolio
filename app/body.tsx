'use client'
import Script from 'next/script';
import {ChatBubbleLeftIcon} from "@heroicons/react/16/solid";
import {useEffect, useState} from "react";


export const AppBody = ({
                            children,
                        }: Readonly<{
    children: React.ReactNode;
}>) => {


    const [menu, setMenu] = useState<boolean>(false);
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
    if (menu) {
        headerClass += " "
    } else if (isScrolling) {
        headerClass += " bg-white shadow-md"
    } else {
        headerClass += " bg-white"
    }

    return (
        <div className={"relative w-full h-full bg-white font-average "}>

            <header className={headerClass}>
                <div
                    className={`w-full h-full bg-teal-500 fixed z-20 transition-transform  ease-in-out ${menu ? 'translate-y-0 duration-800' : '-translate-y-full duration-600'}`}>
                </div>
                <div onClick={() => setMenu(!menu)}
                     className={"z-20 top-4 left-8 text-lg font-bold cursor-pointer absolute " +
                         "hover:tracking-widest transition-all" + (menu ? '  text-white' : ' hover:text-teal-500 text-gray-500 ')}>
                    Menu
                </div>
                <div className={"z-20 absolute top-4 right-8"}>
                    <a className={"text-gray-500 text-lg font-bold flex flex-row gap-2 " +
                        "cursor-pointer  hover:tracking-widest transition-all" + (menu ? '  text-white' : ' hover:text-teal-500')}
                       href={"#contact"} onClick={() => setMenu(false)}>
                        <span>Hire me</span>
                        <ChatBubbleLeftIcon width={24} height={24} className={"inline-block my-auto "}/>
                    </a>
                </div>
            </header>
            {children}
            <footer className={"left-0 bottom-0 w-full text-center "}>
                <div className="hover:underline-offset-4 py-6 text-white bg-teal-500 font-bold text-lg">
                    Made with ❤️ by Pol Monroig Company
                </div>
            </footer>
        </div>
    )
}

export const UmamiAnalytics = () => {
    return <Script async src="https://cloud.umami.is/script.js"
                   data-website-id="e6a04351-01ff-487c-bd4e-e829dde57d3e"></Script>
}