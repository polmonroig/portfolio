import {ProjectViewTemplate} from "@/app/_components/projects";

export default function ProjectView() {
  return (
        <ProjectViewTemplate
          id={"studio"}
          description={"BCN Studio is a bespoke, web-based application designed to act as the single point of truth and control for a leading VFX studio's entire cloud infrastructure. The platform transforms the management of complex, high-demand production pipelines into an intuitive, centralized experience."}
          year={"2023"}
          client={"BCN Visuals Inc"}
          department={"Technology"}
          location={"Los Angeles, CA"}
        >
            <>
                <img src={"/projects/studio/mockup-04.png"} alt={"mockup"} />
                <div className={"layout-flex-col-small"}>
                    <div className={"style-h5 style-align-center"}>
                        Value Driven KPIs
                    </div>
                    <div className={"style-h1 style-align-center"}>
                        Reduction in idle compute <br/>
                        Increased project turnaround time <br/>
                        Operational visibility and risk mitigation
                    </div>
                </div>
            </>
        </ProjectViewTemplate>
  )
}