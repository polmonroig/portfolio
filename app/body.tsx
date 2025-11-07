'use client'
import Script from 'next/script';
import {Contact} from "@/app/_components/contact";
import {NavBar} from "@/app/_components/navbar";


export const AppBody = ({
                            children,
                        }: Readonly<{
    children: React.ReactNode;
}>) => {


    return (
        <div className={"style-app-body"}>
            <NavBar/>
            {children}
            <Contact/>
        </div>
    )
}

export const UmamiAnalytics = () => {
    1
    return <Script async src="https://cloud.umami.is/script.js"
                   data-website-id="e6a04351-01ff-487c-bd4e-e829dde57d3e"></Script>
}