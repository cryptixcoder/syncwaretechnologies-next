import { caseStudies } from '@/.velite'
import { MDXComponent } from '@/components/MDXComponent';
import { Metadata } from 'next';

export const metadata:Metadata = {
    title: "Our Work"
}

interface PostPageProps {
    params: {
        slug: string[]
    }
}

async function getPostFromParams(params: PostPageProps['params']) {
    const slug = params?.slug?.join("/");
    const post = caseStudies.find(post => post.slug === slug);

    return post;
}

export default async function WorkPage({ params }: PostPageProps) {
    const caseStudy = await getPostFromParams(params);
    return (
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 py-10 md:py-36 px-10 md:px-0">
            <div className="pr-5 md:h-screen md:sticky md:top-0">
                <h1 className="text-5xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase pr-5">{ caseStudy.title }</h1>
                
                {caseStudy.provided && (
                    <h5 className="text-sm md:text-xl text-primary-600 font-bold uppercase">{ caseStudy.provided }</h5>
                )}
                
                <div className="mb-10 md:mb-0 flex flex-col flex-shrink">
                
                    {caseStudy.website && (
                        <a href={caseStudy.website} target="_blank" className="mt-5 inline-flex items-center px-4 py-2 text-base font-medium ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                            </svg>
                        Visit Website
                        </a>
                    )}

                    {caseStudy.appStore && (
                        <a href={caseStudy.appStore} target="_blank" className="mt-5 inline-flex items-center px-4 py-2 text-base font-medium ">

                        <i className="fab fa-app-store mr-2"></i>

                        Visit the App Store
                        </a>
                    )}

                    {caseStudy.playStore && (
                        <a href={caseStudy.playStore} target="_blank" className="mt-5 inline-flex items-center px-4 py-2 text-base font-medium ">
            
                        <i className="fab fa-google-play mr-2"></i>
                        Visit Google Play Store
                        </a>
                    )}

                </div>
            </div>
            <div className="prose prose-lg">
                <MDXComponent code={caseStudy.content} />
            </div>
        </div>
    )
}