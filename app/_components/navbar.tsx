import {useScroll} from "@/app/_components/hooks";

const NavbarItem = (props: { text: string, slug: string, className: string}) => {
    return (
        <a className={props.className} href={props.slug}>
            {props.text}
        </a>
    )
}

export const NavBar = () => {

    const scrollRelativePosition = useScroll();

    let linkClassName: string = 'component-navbar-item';
    let logoClassName: string = 'component-navbar-logo'
    if(scrollRelativePosition > 0.75){
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