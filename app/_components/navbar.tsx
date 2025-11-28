'use client';
import {useScroll} from "@/app/_components/hooks";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import {useState} from "react";


const NavbarItem = (props: {
    text: string,
    slug: string,
    className: string,
    target?: string,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
}) => {
    return (
        <Link className={props.className} href={props.slug} target={props.target ? props.target : undefined}
              onMouseEnter={props.onMouseEnter}
              onMouseLeave={props.onMouseLeave}>
            {props.text}
        </Link>
    )
}


const NavbarIcon = (props: {
    text: string,
    onClick: () => void,
    className: string
}) => {
    return (
        <div className={props.className} onClick={props.onClick}>
            {props.text}
        </div>
    )
}
export const NavBar = () => {


    const [navbarOpen, setNavbarOpen] = useState(false);

    const scrollRelativePosition = useScroll();
    const pathname = usePathname();

    let linkClassName: string = 'component-navbar-item';
    let logoClassName: string = 'component-navbar-logo'
    if (scrollRelativePosition > 0.75 || (pathname !== null && pathname.includes('project'))) {
        linkClassName += ' component-navbar-dark';
        logoClassName += ' component-navbar-dark';
    }


    const onClickCallback = () => setNavbarOpen(!navbarOpen);


    let nameText: string = "P.";
    return (
        <header className={"component-navbar-header"}>
            <div className={"component-navbar " + (navbarOpen ? "component-navbar-responsive" : "")}>
                <NavbarIcon text={nameText} onClick={onClickCallback} className={logoClassName}/>
                <div className={"component-navbar-item-list " + (navbarOpen ? "" : "component-navbar-item-list-hidden")}>
                    <NavbarItem text={"services"} slug={"/#services"} className={linkClassName}/>
                    <NavbarItem text={"projects"} slug={"/#projects"} className={linkClassName}/>
                    <NavbarItem text={"blog"} slug={"https://blog.pol.company"} target={"_blank"}
                                className={linkClassName}/>
                    <NavbarItem text={"Hire Me"} slug={"#contact"}
                                className={linkClassName + ' component-navbar-item-strong'}/>
                </div>
            </div>
        </header>
    )
}