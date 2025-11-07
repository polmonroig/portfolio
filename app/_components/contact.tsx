import {GithubIcon, LinkedinIcon} from "@/app/_components/icons";


export const Contact = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div  className={"component-contact"}>
                <div className={"component-contact-inner"}>
                    <div className={"style-h3 style-gradient-text"}>
                        Ready to start your project?
                    </div>
                    <div className={"component-contact-info"}>
                        <div className={"style-paragraph"}>
                            Whether you're planning a new digital product or scaling an existing system,<br/>
                            I'm available to discuss your needs and outline a strategic path forward.
                        </div>

                        <div className={"style-paragraph"}>
                            contact@pol.company<br/>
                            +34 617004358
                        </div>
                        <div>
                            <a
                                href={"mailto:hello@pol.company?subject=Hey Pol, I'd like to hire you"}
                                className={"element-button"}>
                                Write message
                            </a>

                        </div>
                        <div className={"flex flex-row gap-4 mt-12 mx-auto justify-center"}>
                            <LinkedinIcon/>
                            <GithubIcon slug={""}/>
                        </div>
                    </div>


                </div>
            </div>
            <div className={"component-contact-copyright"}>
                <div className="component-contact-copyright-inner">
                    Made with ♥︎ by Pol Company - Copyright ©{currentYear}
                </div>
            </div>
        </div>
    )
}