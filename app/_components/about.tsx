'use client';
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import gsap from "gsap";

export const About = () => {

    const height = "600px";
    const src = "/images/generic/cover-image-03.png";

    const containerRef = useRef(null);

    useGSAP(() => {


        let textLinesSplit =  SplitText.create('.animation-text-lines', {
            type: 'lines',
        });

        gsap.from(
            [textLinesSplit.lines],
            {
                y: 100,
                duration: 1,
                autoAlpha: 0,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    start: 'top 80%',
                    trigger: containerRef.current,
                    toggleActions: 'play none none none'
                },
            }
        )
    }, {scope: containerRef})


    return (
        <div ref={containerRef} style={{
            position: 'relative',
            width: '100%',
            maxHeight: "600px",
            height: height,
            backgroundColor: 'black',
            overflow: 'hidden',
            display: 'flex',
        }}>
            <img
                src={src}
                alt=""
                sizes="100vw"
                className={"element-cover-background"}
            />
            <div className={"component-about"} style={{ position: 'relative', zIndex: 1 }}>
                <div className={"component-about-header text-color-white"}>
                    <div className={"element-line-large"}></div>
                    <div>Beyond the code</div>
                    <div className={"element-line-large"}></div>
                </div>
                <div className={"component-about-content text-color-white animation-text-lines"}>
                    My focus is on delivering real <br/>value, offering the professional <br/>assurance that your vision will<br/> be
                    delivered.
                </div>
                <div className={"component-about-columns text-color-white"}>
                    <div className={"animation-text-lines"}>
                        Based in Barcelona
                    </div>
                    <div className={"animation-text-lines"}>
                        10+ years of experience
                    </div>
                    <div className={"animation-text-lines"}>
                        Cooking enthusiast
                    </div>
                </div>
            </div>

        </div>
    )
}