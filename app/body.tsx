'use client'
import Script from 'next/script';
import {NavBar} from "@/app/_components/navbar";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

// Register GSAP plugins properly
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const AppBody = ({
                            children,
                        }: Readonly<{
    children: React.ReactNode;
}>) => {

    useGSAP(() => {

        let split = SplitText.create('.animation-service-title', {
            type: 'words'
        })

        gsap.from(
            split.words,
            {
                duration: 1,
                stagger: 0.05,
                autoAlpha: 0,
                y: 100,
                scrollTrigger: {
                    start: 'top center+=100',
                    trigger: '.animation-service-title',
                    toggleActions: 'play none none none',
                    markers: true
                },
                // If you want to animate the text content itself, set
                // text: "Your target text here"
            }
        )
    })


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