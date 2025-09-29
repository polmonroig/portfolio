import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        <div className="mt-12 flex flex-row gap-12 mx-auto text-lg text-center">
            <Link href={"/about"} className={"hover:underline text-center block w-24"}>About</Link>
            <Link href={"/projects"} className={"hover:underline  block w-24 text-center"}>Projects</Link>
            <Link href={"/contact"} className={"hover:underline  block w-24"}>Contact Me</Link>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <div className="text-5xl text-center mb-10">
            Pol Company
          </div>
          <div/>
          <div className="text-6xl pb-2 text-center font-bold">
            Freelance Developer
          </div>
          <div className="text-2xl mt-5 text-center text" style={{width : "600px"}}>
            I am a versatile builder and mentor who translates complex needs into high-impact digital products, including data-driven applications, scalable cloud infrastructure, and engaging web and game experiences.
          </div>
        </div>


      </div>
      <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

        <div className="flex items-center gap-2  hover:underline-offset-4" >
          Made with ❤️ by Pol Monroig Company
        </div>
      </div>
    </div>
  );
}
