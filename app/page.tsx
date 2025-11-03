'use client'
import {ChevronDownIcon, EnvelopeIcon, ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";
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
                 className={"w-full  bg-teal-50"}>
                    <Projects/>
            </div>

            {/** About Section **/}
            <div className={"h-full w-full py-96  flex flex-col items-center justify-center x"}>
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
