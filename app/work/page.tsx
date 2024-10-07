/* eslint-disable react/no-unescaped-entities */
import {caseStudies} from '#site/content'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata:Metadata = {
    title: "Our Work"
}

export default function Work() {
    return (
        <main>
            <div className="px-4 md:px-0 container max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 py-20">
                    <div className="mb-10 md:mb-0">
                        <h3 className="text-slate-900 text-5xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase">What We've Done<span className="text-primary-600">.</span></h3>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t">
                {caseStudies.length > 0 ? (
                    <>
                        {caseStudies.map((caseStudy) => {
                            return (
                                <Link key={caseStudy.slug} href={caseStudy.permalink} className="border-r border-b">
                                    <div>
                                        <div className="col-span-12 md:col-span-5">
                                            <img src={caseStudy.cover} alt="" className="w-full" />
                                        </div>
                                        <div className="col-span-12 md:col-span-7 flex flex-col justify-center p-4 md:p-[40px]">
                                            <h3 className="text-[16px] text-primary-700 uppercase font-display">{caseStudy.provided}</h3>
                                            <h2 className="text-[24px] uppercase mb-2">{caseStudy.title}</h2>
                                            <p className="text-18 font-light">{caseStudy.subtitle}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </>
                ) : (
                    <>
                    <h1 className="text-xl">No Case Studies</h1>
                    </>
                )}
            </div>
        </main>
    )
}