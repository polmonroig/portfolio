import {useState} from "react";
import {GithubIcon} from "@/app/icons";

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


export default function Projects() {
    const grouped: Record<string, Project[]> = projects.reduce((acc, p) => {
        const cat = categorize(p.tags);
        acc[cat] = acc[cat] || [];
        acc[cat].push(p);
        return acc;
    }, {} as Record<string, Project[]>);


    grouped['Selected Projects'] = [
        projects[7],
        projects[9],
        projects[1]
    ]

    const categories: string[] = [
        "Selected Projects",
        "Machine Learning & AI",
        "Game Development",
        "Web Development",
        "Algorithms & Data Structures"
    ];

    const categoryDescription: {[key: string]: string} = {
        "Selected Projects": "A snapshot of products and experiments I have built across web, games, and machine learning.",
        "Machine Learning & AI": "Projects focused on artificial intelligence, computer vision, and machine learning algorithms.",
        "Game Development": "Video game projects built with various engines like Unity, Godot, and OpenGL.",
        "Web Development": "Web applications and interactive experiences created using modern frameworks and WebGL.",
        "Algorithms & Data Structures": "Implementation of core computer science concepts and data processing tools."
    }



    // state variables
    const [categorySelected, setCategorySelected] = useState<string>("Selected Projects");
    const [selectedProject, setSelectedProject] = useState<number>(-1);


    const filteredGrouped = grouped[categorySelected];

    return (
        <div>
            <div className="w-full pt-24 pb-4">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="font-average text-4xl sm:text-5xl font-semibold text-teal-500">{categorySelected}</h1>
                        <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto h-16">
                            {categoryDescription[categorySelected]}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center mt-6">
                        {categories.map((c) => (
                            <button key={c}
                                    onClick={() => {
                                        setCategorySelected(c);
                                        setSelectedProject(-1);
                                    }}
                                    className={`px-3 py-2 text-sm rounded-full border border-teal-300  hover:bg-teal-500 hover:text-white cursor-pointer
                               transition-colors duration-200 ${(selectedProject === -1 && categorySelected === c ? 'text-white bg-teal-500' : 'text-teal-700')}`}>
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24">
                {
                    selectedProject !== -1 ?
                        <div
                            className="w-full  bg-white border border-gray-200 rounded-xl  mt-8"
                        >
                            {imageMap[filteredGrouped[selectedProject].title] ? (
                                <img
                                    src={imageMap[filteredGrouped[selectedProject].title]}
                                    alt={`${filteredGrouped[selectedProject].title} preview`}
                                    style={{width: "100%", height: coverHeight * 1.5}}
                                    width={coverWidth}
                                    height={coverHeight * 1.5}
                                    className="w-full h-auto rounded-t-xl object-cover"
                                />
                            ) : (
                                <div
                                    className="w-full rounded-t-xl bg-gray-100 flex items-center justify-center text-gray-400"
                                    style={{width: coverWidth, height: coverHeight}}
                                >
                                    {filteredGrouped[selectedProject].title}
                                </div>
                            )}
                            <div className="px-6 pt-6 border-t-2 border-gray-300">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{filteredGrouped[selectedProject].title}</h3>
                                <p className="text-gray-600 leading-6">{filteredGrouped[selectedProject].description}</p>

                                <div className={"pt-2"}>
                                    <GithubIcon slug={filteredGrouped[selectedProject].slug}/>
                                </div>
                            </div>
                            {/** Project Description **/}
                            <div className={"p-6 text-gray-800"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id lacus ante.
                                Pellentesque nec suscipit neque. Etiam eu velit imperdiet, molestie mi ac, rhoncus
                                turpis. Praesent feugiat lectus et diam tempus, ut hendrerit augue laoreet. Nullam sit
                                amet nibh et lacus accumsan pretium. Donec lacinia ultricies eros nec iaculis. Etiam ac
                                interdum urna. Etiam congue vestibulum lacinia. Vivamus sagittis ligula vel mi finibus
                                consectetur. Integer egestas vitae lorem eget porttitor. Maecenas volutpat, odio eu
                                iaculis laoreet, enim mauris egestas mi, eu venenatis elit nulla non erat. Suspendisse
                                sed convallis felis.
                                <br/><br/>
                                Quisque ut nisl id est posuere viverra. Cras et orci sed odio lobortis dignissim. Cras
                                gravida quam id lectus cursus iaculis. Quisque suscipit semper ipsum, ut pharetra est
                                vulputate eu. Nullam faucibus leo sed nunc dapibus aliquam. Aenean dolor ligula,
                                consequat nec pellentesque ac, vestibulum et odio. Mauris vel diam dapibus felis
                                fringilla suscipit et vitae ligula. Cras eu eros posuere, convallis turpis fermentum,
                                finibus massa. Morbi sapien urna, efficitur sit amet convallis placerat, tempus eget
                                ligula. Nullam enim est, tempor sed blandit in, convallis vitae justo. Aliquam eros ex,
                                lobortis quis fermentum porttitor, aliquet ac nibh. Aenean eu sem ex.


                            </div>
                        </div>

                        :
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredGrouped.map((project, idx) => (
                                <div
                                    key={`${idx}`}
                                    onClick={() => setSelectedProject(idx)}
                                    className="cursor-pointer bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-300 mx-auto"
                                    style={{width: coverWidth}}
                                >
                                    {imageMap[project.title] ? (
                                        <img
                                            src={imageMap[project.title]}
                                            alt={`${project.title} preview`}
                                            style={{width: coverWidth, height: coverHeight}}
                                            width={coverWidth}
                                            height={coverHeight}
                                            className="w-full h-auto rounded-t-xl object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="w-full rounded-t-xl bg-gray-100 flex items-center justify-center text-gray-400"
                                            style={{width: coverWidth, height: coverHeight}}
                                        >
                                            {project.title}
                                        </div>
                                    )}
                                    <div className="p-6 border-t-2 border-gray-300">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 leading-6">{project.description}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {project.tags.map((tag, tIdx) => (
                                                <span key={tIdx}
                                                      className="border px-2 py-1 text-xs rounded text-gray-600">
                                                        {tag}
                                                    </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                }
            </div>
        </div>
    );
}