import {GithubIcon, LinkedinIcon} from "@/app/_components/icons";


export const Contact = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div
                id={"contact"}
                className={"component-contact"}>
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
    )
}