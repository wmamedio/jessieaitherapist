export const prerender = true;

export async function load({ params, fetch }) {
    const { name } = params;
    const apiUrl = 'https://simplifying.bubbleapps.io/version-test/api/1.1/obj/jtblogpost';

    let allPosts = [];
    let cursor = 0;
    let hasMore = true;

    while (hasMore) {
        const response = await fetch(`${apiUrl}?limit=100&cursor=${cursor}`);
        const data = await response.json();

        if (data.response.results.length > 0) {
            allPosts = allPosts.concat(data.response.results);
            cursor = data.response.cursor + data.response.results.length;
            hasMore = data.response.remaining > 0;
        } else {
            hasMore = false;
        }
    }

    if (allPosts.length > 0) {
        const post = allPosts.find(post => post.title_text.toLowerCase().replace(/:/g, '').replace(/\s+/g, '-') === name);
        if (post) {
            return { post };
        } else {
            throw new Error('Post not found');
        }
    } else {
        throw new Error('Failed to fetch posts');
    }
}
