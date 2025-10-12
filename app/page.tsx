'use client'
import {useEffect, useState} from "react";


export default function Home() {

  const [headerIndex, setHeaderIndex] = useState<number>(0);
  const [translateClass, setTranslateClass] = useState<string>("transition-transform duration-500  ease-in-out -translate-y-full");


  const headerList = ["Freelance Developer", "Web Developer",
                      "Data Scientist", "Computer Engineer"];

  const triggerHeaderChange = () => {

    setTimeout(() => {
      setTranslateClass("-translate-y-full");
      setTimeout(() => {
        triggerFadeInText();
        setHeaderIndex((prevIndex) => (prevIndex + 1) % headerList.length);
        triggerHeaderChange();
      }, 100)
    }, 2700)
  }

  const triggerFadeOutText = () => {
    setTranslateClass("transition-transform duration-500  ease-in-out -translate-y-full translate-y-full");
  }

  const triggerFadeInText = () => {
    setTranslateClass("transition-transform duration-500  ease-in-out -translate-y-full translate-y-0");
    setTimeout(() => {
      triggerFadeOutText();
    }, 2000)
  }

  useEffect(() => {
    triggerFadeInText();
    triggerHeaderChange();

  }, [])


  return (
    <div className="font-sans flex flex-col items-center justify-items-center h-full pt-80">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <div className="text-8xl text-center mb-24 font-bold font-strong">
            Pol Company
          </div>
          <div/>
          <div className="text-5xl mb-12 text-center mx-auto relative text-nowrap overflow-hidden">
            <div className={`overflow-hidden  text-center mx-auto  ${translateClass}`}>
              {headerList[headerIndex]}
            </div>
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
