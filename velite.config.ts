import rehypeShiki from '@shikijs/rehype'
import { defineConfig, defineCollection ,s } from "velite"
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";


export default defineConfig({
    output: {
        data: '.velite',
        assets: 'public/static',
        base: 'static',
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    mdx:{
        rehypePlugins: [
            [rehypePrettyCode, { theme: "github-dark" }],
        ]
    },
    collections: {
        posts: {
            name: "Post",
            pattern: "posts/**/*.mdx",
            schema: s.object({
                path: s.path(),
                title: s.string(),
                slug: s.slug('posts'),
                date: s.isodate(),
                cover: s.string(),
                content: s.mdx(),
                summary: s.string(),
                published: s.boolean().default(false)
            }).transform((data:any) => ({ ...data, permalink: `/blog/${data.slug}`}))
        },
        caseStudies: {
            name: "CaseStudy",
            pattern: "casestudies/**/*.mdx",
            schema: s.object({
                title: s.string(),
                slug: s.slug('casestudies'),
                subtitle: s.string(),
                date: s.isodate(),
                cover: s.string(),
                content: s.mdx(),
                featured: s.boolean(),
                website: s.string().optional(),
                appStore: s.string().optional(),
                playStore: s.string().optional(),
                provided: s.string().optional()
            }).transform((data:any) => ({ ...data, permalink: `/work/${data.slug}`}))
        },
        members: {
            name: "Member",
            pattern: "staff/**/*.mdx",
            schema: s.object({
                title: s.string(),
                slug: s.slug('team'),
                position: s.string(),
                headshot: s.string(),
                content: s.mdx()
            }).transform((data:any) => ({ ...data, permalink: `/about/${data.slug}`}))
        },
        services: {
            name: "Services",
            pattern: "services/**/*.mdx",
            schema: s.object({
                title: s.string(),
                description: s.string(),
                position: s.number()
            }).transform((data:any) => ({ ...data }))
        }
    }
})