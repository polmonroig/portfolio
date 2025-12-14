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
            <FaLinkedin style={{fontSize: "20px"}}/>
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
            <FaGithub style={{fontSize: "20px"}}/>
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
            <FaHashnode style={{fontSize: "20px"}}/>
        </a>
    )
}

export const CircleLineIcon = (props: { className?: string, classNamePath? : string, style?: {}}) => {
    return (
        <svg viewBox="0 0 457 166" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
             className={props.className}
             style={props.style}>
            <path
                  className={props.classNamePath}
                  d="M23.652 37.57c-49.713 32.158-36.71 138.536 237.723 125.923 173.239-7.961 203.906-74.972 191.822-96.122C441.112 46.22 407.649 3.28 254.105 1.05 92.241-1.303 31.338 80.263 64.788 92.366"
                  stroke="#2D2D2D" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

