import {ProjectViewTemplate} from "@/app/_components/projects";
import Image from "next/image";
import {Card} from "@/app/_components/elements";

export default function ProjectView() {
    return (
        <ProjectViewTemplate
            id={"aiart"}
            description={"Intelligent adviser for your drawings and paintings with and personal art advisor powered with AI. With aiart you can instantly obtain a detailed analysis of its composition balance and color harmony."}
            year={"2020"}
            client={"Aiart"}
            department={"Technology"}
            location={"Los Angeles, CA"}
            mockup={<Image src={"/projects/aiart/mockup.png"} alt={"mockup"} width={2030} height={1300}/>}>
            <>
                <Card
                    src={"/projects/aiart/general.png"}
                    title={"Intelligent adviser for your drawings"}
                    side={"right"}
                >
                    Get an intelligent advise for your drawings and paintings with and personal art advisor powered with
                    AI. With aiart you can instantly obtain a detailed analysis of its composition balance and color
                    harmony.
                </Card>
                <Card
                    src={"/projects/aiart/harmony.png"}
                    title={"Image harmonization"}
                    side={"left"}
                >
                    Using graph-based image segmentation the weight of each segment of the image can be calculated
                    accuretly, more complitaded images can use what we call as an accuracy mode where a deep neural
                    network will calculate even more precise details of the images such as faces and small but important
                    objects. Aiart is able to balance the image with just the click of a button.
                </Card>
                <Card
                    src={"/projects/aiart/color.png"}
                    title={"Color palette"}
                    side={"right"}
                >
                    Each painting has its unique color pallete, that is why with a color bucketing algorithm we are able
                    to calculate the most precise pallete as possible. The color pallete of an image is composed of the
                    most important colors in it. With aiart you can get a distribution of pallete and how moving
                    different colors improves its harmony.
                </Card>

            </>
        </ProjectViewTemplate>
    )
}