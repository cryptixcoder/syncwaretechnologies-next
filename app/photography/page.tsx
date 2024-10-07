/* eslint-disable react/no-unescaped-entities */
import { photography } from '#site/content'
import PriceCard from '@/components/photography/PriceCard'
import ScheduleSessionButton from '@/components/photography/ScheduleSoloSessionButton'
import ScheduleTeamSessionButton from '@/components/photography/ScheduleTeamSessionButton'
import { QueryPagination } from '@/components/QueryPagination'
import { sortPostsByDate } from '@/lib'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Photography Portfolio"
}

export default function Photography() {

    return (
        <main>
            <div className="px-4 md:px-0 container max-w-5xl">
                <div className="grid grid-cols-1  py-20">
                    <div className="mb-10 md:mb-0">
                        <h3 className="text-slate-900 text-5xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-6xl uppercase">Great Photography is apart of the brand<span className="text-primary-600">.</span></h3>
                        <h4 className="text-3xl font-light">Capture the essence of your brand with stunning visuals—whether in a studio or at your location for a personalized, on-site shoot.</h4>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-0 container max-w-5xl mb-20">
                <div>
                    <div className="mb-10">
                        <h3 className="text-slate-900 text-5xl lg:text-4xl font-display font-semibold mb-10 md:mb-5 lg:max-w-4xl uppercase">
                            On-site Packages<span className="text-primary-600">.</span>
                        </h3>
                        <p className="max-w-lg">Choose from two flexible packages designed to fit your unique needs, whether you're looking for individual headshots or team photos, all with transparent pricing and no hidden fees.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                        <PriceCard 
                            title="Solo Shoot" 
                            price="$200" 
                            description="Perfect for capturing professional headshots tailored for your social profiles, website bio, or portfolio. Whether you're updating LinkedIn, creating a personal brand, or showcasing your skills, this session will ensure you have polished, high-quality images that make a lasting impression." 
                            features={[
                                "1 Hour Session",
                                "5 Edited Photos",
                                "$10 per additional photo",
                                "24 hour delivery",
                                "Black, White, or Environment Background"
                            ]} 
                        >
                            <div className="mt-2">
                                <ScheduleSessionButton />
                            </div>
                        </PriceCard>
                        <PriceCard 
                            title="Team Session" 
                            price="$450" 
                            description='Ideal for team photos or group shots, this session is designed to capture your team’s personality and professionalism. Whether for your website, marketing materials, or social media, these polished images will showcase your company’s unity and brand identity, providing a cohesive visual that strengthens your brand’s presence.' 
                            features={[
                                "1 - 2 Hour Session",
                                "5 Team members included",
                                "1 Edited Photo per team member",
                                "$10 per additional photo",
                                "$10 per additional team member",
                                "Black, White, or Environment Background"
                            ]} 
                        >
                            <div className="mt-2"> 
                                <ScheduleTeamSessionButton />
                            </div>
                        </PriceCard>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t">
                {photography.map((sess) => {
                    return (
                        <Link key={sess.slug} href={sess.permalink} className="border-r border-b">
                            <div>
                                <div className="col-span-12 md:col-span-5 overflow-hidden max-h-[796px]">
                                    <img src={sess.photos[0].url} alt="" className="w-full" />
                                </div>
                                <div className="col-span-12 md:col-span-7 flex flex-col justify-center p-4 md:p-[40px]">
                                    <h3 className="text-[16px] text-primary-700 uppercase font-display">{sess.type}</h3>
                                    <h2 className="text-[24px] uppercase mb-2">{sess.title}</h2>
                                    <p className="text-18 font-light">{sess.description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}