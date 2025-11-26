'use client';

import Link from "next/link";
import Image from "next/image";
import {Cover} from "@/app/_components/cover";
import {Button} from "@/app/_components/elements";
import React, {useState} from "react";
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
        description: "BCN Studio: Centralized Cloud Infrastructure Platform for VFX Production Company",
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
            "Intelligent adviser for your drawings and paintings with and personal art advisor powered with AI. ",
        header: "AI-Powered Art Analysis Platform",
        tags: ["Web Development", "Machine Learning"],
        slug: "aiart"
    },
    {
        id: "dx",
        title: "DX Performance Demo",
        description: "Consultant on Borderlands THREE.js app",
        header: "Optimizing Performance for Borderlands Web Experience",
        tags: ["Web Development"],
        slug: "dx_performance_demo"
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
        id: "web3d",
        title: "Web3D",
        description: "Anamorphic 3D platform for billboards",
        header: "Next-Generation 3D Billboard Platform",
        tags: ["Web Development"],
        slug: "web3d"
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
        id: "network_designer",
        title: "Network Designer",
        description: "Simple Neural Network designer and exporter to python pytorch code",
        header: "Visual Neural Network Architecture Tool",
        tags: ["Web Development"],
        slug: "network_designer"
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
    {
        id: "lz4_compression",
        title: "LZ4 Compression algorithm",
        description:
            "Set of multiple algorithms for LZ4 compression in python, contest on speed and compression ratio",
        header: "High-Performance Data Compression",
        tags: ["Algorithms"],
        slug: "lz4_compression"
    },
    {
        id: "sfic_compression",
        title: "SFIC Compression Library",
        description:
            "Image compressions library written in C++ which includes multiple compression algorithms",
        header: "Advanced Image Compression Suite",
        tags: ["Algorithms"],
        slug: "sfic_compression"
    },
    {
        id: "cpp_rng",
        title: "C++ Random Number Generator",
        description: "Multiple random distribution pseudo-random number generators",
        header: "Statistical Random Number Generation",
        tags: ["Algorithms"],
        slug: "cpp_rng"
    },
    {
        id: "graph_percolation",
        title: "Graph Percolation",
        description: "Graph Connectivity and Percolation experiments in C++",
        header: "Network Connectivity Analysis Tool",
        tags: ["Algorithms"],
        slug: "graph_percolation"
    },
    {
        id: "calendar_api",
        title: "Calendar API",
        description:
            "This is an PyQT app that is connected to Google Calendar, the main purpose of this application is to collect the events of a calendar search them by date, name and color and to receive and analysis of the duration of the events and dates.",
        header: "Smart Calendar Management System",
        tags: ["Algorithms"],
        slug: "calendar_api"
    },
    {
        id: "telegram_quiz_bot",
        title: "Telegram Quiz Bot",
        description:
            "This is a telegram chatbot design to make polls/quiz to people and save its results.",
        header: "Interactive Telegram Survey System",
        tags: ["Algorithms"],
        slug: "telegram_quiz_bot"
    },
    {
        id: "ratings_prediction",
        title: "Ratings Prediction",
        description: "This projects is a webapp connected to an API that estimates rating star ratings using machine learning",
        header: "ML-Driven Rating Prediction System",
        tags: ["Machine Learning"],
        slug: "ratings_prediction"
    }

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
    const src = `/projects/${id}/cover.png`;


    return (
        <Link className={"component-project-item"} href={`/projects/${id}`}>
            <div className={"overflow-hidden"}>
                <Image src={src} alt={title}
                       width={coverWidth}
                       height={coverHeight}
                       className={"transition-zoom-out transform-scale"}
                       style={{
                           objectFit: "cover",
                           width: coverWidth,
                           height: coverHeight
                       }}/>
            </div>

            <div className={"style-paragraph"}>{description}</div>
            <div className={"component-project-tags"}>
                {
                    tags.map(tag => <ProjectTag text={tag} key={tag} active={false} interactive={false}/>)
                }
            </div>
        </Link>
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

    const updateTags = (tag: string) => {
        setActiveTags(currentTags => currentTags.includes(tag) ? currentTags.filter(t => t !== tag) : [...currentTags, tag]);
    }


    useGSAP(() => {


        gsap.from(
            ".component-project-item",
            {
                y: 200,
                opacity: 0,
                duration: 1,
                stagger: {
                    each: 0.2
                },
                scrollTrigger: {
                    start: 'top 80%',
                    trigger: ".component-projects",
                    toggleActions: 'play none none none'
                }
            }
        )
    });


    return (
        <div id={"projects"} className={"component-projects"}>
            <div className={"element-section-header"}>
                <div className={"element-section-title"}>
                    Featured Projects
                </div>
                <div className={"element-line-full responsive-hide-desktop"}></div>
            </div>
            <div className={"component-projects-list"}>
                <div className={"component-projects-filter"}>
                    <div style={{padding: "2px 8px 2px 0px"}} className={"style-caption responsive-hide-desktop"}>
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
                    filteredProjects.length > 0 ?
                        <div className={"component-projects-grid"}>
                            {
                                filteredProjects.map((project: Project) => {
                                    return (
                                        <ProjectItem key={project.id} project={project}/>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className={"component-projects-not-found"}>
                            No projects found
                        </div>
                }

                {
                    tagList.length > activeTags.length ?
                        <div style={{margin: "60px auto 0 auto"}}>
                            <Button text={"View more projects"}
                                    onClick={() => setActiveTags(tagList)}/>
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
            <Cover src={`/projects/${id}/cover-large.png`}
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

    const nextProjectId: string = props.id;

    return (
        <>
            {/** Project Header **/}
            <ProjectViewHeader id={props.id}/>
            {/** Project Content **/}
            <div className="component-project-view-content">
                {/** Project Content Highlight **/}
                <div className={"component-project-view-content-header"}>
                    <div className={"layout-grid style-uppercase style-text-nowrap"} style={{gap: "8px"}}>
                        <div className={"style-caption style-gray"}>
                            Year
                        </div>
                        <div>
                            {props.year}
                        </div>
                        <div className={"style-caption style-gray"}>
                            Client
                        </div>
                        <div>
                            {props.client}
                        </div>
                        <div className={"style-caption style-gray"}>
                            Department
                        </div>
                        <div>
                            {props.department}
                        </div>
                        <div className={"style-caption style-gray"}>
                            Location
                        </div>
                        <div>
                            {props.location}
                        </div>
                    </div>
                    <div className={"style-paragraph"} style={{maxWidth: "516px", marginLeft: "auto"}}>
                        {props.description}
                    </div>
                </div>
                <div className={"layout-margin-x-auto"}>
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