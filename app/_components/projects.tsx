import {useState} from "react";
import {GithubIcon} from "@/app/_components/icons";

type Project = {
    title: string;
    description: string;
    tags: string[];
    slug: string;
};
const projects: Project[] = [
    {
        title: "Portfolio",
        description: "I built my own porfolio using Next.js",
        tags: ["web development", "webgl"],
        slug: "portfolio"
    },
    {
        title: "BCN Studio",
        description:
            "Studio is a VFX cloud infrastucture management platform specifically designed to make the job for artists easier by decoupling the complexity behind a cloud architecture.",
        tags: ["web development", "aws"],
        slug: "bcn_studio"
    },
    {
        title: "Collab",
        description: "CMS Platform Connected with Basecamp editor, built with Ruby on Rails",
        tags: ["web development"],
        slug: "collab"
    },
    {
        title: "Web3D",
        description: "Anamorphic 3D platform for billboards",
        tags: ["web development", "webgl"],
        slug: "web3d"
    },
    {
        title: "DX Performance Demo",
        description: "Consultant on Borderlands THREE.js app",
        tags: ["web development", "webgl"],
        slug: "dx_performance_demo"
    },
    {
        title: "Timelines",
        description: "Consultant on project task and Gantt timelines application",
        tags: ["web development", "webgl"],
        slug: "timelines"
    },
    {
        title: "Cokoon",
        description:
            "Full-fetched anamorphic interactive THREE.js app designed for NTT Cookon Inmesirve Experience Space",
        tags: ["web development", "webgl"],
        slug: "cokoon"
    },
    {
        title: "Aiart",
        description:
            "Intelligent adviser for your drawings and paintings with and personal art advisor powered with AI. With aiart you can instantly obtain a detailed analysis of its composition balance and color harmony.",
        tags: ["web development", "image segmentation"],
        slug: "aiart"
    },
    {
        title: "Network Designer",
        description: "Simple Neural Network designer and exporter to python pytorch code",
        tags: ["web development"],
        slug: "network_designer"
    },
    {
        title: "Genetic Brushes",
        description:
            "Genetic brushes is an image painter that mimics the process of painting of an image into a canvas.",
        tags: ["aritificial intelligence"],
        slug: "genetic_brushes"
    },
    {
        title: "Baba Is You",
        description: "Tribute to Baba is You game coded in C++ OpenGL",
        tags: ["game development"],
        slug: "baba_is_you"
    },
    {
        title: "StarFox64",
        description: "Tribute to StarFox64 game coded in Unity",
        tags: ["game development"],
        slug: "starfox64"
    },
    {
        title: "Light In Solstice",
        description: "Currently in-development 2D Game coded in Godot",
        tags: ["game development"],
        slug: "light_in_solstice"
    },
    {
        title: "Cloud Segmentation",
        description: "Deep learning CNN cloud segmentation algorithm for Kaggle contest",
        tags: ["machine learning"],
        slug: "cloud_segmentation"
    },
    {
        title: "Earthquake Prediction",
        description:
            "Machine Learning ensemble model for earthquake forecast for Kaggle contest",
        tags: ["machine learning"],
        slug: "earthquake_prediction"
    },
    {
        title: "LZ4 Compression algorithm",
        description:
            "Set of multiple algorithms for LZ4 compression in python, contest on speed and compression ratio",
        tags: ["algorithms"],
        slug: "lz4_compression"
    },
    {
        title: "SFIC Compression Library",
        description:
            "Image compressions library written in C++ which includes multiple compression algorithms",
        tags: ["algorithms"],
        slug: "sfic_compression"
    },
    {
        title: "C++ Random Number Generator",
        description: "Multiple random distribution pseudo-random number generators",
        tags: ["algorithms"],
        slug: "cpp_rng"
    },
    {
        title: "Graph Percolation",
        description: "Graph Connectivity and Percolation experiments in C++",
        tags: ["algorithms"],
        slug: "graph_percolation"
    },
    {
        title: "Calendar API",
        description:
            "This is an PyQT app that is connected to Google Calendar, the main purpose of this application is to collect the events of a calendar search them by date, name and color and to receive and analysis of the duration of the events and dates.",
        tags: ["algorithms", "desktop app"],
        slug: "calendar_api"
    },
    {
        title: "Telegram Quiz Bot",
        description:
            "This is a telegram chatbot design to make polls/quiz to people and save its results.",
        tags: ["algorithm"],
        slug: "telegram_quiz_bot"
    },
    {
        title: "Bayesian Model Builder",
        description:
            "This is a bayesian code builder that generates stan code, that I built to simplify Media Mix Modeling, it has marketing concepts integrated such as adstock and diminishing returns, it is built with R on top of cmdstan which enables for state-of-art bayesian model.",
        tags: ["machine learning"],
        slug: "bayesian_model_builder"
    },
    {
        title: "Ratings Prediction",
        description: "This project is a webapp connected to an API that estimates rating star ratings using machine learning",
        tags: ["machine learning"],
        slug: "ratings_prediction"
    }
];
const coverWidth = 400;
const coverHeight = 200;

const imageMap: Record<string, string> = {
    "Aiart": "/projects/aiart/cover.png",
    "Genetic Brushes": "/projects/genetic_brushes/cover.png",
    "BCN Studio": "/projects/studio/cover.png",
    "Baba Is You": "/projects/babaisyou/cover.png",
    "Earthquake Prediction": "/projects/earthquake/cover.png",
    "Cloud Segmentation": "/projects/cloud_segmentation/cover.png",
    "Portfolio": "/projects/portfolio/cover.png",
    "StarFox64": "/projects/starfox64/cover.png",
    "Timelines": "/projects/timelines/cover.png",
    "DX Performance Demo": "/projects/dx/cover.png",
    "Cokoon": "/projects/cokoon/cover.png",
    "Light In Solstice": "/projects/light_in_solstice/cover.png",
    "Bayesian Model Builder": '/projects/mmm_model_builder/cover.png',
};

function categorize(tags: string[]): string {
    const t = tags.map((s) => s.toLowerCase());
    if (t.includes("game development")) return "Game Development";
    if (t.includes("machine learning") || t.includes("image segmentation") || t.includes("aritificial intelligence"))
        return "Machine Learning & AI";
    if (t.includes("algorithms") || t.includes("algorithm")) return "Algorithms & Data Structures";
    if (t.includes("desktop app")) return "Desktop & Tools";
    // Default bucket for everything web-related
    if (t.includes("web development") || t.includes("webgl") || t.includes("aws")) return "Web Development";
    return "Other";
}


export const Projects = () => {
    return(
        <div id={"services"} className={"component-services"}>
            <div className={"element-section-header"}>
                <div className={"style-gradient-text"}>
                    Featured Projects
                </div>
                <div className={"element-line-full"}></div>
            </div>

        </div>
    )
}