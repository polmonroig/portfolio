import {ProjectViewTemplate} from "@/app/_components/projects";
import {Card} from "@/app/_components/elements";

export default function ProjectView() {
    return (
        <ProjectViewTemplate
            id={"bayesian_model_builder"}
            description={"This is a bayesian code builder that generates stan code, that I built to simplify Media Mix Modeling, it has marketing concepts integrated such as adstock and diminishing returns, it is built with R on top of cmdstan which enables for state-of-art bayesian model."}
            year={"2022"}
            client={"BCN Visuals Inc"}
            department={"Technology"}
            location={"Los Angeles, CA"} mockup={null}>
            <>


            </>
        </ProjectViewTemplate>
    )
}