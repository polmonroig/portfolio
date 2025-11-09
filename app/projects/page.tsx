import {Contact} from "@/app/_components/contact";
import {Projects} from "@/app/_components/projects";

export default function ProjectView({params}: {params: {slug: string}}) {


    return(
        <div className={"component-project-view"}>
            <Projects/>
            <Contact/>
        </div>
    )
}

