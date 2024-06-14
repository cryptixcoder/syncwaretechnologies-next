import { posts } from '#site/content'
import { QueryPagination } from '@/components/QueryPagination'
import { sortPostsByDate } from '@/lib'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Blog"
}

interface BlogPageProps {
    searchParams: {
        page?: string
    }
}

const POSTS_PER_PAGE = 1;

export default function Blog({searchParams}:BlogPageProps) {
    const currentPage = Number(searchParams?.page) || 1;
    const sortedPosts = sortPostsByDate(posts.filter(post => post.published));
    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

    const displayPosts = sortedPosts.slice(
        POSTS_PER_PAGE * (currentPage - 1),
        POSTS_PER_PAGE * currentPage
    );



    return (
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 py-10 md:py-36 px-10 md:px-0">
            <div>
                <h3 className="text-slate-900 text-5xl lg:text-8xl font-display font-semibold mb-10 md:mb-5 lg:max-w-4xl uppercase">
                    Just our thoughts<span className="text-primary-600">.</span>
                </h3>
            </div>
            <div>
                {displayPosts.length > 0 ? (
                    <>
                        {displayPosts.map((post) => {
                            return (
                                <div key={post.slug} className="mb-10">
                                    <h2 className="text-2xl uppercase mb-2">
                                        <Link href={post.permalink}>{post.title}</Link>
                                    </h2>
                                    
                                    <p className="text-18 font-light">{post.summary}</p>
                                    
                                    <Link className="text-primary-700 text-18 font-bold uppercase mt-4"  href={post.permalink} >View Post</Link>
                                </div>
                            )
                        })}
                    </>
                ) : (
                    <div>
                        <h2>No Posts</h2>
                    </div>
                )}
                <QueryPagination totalPages={totalPages} className='mt-9' />
            </div>
        </div>
    )
}