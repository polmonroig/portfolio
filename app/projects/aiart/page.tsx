import {ProjectViewTemplate} from "@/app/_components/projects";
import {Card, CardLarge, CardText, ResponsiveImage} from "@/app/_components/elements";

export default function ProjectView() {
    return (
        <ProjectViewTemplate
            id={"aiart"}
            description={"Intelligent adviser for your drawings and paintings with and personal art advisor powered with AI. With aiart you can instantly obtain a detailed analysis of its composition balance and color harmony."}
            year={"2020"}
            client={"Aiart"}
            department={"Technology"}
            location={"Barcelona"}
            mockup={<ResponsiveImage
                src={"/images/projects/aiart/mockup.webp"} alt={"mockup"} width={2030} height={1300}/>}>
            <>
                <CardText title={"Key Features"}
                          content={"Detailed composition analysis \nColor harmony evaluation \nAI-powered art advisory"}/>
                <Card
                    src={"/images/projects/aiart/general_stats.webp"}
                    title={"Overall analysis"}
                    side={"left"}
                >
                    Using a weighted system using different metrics we can come of with point estimates on the
                    overall composition balance and color harmony of your artwork.
                </Card>
                <Card
                    src={"/images/projects/aiart/harmony.webp"}
                    title={"Image harmonization"}
                    side={"right"}
                >
                    Using graph-based image segmentation, we can accurately calculate the weight of each segment in the
                    image. Our advanced algorithms analyze the visual hierarchy and structural composition of the
                    artwork,
                    identifying key focal points and areas that draw attention. This comprehensive analysis helps
                    artists
                    understand the visual flow and balance of their compositions.
                </Card>
                <Card
                    src={"/images/projects/aiart/color-01.webp"}
                    title={"Color palette"}
                    side={"left"}
                >
                    Every painting has its unique color palette. Using our advanced color bucketing algorithm, we can
                    determine the most precise palette possible. The color palette of an image consists of its most
                    dominant and important colors.
                    <br/><br/>

                    Aiart helps you visualize the color distribution and understand how adjusting
                    different colors can enhance the overall harmony.
                </Card>
                <Card
                    src={"/images/projects/aiart/composition_weight.webp"}
                    title={"Object Weighting"}
                    side={"right"}
                >
                    The relative position of objects in an image plays a crucial role in its composition. By analyzing
                    the visual hierarchy and structural composition, we can identify key focal points and areas that
                    draw attention.

                    <br/><br/>

                    Each object is then weighted based on its position. The relative position to the center of all the
                    objects affects the balance of the composition based on the mean squared error of object
                    weighted by it's sum and direction.

                </Card>


            </>
        </ProjectViewTemplate>
    )
}