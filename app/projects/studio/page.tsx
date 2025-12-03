import {ProjectViewTemplate} from "@/app/_components/projects";
import {Card, CardLarge} from "@/app/_components/elements";

export default function ProjectView() {
    return (
        <ProjectViewTemplate
            id={"studio"}
            description={"BCN Studio is a bespoke, web-based application designed to act as the single point of truth and control for a leading VFX studio's entire cloud infrastructure. The platform transforms the management of complex, high-demand production pipelines into an intuitive, centralized experience."}
            year={"2023"}
            client={"BCN Visuals Inc"}
            department={"Technology"}
            location={"Los Angeles, CA"}
            mockup={<img src={"/images/projects/studio/mockup-04.webp"}
                         loading={"lazy"} alt={"mockup"} width={3856} height={1940}/>}
        >
            <>
                <div className={"layout-flex-col-small"}>
                    <div className={"text-h6 text-align-center"}>
                        Value Driven KPIs
                    </div>
                    <div className={"element-header-lines"}>
                        Reduction in idle compute <br/>
                        Increased project turnaround time <br/>
                        Operational visibility and risk mitigation
                    </div>
                </div>
                <Card
                    src={"/images/projects/studio/desktop_mockup.webp"}
                    title={"Centralized Infrastructure Automation"}
                    side={"right"}
                >
                    User-friendly interface to manage the core cloud environment. It enables administrators to handle
                    user onboarding/offboarding, allocate and decommission virtual machines (compute), and manage
                    expensive software licensing needs—all from one screen.
                    <br/><br/>
                    By automating resource allocation, BCN studio drastically minimizes manual overhead and avoids
                    costly, unused compute time or license wastage.
                </Card>
                <Card
                    src={"/images/projects/studio/carbon_mockup.webp"}
                    title={"Comprehensive Data Analytics"}
                    side={"left"}
                >
                    BCN Studio aggregates vast amounts of data to provide deep insights into resource utilization and
                    performance bottlenecks. It includes detailed metrics on render farm efficiency, and even a
                    calculated carbon footprint.
                    <br/><br/>
                    Analytics allow managers to forecast needs accurately and optimize infrastructure spending.
                </Card>
                <Card
                    src={"/images/projects/studio/artists_desktop.webp"}
                    title={"Real-Time Supervision"}
                    side={"right"}
                >
                    A live feed from artists' workstations that allows supervisors to monitor work in progress,
                    troubleshoot issues remotely, and ensure compliance and quality control without interrupting the
                    creative process.
                    <br/><br/>
                    This delivers enhanced quality control and proactive issue resolution.
                </Card>

                <CardLarge title={"Comprehensive control for \n every aspect of cloud infrastructure."}
                           src={"/images/projects/studio/bcn_studio_08.webp"}/>
            </>
        </ProjectViewTemplate>
    )
}