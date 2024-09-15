import { allPostsStore } from './stores.js';
import { get } from 'svelte/store';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

// ... rest of the code ...

async function generateSitemap() {
    console.log('Starting sitemap generation...');
    const allPosts = get(allPostsStore);
    
    if (!allPosts || allPosts.length === 0) {
        console.log('No posts in store, fetching posts...');
        // If the store is empty, fetch the posts
        await fetchAllPosts();
    } else {
        console.log(`Using ${allPosts.length} posts from store for sitemap generation`);
    }

    // ... rest of the sitemap generation code ...
}

// ... rest of the code ...