import { members } from '#site/content'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata:Metadata = {
    title: "About Us"
}

export default function About() {
    return (
        <div>
            <div className="py-[75px] md:py-[150px] bg-center bg-cover" style={{ backgroundImage: "url('/header-bg-10.png')"}}>
                <div className="px-4 md:px-0 container max-w-6xl">
                    <h1 className="text-[32px] md:text-[64px] leading-tight font-sans">An agency filled with wonder, passion, and the vision to help startups build great products.</h1>
                </div>
            </div>
            <div className="border-b border-t">
                <div className="">
                    <div className="container max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-8">
                            <div className="md:col-span-3 md:pr-[40px] py-[40px] border-r">
                                <img src="/headshots/markus-gray.jpeg" className="w-full md:w-[400px]" alt="" />
                            </div>
                            <div className="col-span-1 md:col-span-5 space-y-[40px] flex flex-col justify-center pl-4 md:pl-[40px] pr-4 md:pr-0">
                                <div>
                                    <h2 className="text-[48px] font-semibold leading-[65px]">Markus Gray</h2>
                                    <h3 className="uppercase font-display text-[15px] tracking-[3px] text-primary-700">CEO & Software Engineer</h3>
                                </div>
                                <div>
                                    <p className="text-[18px] md:text-[24px] leading-[32px]">Markus Gray, the CEO and founder of Syncware Technologies, began his journey into the tech world at the age of 12, teaching himself web development. His early start led to a position at a Philadelphia agency where he worked on high-profile projects for clients like the United States Department of Education, Philadelphia Gas Works, and the Philadelphia Controller’s Office. With a drive to explore cutting-edge technology, Markus founded Syncware Technologies, a digital product design agency that takes projects from concept to production. In addition to leading his company, Markus has shared his expertise as an educator, partnering with Packt Publishing over the past three years to author several educational titles, including Building a YouTube Like Platform with Laravel, Beginning PHP, and The PHP Workshop.</p>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b">
                <div className="">
                    <div className="container max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-8">
                            <div className="md:col-span-3 md:pr-[40px] py-[40px] border-r">
                                <img src="/headshots/shai.jpeg" className="w-full md:w-[400px]" alt="" />
                            </div>
                            <div className="md:col-span-5 space-y-[40px] flex flex-col justify-center pl-4 md:pl-[40px] pr-4 md:pr-0">
                                <div>
                                    <h2 className="text-[48px] font-semibold leading-[65px]">Shaionna Stovall</h2>
                                    <h3 className="uppercase font-display text-[15px] tracking-[3px] text-primary-700">Design Lead</h3>
                                </div>
                                <div>
                                     <p className="text-[18px] md:text-[24px] leading-[32px]">Shaionna, known as "Shai," is a former fine artist turned graphic and interaction designer with a BFA from West Chester University. Her journey from traditional art to design is driven by a deep passion for learning, creativity, and making personal connections. With a strong sense of empathy, Shai is dedicated to using her artistic talents to help others, whether by bringing a far-out concept to life, raising awareness for a cause, or creating an attractive product. She values every step of the creative process, from meticulous sketches to polished vector designs, and takes pride in making each point of progress meaningful. Beyond her design work, Shai is an admirer of beautiful illustration, a frequent thinker on human philosophy, and an optimistic, occasional goofball who is always eager to connect and collaborate.</p>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[80px]">
                <div className="px-4 md:px-0 container max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2 border-r-0 md:border-r">
                            <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase">Services we offer<span className="text-primary-700">.</span></h3>
                        </div>
                        <div className="space-y-[24px] pl-0 md:pl-[40px] pb-0 md:pb-[40px]">
                            <h3 className="font-display text-[48px] leading-[65px]">01 - Strategy</h3>
                            <ul className="text-[24px] leading-[32px] space-y-[8px]">
                                <li>User Research</li>
                                <li>Marketing Research</li>
                                <li>Naming</li>
                                <li>Brand Voice Development</li>
                                <li>Art Direction</li>
                            </ul>
                        </div>
                        <div className="pt-[40px] space-y-[24px] border-t-0 md:border-t border-r-0 md:border-r">
                            <h3 className="font-display text-[48px] leading-[65px]">02 - Branding</h3>
                            <ul className="text-[24px] leading-[32px] space-y-[8px]">
                                <li>Brand Identity</li>
                                <li>Logo</li>
                                <li>Packaging</li>
                                <li>Iconography</li>
                                <li>Copywriting</li>
                                <li>Photography</li>
                            </ul>
                        </div>
                        <div className="pt-[40px] space-y-[24px] border-t-0 md:border-t border-r-0 md:border-r pl-0 md:pl-[40px] pr-4 md:pr-0">
                            <h3 className="font-display text-[48px] leading-[65px]">03 - Experience</h3>
                            <ul className="text-[24px] leading-[32px] space-y-[8px]">
                                <li>Responsive Web Design</li>
                                <li>App Design</li>
                                <li>Ad Campaign Design</li>
                                <li>Social Media Design</li>
                            </ul>
                        </div>
                        <div className="pt-[40px] space-y-[24px] border-t-0 md:border-t pl-0 md:pl-[40px]">
                            <h3 className="font-display text-[48px] leading-[65px]">04 - Development</h3>
                            <ul className="text-[24px] leading-[32px] space-y-[8px]">
                                <li>WordPress Development</li>
                                <li>SaaS Development</li>
                                <li>React Native Development</li>
                                <li>Flutter Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}