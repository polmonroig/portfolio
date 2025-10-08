export default function AboutLayout({
        children,
    } : {
        children: React.ReactNode
    }){
        return (
            <div className={"h-full font-sans "}>
                <div className={"flex flex-col lg:flex-row  p-8 text-center items-center mx-auto my-auto pt-20"}>
                    <section>{children}</section>
                </div>
            </div>
        )
    }