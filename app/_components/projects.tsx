'use client';

import Link from "next/link";
import {Cover} from "@/app/_components/cover";
import {Button, ResponsiveImage} from "@/app/_components/elements";
import React, {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

type Project = {
    id: string;
    title: string;
    description: string;
    header: string;
    tags: string[];
    slug: string;
};

export const projects: Project[] = [
    {
        id: "studio",
        title: "BCN Studio",
        description: "Centralized Cloud Infrastructure Platform for VFX Production Company",
        header: "Centralized Cloud \n Infrastructure for VFX \n Production",
        tags: ["Web Development", "Data Visualization"],
        slug: "bcn_studio"
    },
    {
        id: "cokoon",
        title: "Cokoon",
        description:
            "Full-fetched anamorphic interactive THREE.js app designed for NTT Cookon Inmesirve Experience Space",
        header: "Immersive \n Anamorphic \n Experience",
        tags: ["Web Development"],
        slug: "cokoon"
    },
    {
        id: "aiart",
        title: "Aiart",
        description:
            "Intelligent adviser for your drawings and paintings with and personal art advisor powered with AI. Science backed graph-based analysis.",
        header: "AI Powered \n Art Analysis Platform",
        tags: ["Web Development", "Machine Learning"],
        slug: "aiart"
    },
    {
        id: "web3d",
        title: "Web3D",
        description: "Interactive web-based tool for creating and manipulating anamorphic media content. Features real-time preview, multiple export formats, and intuitive controls for achieving stunning visual effects.",
        header: "Anamorphic Media Creator",
        tags: ["Web Development"],
        slug: "web3d"
    },
    {
        id: "bayesian_model_builder",
        title: "Bayesian Model Builder",
        description: "A bayesian code builder in R that generates stan code for Media Mix Modeling with integrated marketing concepts like adstock and diminishing returns.",
        header: "Automated Marketing Analytics Platform",
        tags: ["Machine Learning"],
        slug: "bayesian_model_builder"
    },
    {
        id: "genetic_brushes",
        title: "Genetic Brushes",
        description:
            "Genetic brushes is an image painter that mimics the process of painting of an image into a canvas.",
        header: "AI-Driven Digital Art Creation",
        tags: ["Machine Learning"],
        slug: "genetic_brushes"
    },
    {
        id: "cloud_segmentation",
        title: "Cloud Segmentation",
        description: "Deep learning CNN cloud segmentation algorithm for Kaggle contest",
        header: "AI-Powered Cloud Detection System",
        tags: ["Machine Learning"],
        slug: "cloud_segmentation"
    },
    {
        id: "earthquake_prediction",
        title: "Earthquake Prediction",
        description:
            "Machine Learning ensemble model for earthquake forecast for Kaggle contest",
        header: "ML-Based Seismic Activity Forecasting",
        tags: ["Machine Learning"],
        slug: "earthquake_prediction"
    },
    {
        id: "collab",
        title: "Collab",
        description: "CMS Platform Connected with Basecamp editor, built with Ruby on Rails",
        header: "Streamlined CMS Integration with Basecamp",
        tags: ["Web Development"],
        slug: "collab"
    },
    {
        id: "timelines",
        title: "Timelines",
        description: "Consultant on projects task and Gantt timelines application",
        header: "Interactive Project Management Visualization",
        tags: ["Web Development"],
        slug: "timelines"
    },
    {
        id: "baba_is_you",
        title: "Baba Is You",
        description: "Tribute to Baba is You game coded in C++ OpenGL",
        header: "Baba Is You \n Tribute",
        tags: ["Game Development"],
        slug: "baba_is_you"
    },
    {
        id: "starfox64",
        title: "StarFox64",
        description: "Tribute to StarFox64 game coded in Unity",
        header: "Classic Space Combat Game Remake",
        tags: ["Game Development"],
        slug: "starfox64"
    },
    {
        id: "light_in_solstice",
        title: "Light In Solstice",
        description: "Currently in-development 2D Game coded in Godot",
        header: "Atmospheric 2D Adventure Game",
        tags: ["Game Development"],
        slug: "light_in_solstice"
    },


];

const ProjectTag = ({text, active, interactive, onClick}: {
    text: string,
    active: boolean,
    interactive: boolean,
    onClick?: () => void
}) => {

    let className = "element-tag";
    if (active) {
        className += " element-tag-active";
    } else if (interactive) {
        className += " element-tag-inactive";
    }
    if (interactive) {
        className += " element-tag-interactive";
    }

    return (
        <div className={className} onClick={onClick}>
            {text}
        </div>
    )
}


const ProjectItem = ({project}: { project: Project }) => {
    const coverWidth = 455;
    const coverHeight = 484;
    const {id, title, description, tags} = project;
    const src = `/images/projects/${id}/cover.webp`;


    const containerRef = useRef(null);

    useGSAP(() => {


        gsap.from(
            ".component-project-item",
            {
                y: 200,
                autoAlpha: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    start: 'top 80%',
                    trigger: containerRef.current,
                    toggleActions: 'play none none none'
                }
            }
        )
    }, {scope: containerRef});

    const altText = `${title} project ${description} `;

    return (

        <div ref={containerRef}>
            <Link href={`/projects/${id}`} className={"component-project-item"}>
                <div className={"overflow-hidden"}>
                    <ResponsiveImage src={src}
                                     alt={altText}
                                     width={coverWidth}
                                     height={coverHeight}
                                     className={"transition-zoom-out transform-scale"}
                                     style={{
                                         objectFit: "cover",
                                         width: coverWidth,
                                         height: coverHeight
                                     }}/>
                </div>

                <h4 className={"component-project-description"}><b>{title}:</b> {description}</h4>
                <h5 className={"component-project-tags"}>
                    {
                        tags.map(tag => <ProjectTag text={tag} key={tag} active={false} interactive={false}/>)
                    }
                </h5>
            </Link>
        </div>
    )
}


export const Projects = () => {


    const [activeTags, setActiveTags] = useState<string[]>(["Web Development", "Data Visualization"]);

    let tagList: string[] = [];
    projects.forEach(project => {
        tagList = tagList.concat(project.tags);
    });
    tagList = [...new Set(tagList)];

    const filteredProjects = projects.filter(project => {
        return activeTags.some(label => project.tags.includes(label));
    });

    const sortedProjects = filteredProjects.sort((a: Project, b: Project) => {
        let sortValue = 0;
        for (const tag of activeTags) {
            const aContainsTag = a.tags.includes(tag);
            const bContainsTag = b.tags.includes(tag);
            if (aContainsTag && bContainsTag) {
                sortValue = 0;
                break;
            } else if (aContainsTag && !bContainsTag) {
                sortValue = -1;
                break;
            } else if (!aContainsTag && bContainsTag) {
                sortValue = 1;
                break;
            }
        }
        return sortValue;
    })

    const updateTags = (tag: string) => {
        setActiveTags(currentTags => currentTags.includes(tag) ? currentTags.filter(t => t !== tag) : [...currentTags, tag]);
    }

    const addAllTags = () => {
        setActiveTags(currentTags => {
            return [...currentTags, ...tagList.filter(t => !currentTags.includes(t))];
        })
    }

    return (
        <div id={"projects"} className={"component-projects"}>
            <div className={"element-section-header"}>
                <h2 className={"element-section-title"}>
                    Featured Projects
                </h2>
                <div className={"element-line-full responsive-hide-desktop"}></div>
            </div>
            <div className={"component-projects-list"}>
                <div className={"component-projects-filter"}>
                    <div style={{padding: "2px 8px 2px 0px"}} className={"text-caption responsive-hide-desktop"}>
                        Filter by Service:
                    </div>
                    {
                        tagList.map((tag: string) => {
                            return (
                                <div className={"layout-margin-y-auto"} key={tag}>
                                    <ProjectTag text={tag}
                                                onClick={() => updateTags(tag)}
                                                active={activeTags.includes(tag)}
                                                interactive={true}/>
                                </div>
                            )
                        })
                    }

                </div>

                {
                    sortedProjects.length > 0 ?
                        <div className={"component-projects-grid"}>
                            {
                                sortedProjects.map((project: Project) => {
                                    return (
                                        <ProjectItem key={project.id} project={project}/>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className={"component-projects-not-found"}>
                            No projects selected
                        </div>
                }

                {
                    tagList.length > activeTags.length ?
                        <div style={{margin: "60px auto 0 auto"}}>
                            <Button text={"View more projects"}
                                    onClick={() => addAllTags()}/>
                        </div>
                        : null
                }
            </div>


        </div>
    )
}


export const ProjectViewHeader = ({id}: { id: string }) => {
    const selectedProject = projects.find(project => project.id === id);

    // Handle case where project is not found
    if (!selectedProject) {
        console.error(`Project with id "${id}" not found`);
        return null; // or return a fallback UI
    }

    return (
        <>
            <Cover src={`/images/projects/${id}/cover-large.webp`}
                   align="left"
                   height="50%"
                   opacity={0.5}
                   title={selectedProject.header}
                   tags={selectedProject.tags}
                   animationTextSplit={"lines"}/>
        </>
    )
}


export const ProjectViewTemplate = (props: {
    id: string,
    description: string,
    year: string,
    client: string,
    department: string,
    location: string,
    mockup: React.ReactNode,
    children: React.ReactNode
}) => {

    const currentProjectIndex: number = projects.findIndex(p => p.id === props.id);
    const nextProjectId = currentProjectIndex + 1 >= projects.length ? projects[0].id : projects[currentProjectIndex + 1].id;

    useGSAP(() => {


        gsap.from('.animation-mockup', {
            duration: 1,
            delay: 0.25,
            autoAlpha: 0,
            ease: "power3.out",
            y: 50,
            scrollTrigger: {
                start: 'top 60%',
                trigger: ".animation-mockup",
                toggleActions: 'play none none none'
            },
        })


    })

    return (
        <>
            {/** Project Header **/}
            <ProjectViewHeader id={props.id}/>
            {/** Project Content **/}
            <div className="component-project-view-content">
                {/** Project Content Highlight **/}
                <div className={"component-project-view-content-header"}>
                    <div className={"component-project-view-metadata"}>
                        <div className={"text-caption text-color-gray"}>
                            Year
                        </div>
                        <div>
                            {props.year}
                        </div>
                        <div className={"text-caption text-color-gray"}>
                            Client
                        </div>
                        <div>
                            {props.client}
                        </div>
                        <div className={"text-caption text-color-gray"}>
                            Department
                        </div>
                        <div>
                            {props.department}
                        </div>
                        <div className={"text-caption text-color-gray"}>
                            Location
                        </div>
                        <div>
                            {props.location}
                        </div>
                    </div>
                    <h3 className={"component-project-view-description"}>
                        {props.description}
                    </h3>
                </div>
                <div className={"layout-margin-x-auto animation-mockup"}>
                    {props.mockup}
                </div>

                {/** Specific Content to project **/}
                <div className={"component-project-view-children"}>
                    {props.children}
                </div>

                {/** Footer **/}
                <Button text={"Go to next project →"} href={`/projects/${nextProjectId}`}/>
            </div>
        </>
    )
}