import { caseStudies } from '@/.velite'
import { MDXComponent } from '@/components/MDXComponent';
import { Metadata } from 'next';

interface PostPageProps {
    params: {
        slug: string[]
    }
}

type CaseStudyType = {
    title: string
    slug: string 
    description: string
    deliverables: Array<string>
    content: string
}


async function getPostFromParams(params: PostPageProps['params']) {
    const slug = params?.slug?.join("/");
    const post = caseStudies.find(post => post.slug === slug);

    return post;
}

export async function generateMetadata({params}: PostPageProps){
    const post = await getPostFromParams(params);

    if(!post) {
        return {};
    }

    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", post.title);

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: post.path,
            images: [
                    {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                    },
                ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [`/api/og?${ogSearchParams.toString()}`],
        },
    }
}

export default async function WorkPage({ params }: PostPageProps) {
    const caseStudy: CaseStudyType = await getPostFromParams(params);
    return (
        <div className="pb-[40px]">
            {/* <div className="min-h-[500px] bg-cover bg-center bg-no-repeat border-b" style={{backgroundImage: `url('${caseStudy.cover}')`}}></div> */}
            <div className="px-4 md:px-0 container max-w-6xl mt-[40px]">
                <h1 className="text-5xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase pr-5">{ caseStudy.title }</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                    <div>
                        <h2 className="font-display mb-[20px]">Project Description</h2>
                        <div className="prose">
                            <MDXComponent code={caseStudy.description} />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-display mb-[20px]">Deliverables</h3>
                        {caseStudy.deliverables && caseStudy.deliverables.length > 0 && (
                            <ul className="text-[1.125rem] font-light font-sans]">
                                {caseStudy.deliverables.map((deliverable, index) => (
                                    <li key={index}>{deliverable}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-0 pt-[40px]">
                <MDXComponent code={caseStudy.content} />
            </div>
        </div>
    )
}