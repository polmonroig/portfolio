'use client'
import {ChevronDownIcon} from "@heroicons/react/16/solid";


export default function Home() {




  return (
    <div className="font-sans flex flex-col items-center justify-items-center pt-96 h-screen relative">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-star h-screen">
        <div>
          <div className="text-8xl text-center mb-12 font-average text-teal-500 slide-animation">
            Hi, I'm Pol
          </div>
          <div/>
          <div className="text-2xl/10 mt-5 text-center mx-auto text-gray-500 font-average slide-animation-delay" style={{maxWidth: "600px"}}>
              A multidisciplinary <span className={"text-teal-500"}>developer</span>  with a passion for building machine learning solutions and web applications.
          </div>
        </div>
      </div>
        <ChevronDownIcon className={"w-12 h-12 mt-20 mx-auto animate-bounce text-gray-500 absolute bottom-12 text-teal-500"}/>
    </div>
  );
}
