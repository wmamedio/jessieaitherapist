import { allPostsStore } from '$lib/stores';
import { get } from 'svelte/store';

export const prerender = true;

export async function load() {
    const allPosts = get(allPostsStore);

    if (allPosts && allPosts.length > 0) {
        return { 
            initialPosts: allPosts.slice(0, 15), 
            remainingPosts: allPosts.slice(15),
            totalPosts: allPosts.length 
        };
    } else {
        console.error('No posts available');
        return { initialPosts: [], remainingPosts: [], totalPosts: 0 };
    }
}