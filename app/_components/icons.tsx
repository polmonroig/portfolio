import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaHashnode} from "react-icons/fa6";
import React from "react";


export const LinkedinIcon = () => {
    return (
        <a
            href={"https://www.linkedin.com/in/polmonroig/"}
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label="Visit Pol's LinkedIn profile"
        >
            <FaLinkedin/>
        </a>
    )
}

export const GithubIcon = (props: { slug: string }) => {
    const slug = props.slug || "";
    return (
        <a
            href={`https://github.com/polmonroig/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
        >
            <FaGithub/>
        </a>
    )
}

export const HashNodeIcon = () => {
    return (
        <a
            href={"https://blog.pol.company"}
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label="Visit Pol's Blog profile"
        >
            <FaHashnode/>
        </a>
    )
}

export const ArrowIcon = () => {
    return (
        <svg
            version="1.1"
            id="svg1"
            width="1.000039"
            height="9.641036"
            viewBox="0 0 1.000039 9.641036"
            xmlns="http://www.w3.org/2000/svg"
            className={"element-arrow-down"}
        >
            <g id="g1" transform="translate(-21.999999,-63.717679)">
                <path
                    style={{fill: "#ffffff"}}
                    d="m 49.726179,1172.9265 c -24.9284,-24.9868 -27.72618,-28.1195 -27.72618,-31.0454 0,-4.1308 3.81508,-8.1634 7.72304,-8.1634 2.3226,0 6.21566,3.403 22.29545,19.4891 10.71483,10.719 19.81901,19.494 20.23151,19.5 0.4125,0.01 0.75,-249.51412 0.75,-554.48912 V 63.717679 h 8 8 V 618.21768 c 0,304.975 0.38257,554.50002 0.85016,554.50002 0.46759,0 9.13528,-8.5145 19.261521,-18.9211 12.49783,-12.8438 19.34898,-19.1564 21.33055,-19.6538 5.60316,-1.4063 10.69776,3.9343 9.2384,9.6845 -0.33368,1.3147 -12.90467,14.6529 -27.93555,29.6404 -25.289711,25.2167 -27.588671,27.25 -30.810791,27.25 -3.22727,0 -5.50975,-2.0326 -31.20811,-27.7912 z"
                    id="path1"
                />
            </g>
        </svg>
    );
};