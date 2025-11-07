'use client'
import {ChevronDownIcon, EnvelopeIcon} from "@heroicons/react/16/solid";
import {GithubIcon, LinkedinIcon} from "@/app/_components/icons";
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
                            full-stack applications and real-time <br/> data dashboards to impactful machine learning
                            methods
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
        </div>
    );
}
