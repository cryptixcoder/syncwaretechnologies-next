export default function Container({ children }:{children: React.ReactNode}){
    return (
        <div className="prose prose-xl max-w-6xl mx-auto">
            {children}
        </div>
    )
}