import {Contact} from "@/app/_components/contact";
import {ReactNode} from "react";

export default function ProjectLayout({children}: {children: ReactNode}) {
    return(
        <div className={"component-project-view"}>
            {children}
            <Contact/>
        </div>
    )
}