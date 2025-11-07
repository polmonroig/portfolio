'use client'
import Script from 'next/script';


export const AppBody = ({
                            children,
                        }: Readonly<{
    children: React.ReactNode;
}>) => {


    return (
        <div className={"relative w-full h-full "}>


            {children}

        </div>
    )
}

export const UmamiAnalytics = () => {
    1
    return <Script async src="https://cloud.umami.is/script.js"
                   data-website-id="e6a04351-01ff-487c-bd4e-e829dde57d3e"></Script>
}