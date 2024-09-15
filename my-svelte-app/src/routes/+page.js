// import { apiUrl } from '../lib/config.js';

// export const load = async ({ fetch }) => {
//     let postsData = { posts: [] };
//     let error = null;

//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Failed to fetch posts');
//         }
//         const result = await response.json();
//         const filteredPosts = result.response.results.filter(post => post.title_text.toLowerCase().startsWith('online therapy'));
//         const multipleOfThree = Math.floor(filteredPosts.length / 3) * 3; // Get the largest multiple of 3
//         postsData.posts = filteredPosts.slice(0, multipleOfThree); // Slice to ensure a multiple of 3
//     } catch (err) {
//         error = err.message;
//     }

//     return {
//         postsData,
//         error
//     };
// };
