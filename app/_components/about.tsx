export const About = () => {

    const height = "600px";
    const src = "images/cover-image-03.png";

    const backgroundImage = `url(${src})`;
    return (
        <div style={{
            position: 'relative',
            backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            maxHeight: "600px",
            height: height
        }}>
            <div className={"component-about"}>
                <div className={"component-about-header"}>
                    <div className={"element-line-medium"}></div>
                    Beyond the code
                    <div className={"element-line-medium"}></div>
                </div>
                <div className={"component-about-content"}>
                    My focus is on delivering real <br/>value, offering the professional <br/>assurance that your vision will<br/> be
                    delivered.
                </div>
                <div className={"component-about-columns"}>
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