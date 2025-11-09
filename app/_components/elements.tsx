

export const Button = (props : {text : string}) => {
    return (
        <button className={"element-button layout-margin-x-auto cursor-pointer"}>
            {props.text}
        </button>
    )
}

export const ButtonLink = (props : {text: string, href: string}) => {
    return (
        <a className={"element-button layout-margin-x-auto cursor-pointer"} href={props.href}>
            {props.text}
        </a>
    )
}