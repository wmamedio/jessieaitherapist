export const prerender = true;

export async function load({ fetch }) {
  try {
    const apiUrl = 'https://simplifying.bubbleapps.io/version-test/api/1.1/obj/jtblogpost';

    let allPosts = [];
    let cursor = 0;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(`${apiUrl}?limit=100&cursor=${cursor}`);
      const data = await response.json();

      if (data.response.results.length > 0) {
        allPosts = allPosts.concat(data.response.results);
        // Update cursor to the next page's start point
        cursor = cursor + data.response.results.length;
        hasMore = data.response.remaining > 0;
      } else {
        hasMore = false;
      }
    }

    if (allPosts.length > 0) {
      return { posts: allPosts };
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
