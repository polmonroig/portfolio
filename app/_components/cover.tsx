

import Image from 'next/image';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import {SplitText} from "gsap/SplitText";
import  {useState} from "react";

type CoverAlign = 'left' | 'right' | 'center' | 'middle';


const AnimatedIntro = (props : {onComplete: () => void}) => {

    useGSAP(() => {
        // define series of steps in timeline
        const timeline = gsap.timeline({
            onComplete: props.onComplete
        });

        const elementClass = ".component-animated-intro";
        let split = SplitText.create(elementClass, { type: "chars" });
        let chars = split.chars;

        // initial lift animations on the placeholder char(s)
        timeline.to(
            chars,
            {
                y: -100,
                duration: 0.5,
                ease: "ease.out"
            }
        );

        timeline.to(
            chars,
            {
                y: -90,
                duration: 0.1
            }
        );

        // Replace typing effect with wave-style character-by-character reveal
        timeline.add(() => {
            // revert previous split to avoid nested spans
            split.revert();
            const el = document.querySelector(elementClass) as HTMLElement | null;
            if (!el) return;
            el.textContent = "POL COMPANY";
            // re-split the new text into characters
            split = SplitText.create(elementClass, { type: "chars" });
            chars = split.chars;

            // set initial state for wave reveal
            gsap.from(chars, {
                opacity: 0,
                y: -90,
                duration: 1.5,
                stagger: {
                    amount: 0.05,
                    from: "center"
                },
                ease: "bounce.out"
            });


            //Keep scale animations applied to the current chars
            timeline.to(
                elementClass,
                {
                    delay: 1.5,
                    scale: 4,
                    ease: "ease.out"
                }
            );

            timeline.to(
                elementClass,
                {
                    scale: 2,
                    duration: 1.5,
                    ease: "elastic.out(1,0.5)"
                }
            );

            timeline.to(
                elementClass,
                {
                    x: -4000
                }
            )
        });
    })

    return (
        <div className={"component-animated-intro"} >
            .
        </div>
    );
}

type CoverProps = {
    src: string;
    align?: CoverAlign;
    opacity?: number;
    height: string;
    title?: string;
    subtitle?: string;
    tags?: string[];
    color?: string;
    hasScrollBanner?: boolean;
    intro?: boolean;
    animationTextSplit?: "chars" | "lines";
};

export const Cover = (props: CoverProps) => {
    const {
        src,
        align = 'center',
        opacity = 1,
        height,
        title = "",
        subtitle = "",
        tags = [],
        color =  "white",
        hasScrollBanner = false,
        intro = false,
        animationTextSplit = "chars"
    } = props;

    let colorStyle;
    if(color === "white"){
        colorStyle = "style-white";
    }
    else if(color === "black"){
        colorStyle = "style-black";
    }
    else{
        console.error("Invalid color value. Expected 'white' or 'black'.");
        colorStyle = "style-white";
    }

    const justify = ((): 'flex-start' | 'center' | 'flex-end' => {
        const a = align === 'middle' ? 'center' : align;
        if (a === 'left') return 'flex-start';
        if (a === 'right') return 'flex-end';
        return 'center';
    })();

    const textAlign = ((): 'left' | 'center' | 'right' => {
        const a = align === 'middle' ? 'center' : align;
        if (a === 'left') return 'left';
        if (a === 'right') return 'right';
        return 'center';
    })();

    const imageFilter = opacity < 1 ? `brightness(${opacity * 100}%)` : undefined;

    const titleLines = title.split('\n');
    const subtitleLines = subtitle.split('\n');

    const containerRef = useRef(null);
    const [showText, setShowText] = useState(!intro);

    useGSAP(() => {


        let textCharsSplit = SplitText.create('.animation-text-chars', {
            type: animationTextSplit,
        });

        let textLinesSplit =  SplitText.create('.animation-text-lines', {
            type: 'lines',
        });
        console.log(textCharsSplit);

        gsap.from(
            [textCharsSplit[animationTextSplit], textLinesSplit.lines, ".element-tag"],
            {
                y: 100,
                duration: 1,
                autoAlpha: 0,
                ease: "power3.out",
                stagger: 0.02,
                scrollTrigger: {
                    start: 'top 50%',
                    trigger: containerRef.current,
                    toggleActions: 'play none none none'
                },
            }
        )
    },{dependencies: [showText], scope: containerRef})

    return (
        <div
            ref={containerRef}
            className={"element-cover"}
            style={{
                height: height
            }}
        >
            {/* Background image using next/image to leverage optimization and proper layout */}
            <Image
                src={src}
                alt=""
                aria-hidden
                fill
                sizes="100vw"
                className="element-cover-background"
                style={{
                    filter: imageFilter
                }}
            />
            <div
                className={"element-cover-content"}
                style={{
                    alignItems: showText ? (justify === 'flex-start' ? 'flex-start' : justify === 'flex-end' ? 'flex-end' : 'center') : '',
                    textAlign: textAlign
                }}
            >

                {!showText && (
                    <AnimatedIntro onComplete={() => setShowText(true)}/>
                )}

                {(title && showText) && (
                    <h1 className={"style-h1 " + colorStyle} style={{filter: 'none'}}>
                        {titleLines.map((line, index) => (
                            <span key={index} className={"animation-text-chars"}>{line}<br/></span>
                        ))}
                    </h1>
                )}
                {(subtitle && showText) && (
                    <div className={"style-h5-light " + colorStyle}>
                        {subtitleLines.map((line, index) => (
                            <span key={index} className={"animation-text-lines"}>{line}<br/></span>
                        ))}
                    </div>
                )}
                {
                    tags.length > 0 && (
                        <div className={"component-project-tags"}>
                            {tags.map((tag, index) => (
                                <div key={index} className={"element-tag element-tag-white"}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    )
                }
                {
                    hasScrollBanner ?
                        <div className={"element-cover-scroll-banner"} style={{
                            left: align === "left" ? "100%" : "0"
                        }}>
                            <div className={"element-arrow-down"}></div>
                            <div>
                                SCROLL
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>


    );
};
