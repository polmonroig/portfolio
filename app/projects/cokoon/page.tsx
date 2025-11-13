import {ProjectViewTemplate} from "@/app/_components/projects";
import {Card, CardLarge} from "@/app/_components/elements";
import Image from "next/image";

export default function ProjectView() {
    return (
        <ProjectViewTemplate
            id={"cokoon"}
            description={"A sophisticated, full-featured anamorphic interactive THREE.js application meticulously crafted for NTT Cookon's Immersive Experience Space. This dynamic installation seamlessly blends real-time 3D graphics with user interaction, creating stunning visual illusions and engaging spatial experiences through advanced WebGL technology and custom shaders."}
            year={"2022"}
            client={"BCN Visuals Inc"}
            department={"Technology"}
            location={"Los Angeles, CA"} mockup={null}>
            <>

            </>
        </ProjectViewTemplate>
    )
}