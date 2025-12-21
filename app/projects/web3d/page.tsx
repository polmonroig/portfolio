import {ProjectViewTemplate} from "@/app/_components/projects";
import {Card, CardLarge, CardText, ResponsiveImage} from "@/app/_components/elements";

export default function ProjectView() {
    return (
        <ProjectViewTemplate
            id={"web3d"}
            description={"Interactive web-based tool for creating and manipulating anamorphic media content. Features real-time preview, multiple export formats, and intuitive controls for achieving stunning visual effects."}
            year={"2024"}
            client={"BCN Visuals Inc"}
            department={"Technology"}
            location={"Los Angeles, CA"}
            mockup={<ResponsiveImage src={"/images/projects/web3d/mockup.webp"} alt={"Web3D Mockup"} />}
        >
            <>
                <CardText title={"Key Features"} content={"Real-time anamorphic preview \nMultiple export format options \nIntuitive visual effect controls"}/>
                <Card
                    src={"/images/projects/web3d/export.webp"}
                    title={"Custom export"}
                    side={"right"}
                >
                    Custom export options with support for RGB and sRGB color spaces. Web-based rendering engine enables
                    fast and efficient processing of anamorphic effects directly in the browser.
                </Card>
            </>
        </ProjectViewTemplate>
    )
}