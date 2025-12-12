'use client'
import Script from 'next/script';
import {NavBar} from "@/app/_components/navbar";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {TextPlugin} from "gsap/TextPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";


// Register GSAP plugins properly
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, TextPlugin, DrawSVGPlugin);

export const AppBody = ({
                            children,
                        }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className={"style-app-body"}>
            <NavBar/>
            {children}
        </div>
    )
}

export const UmamiAnalytics = () => {
    return <Script async src="https://cloud.umami.is/script.js"
                   data-website-id="e6a04351-01ff-487c-bd4e-e829dde57d3e"></Script>
}