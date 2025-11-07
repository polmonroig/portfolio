'use client'
import {ChevronDownIcon, EnvelopeIcon} from "@heroicons/react/16/solid";
import {GithubIcon, LinkedinIcon} from "@/app/icons";
import {useEffect, useState} from "react";
import Projects from "@/app/_components/projects";


export default function Home() {

    const imageWidth: number = 3212;
    // const imageHeight: number = 3458;
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


    const currentYear = new Date().getFullYear();

    return (
        <div className={"relative w-full h-full bg-black"}>
            <div className="font-sans flex flex-col items-center justify-items-center relative"
                 style={{paddingTop: "15%", height: "80%"}}>
                <div className=" ">
                    <div className={"pl-80"}>
                        <div
                            className="text-8xl text-right mb-12 font-average  text-white">
                            Web Developer & <br/> Data Scientist
                        </div>
                        <div/>
                        <div
                            className="text-2xl mt-5 text-right mx-auto text-white">
                            Specializing in architecting and building high-performance <br/> solutions, from scalable
                            full-stack applications and real-time <br/> data dashboards to impactful machine learning methods
                        </div>
                    </div>
                </div>

                <div className={"absolute bottom-32 left-1/4 text-white rotate-270"}>
                    SCROLL
                </div>

            </div>


            {/** Intro Section **/}
            <div className={"w-full bg-amber-400 pt-28 pb-24"} style={{height: "80%"}}>
                <div className={"font-average text-8xl  mx-auto mt-80 text-center text-gray-800"}>
                    Crafting intuitive <br/> interfaces <br/> that resonate <br/> with users
                </div>
            </div>

            {/** Contact Section **/}
            <div
                id={"contact"}
                className={" w-full pt-28 pb-24 flex flex-col items-center justify-center bg-white"}>
                <div className={"mx-auto text-center"}>
                    <div
                        className={"bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-400 text-6xl font-average"}>
                        Ready to start your project?
                    </div>
                    <div className={"text-xl my-2 text-gray-500 mt-24"}>
                        Whether you're planning a new digital product or scaling an existing system,<br/>
                        I'm available to discuss your needs and outline a strategic path forward.
                    </div>

                    <div className={"text-xl mt-24"}>
                        contact@pol.company<br/>
                        +34 617004358
                    </div>

                    <div className={"flex gap-4 mt-24"}>
                        <a
                            href={"mailto:hello@pol.company?subject=Hey Pol, I'd like to hire you"}
                            className={"px-6 py-3 bg-gray-800 text-white rounded-lg text-xl hover:bg-gray-500 transition-colors cursor-pointer mx-auto"}>
                            Write a message
                        </a>
                    </div>
                    <div className={"flex flex-row gap-4 mt-12 mx-auto justify-center"}>
                        <LinkedinIcon/>
                        <GithubIcon slug={""}/>
                    </div>

                </div>
            </div>
            <div className={"left-0 bottom-0 w-full text-center"}>
                <div className="hover:underline-offset-4 py-6  bg-gray-200 text-lg">
                    Made with ♥︎ by Pol Company - Copyright © {currentYear}
                </div>
            </div>
        </div>
    );
}
