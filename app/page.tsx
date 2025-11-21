'use client'

import {Cover} from "@/app/_components/cover";
import {Services} from "@/app/_components/services";
import {Contact} from "@/app/_components/contact";
import {About} from "@/app/_components/about";
import {Projects} from "@/app/_components/projects";

export default function Home() {


    return (
        <div className={"component-home"}>
            <Cover src={"/images/cover-image-01.png"}
                   align="right"
                   height="80%"
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
