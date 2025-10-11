import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center h-full pt-80">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <div className="text-5xl text-center mb-10">
            Pol Company
          </div>
          <div/>
          <div className="text-6xl pb-2 text-center font-bold">
            Freelance Developer
          </div>
          <div className="text-2xl mt-5 text-center text" style={{width: "600px"}}>
            I am a full-spectrum digital consultant and developer, creating data-powered applications and scalable web
            solutions
          </div>
        </div>
      </div>
      <div className={"w-full h-4 bg-black mt-10 line-transition"}></div>
      <div className={"w-full h-4 bg-black mt-10 line-transition"}></div>
      <div className={"w-full h-4 bg-black mt-10 line-transition"}></div>
    </div>
  );
}
