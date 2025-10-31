'use client'
import {ChevronDownIcon, EnvelopeIcon} from "@heroicons/react/16/solid";
import {GithubIcon, LinkedinIcon} from "@/app/icons";
import {useEffect, useState} from "react";


export default function Home() {

    const imageWidth: number = 3212;
    const imageHeight: number = 3458;
    const scale: number = 0.18

    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY / window.innerHeight);
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    console.log(scrollPosition);


    return (
        <div>
            <div className="font-sans flex flex-col items-center justify-items-center h-screen relative"
                 style={{paddingTop: "20%"}}>
                <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-star h-screen">
                    <div>
                        <div className="text-8xl text-center mb-12 font-average text-teal-500 slide-animation">
                            Hi, I'm Pol
                        </div>
                        <div/>
                        <div
                            className="text-2xl/10 mt-5 text-center mx-auto text-gray-500 font-average slide-animation-delay"
                            style={{maxWidth: "600px"}}>
                            A multidisciplinary <span className={"text-teal-500"}>developer</span> with a passion for
                            building machine learning solutions and software applications.
                        </div>
                    </div>
                </div>
                <ChevronDownIcon
                    className={"w-12 h-12 mx-auto animate-bounce text-gray-500 absolute bottom-24 text-teal-500"}/>

            </div>
            <div className={" h-2 bg-teal-500 mx-auto"} style={{width : `${Math.min(100, (scrollPosition * 100) * 1.25)}%`}}>
            </div>

            {/** Projects Section **/}
            <div id={"projects"} className={"w-full py-24 bg-teal-50"}>
                <div className={"max-w-6xl mx-auto px-6"}>
                    <div className="text-center">
                        <h2 className="font-average text-4xl sm:text-5xl font-semibold text-teal-500">Selected Projects</h2>
                        <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
                            A snapshot of products and experiments I have built across web, games, and machine learning.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Portfolio", description: "I built my own portfolio using Next.js", tags: ["web development", "webgl"] },
                            { title: "BCN Studio", description: "VFX cloud infrastructure management platform for artists.", tags: ["web development", "aws"] },
                            { title: "Web3D", description: "Anamorphic 3D platform for billboards.", tags: ["web development", "webgl"] },
                            { title: "Aiart", description: "AI-powered composition and color harmony advisor for artwork.", tags: ["web development", "image segmentation"] },
                            { title: "Timelines", description: "Project and Gantt timelines application consulting.", tags: ["web development", "webgl"] },
                            { title: "Cloud Segmentation", description: "Deep learning CNN for cloud segmentation (Kaggle).", tags: ["machine learning"] },
                        ].map((project, idx) => (
                            <div
                                key={idx}
                                className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
                            >
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="ml-3 inline-block h-2 w-2 rounded-full bg-teal-500 opacity-70 group-hover:opacity-100" />
                                </div>
                                <p className="mt-3 text-gray-600 text-sm leading-6">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full border border-gray-200 text-gray-600 bg-gray-50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href="/projects"
                            className="inline-block px-5 py-3 bg-teal-500 text-white rounded-lg text-base sm:text-lg hover:bg-teal-600 transition-colors"
                        >
                            View all projects
                        </a>
                    </div>
                </div>
            </div>

            {/** About Section **/}
            <div>
                <div className={"h-full w-full py-24  flex flex-col items-center justify-center x"}>
                    <div className={"flex flex-col lg:flex-row gap-4 mt-12 mx-auto justify-center"}>
                        <img
                            alt={"Profile Image"}
                            src={"/profile_image_01.jpg"}
                            className={"img-frame mx-auto"}
                            width={"100%"}
                            style={{maxWidth: imageWidth * scale}}
                            height={"auto"}/>
                        <div className={"text-xl my-auto ml-12 text-gray-500 max-w-2xl text-justify"}>
                            <span className={"font-bold text-4xl text-center text-gray-800"}>About me 👋</span>
                            <br/><br/>
                            I'm a Full-Spectrum Digital Consultant and Developer who turns complex business needs
                            into
                            high-impact products. My development stack is language-agnostic, spanning Node.js,
                            Python,
                            R, C++ and beyond. Expertise includes scalable cloud architecture, machine learning/data
                            science and web development.
                        </div>
                    </div>

                </div>
            </div>


            {/** Contact Section **/}
            <div
                id={"contact"}
                className={"h-full w-full py-24 inset-shadow-sm inset-shadow-gray-300 flex flex-col items-center justify-center bg-gray-200"}>
                <div className={"mx-auto text-4xl text-center text-gray-800"}>
                    Let's work together
                    <div className={"text-2xl my-2 text-gray-500"}>
                        I'm available for freelance projects
                    </div>
                    <div className={"flex flex-row gap-4 mt-12 mx-auto justify-center"}>
                        <LinkedinIcon/>
                        <GithubIcon/>
                        <EnvelopeIcon width={30} className={"text-gray-800"}/>
                    </div>
                    <div className={"flex gap-4 mt-12"}>
                        <a
                            href={"mailto:hello@pol.company?subject=Hey Pol, I'd like to hire you"}
                            className={"px-6 py-3 bg-teal-500 text-white rounded-lg text-xl hover:bg-teal-600 transition-colors cursor-pointer mx-auto"}>
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
