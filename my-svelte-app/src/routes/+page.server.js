import { apiUrlOnlineTherapy } from '../lib/config.js';

export const load = async ({ fetch }) => {

    let postsData = { posts: [] };
    let error = null;

    try {
        const response = await fetch(apiUrlOnlineTherapy);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const result = await response.json();
        const filteredPosts = result.response.results.filter(post => post.title_text.toLowerCase().startsWith('online therapy'));
        postsData.posts = filteredPosts.slice(0, 30); // Slice to ensure a multiple of 3
    } catch (err) {
        error = err.message;
    }

    return {
        postsData,
        error
    };
};