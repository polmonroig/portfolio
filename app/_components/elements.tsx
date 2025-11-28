'use client'

import React, {useRef} from "react";
import {useState} from "react";
import Image from 'next/image';
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import gsap from 'gsap';

export const Button = (props: {
    text: string,
    onClick?: () => void,
    href?: string,
    type?: 'button' | 'submit' | 'reset'
}) => {

    const [isHovering, setHovering] = useState(false);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const anchorRef = useRef<HTMLAnchorElement>(null);

    useGSAP(() => {
        const fillClass = ".element-button-fill";
        const textClass = ".element-button-text";

        gsap.to(fillClass, {
            left: xPos,
            top: yPos,
            scale: isHovering ? 1 : 0,
            duration: 0.3,
            ease: isHovering ? "power1.in" : "power1.out"
        });

        gsap.to(textClass, {
            duration: 0.3,
            color: isHovering ? "#353535" : "#DDDDDD",
            ease: isHovering ? "power1.in" : "power1.out"
        })


    }, {
        dependencies: [isHovering],
        scope: props.href ? anchorRef : buttonRef
    });

    const onMouseInteraction = (hovering: boolean, event: React.MouseEvent) => {
        setHovering(hovering);
        const button = props.href ? anchorRef.current : buttonRef.current;
        if (button) {
            const bounds = button.getBoundingClientRect();
            setXPos(event.clientX - bounds.left);
            setYPos(event.clientY - bounds.top);
        }
    }

    if (props.href) {
        return (
            <a
                ref={anchorRef}
                href={props.href}
                onMouseEnter={(e) => onMouseInteraction(true, e)}
                onMouseLeave={(e) => onMouseInteraction(false, e)}
                className={"element-button layout-margin-x-auto"}
            >
                <span className={"element-button-fill"}/>
                <span className={"element-button-text"}>
                    {props.text}
                </span>
            </a>
        )
    } else {
        return (
            <button
                ref={buttonRef}
                onMouseEnter={(e) => onMouseInteraction(true, e)}
                onMouseLeave={(e) => onMouseInteraction(false, e)}
                onClick={props.onClick}
                type={props.type ?? "button"}
                className={"element-button layout-margin-x-auto"}
            >
                <span className={"element-button-fill"}/>
                <span className={"element-button-text"}>
                    {props.text}
                </span>
            </button>
        )
    }


}


export const Card = (props: {
    title: string,
    side: string,
    src: string,
    children: React.ReactNode
}) => {


    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const childrenLines = SplitText.create(".animation-text-lines", {
           type: "lines"
        });

        gsap.from([childrenLines.lines], {
            duration: 1,
            stagger: 0.01,
            autoAlpha: 0,
            ease: "power3.out",
            y: 100,
            scrollTrigger: {
                start: 'top 80%',
                trigger: cardRef.current,
                toggleActions: 'play none none none'
            },
        });


        gsap.from(
            ".element-card-image",
            {
                x: props.side === "left" ? 100 : -100,
                duration: 1,
                ease: "power3.out",
                autoAlpha: 0,
                scrollTrigger: {
                    start: 'top 80%',
                    trigger: cardRef.current,
                    toggleActions: 'play none none none'
                },
            }
        );

    }, {scope: cardRef});


    return (
        <div className={"element-card"} ref={cardRef}>
            {
                props.side === "left" ?
                    <>
                        <div className={"element-card-text"}>
                            <div className={"layout-flex-col text-h6 animation-text-lines"}>
                                {props.title}
                            </div>
                            <div className={"text-paragraph animation-text-lines"} style={{textOverflow: "ellipsis"}}>
                                {props.children}
                            </div>
                        </div>
                        <div>
                            <Image src={props.src} alt={"card-image"} className={"element-card-image"} width={550}
                                   height={400}/>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <Image src={props.src} alt={"card-image"} className={"element-card-image"} width={550}
                                   height={400}/>
                        </div>
                        <div className={"element-card-text"}>
                            <div className={"layout-flex-row text-h6 animation-text-lines"}>
                                {props.title}
                            </div>
                            <div className={"text-paragraph animation-text-lines"}>
                                {props.children}
                            </div>
                        </div>
                    </>
            }

        </div>
    )
}

export const CardLarge = (props: {
    title: string,
    src: string
}) => {

    const titleLines = props.title.split('\n');

    return (
        <div className={"element-card-large"}>
            <div className={"element-card-texts text-h3 text-style-gradient text-align-center"}>
                {titleLines.map((line, index) => (
                    <span key={index}>{line}<br/></span>
                ))}
            </div>
            <Image src={props.src} alt={"card-image"} className={"element-card-image-large"} width={2614}
                   height={1976}/>
        </div>
    )
}