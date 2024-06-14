/* eslint-disable react/no-unescaped-entities */
import {caseStudies} from '#site/content'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata:Metadata = {
    title: "Our Work"
}

export default function Work() {
    return (
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 py-10 md:py-36 px-10 md:px-0">
            <div className="mb-10 md:mb-0  md:h-screen md:sticky md:top-0">
                <h3 className="text-slate-900 text-5xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase">What We've Done<span className="text-primary-600">.</span></h3>
            </div>
            <div>
                {caseStudies.length > 0 ? (
                    <>
                        {caseStudies.map((caseStudy) => {
                            return (
                                <div key={caseStudy.slug} className="grid gap-4 grid-cols-1 md:grid-cols-12 mb-10" >
                                    <div className="col-span-12 md:col-span-5">
                                        <img src={caseStudy.cover} alt="" className="w-full" />
                                    </div>
                                    <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
                                        <h2 className="text-2xl uppercase mb-2"><Link href={caseStudy.permalink}>{caseStudy.title}</Link></h2>
                                        <p className="text-18 font-light">{caseStudy.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                ) : (
                    <>
                    <h1 className="text-xl">No Case Studies</h1>
                    </>
                )}
            </div>
        </div>
    )
}