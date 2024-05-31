export async function load({ params, fetch }) {
    const { name } = params;
    const response = await fetch('https://simplifying.bubbleapps.io/version-test/api/1.1/wf/posts');
    const data = await response.json();
    
    if (data.status === 'success') {
        const post = data.response.post.find(post => post.title_text.toLowerCase().replace(/\s+/g, '-') === name);
        if (post) {
            return { post };
        } else {
            throw new Error('Post not found');
        }
    } else {
        throw new Error('Failed to fetch posts');
    }
}
