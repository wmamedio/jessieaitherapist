export const load = async ({ fetch }) => {
    const apiUrl = 'https://simplifying.bubbleapps.io/version-test/api/1.1/obj/blogpost?constraints=%5B%7B%22key%22%3A%22website_option_blog_post_type%22%2C%22constraint_type%22%3A%22equals%22%2C%22value%22%3A%22Jessie%20Therapist%22%7D%2C%7B%22key%22%3A%22title_text%22%2C%22constraint_type%22%3A%22text%20contains%22%2C%22value%22%3A%22Online%20Therapy%22%7D%5D';
    let postsData = { posts: [] };
    let error = null;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const result = await response.json();
        const filteredPosts = result.response.results.filter(post => post.title_text.toLowerCase().startsWith('online therapy'));
        const multipleOfThree = Math.floor(filteredPosts.length / 3) * 3; // Get the largest multiple of 3
        postsData.posts = filteredPosts.slice(0, multipleOfThree); // Slice to ensure a multiple of 3
    } catch (err) {
        error = err.message;
    }

    return {
        postsData,
        error
    };
};