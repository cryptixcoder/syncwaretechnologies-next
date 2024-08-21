import { caseStudies, posts } from '@/.velite';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrls = [
        {
            url: "https://www.syncwaretechnologies.com/",
            lastModified: new Date().toISOString()
        },
        {
            url: "https://www.syncwaretechnologies.com/about",
            lastModified: new Date().toISOString()
        },
        {
            url: "https://www.syncwaretechnologies.com/work",
            lastModified: new Date().toISOString()
        },
        {
            url: "https://www.syncwaretechnologies.com/blog",
            lastModified: new Date().toISOString()
        },
    ];

    const blogPosts = posts.filter(post => post.published);

    const dynamicBlogPosts = blogPosts.map((post: any) => ({
        url: `https://www.syncwaretechnologies.com/blog/${post.slug}`,
        lastModified: new Date().toISOString()
    }))

    const dynamicWork = caseStudies.map((post:any) => ({
        url: `https://www.syncwaretechnologies.com/work/${post.slug}`,
        lastModified: new Date().toISOString()
    }))

    return [
        ...baseUrls,
        ...dynamicBlogPosts,
        ...dynamicWork
    ]
}