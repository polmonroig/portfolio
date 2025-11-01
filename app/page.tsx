'use client'
import {ChevronDownIcon, EnvelopeIcon, ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";
import {GithubIcon, LinkedinIcon} from "@/app/icons";
import {useEffect, useState} from "react";


export default function Home() {

    const imageWidth: number = 3212;
    // const imageHeight: number = 3458;
    const scale: number = 0.18

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [projectIndex, setProjectIndex] = useState<number>(0);

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
                        <div
                            className="text-8xl text-center mb-12 font-average  slide-animation bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-500">
                            Hi, I'm Pol
                        </div>
                        <div/>
                        <div
                            className="text-2xl/10 mt-5 text-center mx-auto text-gray-500 font-average slide-animation-delay"
                            style={{maxWidth: "600px"}}>
                            A freelance <span className={"text-teal-500"}>developer</span> with a passion for
                            building machine learning solutions and software applications.
                        </div>
                    </div>
                </div>
                <ChevronDownIcon
                    className={"w-12 h-12 mx-auto animate-bounce absolute bottom-24 text-teal-500"}/>

            </div>
            <div className={" h-2 bg-gradient-to-r from-teal-500 via-teal-300 to-teal-500 mx-auto"}
                 style={{width: `${Math.min(100, (scrollPosition * 100) * 1.25)}%`}}>
            </div>

            {/** Projects Section **/}
            <div id={"projects"}
                 className={"w-full py-52 bg-gradient-to-r from-teal-100  via-teal-50 to-teal-100 shadow-lg"}>
                <div className={"max-w-6xl mx-auto px-6"}>
                    <div className="text-center">
                        <h2 className="font-average text-4xl sm:text-5xl font-semibold text-teal-500">Selected
                            Projects</h2>
                        <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
                            A snapshot of products and experiments I have built across web, games, and machine learning.
                        </p>
                    </div>

                    {/* Carousel of 3 key projects (no scrollbar) */}
                    {(() => {

                        const coverWidth: number = 1200;
                        const coverHeight: number = 600;

                        const projects = [
                            {
                                title: "Aiart",
                                description: "AI-powered composition and color harmony advisor for artwork.",
                                img: '/projects/aiart/cover.png'
                            },
                            {
                                title: "Genetic Brushes",
                                description: "Genetic brushes is an image painter that mimics the process of painting of an image into a canvas.",
                                img: `https://placehold.co/${coverWidth}x${coverHeight}?text=Genetic Brushes`
                            },
                            {
                                title: "BCN Studio",
                                description: "VFX cloud infrastructure management platform for artists.",
                                img: `https://placehold.co/${coverWidth}x${coverHeight}?text=BCN Studio`
                            },
                        ];
                        const clampIndex = (i: number) => (i + projects.length) % projects.length;
                        const goPrev = () => setProjectIndex(prev => clampIndex(prev - 1));
                        const goNext = () => setProjectIndex(prev => clampIndex(prev + 1));
                        return (
                            <div className="mt-12 relative select-none">
                                {/* Viewport */}
                                <div className="overflow-hidden rounded-xl">
                                    {/* Track */}
                                    <div
                                        className="flex transition-transform duration-500 ease-out"
                                        style={{ transform: `translateX(-${projectIndex * 100}%)` }}
                                    >
                                        {projects.map((project, idx) => {
                                            return (
                                                <div key={idx} className="min-w-full">
                                                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                                    style={{width: coverWidth}}>
                                                        <img
                                                            src={project.img}
                                                            alt={`${project.title} preview`}
                                                            style={{width: coverWidth, height: coverHeight}}
                                                            width={coverWidth}
                                                            height={coverHeight}
                                                            className="w-full h-auto rounded-t-xl object-cover"
                                                        />
                                                        <div className="p-6 border-t-2 border-gray-300">
                                                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                                            <p className="text-gray-600 leading-6">{project.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                {/* Controls */}
                                <button
                                    aria-label="Previous project"
                                    onClick={goPrev}
                                    className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow border border-gray-200 backdrop-blur text-teal-600"
                                >
                                    <ChevronLeftIcon className="w-6 h-6" />
                                </button>
                                <button
                                    aria-label="Next project"
                                    onClick={goNext}
                                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow border border-gray-200 backdrop-blur text-teal-600"
                                >
                                    <ChevronRightIcon className="w-6 h-6" />
                                </button>
                                {/* Dots */}
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    {projects.map((_, i) => (
                                        <button
                                            key={i}
                                            aria-label={`Go to slide ${i + 1}`}
                                            onClick={() => setProjectIndex(i)}
                                            className={`h-2.5 rounded-full transition-all ${projectIndex === i ? 'w-6 bg-teal-500' : 'w-2.5 bg-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })()}

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
            <div className={"h-full w-full py-96  flex flex-col items-center justify-center x"}>
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
