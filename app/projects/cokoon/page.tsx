import {ProjectViewTemplate} from "@/app/_components/projects";
import {Card} from "@/app/_components/elements";

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
                <Card
                    src={"/projects/cokoon/kinect.png"}
                    title={"Interactive Experience"}
                    side={"left"}
                >
                    The Cokoon experience delivers a comprehensive interactive journey, seamlessly integrating
                    touch-sensitive elements, full-body motion tracking through Kinect technology, and sophisticated
                    environment detection systems.
                    <br></br>
                    This multi-layered approach creates an immersive and responsive
                    environment where visitors can naturally engage with the installation through various interaction
                    modalities.
                </Card>
            </>
        </ProjectViewTemplate>
    )
}