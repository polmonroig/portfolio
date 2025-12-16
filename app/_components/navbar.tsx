'use client';
import {useScroll, useWindowWidth} from "@/app/_components/hooks";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {breakpoints, getColorLuminance} from "@/app/_components/utils";


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

const detectBackgroundDarkness = (navbarElement: HTMLDivElement | null): boolean => {
    if (typeof window === 'undefined') return false;
    const header = navbarElement;
    if (!header) return false;

    const rect = header.getBoundingClientRect();
    const x = Math.max(0, Math.min(window.innerWidth - 1, Math.floor(window.innerWidth / 2)));
    // sample a point just below the header to get the element behind it
    const y = Math.max(0, Math.min(window.innerHeight - 1, Math.floor(rect.bottom + 1)));
    let el = document.elementFromPoint(x, y);
    // tweak for specific components with no background like imagesç
    let darkClassFound = false;
    while (el && !darkClassFound) {
        if (el.classList.contains('navbar-dark-transform')) {
            darkClassFound = true;
            break;
        }
        el = el.parentElement;
    }
    return darkClassFound;
}

export const NavBar = () => {


    const windowWidth = useWindowWidth();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [bgIsDark, setBgIsDark] = useState<boolean | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);
    const navbarRef = useRef<HTMLDivElement | null>(null);


    const scrollRelativePosition = useScroll();
    const onClickCallback = () => setNavbarOpen(!navbarOpen);

    useEffect(() => {
        if (loaded) {
            setNavbarOpen(windowWidth > breakpoints.desktop);
        }
    }, [windowWidth, bgIsDark]);
    // Recompute on scroll, resize, and route changes
    useEffect(() => {
        if(loaded){
            setBgIsDark(detectBackgroundDarkness(navbarRef.current))
        }
    }, [scrollRelativePosition, windowWidth, loaded]);

    useEffect(() => {
        setLoaded(true);
    }, [])


    let linkClassName: string = 'component-navbar-item';
    let logoClassName: string = 'component-navbar-logo'
    let wrapperClassName: string = 'component-navbar';
    let itemListClassName: string = 'component-navbar-item-list';
    // Determine dark mode based on detected background behind the navbar.
    // Fallback to previous heuristic if detection is unavailable.
    const darkMode = (bgIsDark !== null) ? bgIsDark : false;
    if (darkMode) {
        linkClassName += ' component-navbar-item-dark';
        logoClassName += ' component-navbar-item-dark';
        wrapperClassName += ' component-navbar-dark';
    }
    if (!navbarOpen) {
        wrapperClassName += ' component-navbar-hidden';
        itemListClassName += ' component-navbar-item-list-hidden';
    }


    let nameText: string = "P.";


    return (
        <header className={"component-navbar-header"}>
            <div className={wrapperClassName} ref={navbarRef} style={{display: (loaded) ? "" : "none"}}>
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