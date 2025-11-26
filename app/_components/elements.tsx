'use client'

import React, {useEffect, useRef} from "react";
import {useState} from "react";
import Image from 'next/image';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import Link from "next/link";

const ButtonLinkWrapper = (props: {
    ref,
    onMouseEnter: (e: React.MouseEvent) => void,
    onMouseLeave: (e: React.MouseEvent) => void,
    onClick?: () => void,
    href?: string,
    type?: string,
    children?: React.ReactNode
}) => {

    if(props.href){
        return(
            <a ref={props.ref}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                href={props.href}
                className={"element-button layout-margin-x-auto"}
            >
                {props.children}
            </a>
        )
    }
    else{
        return(
            <button
                ref={props.ref}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                onClick={props.onClick}
                className={"element-button layout-margin-x-auto"}
                type={props.type}
            >
                {props.children}
            </button>
        )
    }

}

export const Button = (props: { text: string, onClick?: () => void, href?: string, type?: string}) => {

    const [isHovering, setHovering] = useState(false);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);

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
        scope: buttonRef
    });

    const onMouseInteraction = (hovering: boolean, event: React.MouseEvent) => {
        setHovering(hovering);
        const button = buttonRef.current;
        if(button){
            const bounds = button.getBoundingClientRect();
            setXPos(event.clientX - bounds.left);
            setYPos(event.clientY - bounds.top);
        }
    }


    return (
        <ButtonLinkWrapper
            ref={buttonRef}
            href={props.href}
            onMouseEnter={(e) => onMouseInteraction(true, e)}
            onMouseLeave={(e) => onMouseInteraction(false, e)}
            onClick={props.onClick}
            type={props.type}
        >
            <span
                className={"element-button-fill"}/>
            <span className={"element-button-text"}>
                {props.text}
            </span>
        </ButtonLinkWrapper>
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