import {ProjectViewTemplate} from "@/app/_components/projects";
import {Card} from "@/app/_components/elements";

export default function ProjectView() {
    return (
        <ProjectViewTemplate
            id={"baba_is_you"}
            description={"Baba is You is a tribute project based on the original puzzle game. Like the original, this version challenges players to navigate through various levels by manipulating the environment. The game features a unique gameplay mechanic where players can change the rules of the game by interacting with objects in the environment. The game is known for its challenging puzzles and its ability to keep players engaged for hours on end."}
            year={"2022"}
            client={"BCN Visuals Inc"}
            department={"Technology"}
            location={"Los Angeles, CA"} mockup={null}>
            <>
                <video width="1920" height="1080" controls preload="none" poster="/projects/baba_is_you/video-placeholder.png">
                    <source src="/projects/baba_is_you/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </>
        </ProjectViewTemplate>
    )
}