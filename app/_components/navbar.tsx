'use client';
import {useScroll} from "@/app/_components/hooks";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import {useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";


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
export const NavBar = () => {

    const [onNameHover, setOnNameHover] = useState<boolean>(false);


    const scrollRelativePosition = useScroll();
    const pathname = usePathname();

    let linkClassName: string = 'component-navbar-item';
    let logoClassName: string = 'component-navbar-logo'
    if (scrollRelativePosition > 0.75 || (pathname !== null && pathname.includes('project'))) {
        linkClassName += ' component-navbar-dark';
        logoClassName += ' component-navbar-dark';
    }

    useGSAP(() => {
        gsap.to(".component-navbar-logo", {
            text: {
                value: onNameHover ? "Pol Company" : "P.",
                speed: 2
            }
        })
    }, [onNameHover])

    let nameText: string = "P.";
    return (
        <header className={"component-navbar-header"}>
            <div className="component-navbar">
                <NavbarItem text={nameText} slug={"/"} className={logoClassName}
                            onMouseEnter={() => setOnNameHover(true)}
                            onMouseLeave={() => setOnNameHover(false)}/>
                <div className={"component-navbar-item-list"}>
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