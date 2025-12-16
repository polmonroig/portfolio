import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {useRef} from "react";
import {SplitText} from "gsap/SplitText";
import {ResponsiveImage} from "@/app/_components/elements";

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
        colorStyle = "text-color-white";
    }
    else if(color === "black"){
        colorStyle = "text-color-black";
    }
    else{
        console.error("Invalid color value. Expected 'white' or 'black'.");
        colorStyle = "text-color-white";
    }


    let elementCoverContentClassName = `element-cover-content-${align}`;
    let elementCoverClassName = "element-cover";
    if(color == "white"){
        elementCoverClassName += " navbar-dark-transform";
    }

    const imageFilter = opacity < 1 ? `brightness(${opacity * 100}%)` : undefined;

    const titleLines = title.split('\n');
    const subtitleLines = subtitle.split('\n');

    const containerRef = useRef(null);

    useGSAP(() => {


        let textCharsSplit = SplitText.create('.animation-text-chars', {
            type: animationTextSplit,
        });

        let textLinesSplit =  SplitText.create('.animation-text-lines', {
            type: 'lines',
        });

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
        // Parallax effect: text content lags behind background
        // If a global ScrollSmoother is present, data-speed attributes (set in JSX) will take effect.
        // Otherwise, we fall back to ScrollTrigger-based parallax tweens scoped to the cover container.
        const smoother = (typeof window !== 'undefined') ? (ScrollSmoother.get?.()) : null;
        if (!smoother) {
            // Background moves slightly with scroll
            gsap.to(
                ".element-cover-background",
                {
                    yPercent: 10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            // Text/content lags (moves opposite direction to feel slower)
            gsap.to(
                ".element-cover-content",
                {
                    yPercent: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        }
    },{scope: containerRef})

    const altText = `Cover image for ${title}`;

    return (
        <div
            ref={containerRef}
            className={elementCoverClassName}
            style={{
                height: height
            }}
        >
            {/* Background image */}
            <ResponsiveImage
                src={src}
                alt={altText}
                className="element-cover-background"
                data-speed={1.1}
                style={{
                    filter: imageFilter
                }}
            />
            <div
                className={"element-cover-content " + elementCoverContentClassName}
                data-speed={0.85}
            >

                {(title) && (
                    <h2 className={"element-cover-content-title " + colorStyle} style={{filter: 'none'}}>
                        {titleLines.map((line, index) => (
                            <span key={index} className={"animation-text-chars"}>{line}<br/></span>
                        ))}
                    </h2>
                )}
                {(subtitle) && (
                    <div className={"element-cover-content-subtitle " + colorStyle}>
                        {subtitleLines.map((line, index) => (
                            <span key={index} className={"animation-text-lines"}>{line}<br/></span>
                        ))}
                    </div>
                )}
                {
                    tags.length > 0 && (
                        <div className={"element-cover-content-tags"}>
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
