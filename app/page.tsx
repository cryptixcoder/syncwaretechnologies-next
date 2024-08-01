import Image from "next/image";
import { caseStudies, services } from '#site/content';
import Link from 'next/link';
import { sortByPosition } from '@/lib';

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
        <div className="px-5 py-20 bg-slate-900 text-white flex items-center">
          <div className="container max-w-6xl">
            <h2 className="font-sans text-4xl">We are</h2>
            <h1 className="text-6xl md:text-8xl font-display font-semibold mb-5 max-w-4xl">Syncware Technologies, Inc.</h1>
            <p className="text-2xl max-w-3xl">A digital product design & solutions agency focused on creating award winning products using human centered design and cutting edge technology.</p>
          </div>
        </div>

        <div className="px-5 lg:px-0 py-10 md:py-36 container flex flex-col items-center">
          <h3 className="text-center text-xl md:text-2xl font-display font-semibold mb-3 uppercase">Your Technology and Brand partner is here</h3>
          <p className="text-lg md:text-2xl text-center max-w-3xl">Syncware Technologies partners with Startups and Small to Medium
          businesses to help them build their brands and products.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {featuredPosts.map((featured) => {
            return (
              <div key={featured.slug} className="col-span-1 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${featured.cover})` }}>
                  <Link href={ featured.permalink }> 
                    <div className="py-72 bg-black bg-opacity-50 h-full">
                      <h2 className="font-display text-white text-center text-semibold text-4xl">{featured.title}</h2>
                    </div>
                  </Link>
              </div>
            )
          })}
        </div>

        <div className="px-5 bg-primary-700">
          <div className="container text-white max-w-4xl py-20">
            <p className="text-xl mb-5">In developing a hybrid mobile application for a client, Syncware Technologies was able to promptly step in, manage preset functions, guide our team on best practices and be a vital part in pushing our product to completion.  </p>
            <h3 className="text-semibold font-display text-3xl">Jaret Wilson</h3>
            <h4 className="text-semibold font-display text-3xl">CEO | The Wilson Concept</h4>
          </div>
        </div>


        <div className="px-10 lg:px-0 py-10 lg:py-36">
          <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2">
            <div className="mb-10 lg:mb-0">
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase">What we do<span className="text-primary-700">.</span></h3>
            </div>
            <div>
              {sortedServices.map((service) => {
                return (
                  <div key={service.position} className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
                    <div className="col-span-5">
                      <h3 className="text-4xl font-display uppercase">{ service.title}</h3>
                    </div>
                    <div className="col-span-7">
                      <p className="text-lg font-light">{ service.description }</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
