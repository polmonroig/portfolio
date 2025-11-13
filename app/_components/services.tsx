import Image from 'next/image';

const ServiceItem = (props: {
    number: string, title: string, serviceList: string[],
    side: string,
    src: string,
}) => {

    const imageWidth: number = 500;
    const imageHeight: number = 455;


    return (
        <div className={"component-services-item"}>
            {
                props.side === "left" ?
                    <div className={"component-services-item-inner"}>
                        <div className={"component-services-item-inner-text"}>
                            <div className={"layout-flex-row style-paragraph"}>
                                <div className={"layout-margin-y-auto style-bold style-italic"}>{props.number}</div>
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
                        <Image src={props.src} alt={"service-image"} className={"component-services-item-image responsive-hide-desktop"}
                               width={imageWidth} height={imageHeight}/>
                    </div>
                    :
                    <div className={"component-services-item-inner"}>
                        <Image src={props.src} alt={"service-image"} className={"component-services-item-image responsive-hide-desktop"}
                               width={imageWidth} height={imageHeight}/>
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
                <div className={"element-section-title"}>
                    Services
                </div>
                <div className={"element-line-full responsive-hide-desktop"}></div>
            </div>
            <ServiceItem number={"01"} title="Web Development & Interactive Experiences"
                         src={"/images/services-01.jpg"}
                         side={"left"}
                         serviceList={["Full-Stack", "Frontend", "Backend Architecture",
                             "3D Web with WebGL", "Scalable APIs"]}/>
            <ServiceItem number={"02"} title="Machine Learning & Data Science Solutions"
                         src={"/images/services-02.jpg"}
                         side={"right"}
                         serviceList={["Model", "Development", "Predictive", "Analytics Data",
                             "Bayesian", "Algorithm Design", "Deep Learning"]}/>
            <ServiceItem number={"03"} title="Real-Time Data Visualization & Dashboards"
                         src={"/images/services-03.jpg"}
                         side={"left"}
                         serviceList={["Custom Dashboards", "Real-Time Data",
                             "Interactive Charts", "Analytics Platforms", "BI Tools"]}/>

        </div>
    )
}