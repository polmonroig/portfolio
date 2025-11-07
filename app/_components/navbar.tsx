const NavbarItem = (props: { text: string, slug: string, strong: boolean}) => {
    return (
        <a className={"component-navbar-item" + (props.strong ? " component-navbar-item-strong" : "")} href={props.slug}>
            {props.text}
        </a>
    )
}


const NavbarLogo = () => {
    return (
        <div className={"component-navbar-logo"}>
            P.
        </div>
    )
}

export const NavBar = () => {
    return (
        <header className={"component-navbar-header"}>
            <div className="component-navbar">
                <NavbarLogo/>
                <div className={"component-navbar-item-list"}>
                    <NavbarItem text={"services"} slug={"/services"} strong={false}/>
                    <NavbarItem text={"projects"} slug={"/projects"} strong={false}/>
                    <NavbarItem text={"blog"} slug={"/blog"} strong={false}/>
                    <NavbarItem text={"Hire Me"} slug={"/#contact"} strong={true}/>
                </div>
            </div>
        </header>
    )
}