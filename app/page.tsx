import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-full p-8 pb-20 gap-16 sm:p-20 overflow-y-auto">
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
             I am a full-spectrum digital consultant and developer, creating data-powered applications and scalable web solutions
          </div>
        </div>
      </div>

        <div>

        </div>

    </div>
  );
}
