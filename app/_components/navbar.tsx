'use client';
import {useScroll, useWindowWidth} from "@/app/_components/hooks";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import {useEffect, useState} from "react";
import {breakpoints} from "@/app/_components/utils";


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
        <h1 className={props.className} onClick={props.onClick}>
            {props.text}
        </h1>
    )
}
export const NavBar = () => {

    const windowWidth = useWindowWidth();
    const [navbarOpen, setNavbarOpen] = useState(false);


    useEffect(() => {
        setNavbarOpen(windowWidth > breakpoints.desktop);
    }, [windowWidth]);

    const scrollRelativePosition = useScroll();
    const pathname = usePathname();

    let linkClassName: string = 'component-navbar-item';
    let logoClassName: string = 'component-navbar-logo'
    let wrapperClassName: string = 'component-navbar';
    let itemListClassName: string = 'component-navbar-item-list';
    const darkMode = scrollRelativePosition <= 0.75 &&  !(pathname !== null && pathname.includes('project'));
    if (darkMode) {
        linkClassName += ' component-navbar-item-dark';
        logoClassName += ' component-navbar-item-dark';
        wrapperClassName += ' component-navbar-dark';
    }
    if(!navbarOpen){
        wrapperClassName += ' component-navbar-hidden';
        itemListClassName += ' component-navbar-item-list-hidden';
    }


    const onClickCallback = () => setNavbarOpen(!navbarOpen);


    let nameText: string = "P.";
    return (
        <header className={"component-navbar-header"}>
            <div className={wrapperClassName}>
                <NavbarIcon text={nameText} onClick={onClickCallback} className={logoClassName}/>
                <div className={itemListClassName}>
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