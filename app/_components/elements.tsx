'use client'

import React, {useRef} from "react";
import {useState} from "react";
import Image from 'next/image';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

export const Button = (props: { text: string, onClick: () => void }) => {

    const [isHovering, setHovering] = useState(false);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useGSAP(() => {
        const fillClass = ".animation-button-fill";

        gsap.set(fillClass, {
            left: xPos,
            top: yPos,
        });

        gsap.to(fillClass, {
            scale: isHovering ? 1 : 0,
            duration: 0.5,
            ease: isHovering ? "power1.in" : "power1.out"
        });

        gsap.to(buttonRef.current, {
            duration: 0.5,
            color: "#1F1F1F",
            ease: isHovering ? "power1.in" : "power1.out"
        })


    }, {
        dependencies: [isHovering],
        scope: buttonRef
    });

    const onMouseInteraction = (hovering: boolean, event: MouseEvent) => {
        setHovering(hovering);
        const button = buttonRef.current;
        const bounds = button.getBoundingClientRect();
        setXPos(event.clientX - bounds.left);
        setYPos(event.clientY - bounds.top);
    }


    return (
        <button
            ref={buttonRef}
            onMouseEnter={(e) => onMouseInteraction(true, e)}
            onMouseLeave={(e) => onMouseInteraction(false, e)}
            onClick={props.onClick}
            className={"element-button layout-margin-x-auto"}
            style={{
                position: 'relative',
                overflow: 'hidden',
            } as React.CSSProperties}
        >
            <span
                className={"animation-button-fill"}
                style={{
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    transform: 'translate(-50%, -50%) scale(0)',
                    width: '300px',
                    height: '300px',
                    background: '#F6F6F6',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }}/>
            <span>
                {props.text}
            </span>
        </button>
    )
}

export const ButtonLink = (props: { text: string, href: string }) => {
    return (
        <a className={"element-button layout-margin-x-auto cursor-pointer"} href={props.href}>
            {props.text}
        </a>
    )
}

export const Card = (props: {
    title: string,
    side: string,
    src: string,
    children: React.ReactNode
}) => {


    return (
        <div className={"element-card"}>
            {
                props.side === "left" ?
                    <>
                        <div className={"element-card-text"}>
                            <div className={"layout-flex-col style-h5"}>
                                {props.title}
                            </div>
                            <div className={"style-paragraph"}>
                                {props.children}
                            </div>
                        </div>
                        <Image src={props.src} alt={"card-image"} className={"element-card-image"} width={550}
                               height={400}/>
                    </>
                    :
                    <>
                        <Image src={props.src} alt={"card-image"} className={"element-card-image"} width={550}
                               height={400}/>
                        <div className={"element-card-text"}>
                            <div className={"layout-flex-row style-h5"}>
                                {props.title}
                            </div>
                            <div className={"style-paragraph"}>
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
            <div className={"element-card-texts style-h3 style-gradient-text style-align-center"}>
                {titleLines.map((line, index) => (
                    <span key={index}>{line}<br/></span>
                ))}
            </div>
            <Image src={props.src} alt={"card-image"} className={"element-card-image-large"} width={2614}
                   height={1976}/>
        </div>
    )
}