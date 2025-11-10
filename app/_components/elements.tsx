import React from "react";
import Image from 'next/image';

export const Button = (props: { text: string }) => {
    return (
        <button className={"element-button layout-margin-x-auto cursor-pointer"}>
            {props.text}
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
                            <div className={"layout-flex-row style-h5"}>
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


    return (
        <div className={"element-card-large"}>
            <div className={"element-card-texts style-h3 style-gradient-text style-align-center"}>
                {props.title}
            </div>
            <Image src={props.src} alt={"card-image"} className={"element-card-image-large"} width={2614} height={1976}/>
        </div>
    )
}