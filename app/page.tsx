'use client'
import {ChevronDownIcon, EnvelopeIcon} from "@heroicons/react/16/solid";
import {GithubIcon, LinkedinIcon} from "@/app/icons";


export default function Home() {

    const imageWidth: number = 3212;
    const imageHeight: number = 3458;
    const scale: number = 0.18


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
                            building machine learning solutions and web applications.
                        </div>
                    </div>
                </div>
                <ChevronDownIcon
                    className={"w-12 h-12 mx-auto animate-bounce text-gray-500 absolute bottom-24 text-teal-500"}/>

            </div>

            {/** About Section **/}
            <div>
                <div className={"h-full w-full py-24  flex flex-col items-center justify-center x"}>
                    <div className={"flex flex-row gap-4 mt-12 mx-auto justify-center"}>
                        <img
                            alt={"Profile Image"}
                            src={"/profile_image_01.jpg"}
                            className={"img-frame"}
                            width={"100%"}
                            style={{maxWidth: imageWidth * scale}}
                            height={"auto"}/>
                        <div className={"text-2xl my-auto ml-12 text-gray-500 max-w-2xl text-justify"}>
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
