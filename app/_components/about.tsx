import Image from 'next/image';

export const About = () => {

    const height = "600px";
    const src = "/images/cover-image-03.png";

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            maxHeight: "600px",
            height: height,
            backgroundColor: 'black',
            overflow: 'hidden',
        }}>
            <Image
                src={src}
                alt=""
                aria-hidden
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    zIndex: 0,
                }}
            />
            <div className={"component-about"} style={{ position: 'relative', zIndex: 1 }}>
                <div className={"component-about-header style-white"}>
                    <div className={"element-line-medium"}></div>
                    <div>Beyond the code</div>
                    <div className={"element-line-medium"}></div>
                </div>
                <div className={"component-about-content style-white"}>
                    My focus is on delivering real <br/>value, offering the professional <br/>assurance that your vision will<br/> be
                    delivered.
                </div>
                <div className={"component-about-columns style-white"}>
                    <div>
                        Based in Barcelona
                    </div>
                    <div>
                        10+ years of experience
                    </div>
                    <div>
                        Cooking enthusiast
                    </div>
                </div>
            </div>

        </div>
    )
}