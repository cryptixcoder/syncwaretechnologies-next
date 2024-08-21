import { Post } from '@/.velite';

export const BASEURL = process.env.NODE_ENV === "production" ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
export const ONTAPURL = process.env.NODE_ENV === "production" ? `https://ontap.syncwaretechnologies.com` : 'http://localhost:3001';

export function sortByPosition(posts: Array<any>) {
    return posts.sort((a, b) => {
        if (a.position < b.position) return -1;
        if (a.position > b.position) return 1;
        return 0;
    });
}

export function formatDate(input:string|number): string {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

export function sortPostsByDate(posts: Array<Post>) {
    return posts.sort((a,b) => {
        if(a.date > b.date) return -1;
        if(a.date < b.date) return 1;
        return 0;
    });
}