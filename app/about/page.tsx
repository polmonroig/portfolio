import Image from "next/image";

export default function About(){

    const imageWidth: number = 3212;
    const imageHeight: number = 3458;
    const scale: number = 0.25

    return(
        <div>
            <div>
                <Image
                    alt={"Profile Image"}
                    src={"/profile-image-cropped.jpg"}
                    width={imageWidth * scale}
                    height={imageHeight * scale}/>
            </div>
        </div>
    )
}