'use client';

import {GithubIcon, HashNodeIcon, LinkedinIcon} from "@/app/_components/icons";
import {Button} from "@/app/_components/elements";
import {useState} from "react";


const HoverPopup = ({text = "", children}: { text?: string, children: React.ReactNode }) => {

    const [hover, setHover] = useState(false);


    return (
        <div className={"element-hover-popup"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {children}
            <div className={"element-hover-popup-text"} style={{display: hover ? "block" : "none"}}>
                {text}
            </div>
        </div>
    )
}

export const Contact = () => {

    const currentYear = new Date().getFullYear();

    const [formOpen, setFormOpen] = useState(false);
    const [submitResult, setSubmitResult] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState(false);

    const submitForm = async (formData: FormData) => {
        formData.append("access_key", "502d8b4c-17cc-4dde-b379-38a3421313b7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setSubmitResult(data.success);
        setSubmitted(true);
    }

    return (
        <div id={"contact"}>
            <div className={"component-contact"}>
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
                            <a href={"mailto:hello@pol.company"}>hello@pol.company</a>
                            <br/>
                            <a href={"tel:+34617004358"}>+34 617 00 43 58</a>
                        </div>
                        <div>
                            {
                                submitted ?
                                    <div>
                                        {
                                            submitResult ?
                                                <div> Thank you for your message! I'll get in touch as soon as
                                                    possible.</div>
                                                :
                                                <div> Sorry there was an error submitting your message, please try again
                                                    later or send me an email.</div>
                                        }
                                    </div>
                                    :
                                    formOpen ? (
                                        <form className={"component-contact-form"} action={submitForm}>
                                            <input name="name" className={"component-contact-input"} type="text"
                                                   placeholder="Name*" required={true}/>
                                            <input name="email" className={"component-contact-input"} type="email"
                                                   placeholder="Email*" required={true}/>
                                            <textarea name="message" className={"component-contact-input"}
                                                      placeholder="Message"
                                                      style={{height: 200, minHeight: 200}}></textarea>
                                            <div>
                                                <Button text={"Send message"} type="submit"/>
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