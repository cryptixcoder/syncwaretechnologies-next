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
    const backgroundImage = `url(${post.cover})`

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
       <div>
            <div className="container max-w-6xl py-[80px]">
                <h1 className="text-center font-display text-[32px] md:text-[72px] leading-[44px] md:leading-[115px]">{post.title}</h1>
                <p className="text-center">{formattedDate}</p>
            </div>
            {post.cover && (
                <div className="container max-w-6xl">
                    <img src={post.cover} className="w-full" alt="" />
                </div>
            )}
            
            <div className="flex items-center justify-center py-[80px] px-4 md:px-0">
                <div className="prose lg:prose-xl mb-10">
                    <MDXComponent code={post.content} />
                </div>
            </div>
       </div>
    )
}