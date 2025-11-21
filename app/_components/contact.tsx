'use client';

import {GithubIcon, HashNodeIcon, LinkedinIcon} from "@/app/_components/icons";
import {Button, ButtonLink} from "@/app/_components/elements";
import {useState} from "react";


export const Contact = () => {

    const currentYear = new Date().getFullYear();

    const [formOpen, setFormOpen] = useState(false);

    return (
        <div id={"contact"}>
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
                            {
                                formOpen ? (
                                    <form className={"component-contact-form"}>
                                        <input className={"component-contact-input"} type="text" placeholder="Name*"/>
                                        <input className={"component-contact-input"} type="email" placeholder="Email*"/>
                                        <textarea className={"component-contact-input"} placeholder="Message"></textarea>
                                        <div>
                                            <button className={"element-button"} type="submit">Send message</button>
                                        </div>
                                    </form>

                                ) : (
                                    <Button text={"Write message"} onClick={() => setFormOpen(true)}/>
                                )
                            }
                        </div>

                        <div className={"component-contact-icons"}>
                            <LinkedinIcon/>
                            <GithubIcon slug={""}/>
                            <HashNodeIcon/>
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