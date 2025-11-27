import {Contact} from "@/app/_components/contact";

export default function Custom404() {
    return (
        <div className={"component-404"}>
            <div className={"component-404-content"}>
                <div>
                    404
                </div>
                <div className={"style-h2-italic"}>
                    Page Not Found
                </div>
            </div>
            <Contact/>
        </div>
    )
}