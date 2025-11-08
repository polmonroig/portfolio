const ServiceItem = (props: {
    number: number, title: string, serviceList: string[],
    side: string,
    src: string
}) => {


    return (
        <div className={"component-services-item"}>
            {
                props.side === "left" ?
                    <div className={"component-services-item-inner"}>
                        <div>
                            <div>{props.number} <span>---</span> {props.title}</div>
                            <ul>
                                {props.serviceList.map((service, index) => (
                                    <li key={index} className={"style-h3"}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <img src={props.src} alt={"service-image"} className={"component-services-item-image"}/>
                    </div>
                    :
                    <div className={"component-services-item-inner"}>
                        <img src={props.src} alt={"service-image"} className={"component-services-item-image"} />
                        <div>
                            <div>{props.number} <span>---</span> {props.title}</div>
                            <ul>
                                {props.serviceList.map((service, index) => (
                                    <li key={index} className={"style-h3"}>{service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
            }

        </div>
    )
}


export const Services = () => {

    return (
        <div className={"component-services"}>
            <div className={"style-h2 style-gradient-text mx-auto"}>
                Services
            </div>
            <ServiceItem number={1} title="Web Development & Interactive Experiences"
                         src={"images/services-01.jpg"}
                         side={"left"}
                         serviceList={["Full-Stack", "Frontend", "Backend Architecture",
                             "3D Web with WebGL", "Scalable APIs"]}/>
            <ServiceItem number={2} title="Machine Learning & Data Science Solutions"
                         src={"images/services-02.jpg"}
                         side={"right"}
                         serviceList={["Model", "Development", "Predictive", "Analytics Data",
                             "Modeling", "Algorithm Design", "Deep Learning"]}/>
            <ServiceItem number={3} title="Real-Time Data Visualization & Dashboards"
                         src={"images/services-03.jpg"}
                         side={"left"}
                         serviceList={["Custom Dashboards", "Real-Time Data",
                             "Interactive Charts", "Analytics Platforms", "BI Tools"]}/>

        </div>
    )
}