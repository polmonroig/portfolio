

import Image from 'next/image';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import {SplitText} from "gsap/SplitText";

type CoverAlign = 'left' | 'right' | 'center' | 'middle';

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
        hasScrollBanner = false
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

    useGSAP(() => {


        let textCharsSplit = SplitText.create('.animation-text-chars', {
            type: 'chars',
        });

        let textLinesSplit =  SplitText.create('.animation-text-lines', {
            type: 'lines',
        });

        gsap.from(
            [textCharsSplit.chars, textLinesSplit.lines, ".element-tag"],
            {
                y: 100,
                duration: 1,
                autoAlpha: 0,
                stagger: 0.02,
                scrollTrigger: {
                    start: 'top 50%',
                    trigger: containerRef.current,
                    toggleActions: 'play none none none'
                },
            }
        )
    }, {scope: containerRef})

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
                    alignItems: justify === 'flex-start' ? 'flex-start' : justify === 'flex-end' ? 'flex-end' : 'center',
                    textAlign: textAlign
                }}
            >
                {title && (
                    <h1 className={"style-h1 " + colorStyle} style={{filter: 'none'}}>
                        {titleLines.map((line, index) => (
                            <span key={index} className={"animation-text-chars"}>{line}<br/></span>
                        ))}
                    </h1>
                )}
                {subtitle && (
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
