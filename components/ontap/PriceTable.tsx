import StripeCheckoutButton from '../StripeCheckoutButton'

type PriceTableProps = {
    id: string,
    title: string,
    line1: string,
    line2: string,
    price: string,
    priceId: string,
    features: string[]
}

export default function PriceTable({service}: {service: PriceTableProps}) {
    return (
        <div className="bg-white/50 border  rounded-2xl p-4  shadow-sm">
            <div  className="p-10 bg-white grid grid-cols-1 gap-[5rem] justify-between min-h-[400px] rounded-2xl">
                <div>
                    <h4 className="font-display text-3xl text-primary-700 mb-2">{service.title}</h4>
                    <h3 className="font-display text-5xl">{service.line1} <br/>{service.line2}</h3>
                </div>
            <div>
            <div className="font-display text-[64px] font-semibold mb-8">
                {service.price}
            </div>
            <StripeCheckoutButton priceId={service.priceId} />
            </div>
        </div>
            <div className="px-8 pt-4">
                <ul className="columns-2 list-disc text-black/30 space-y-2 font-sans">
                    {service.features.map((feat, index) => (
                        <li key={index}>
                            {feat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}