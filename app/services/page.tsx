import { Metadata } from 'next'
import {Services as ServicesProps, services} from '#site/content'
import { sortByPosition } from '@/lib'

export const metadata:Metadata = {
    title: "Our Services"
}

export default function Services() {
    const sortedServices:Array<ServicesProps> = sortByPosition(services);

    return (
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 py-10 md:py-36 px-10 md:px-0">
            <div className="md:h-screen md:sticky md:top-0">
                <h3 className="mb-10 md:mb-0 text-5xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase">What we <br/>do<span className="text-primary-600">.</span></h3>
            </div>
            <div>
                {sortedServices.map((service:Services) => (
                    <div key={service.position} className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
                        <div className="col-span-5">
                            <h3 className="text-4xl font-display uppercase">{service.title}</h3>
                        </div>
                        <div className="col-span-7">
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}