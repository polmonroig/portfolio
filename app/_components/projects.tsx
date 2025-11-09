import {useState} from "react";
import {GithubIcon} from "@/app/_components/icons";

type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    slug: string;
};

const projects: Project[] = [

    {
        id: "studio",
        title: "BCN Studio",
        description:
            "Studio is a VFX cloud infrastructure management platform specifically designed to make the job for artists easier by decoupling the complexity behind a cloud architecture.",
        tags: ["Web Development", "Data Visualization"],
        slug: "bcn_studio"
    },
    {
        id: "collab",
        title: "Collab",
        description: "CMS Platform Connected with Basecamp editor, built with Ruby on Rails",
        tags: ["web development"],
        slug: "collab"
    },
    {
        id: "web3d",
        title: "Web3D",
        description: "Anamorphic 3D platform for billboards",
        tags: ["web development", "webgl"],
        slug: "web3d"
    },
    {
        id: "dx",
        title: "DX Performance Demo",
        description: "Consultant on Borderlands THREE.js app",
        tags: ["web development", "webgl"],
        slug: "dx_performance_demo"
    },
    {
        id: "timelines",
        title: "Timelines",
        description: "Consultant on project task and Gantt timelines application",
        tags: ["web development", "webgl"],
        slug: "timelines"
    },
    {
        id: "cokoon",
        title: "Cokoon",
        description:
            "Full-fetched anamorphic interactive THREE.js app designed for NTT Cookon Inmesirve Experience Space",
        tags: ["web development", "webgl"],
        slug: "cokoon"
    },
    {
        id: "aiart",
        title: "Aiart",
        description:
            "Intelligent adviser for your drawings and paintings with and personal art advisor powered with AI. With aiart you can instantly obtain a detailed analysis of its composition balance and color harmony.",
        tags: ["web development", "image segmentation"],
        slug: "aiart"
    },
    {
        id: "network_designer",
        title: "Network Designer",
        description: "Simple Neural Network designer and exporter to python pytorch code",
        tags: ["web development"],
        slug: "network_designer"
    },
    {
        id: "genetic_brushes",
        title: "Genetic Brushes",
        description:
            "Genetic brushes is an image painter that mimics the process of painting of an image into a canvas.",
        tags: ["aritificial intelligence"],
        slug: "genetic_brushes"
    },
    {
        id: "baba_is_you",
        title: "Baba Is You",
        description: "Tribute to Baba is You game coded in C++ OpenGL",
        tags: ["game development"],
        slug: "baba_is_you"
    },
    {
        id: "starfox64",
        title: "StarFox64",
        description: "Tribute to StarFox64 game coded in Unity",
        tags: ["game development"],
        slug: "starfox64"
    },
    {
        id: "light_in_solstice",
        title: "Light In Solstice",
        description: "Currently in-development 2D Game coded in Godot",
        tags: ["game development"],
        slug: "light_in_solstice"
    },
    {
        id: "cloud_segmentation",
        title: "Cloud Segmentation",
        description: "Deep learning CNN cloud segmentation algorithm for Kaggle contest",
        tags: ["machine learning"],
        slug: "cloud_segmentation"
    },
    {
        id: "earthquake_prediction",
        title: "Earthquake Prediction",
        description:
            "Machine Learning ensemble model for earthquake forecast for Kaggle contest",
        tags: ["machine learning"],
        slug: "earthquake_prediction"
    },
    {
        id: "lz4_compression",
        title: "LZ4 Compression algorithm",
        description:
            "Set of multiple algorithms for LZ4 compression in python, contest on speed and compression ratio",
        tags: ["algorithms"],
        slug: "lz4_compression"
    },
    {
        id: "sfic_compression",
        title: "SFIC Compression Library",
        description:
            "Image compressions library written in C++ which includes multiple compression algorithms",
        tags: ["algorithms"],
        slug: "sfic_compression"
    },
    {
        id: "cpp_rng",
        title: "C++ Random Number Generator",
        description: "Multiple random distribution pseudo-random number generators",
        tags: ["algorithms"],
        slug: "cpp_rng"
    },
    {
        id: "graph_percolation",
        title: "Graph Percolation",
        description: "Graph Connectivity and Percolation experiments in C++",
        tags: ["algorithms"],
        slug: "graph_percolation"
    },
    {
        id: "calendar_api",
        title: "Calendar API",
        description:
            "This is an PyQT app that is connected to Google Calendar, the main purpose of this application is to collect the events of a calendar search them by date, name and color and to receive and analysis of the duration of the events and dates.",
        tags: ["algorithms", "desktop app"],
        slug: "calendar_api"
    },
    {
        id: "telegram_quiz_bot",
        title: "Telegram Quiz Bot",
        description:
            "This is a telegram chatbot design to make polls/quiz to people and save its results.",
        tags: ["algorithm"],
        slug: "telegram_quiz_bot"
    },
    {
        id: "bayesian_model_builder",
        title: "Bayesian Model Builder",
        description:
            "This is a bayesian code builder that generates stan code, that I built to simplify Media Mix Modeling, it has marketing concepts integrated such as adstock and diminishing returns, it is built with R on top of cmdstan which enables for state-of-art bayesian model.",
        tags: ["machine learning"],
        slug: "bayesian_model_builder"
    },
    {
        id: "ratings_prediction",
        title: "Ratings Prediction",
        description: "This project is a webapp connected to an API that estimates rating star ratings using machine learning",
        tags: ["machine learning"],
        slug: "ratings_prediction"
    }

];

const ProjectTag = ({text}: { text: string }) => {
    return (
        <div className={"element-tag"}>{text}</div>
    )
}


const ProjectItem = ({project}: { project: Project }) => {
    const coverWidth = 455;
    const coverHeight = 484;
    const {id, title, description, tags} = project;
    const src = `/projects/${id}/cover.png`;
    return (
        <div className={"component-project-item"}>
            <img src={src} alt={title}
                 width={coverWidth}
                 height={coverHeight}
                 style={{
                     objectFit: "cover",
                     maxWidth: coverWidth,
                     maxHeight: coverHeight,
                     width: coverWidth,
                     height: coverHeight
                 }}/>
            <div className={"style-paragraph"}>{description}</div>
            <div className={"component-project-tags"}>
                {
                    tags.map(tag => <ProjectTag text={tag} key={tag}/>)
                }
            </div>
        </div>
    )
}


export const Projects = () => {
    return (
        <div id={"projects"} className={"component-projects"}>
            <div className={"element-section-header"}>
                <div className={"style-gradient-text"}>
                    Featured Projects
                </div>
                <div className={"element-line-full"}></div>
            </div>
            <div className={"component-projects-list"}>
                <div>
                    Filter by Service: ....
                </div>
                <div className={"component-projects-grid"}>
                    {
                        projects.map((project: Project) => {
                            return (
                                <ProjectItem key={project.id} project={project}/>
                            )
                        })
                    }
                </div>
                <div>
                    <button
                        className={"element-button layout-margin-x-auto cursor-pointer"}>
                        View more projects
                    </button>

                </div>
            </div>


        </div>
    )
}