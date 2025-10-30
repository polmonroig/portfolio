'use client'
import Script from 'next/script';
import {ChatBubbleLeftIcon} from "@heroicons/react/16/solid";
import {useState} from "react";


export const AppBody = ({
                            children,
                        }: Readonly<{
    children: React.ReactNode;
}>) => {


    const [menu, setMenu] = useState<boolean>(false);

    return (
        <div className={"relative w-full h-full bg-white font-average"}>
            <div
                className={`w-full h-full bg-teal-500 fixed z-20 transition-transform duration-800 ${menu ? 'translate-y-0' : '-translate-y-full'}`}>

            </div>
            <header className={" w-full text-center  sticky top-0 h-12 z-30"}>
                <div onClick={() => setMenu(!menu)}
                     className={" top-4 left-8 text-gray-500 text-lg font-bold cursor-pointer absolute " +
                         "hover:tracking-widest transition-all" + (menu ? '  text-white' : ' hover:text-teal-500')}>
                    Menu
                </div>
                <div className={"inline-block"}>
                    <a className={"text-gray-500 text-lg font-bold absolute top-4 right-8 flex flex-row gap-2 " +
                        "cursor-pointer  hover:tracking-widest transition-all" + (menu ? '  text-white' : ' hover:text-teal-500')}
                       href={"mailto:hello@pol.company?subject=Hey Pol, I'd like to hire you"}>
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