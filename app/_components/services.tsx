import Image from 'next/image';
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import gsap from "gsap";
import {useRef} from "react";
import {getBlurURL} from "@/app/_components/utils";

const ServiceItem = (props: {
    number: string, title: string, serviceList: string[],
    side: string,
    src: string,
}) => {

    const imageWidth: number = 500;
    const imageHeight: number = 455;

    const containerRef = useRef(null);


    useGSAP(() => {

        // service lines animations
        let servicesListSplit = SplitText.create('.animation-text-line', {
            type: 'lines',
        })

        gsap.from(
            [".animation-title", servicesListSplit.lines],
            {
                duration: 1,
                stagger: 0.05,
                autoAlpha: 0,
                ease: "power3.out",
                x: props.side === "left" ? -100 : 100,
                scrollTrigger: {
                    start: 'top 80%',
                    trigger: containerRef.current
                },
            }
        )


        let animatedImageSide = `.animation-image-${props.side}`;

        gsap.from(
            animatedImageSide,
            {
                autoAlpha: 0,
                duration: 1,
                x: props.side === "left" ? 100 : -100,
                ease: "power3.out",
                scrollTrigger: {
                    start: 'top 80%',
                    trigger: containerRef.current,
                },
            }
        )


    }, {scope: containerRef})


    return (
        <div className={"component-services-item"} ref={containerRef}>
            {
                props.side === "left" ?
                    <div className={"component-services-item-inner"}>
                        <div className={"component-services-item-inner-text"}>
                            <div className={"layout-flex-row style-paragraph-small animation-title"}>
                                <div className={"layout-margin-y-auto style-bold style-italic"}>{props.number}</div>
                                <div className={"element-line-small"}></div>
                                <div className={"layout-margin-y-auto"}>
                                    {props.title}
                                </div>
                            </div>
                            <ul>
                                {props.serviceList.map((service, index) => (
                                    <li key={index} className={"style-h2 animation-text-line"}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Image src={props.src} alt={"service-image"}
                                   blurDataURL={getBlurURL(props.src)}
                                   placeholder={"blur"}
                                   className={"component-services-item-image animation-image-left"}
                                   width={imageWidth} height={imageHeight}/>
                        </div>
                    </div>
                    :
                    <div className={"component-services-item-inner"}>
                        <div>
                            <Image src={props.src} alt={"service-image"}
                                   blurDataURL={getBlurURL(props.src)}
                                   placeholder={"blur"}
                                   className={"component-services-item-image animation-image-right"}
                                   width={imageWidth} height={imageHeight}/>
                        </div>
                        <div className={"component-services-item-inner-text"}>
                            <div className={"layout-flex-row style-paragraph-small animation-title"}>
                                <div className={"layout-margin-y-auto style-bold style-italic"}>{props.number}</div>
                                <div className={"element-line-small"}></div>
                                <div className={"layout-margin-y-auto"}>
                                    {props.title}
                                </div>
                            </div>
                            <ul>
                                {props.serviceList.map((service, index) => (
                                    <li key={index} className={"style-h2 animation-text-line"}>{service}</li>
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
                         serviceList={["Model Development", "Predictive Analytics",
                             "Data Modeling", "Algorithm Design", "Deep Learning"]}/>
            <ServiceItem number={"03"} title="Real-Time Data Visualization & Dashboards"
                         src={"/images/services-03.jpg"}
                         side={"left"}
                         serviceList={["Custom Dashboards", "Real-Time Data",
                             "Interactive Charts", "Analytics Platforms", "BI Tools"]}/>

        </div>
    )
}