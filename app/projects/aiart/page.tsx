import {ProjectViewTemplate} from "@/app/_components/projects";
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
            mockup={<img src={"/images/projects/aiart/mockup.png"} alt={"mockup"} width={2030} height={1300}/>}>
            <>
                <Card
                    src={"/images/projects/aiart/harmony.png"}
                    title={"Image harmonization"}
                    side={"left"}
                >
                    Using graph-based image segmentation, we can accurately calculate the weight of each segment in the
                    image. Our advanced algorithms analyze the visual hierarchy and structural composition of the
                    artwork,
                    identifying key focal points and areas that draw attention. This comprehensive analysis helps
                    artists
                    understand the visual flow and balance of their compositions.
                    <br/><br/>
                    For more complex images, our accuracy mode leverages a deep neural network to analyze precise
                    details
                    such as faces and small but significant objects. The AI can detect subtle nuances in textures,
                    patterns, and compositional elements that might be overlooked by traditional analysis methods. With
                    Aiart, you can perfectly balance your image with just one click.
                </Card>
                <Card
                    src={"/images/projects/aiart/color-01.png"}
                    title={"Color palette"}
                    side={"right"}
                >
                    Every painting has its unique color palette. Using our advanced color bucketing algorithm, we can
                    determine the most precise palette possible. The color palette of an image consists of its most
                    dominant
                    and important colors.
                    <br/><br/>

                    Aiart helps you visualize the color distribution and understand how adjusting
                    different colors can enhance the overall harmony.
                </Card>

            </>
        </ProjectViewTemplate>
    )
}