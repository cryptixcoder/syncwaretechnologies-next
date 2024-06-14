import { posts } from '@/.velite';
import { MDXComponent } from '@/components/MDXComponent';
import "@/styles/mdx.css"

interface PostPageProps {
    params: {
        slug: string[]
    }
}

async function getPostFromParams(params: PostPageProps['params']) {
    const slug = params?.slug?.join("/");
    const post = posts.find(post => post.slug === slug);

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

export default async function BlogPage({params}: PostPageProps) {
    const post = await getPostFromParams(params);
    
    return (
        <div className="container max-w-6xl grid grid-cols-2 py-36">
            <div className="md:h-screen md:sticky md:top-0">
                <h3 className="text-slate-900 text-5xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase">{ post.title }</h3>
                <img src={post.cover} alt="" className="w-2/3" />
            </div>
            <div>
                <div className="prose lg:prose-xl mb-10">
                    <MDXComponent code={post.content} />
                </div>
            </div>
        </div>
    )
}