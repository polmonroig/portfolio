import {ProjectViewTemplate} from "@/app/_components/projects";
import {Card, CardLarge, CardText, ResponsiveImage, TextHeader} from "@/app/_components/elements";

export default function ProjectView() {
    return (
        <ProjectViewTemplate
            id={"genetic_brushes"}
            description={"Artificial Genetic Algorithms system that generates unique art pieces that simulate brushes."}
            year={"2024"}
            client={"Mall"}
            department={"Technology"}
            location={"Madrid, ES"}
            mockup={null}
        >
            <>
                <TextHeader titleLines={["Brushes that grow", "based on previous generations"]}/>
                <Card
                    src={"/images/projects/genetic_brushes/mutation_original.webp"}
                    title={"Original"}
                    side={"right"}
                >
                    In the original each individual is position stochastically and their characteristics are
                    independent.
                </Card>
                <Card
                    src={"/images/projects/genetic_brushes/mutation_mutation.webp"}
                    title={"Mutation"}
                    side={"left"}
                >
                    In the next generation some attributes of the samples may variate.
                </Card>
                <Card
                    src={"/images/projects/genetic_brushes/mutation_crossover.webp"}
                    title={"Crossover"}
                    side={"right"}
                >
                    After the individual variations have been made, a merge between different brushes is applied.
                </Card>
                <Card
                    src={"/images/projects/genetic_brushes/mutation_selection.webp"}
                    title={"Selection"}
                    side={"left"}
                >
                    Finally based on the position and size of each brush, an importance selection
                    is made and most individuals are removed.
                </Card>
            </>
        </ProjectViewTemplate>
    )
}