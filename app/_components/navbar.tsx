const NavbarItem = (props: { text: string, slug: string }) => {
    return (
        <a className={"component-navbar-item"} href={props.slug}>
            {props.text}
        </a>
    )
}

const NavBar = () => {
    return (
        <header className={"component-navbar-header"}>
            <div
                className="max-w-2xl mx-auto  text-center mt-4 h-14 transition-shadow duration-300 rounded-full bg-white/40 backdrop-blur-xs">
                <div className={"flex flex-row items-center justify-center gap-6 mx-auto text-center h-full"}>
                    <div className={"mr-18 font-bold text-lg"}>
                        Pol Company
                    </div>
                    <NavbarItem text={"services"} slug={"/services"}/>
                    <NavbarItem text={"projects"} slug={"/projects"}/>
                    <NavbarItem text={"blog"} slug={"/blog"}/>
                    <NavbarItem text={"Hire Me"} slug={"/#contact"}/>
                </div>
            </div>
        </header>
    )
}