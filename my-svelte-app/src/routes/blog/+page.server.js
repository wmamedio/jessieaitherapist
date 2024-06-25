export const prerender = true;

export async function load({ fetch }) {
  try {
    const response = await fetch('https://simplifying.bubbleapps.io/version-test/api/1.1/obj/jtblogpost');
    const data = await response.json();
    if (data.response.results.length > 0) {
      return { posts: data.response.results };
    } else {
      throw new Error('Failed to fetch posts or no posts available');
    }
  } catch (err) {
    return {
      status: 500,
      error: new Error('Could not load posts: ' + err.message)
    };
  }
}
