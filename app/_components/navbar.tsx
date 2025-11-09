
import {useScroll} from "@/app/_components/hooks";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavbarItem = (props: { text: string, slug: string, className: string}) => {
    return (
        <Link className={props.className} href={props.slug}>
            {props.text}
        </Link>
    )
}

export const NavBar = () => {

    const scrollRelativePosition = useScroll();
    const pathname = usePathname();

    let linkClassName: string = 'component-navbar-item';
    let logoClassName: string = 'component-navbar-logo'
    if(scrollRelativePosition > 0.75 || (pathname !== null && pathname.includes('project'))){
        linkClassName += ' component-navbar-dark';
        logoClassName += ' component-navbar-dark';
    }

    return (
        <header className={"component-navbar-header"}>
            <div className="component-navbar">
                <NavbarItem text={"P."} slug={"/"} className={logoClassName}/>
                <div className={"component-navbar-item-list"}>
                    <NavbarItem text={"services"} slug={"/#services"}  className={linkClassName}/>
                    <NavbarItem text={"projects"} slug={"/#projects"}  className={linkClassName}/>
                    <NavbarItem text={"blog"} slug={"/blog"}  className={linkClassName}/>
                    <NavbarItem text={"Hire Me"} slug={"/#contact"} className={linkClassName + ' component-navbar-item-strong'}/>
                </div>
            </div>
        </header>
    )
}