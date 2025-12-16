'use client';
import {useScroll, useWindowWidth} from "@/app/_components/hooks";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import {useEffect, useRef, useState} from "react";
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
export const NavBar = () => {

    const windowWidth = useWindowWidth();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [bgIsDark, setBgIsDark] = useState<boolean | null>(null);
    const navbarRef = useRef<HTMLDivElement | null>(null);

    // Utilities to detect the background color behind the navbar and decide contrast
    function parseRGB(color: string): { r: number, g: number, b: number, a: number } | null {
        // Expected formats: rgb(r, g, b) or rgba(r, g, b, a)
        const rgbMatch = color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
        if (rgbMatch) {
            return {r: +rgbMatch[1], g: +rgbMatch[2], b: +rgbMatch[3], a: 1};
        }
        const rgbaMatch = color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/i);
        if (rgbaMatch) {
            return {r: +rgbaMatch[1], g: +rgbaMatch[2], b: +rgbaMatch[3], a: +rgbaMatch[4]};
        }
        return null;
    }


    function pickEffectiveBackground(el: Element | null): string | null {
        let current: Element | null = el;
        console.log(current)
        while (current && current instanceof Element) {
            const style = window.getComputedStyle(current);
            const bg = style.backgroundColor;
            const parsed = bg ? parseRGB(bg) : null;
            if (parsed && parsed.a > 0) {
                return bg;
            }
            current = current.parentElement;
        }
        // fallback to body background
        const bodyBg = window.getComputedStyle(document.body).backgroundColor;
        return bodyBg || null;
    }

    function detectBackgroundDarkness() {
        if (typeof window === 'undefined') return;
        const header = navbarRef.current;
        if (!header) return;

        const rect = header.getBoundingClientRect();
        const x = Math.max(0, Math.min(window.innerWidth - 1, Math.floor(window.innerWidth / 2)));
        // sample a point just below the header to get the element behind it
        const y = Math.max(0, Math.min(window.innerHeight - 1, Math.floor(rect.bottom + 1)));
        const el = document.elementFromPoint(x, y);
        const bg = pickEffectiveBackground(el);
        if (!bg) {
            setBgIsDark(null);
            return;
        }
        const parsed = parseRGB(bg);
        if (!parsed) {
            setBgIsDark(null);
            return;
        }
        const lum = getColorLuminance(parsed);
        // Threshold: consider dark if luminance < 0.5 (tweakable)
        console.log(lum)
        setBgIsDark(lum < 0.5);
    }
    const scrollRelativePosition = useScroll();
    const onClickCallback = () => setNavbarOpen(!navbarOpen);

    useEffect(() => {
        setNavbarOpen(windowWidth > breakpoints.desktop);
    }, [windowWidth]);
    // Recompute on scroll, resize, and route changes
    useEffect(detectBackgroundDarkness, [scrollRelativePosition, windowWidth]);


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
    if(!navbarOpen){
        wrapperClassName += ' component-navbar-hidden';
        itemListClassName += ' component-navbar-item-list-hidden';
    }




    let nameText: string = "P.";



    return (
        <header className={"component-navbar-header"}>
            <div className={wrapperClassName} ref={navbarRef}>
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