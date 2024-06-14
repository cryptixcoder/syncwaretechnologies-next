import { posts } from '#site/content'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Careers"
}

export default function Careers() {
    return (
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 py-10 md:py-36 px-10 md:px-0">
            <div className="md:h-screen md:sticky md:top-0">
                <h3 className="text-slate-900 text-5xl lg:text-8xl font-display font-semibold mb-10 md:mb-5 lg:max-w-4xl uppercase">
                    Come work with us<span className="text-primary-600">.</span>
                </h3>
            </div>
            <div>
               <h2>Currently there are no open positions</h2>
            </div>
        </div>
    )
}