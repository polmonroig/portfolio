'use client'

import {Cover} from "@/app/_components/cover";
import {Services} from "@/app/_components/services";
import {Contact} from "@/app/_components/contact";

export default function Home() {


    return (
        <div className={"component-home"}>
            <Cover src={"/images/cover-image-01.png"}
                   align="right"
                   height="80%"
                   title={"Web Developer & Data Scientist"}
                   subtitle={"Specializing in architecting and building high-performance solutions, " +
                       "from scalable full-stack applications and real-time data dashboards to impactful machine learning models."}/>
            <Cover src={"/images/cover-image-02.jpg"}
                   align="left"
                   height="80%"
                   title={"Crafting intuitive interfaces that resonate with users"}/>
            <Services/>
            <Contact/>
        </div>
    );
}
