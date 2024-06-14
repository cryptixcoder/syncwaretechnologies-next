import { members } from '#site/content'
import { MDXComponent } from '@/components/MDXComponent';
import Image from 'next/image';

interface PostPageProps {
    params: {
        slug: string[]
    }
}

async function getPostFromParams(params: PostPageProps['params']) {
    const slug = params?.slug?.join("/");
    const post = members.find(post => post.slug === slug);

    return post;
}


export default async function Team({ params }: PostPageProps) {
    const member = await getPostFromParams(params);

    return (
       <div className="container max-w-6xl grid grid-cols-2 py-36">
            <div>
                <h5 className="text-3xl text-primary-600 font-bold uppercase">{member.position}</h5>
                <h3 className="text-slate-900 text-5xl lg:text-8xl font-display font-semibold mb-5 lg:max-w-4xl uppercase w-1/2">{ member.title }</h3>
                <Image src={member.headshot} alt={member.title} width={384} height={384} className="w-2/3" />
            </div>
            <div>
                <div className="prose lg:prose-xl mb-10">
                    <MDXComponent code={member.content} />
                </div>
            </div>
        </div>
    )
}