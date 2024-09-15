import { allPostsStore } from '$lib/stores';
import { get } from 'svelte/store';

export const prerender = true;

export async function load({ params }) {
    const { name } = params;
    const allPosts = get(allPostsStore);

    if (!allPosts || allPosts.length === 0) {
        throw new Error('No posts available');
    }

    const post = allPosts.find(post => post.title_text.toLowerCase().replace(/:/g, '').replace(/\s+/g, '-') === name);
    if (post) {
        return { post };
    } else {
        throw new Error('Post not found');
    }
}