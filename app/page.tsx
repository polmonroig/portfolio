'use client'
import {useEffect, useState} from "react";


export default function Home() {

  const [headerIndex, setHeaderIndex] = useState<number>(0);


  const headerList = ["Freelance Developer", "Web Developer",
                      "Data Scientist", "Computer Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderIndex((prevIndex) => (prevIndex + 1) % headerList.length);
    }, 1500)

    return () => clearInterval(interval);
  }, [])


  return (
    <div className="font-sans flex flex-col items-center justify-items-center h-full pt-80">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <div className="text-8xl text-center mb-24 font-bold font-strong">
            Pol Company
          </div>
          <div/>
          <div className="text-5xl mb-12 text-center mx-auto">
            {headerList[headerIndex]}
          </div>
          <div className="text-2xl/10 mt-5 text-center mx-auto" style={{maxWidth: "600px"}}>
            <mark className={"bg-black text-white"}>I am a full-spectrum digital consultant and developer, creating data-powered applications and scalable web
            solutions</mark>
          </div>
        </div>
      </div>
      <div className={"w-full h-4 bg-black mt-10 line-transition"}></div>
      <div className={"w-full h-4 bg-black mt-10 line-transition"}></div>
      <div className={"w-full h-4 bg-black mt-10 line-transition"}></div>
    </div>
  );
}
