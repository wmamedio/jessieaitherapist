import { allPostsStore } from '$lib/stores';
import { get } from 'svelte/store';

let apiCallCount = 0;

export const prerender = true;

export async function load({ fetch }) {
    const apiUrl = 'https://simplifying.bubbleapps.io/version-test/api/1.1/obj/blogpost?constraints=%5B%7B%22key%22%3A%22website_option_blog_post_type%22%2C%22constraint_type%22%3A%22equals%22%2C%22value%22%3A%22Jessie%20Therapist%22%7D%5D';

    let cursor = 0;
    let hasMore = true;
    let posts = get(allPostsStore); // Check if posts are already set

    if (posts.length === 0) { // Only fetch if posts are not already set
        while (hasMore) {
            apiCallCount++;  // Increment the counter
            console.log(`API Call #${apiCallCount}`);  // Log each API call
            const response = await fetch(`${apiUrl}&limit=100&cursor=${cursor}`);
            const data = await response.json();

            if (data.response.results.length > 0) {
                posts = posts.concat(data.response.results);
                cursor = cursor + data.response.results.length;
                hasMore = data.response.remaining > 0;
            } else {
                hasMore = false;
            }
        }

        console.log('Total API calls:', apiCallCount); // Log the counter

        // Update the store with the fetched posts
        allPostsStore.set(posts);
    } 
    // else {
    //     console.log('Using stored posts, skipping API call');
    // }

    return { allPosts: posts };
}

// testing