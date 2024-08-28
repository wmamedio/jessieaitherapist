import { allPostsStore } from '$lib/stores';
import { get } from 'svelte/store';

export const prerender = true;

export async function load() {
    const allPosts = get(allPostsStore);
    // console.log('Using stored posts for blog page');

    if (allPosts && allPosts.length > 0) {
        return { posts: allPosts };
    } else {
        console.error('No posts available');
        return { posts: [] };
    }
}