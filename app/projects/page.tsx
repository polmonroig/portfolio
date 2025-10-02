


const projects = [
    {
        title : "Portfolio",
        description : "I built my own porfolio using Next.js",
        tags : ["web development", "webgl"]
    },
    {
        title : "BCN Studio",
        description : "Studio is a VFX cloud infrastucture management platform specifically designed to make the job for artists easier by decoupling the complexity behind a cloud architecture.",
        tags : ["web development", "aws"]
    },
    {
        title : "Collab",
        description : "CMS Platform Connected with Basecamp editor, built with Ruby on Rails",
        tags : ["web development"]
    },
    {
        title : "Web3D",
        description : "Anamorphic 3D platform for billboards",
        tags : ["web development", "webgl"]
    },
    {
        title : "DX Performance Demo",
        description : "Consultant on Borderlands THREE.js app",
        tags : ["web development", "webgl"]
    },
    {
        title : "Timelines",
        description : "Consultant on project task and Gantt timelines application",
        tags : ["web development", "webgl"]
    },
    {
        title : "Cokoon",
        description : "Full-fetched anamorphic interactive THREE.js app designed for NTT Cookon Inmesirve Experience Space",
        tags : ["web development", "webgl"]
    },
    {
        title : "Aiart",
        description : "Intelligent adviser for your drawings and paintings with and personal art advisor powered with AI. With aiart you can instantly obtain a detailed analysis of its composition balance and color harmony.",
        tags : ["web development", "image segmentation"]
    },
    {
        title : "Network Designer",
        description : "Simple Neural Network designer and exporter to python pytorch code",
        tags : ["web development"]
    },
    {
        title : "Genetic Brushes",
        description : "Genetic brushes is an image painter that mimics the process of painting of an image into a canvas.",
        tags : ["aritificial intelligence"]
    },
    {
        title : "Baba Is You",
        description : "Tribute to Baba is You game coded in C++ OpenGL",
        tags : ["game development"]
    },
    {
        title : "StarFox64",
        description : "Tribute to StarFox64 game coded in Unity",
        tags : ["game development"]
    },
    {
        title : "Light In Solstice",
        descrption : "Currently in-development 2D Game coded in Godot",
        tags : ["game development"]
    },
    {
        title : "Cloud Segmentation",
        description : "Deep learning CNN cloud segmentation algorithm for Kaggle contest",
        tags : ["machine learning"]
    },
    {
        title : "Earthquake Prediction",
        description : "Machine Learning ensemble model for earthquake forecast for Kaggle contest",
        tags : ["machine learning"]
    },
    {
        title : "LZ4 Compression algorithm",
        description : "Set of multiple algorithms for LZ4 compression in python, contest on speed and compression ratio",
        tags : ["algorithms"]
    },
    {
        title : "SFIC Compression Library",
        description : "Image compressions library written in C++ which includes multiple compression algorithms",
        tags : ["algorithms"]
    },
    {
        title : "C++ Random Number Generator",
        description : "Multiple random distribution pseudo-random number generators",
        tags : ["algorithms"]
    },
    {
        title : "Graph Percolation",
        description : "Graph Connectivity and Percolation experiments in C++",
        tags : ["algorithms"]
    },
    {
        title : "Calendar API",
        description : "This is an PyQT app that is connected to Google Calendar, the main purpose of this application is to collect the events of a calendar search them by date, name and color and to receive and analysis of the duration of the events and dates.",
        tags : ["algorithms", "desktop app"]
    },
    {
        title : "Telegram Quiz Bot",
        description : "This is a telegram chatbot design to make polls/quiz to people and save its results.",
        tags : ["algorithm"]
    },
    {
        title : "MMM Bayesian Model Builder",
        description : "This is a bayesian code builder that generates stan code, that I built to simplify Media Mix Modeling, it has marketing concepts integrated such as adstock and diminishing returns, it is built with R on top of cmdstan which enables for state-of-art bayesian model.",
        tags : ["algorithm"]
    }
]

export default function Projects(){





    return(
        <div>
            <div className={"grid grid-cols-3 py-80 px-80 gap-12"}>
                {
                    projects.map((project, index) => {
                        return (
                            <div className={"border p-4 rounded hover:bg-gray-200 hover:cursor-pointer"} key={index}>
                                <div>
                                    {project.title}
                                </div>
                                <div>
                                    {project.description}
                                </div>
                                <div className={"mt-2"}>
                                    {
                                        project.tags.map((tag, index) => {
                                            return(
                                                <span key={index} className={"border p-1 mr-1 text-sm"}>
                                                    {tag}
                                                </span>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}