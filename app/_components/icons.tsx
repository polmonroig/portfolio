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

