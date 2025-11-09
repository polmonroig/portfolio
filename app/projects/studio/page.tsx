import {ProjectViewHeader} from "@/app/_components/projects";
import {Button} from "@/app/_components/elements";

export default function ProjectView() {


    return(
        <>
            <ProjectViewHeader id={"studio"}/>
            <div className="component-project-view-content">
                <div className={"layout-flex-row"}>
                    <div>

                    </div>
                </div>

                <Button text={"Go to next project →"}/>
            </div>
        </>
    )
}