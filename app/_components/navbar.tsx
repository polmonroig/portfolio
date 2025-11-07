const NavbarItem = (props: { text: string, slug: string }) => {
    return (
        <a className={"component-navbar-item"} href={props.slug}>
            {props.text}
        </a>
    )
}

const NavbarLogo = () => {
    return (
        <div className={"style-h3"}>
            P.
        </div>
    )
}

export const NavBar = () => {
    return (
        <header className={"component-navbar-header"}>
            <div className="component-navbar">
                <NavbarLogo/>
                <NavbarItem text={"services"} slug={"/services"}/>
                <NavbarItem text={"projects"} slug={"/projects"}/>
                <NavbarItem text={"blog"} slug={"/blog"}/>
                <NavbarItem text={"Hire Me"} slug={"/#contact"}/>
            </div>
        </header>
    )
}