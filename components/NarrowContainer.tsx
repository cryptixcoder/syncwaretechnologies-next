export default function NarrowContainer({ children }:{children: React.ReactNode}){
    return (
        <div className="prose prose-xl mx-auto py-8">
            {children}
        </div>
    )
}