'use client'

import {Cover} from "@/app/_components/cover";
import {Services} from "@/app/_components/services";
import {Contact} from "@/app/_components/contact";
import {About} from "@/app/_components/about";
import {Projects} from "@/app/_components/projects";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";


const AnimatedIntro = () => {

    useGSAP(() => {
        // define series of steps in timeline
        const timeline = gsap.timeline();

        const elementClass = ".component-animated-intro";
        let split = SplitText.create(elementClass, { type: "chars" });
        let chars = split.chars;

        // initial lift animations on the placeholder char(s)
        timeline.to(
            chars,
            {
                y: -100,
                duration: 0.5
            }
        );

        timeline.to(
            chars,
            {
                y: -80,
                duration: 0.5
            }
        );

        // Replace typing effect with wave-style character-by-character reveal
        timeline.add(() => {
            // revert previous split to avoid nested spans
            split.revert();
            const el = document.querySelector(elementClass) as HTMLElement | null;
            if (!el) return;
            el.textContent = ".POL COMPANY";
            // re-split the new text into characters
            split = SplitText.create(elementClass, { type: "chars" });
            chars = split.chars;

            // set initial state for wave reveal
            gsap.set(chars, {
                opacity: 0,
                y: (i: number) => Math.sin(i * 0.6) * 16 + 30, // offset to form a wave baseline
                rotate: (i: number) => Math.sin(i * 0.6) * 6,
                transformOrigin: "50% 100%"
            });

            // Character-by-character wave reveal (must be created AFTER re-splitting)
            timeline.to(chars, {
                opacity: 1,
                y: 0, // settle into a smaller wave
                rotate: 0,
                ease: "power3.out",
                duration: 0.6,
                stagger: {
                    each: 0.05,
                    from: "start"
                }
            });

            // Keep scale animations applied to the current chars
            timeline.to(
                elementClass,
                {
                    scale: 4
                }
            );

            timeline.to(
                elementClass,
                {
                    scale: 3
                }
            );

            timeline.to(
                elementClass,
                {
                    duration: 1,
                    x: -4000
                }
            )
        });
    })

    return (
        <div className={"component-animated-intro"}>
           .
        </div>
    );
}

export default function Home() {


    return (
        <div className={"component-home"}>
            <AnimatedIntro />
            <Cover src={"/images/cover-image-01.png"}
                   align="right"
                   height="80%"
                   opacity={0.3}
                   title={"Web Developer & \n Data Scientist"}
                   subtitle={"Specializing in architecting and building high-performance \n solutions, " +
                       "from scalable full-stack applications and real-time \n data dashboards to impactful machine learning models."}
                   color={"white"}
                   hasScrollBanner={true}/>
            <Cover src={"/images/cover-image-02.jpg"}
                   align="left"
                   height="80%"
                   title={"Crafting intuitive \n interfaces that \n resonate with users"}
                   color={"black"}
                   hasScrollBanner={true}/>
            <Services/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
}
