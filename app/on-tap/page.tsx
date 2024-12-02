/* eslint-disable react/no-unescaped-entities */
import PriceTable from '@/components/ontap/PriceTable'
import { caseStudies, services } from '#site/content';
import { sortByPosition } from '@/lib';
import PricingOptions from '@/components/ontap/PricingOptions';

const monthlyServices = [
  {
    id: "augment",
    title: "Augment",
    line1: "5 spots monthly.",
    line2: "First come, first serve.",
    price: "$6,000/mo",
    priceId: "price_0P7IY4SMqd8bI2qaTDtJ8m8z",
    features: [
      "Full services creative", 
      "Monthly consulting calls",
      "Simple, monthly subscription",
      "Async communication",
      "Scale with your needs",
      "Updates every 2 days",
      "Cancel anytime",
      "50 design/dev hours per month"
    ]
  },
  {
    id: "agency",
    title: "Full Agency",
    line1: "For brands ready to go",
    line2: "to the next level",
    price: "$15,000/mo",
    priceId: "price_0PVItFSMqd8bI2qaSvRtVXSp",
    features: [
       "Full services creative", 
        "Monthly consulting calls",
        "Simple, monthly subscription",
        "Async communication",
        "Scale with your needs",
        "Updates every 2 days",
        "Cancel anytime",
        "50 design/dev hours per month"
    ]
  },
]

async function getFeaturedCaseStudies() {
  const posts = caseStudies.filter((caseStudy) => caseStudy.featured === true);

  return posts
}


export default async function Page() {
    const featuredPosts = await getFeaturedCaseStudies();
    return (
        <div className="py-[40px]">
            <div className="container max-w-6xl py-9 flex flex-col items-center">
                <h2 className="text-[34px] text-center font-display text-primary-700 leading-none">Your On-Demand Agency</h2>
                <h1 className="text-[120px] text-center font-display leading-none mt-4">On Tap</h1>
                
                <div className="flex space-x-10 text-[32px] font-display font-medium mt-8">
                    <div>Design & Development.</div>
                    <div>Flat monthly fee.</div>
                    <div>No Commitment.</div>
                </div>

                {/* <div>
                    <h1 className="text-[32px] md:text-[64px] leading-tight font-sans">Finding your team's perfect designer or developer has always been a hassle. Worry no more! Welcome to On-Tap!</h1>
                </div> */}
            </div>
            <div className="max-w-6xl mx-auto">
                <PricingOptions />
            </div>
            <div className="py-[40px]">
                <div className="container max-w-6xl">
                        {/* <div>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-5 uppercase max-w-[30rem]">Plans <span className="text-primary-700">&</span> Pricing</h2>
                        </div> */}
                        <div className="grid grid-cols-2 gap-4">
                            {monthlyServices.map((service) => (
                                <PriceTable key={service.id} service={service} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 ">
                    {featuredPosts.map((featured) => {
                        return (
                        <div key={featured.slug} className="col-span-1 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${featured.cover})` }}>
                            <div className="py-72 bg-black bg-opacity-50 h-full">
                                <h2 className="font-display text-white uppercase text-center text-semibold text-4xl">{featured.title}</h2>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
        </div>
    )
}