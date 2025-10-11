import Link from "next/link";

export default function About(){

    const imageWidth: number = 2046;
    const imageHeight: number = 1536;
    const scale: number = 0.3

    return(
        <div className={"h-full font-sans "}>
            <div className={"flex flex-col lg:flex-row gap-12 p-8 text-center items-center mx-auto my-auto mt-80"} style={{maxWidth : "1500px"}}>
                <img
                    alt={"Profile Image"}
                    src={"/profile_image_02.jpg"}
                    className={"border-8"}
                    width={imageWidth * scale}
                    style={{width : imageWidth * scale, height: imageHeight * scale}}
                    height={imageHeight * scale}/>
                <div className={"text-xl flex flex-col gap-12"}>
                    <div className={"text-3xl"}>
                        Hey I'm Pol 👋 Happy to meet you!
                    </div>
                    <div>
                        I'm a Full-Spectrum Digital Consultant and Developer who turns complex business needs into high-impact products. My development stack is language-agnostic, spanning Node.js, Python, R, C++ and beyond. Expertise includes scalable cloud architecture, machine learning/data science and web development.
                    </div>
                    <div>
                        You might be wondering where does Company come from (and no, it doesn't mean a real company), it is a very old Catalan last name that is translated as colleague.
                        In case you are <Link className={"underline"} target={"_blank"} href={"https://www.blasonari.net/apellidos/Compa%C3%B1i-Compa%C3%B1y-Compani-Company.html"}>curious</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}