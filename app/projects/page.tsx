


type Project = {
    title: string;
    description: string;
    tags: string[];
};

const projects: Project[] = [
    {
        title: "Portfolio",
        description: "I built my own porfolio using Next.js",
        tags: ["web development", "webgl"],
    },
    {
        title: "BCN Studio",
        description:
            "Studio is a VFX cloud infrastucture management platform specifically designed to make the job for artists easier by decoupling the complexity behind a cloud architecture.",
        tags: ["web development", "aws"],
    },
    {
        title: "Collab",
        description: "CMS Platform Connected with Basecamp editor, built with Ruby on Rails",
        tags: ["web development"],
    },
    {
        title: "Web3D",
        description: "Anamorphic 3D platform for billboards",
        tags: ["web development", "webgl"],
    },
    {
        title: "DX Performance Demo",
        description: "Consultant on Borderlands THREE.js app",
        tags: ["web development", "webgl"],
    },
    {
        title: "Timelines",
        description: "Consultant on project task and Gantt timelines application",
        tags: ["web development", "webgl"],
    },
    {
        title: "Cokoon",
        description:
            "Full-fetched anamorphic interactive THREE.js app designed for NTT Cookon Inmesirve Experience Space",
        tags: ["web development", "webgl"],
    },
    {
        title: "Aiart",
        description:
            "Intelligent adviser for your drawings and paintings with and personal art advisor powered with AI. With aiart you can instantly obtain a detailed analysis of its composition balance and color harmony.",
        tags: ["web development", "image segmentation"],
    },
    {
        title: "Network Designer",
        description: "Simple Neural Network designer and exporter to python pytorch code",
        tags: ["web development"],
    },
    {
        title: "Genetic Brushes",
        description:
            "Genetic brushes is an image painter that mimics the process of painting of an image into a canvas.",
        tags: ["aritificial intelligence"],
    },
    {
        title: "Baba Is You",
        description: "Tribute to Baba is You game coded in C++ OpenGL",
        tags: ["game development"],
    },
    {
        title: "StarFox64",
        description: "Tribute to StarFox64 game coded in Unity",
        tags: ["game development"],
    },
    {
        title: "Light In Solstice",
        description: "Currently in-development 2D Game coded in Godot",
        tags: ["game development"],
    },
    {
        title: "Cloud Segmentation",
        description: "Deep learning CNN cloud segmentation algorithm for Kaggle contest",
        tags: ["machine learning"],
    },
    {
        title: "Earthquake Prediction",
        description:
            "Machine Learning ensemble model for earthquake forecast for Kaggle contest",
        tags: ["machine learning"],
    },
    {
        title: "LZ4 Compression algorithm",
        description:
            "Set of multiple algorithms for LZ4 compression in python, contest on speed and compression ratio",
        tags: ["algorithms"],
    },
    {
        title: "SFIC Compression Library",
        description:
            "Image compressions library written in C++ which includes multiple compression algorithms",
        tags: ["algorithms"],
    },
    {
        title: "C++ Random Number Generator",
        description: "Multiple random distribution pseudo-random number generators",
        tags: ["algorithms"],
    },
    {
        title: "Graph Percolation",
        description: "Graph Connectivity and Percolation experiments in C++",
        tags: ["algorithms"],
    },
    {
        title: "Calendar API",
        description:
            "This is an PyQT app that is connected to Google Calendar, the main purpose of this application is to collect the events of a calendar search them by date, name and color and to receive and analysis of the duration of the events and dates.",
        tags: ["algorithms", "desktop app"],
    },
    {
        title: "Telegram Quiz Bot",
        description:
            "This is a telegram chatbot design to make polls/quiz to people and save its results.",
        tags: ["algorithm"],
    },
    {
        title: "MMM Bayesian Model Builder",
        description:
            "This is a bayesian code builder that generates stan code, that I built to simplify Media Mix Modeling, it has marketing concepts integrated such as adstock and diminishing returns, it is built with R on top of cmdstan which enables for state-of-art bayesian model.",
        tags: ["algorithm"],
    },
];

const coverWidth = 400;
const coverHeight = 200;

const imageMap: Record<string, string> = {
    "Aiart": "/projects/aiart/cover.png",
    "Genetic Brushes": "/projects/genetic_brushes/cover.png",
    "BCN Studio": "/projects/studio/cover.png",
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

const categoryOrder = [
    "Web Development",
    "Game Development",
    "Machine Learning & AI",
    "Algorithms & Data Structures",
    "Desktop & Tools",
    "Other",
];

export default function Projects() {
    const grouped: Record<string, Project[]> = projects.reduce((acc, p) => {
        const cat = categorize(p.tags);
        acc[cat] = acc[cat] || [];
        acc[cat].push(p);
        return acc;
    }, {} as Record<string, Project[]>);

    const categories = categoryOrder.filter((c) => grouped[c]?.length).concat(
        Object.keys(grouped).filter((c) => !categoryOrder.includes(c))
    );

    return (
        <div>
            <div className="w-full py-24 bg-gradient-to-r from-teal-100 via-teal-50 to-teal-100 shadow-lg">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="font-average text-4xl sm:text-5xl font-semibold text-teal-500">All Projects</h1>
                        <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
                            Explore a complete list of my work across web, games, algorithms and machine learning — neatly
                            organized by category.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center mt-6">
                        {categories.map((c) => (
                            <a key={c} href={`#${c.replace(/\s+/g, "-").toLowerCase()}`} className="px-3 py-2 text-sm rounded-full border border-teal-300 text-teal-700 hover:bg-teal-50">
                                {c}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {categories.map((cat) => (
                    <section key={cat} id={cat.replace(/\s+/g, "-").toLowerCase()} className="mb-20">
                        <h2 className="text-3xl font-semibold text-gray-800 font-average">{cat}</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {grouped[cat].map((project, idx) => (
                                <div
                                    key={`${cat}-${idx}`}
                                    className="cursor-pointer bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-300 mx-auto"
                                    style={{ width: coverWidth }}
                                >
                                    {imageMap[project.title] ? (
                                        <img
                                            src={imageMap[project.title]}
                                            alt={`${project.title} preview`}
                                            style={{ width: coverWidth, height: coverHeight }}
                                            width={coverWidth}
                                            height={coverHeight}
                                            className="w-full h-auto rounded-t-xl object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="w-full rounded-t-xl bg-gray-100 flex items-center justify-center text-gray-400"
                                            style={{ width: coverWidth, height: coverHeight }}
                                        >
                                            No cover
                                        </div>
                                    )}
                                    <div className="p-6 border-t-2 border-gray-300">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 leading-6">{project.description}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {project.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="border px-2 py-1 text-xs rounded text-gray-600">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}