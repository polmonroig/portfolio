'use client'
import {ChevronDownIcon} from "@heroicons/react/16/solid";


export default function Home() {


    return (
        <div>
            <div className="font-sans flex flex-col items-center justify-items-center h-screen relative" style={{paddingTop: "20%"}}>
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
            <div
                className={"h-full w-full py-24 inset-shadow-sm inset-shadow-gray-300 flex flex-col items-center justify-center bg-gray-200"}>
                <div className={"mx-auto text-4xl text-center text-gray-800"}>
                    Let's work together
                    <div className={"text-2xl text-gray-500"}>
                        I'm available for freelance projects
                    </div>
                    <div className={"flex gap-4 mt-8"}>
                        <button
                            className={"px-6 py-3 bg-teal-500 text-white rounded-lg text-xl hover:bg-teal-600 transition-colors cursor-pointer"}>
                            Contact me
                        </button>
                        <button
                            className={"px-6 py-3 bg-white text-teal-500 rounded-lg text-xl border-2 border-teal-500 hover:bg-gray-100 transition-colors cursor-pointer"}>
                            View projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
