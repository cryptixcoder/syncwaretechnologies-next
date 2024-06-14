import { members } from '#site/content'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata:Metadata = {
    title: "About Us"
}

export default function About() {
    return (
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 py-10 md:py-36 px-10 md:px-0">
            <div className="md:h-screen md:sticky md:top-0">
                <h3 className="mb-10 md:mb-0 text-slate-900 text-5xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase">Who we <br/>are<span className="text-primary-600">.</span></h3>
            </div>
            <div>
                <h2 className="text-xl md:text-3xl uppercase mb-5">Core Team Members</h2>
                {members.map((member) => {
                    return (
                        <div key={member.slug} className="grid gap-4 grid-cols-1 md:grid-cols-12 mb-10">
                            <div className="col-span-5">
                                <Image src={member.headshot} width={230} height={230} alt={member.title} className="w-full" />
                            </div>
                            <div className="col-span-7 flex flex-col justify-center">
                                <h5 className="text-sm text-primary-600 font-bold uppercase">{member.position}</h5>
                                <h2 className="text-2xl uppercase mb-2"><a href={member.permalink}>{member.title}</a></h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}