export default function AboutLayout({
        children,
    } : {
        children: React.ReactNode
    }){
        return (
            <div className={"h-full font-sans "}>
                <section>{children}</section>
            </div>
        )
    }