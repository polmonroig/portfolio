'use client'
import Script from 'next/script';


export const AppBody = ({
                            children,
                        }: Readonly<{
    children: React.ReactNode;
}>) => {


    return (
        <div className={"relative w-full h-full "}>

            <header className={"w-full fixed z-10 "}>
                <div
                    className="max-w-2xl mx-auto  text-center mt-4 h-14 transition-shadow duration-300 rounded-full bg-white/40 backdrop-blur-xs">
                    <div className={"flex flex-row items-center justify-center gap-6 mx-auto text-center h-full"}>
                        <div className={"mr-18 font-bold text-lg"}>
                            Pol Company
                        </div>
                        <a className={"cursor-pointer hover:text-gray-900"}>
                            services
                        </a>
                        <a className={"cursor-pointer hover:text-gray-900"}>
                            projects
                        </a>
                        <a className={"cursor-pointer hover:text-gray-900"}>
                            blog
                        </a>
                        <a className={"text-gray-800 text-lg font-bold ml-8 cursor-pointer"}
                           href={"/#contact"}>
                            Hire me
                        </a>
                    </div>

                </div>


            </header>
            {children}

        </div>
    )
}

export const UmamiAnalytics = () => {
    1
    return <Script async src="https://cloud.umami.is/script.js"
                   data-website-id="e6a04351-01ff-487c-bd4e-e829dde57d3e"></Script>
}