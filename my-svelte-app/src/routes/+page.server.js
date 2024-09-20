import { apiUrlOnlineTherapy } from '../lib/config.js';
import { slugify } from '$lib/slugify';

export const load = async ({ fetch }) => {

    let postsData = { posts: [] };
    let error = null;

    try {
        const response = await fetch(apiUrlOnlineTherapy);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const result = await response.json();
        const filteredPosts = result.response.results
            .filter(post => post.title_text.toLowerCase().startsWith('online therapy'))
            .map(post => ({
                ...post,
                slug: slugify(post.title_text)
            }));
        postsData.posts = filteredPosts.slice(0, 30);
    } catch (err) {
        error = err.message;
    }

    return {
        postsData,
        error
    };
};