import {useState} from "react";
import {GithubIcon} from "@/app/_components/icons";

type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    slug: string;
};
const projects: Project[] = [
    {
        id: "studio",
        title: "BCN Studio",
        description:
            "Studio is a VFX cloud infrastructure management platform specifically designed to make the job for artists easier by decoupling the complexity behind a cloud architecture.",
        tags: ["Web Development", "Data Visualization"],
        slug: "bcn_studio"
    },

];


const ProjectTag = ({text}: {text: string}) => {
    return(
        <div className={"element-tag"}>{text}</div>
    )
}


const ProjectItem = ({project}: {project: Project}) => {
    const coverWidth = 455;
    const coverHeight = 484;
    const {id, title, description, tags} = project;
    const src = `/projects/${id}/cover.png`;
    return(
        <div className={"component-project-item"}>
            <img src={src} alt={title} width={coverWidth} height={coverHeight} style={{objectFit: "contain"}}/>
            <div className={"style-paragraph"}>{description}</div>
            <div className={"component-project-tags"}>
                {
                    tags.map(tag => <ProjectTag text={tag}/>)
                }
            </div>
        </div>
    )
}


export const Projects = () => {
    return(
        <div id={"projects"} className={"component-projects"}>
            <div className={"element-section-header"}>
                <div className={"style-gradient-text"}>
                    Featured Projects
                </div>
                <div className={"element-line-full"}></div>
            </div>
            <div className={"component-projects-list"}>
                <div>
                    Filter by Service: ....
                </div>
                <div className={"component-projects-grid"}>
                    {
                        projects.map((project: Project) => {
                            return(
                                <ProjectItem key={project.id} project={project}  />
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}