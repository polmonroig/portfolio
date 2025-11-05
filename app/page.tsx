'use client'
import {ChevronDownIcon, EnvelopeIcon} from "@heroicons/react/16/solid";
import {GithubIcon, LinkedinIcon} from "@/app/icons";
import {useEffect, useState} from "react";
import Projects from "@/app/projects";


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
        <div>
            <div className="font-sans flex flex-col items-center justify-items-center h-screen relative"
                 style={{paddingTop: "20%"}}>
                <div className=" h-screen">
                    <div className={"pl-80"}>
                        <div
                            className="text-8xl text-right mb-12 font-average  slide-animation text-white">
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

            </div>
            <div className={" h-2 bg-teal-500 mx-auto"}
                 style={{width: `${Math.min(100, (scrollPosition * 100) * 1.25)}%`}}>
            </div>

            {/** Projects Section **/}
            <div id={"projects"}
                 className={"w-full  bg-teal-50"}>
                <Projects/>
            </div>

            {/** About Section **/}
            <div className={"h-full w-full py-96  flex flex-col items-center justify-center bg-gray-100"}>
                <div className={"flex flex-col lg:flex-row gap-4 mt-12 mx-auto justify-center"}>
                    <div className={"text-xl my-auto mr-12 text-gray-500 max-w-2xl text-justify mx-8"}>
                        <div className={"font-bold text-5xl text-left text-gray-800 mb-12"}>About me 👋</div>
                        <div className={"flex flex-col gap-4 text-xl/7"}>
                            <div>
                                I'm a Digital Consultant and Developer who loves transforming complex business ideas
                                into
                                impactful products. Think of me as the person who bridges the gap between a great vision
                                and
                                a
                                high-performing digital reality.
                            </div>

                            <div>

                                While I handle a wide range of technologies (from Node.js and Python to data science and
                                scalable cloud systems), I'm really all about finding the right solution to deliver real
                                value.
                            </div>

                            <div>
                                Beyond the code, I'm a firm believer in work-life balance. I live in Barcelona, Spain,
                                and
                                when
                                I switch off the screen, you can often find me out on the water sailing ⛵, getting my
                                hands
                                dirty gardening 🌿, whipping up something delicious in the kitchen 🍳, or diving into a
                                good
                                gaming session 🎮.
                            </div>
                        </div>

                    </div>
                    <img
                        alt={"Profile Image"}
                        src={"/profile_image_01.jpg"}
                        className={"img-frame mx-auto mt-6 lg:mt-0"}
                        width={"100%"}
                        style={{maxWidth: imageWidth * scale}}
                        height={"auto"}/>
                </div>

            </div>


            {/** Contact Section **/}
            <div
                id={"contact"}
                className={"h-full w-full pt-28 pb-24 flex flex-col items-center justify-center"}>
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
                            className={"px-6 py-3 bg-gray-800 text-white rounded-lg text-xl hover:bg-teal-600 transition-colors cursor-pointer mx-auto"}>
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
