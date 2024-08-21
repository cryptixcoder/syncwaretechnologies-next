import Image from "next/image";
import { caseStudies, services } from '#site/content';
import Link from 'next/link';
import { sortByPosition } from '@/lib';
import TestimonialSection from '@/components/TestimonialSection';

async function getFeaturedCaseStudies() {
  const posts = caseStudies.filter((caseStudy) => caseStudy.featured === true);

  return posts
}

export default async function Home() {
  const featuredPosts = await getFeaturedCaseStudies();
  const sortedServices = sortByPosition(services);

  return (
    <>
      <main>
        <div className="py-[75px] md:py-[150px]">
            <div className="px-4 md:px-0 container max-w-6xl">
                <h1 className="text-[32px] md:text-[64px] leading-tight font-sans">Philly based product design and solutions agency, partnering with companies to build great products.</h1>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {featuredPosts.map((featured) => {
            return (
              <div key={featured.slug} className="col-span-1 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${featured.cover})` }}>
                  <Link href={ featured.permalink }> 
                    <div className="py-72 bg-black bg-opacity-50 h-full">
                      <h2 className="font-display text-white uppercase text-center text-semibold text-4xl">{featured.title}</h2>
                    </div>
                  </Link>
              </div>
            )
          })}
        </div>

        <TestimonialSection />
      </main>
    </>
  );
}
