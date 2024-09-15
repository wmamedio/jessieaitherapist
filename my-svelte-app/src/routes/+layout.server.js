import { allPostsStore } from '../lib/stores';

export const prerender = true;

let apiCallCount = 0;
let cachedPosts = null;

async function populateStore(fetch) {
    if (cachedPosts) {
        console.log('Using cached posts');
        return cachedPosts;
    }

    console.log('Starting to fetch posts...');
    const apiUrl = 'https://simplifying.bubbleapps.io/version-test/api/1.1/obj/blogpost?constraints=%5B%7B%22key%22%3A%22website_option_blog_post_type%22%2C%22constraint_type%22%3A%22equals%22%2C%22value%22%3A%22Jessie%20Therapist%22%7D%5D';

    let cursor = 0;
    let hasMore = true;
    let posts = [];

    while (hasMore) {
        apiCallCount++;
        console.log(`API Call #${apiCallCount}`);
        
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

    console.log('Total API calls:', apiCallCount);
    console.log('Total posts fetched:', posts.length);

    allPostsStore.set(posts);
    cachedPosts = posts;
    console.log('Finished fetching posts.');
    return posts;
}

export async function load({ fetch }) {
    const posts = await populateStore(fetch);
    return { allPosts: posts };
}