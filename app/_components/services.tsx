const ServiceItem = (props: {
    number: string, title: string, serviceList: string[],
    side: string,
    src: string
}) => {


    return (
        <div className={"component-services-item"}>
            {
                props.side === "left" ?
                    <div className={"component-services-item-inner"}>
                        <div className={"component-services-item-inner-text"}>
                            <div className={"layout-flex-row style-paragraph"}>
                                <div className={"layout-margin-y-auto"}>{props.number}</div>
                                <div className={"element-line-small"}></div>
                                <div className={"layout-margin-y-auto"}>
                                    {props.title}
                                </div>
                            </div>
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
                        <img src={props.src} alt={"service-image"} className={"component-services-item-image"}/>
                        <div className={"component-services-item-inner-text"}>
                            <div className={"layout-flex-row style-paragraph"}>
                                <div className={"layout-margin-y-auto"}>{props.number}</div>
                                <div className={"element-line-small"}></div>
                                <div className={"layout-margin-y-auto"}>
                                    {props.title}
                                </div>
                            </div>
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
        <div id={"services"} className={"component-services"}>
            <div className={"element-section-header"}>
                <div className={"style-gradient-text"}>
                    Services
                </div>
                <div className={"element-line-full"}></div>
            </div>
            <ServiceItem number={"01"} title="Web Development & Interactive Experiences"
                         src={"images/services-01.jpg"}
                         side={"left"}
                         serviceList={["Full-Stack", "Frontend", "Backend Architecture",
                             "3D Web with WebGL", "Scalable APIs"]}/>
            <ServiceItem number={"02"} title="Machine Learning & Data Science Solutions"
                         src={"images/services-02.jpg"}
                         side={"right"}
                         serviceList={["Model", "Development", "Predictive", "Analytics Data",
                             "Bayesian", "Algorithm Design", "Deep Learning"]}/>
            <ServiceItem number={"03"} title="Real-Time Data Visualization & Dashboards"
                         src={"images/services-03.jpg"}
                         side={"left"}
                         serviceList={["Custom Dashboards", "Real-Time Data",
                             "Interactive Charts", "Analytics Platforms", "BI Tools"]}/>

        </div>
    )
}