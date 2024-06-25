export const prerender = true;

export async function load({ params, fetch }) {
    const { name } = params;
    const response = await fetch('https://simplifying.bubbleapps.io/version-test/api/1.1/obj/jtblogpost');
    const data = await response.json();
    
    if (data.response.results.length > 0) {
        const post = data.response.results.find(post => post.title_text.toLowerCase().replace(/:/g, '').replace(/\s+/g, '-') === name);
        if (post) {
            return { post };
        } else {
            throw new Error('Post not found');
        }
    } else {
        throw new Error('Failed to fetch posts');
    }
}
