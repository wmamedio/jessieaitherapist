import { allPostsStore } from '../lib/stores';
import { apiUrl } from '../lib/config.js';

let apiCallCount = 0;
let cachedPosts = null;

export const prerender = true;

async function populateStore(fetch) {
    if (cachedPosts) {
        // console.log('Using cached posts');
        return cachedPosts;
    }

    console.log('Starting to fetch posts...');

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