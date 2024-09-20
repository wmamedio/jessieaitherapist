import { get } from 'svelte/store';
import { allPostsStore } from '$lib/stores';
import { slugify } from '$lib/slugify';

export async function load({ params }) {
    const allPosts = get(allPostsStore);
    const post = allPosts.find(p => slugify(p.title_text) === params.name);

    if (post) {
        return { post, allPosts };
    }

    // Instead of throwing an error, return null for the post
    console.warn(`Post not found: ${params.name}`);
    return { post: null, allPosts };
}