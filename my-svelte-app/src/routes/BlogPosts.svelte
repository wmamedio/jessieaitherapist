<script>
    import { onMount } from 'svelte';

    const apiUrl = 'https://simplifying.bubbleapps.io/version-test/api/1.1/obj/jtblogpost';
    let postsData = { posts: [] };
    let loading = true;
    let error = null;

    async function loadPosts() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const result = await response.json();
            postsData.posts = result.response.results.slice(0, 9); // Update based on the response structure
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }
    }

    onMount(() => {
        const section = document.getElementById('latest-blog-posts');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadPosts();
                    observer.unobserve(section);
                }
            });
        }, {
            rootMargin: '0px 0px 600px 0px' // Adjust this margin as needed
        });

        observer.observe(section);
    });
</script>

<section id="latest-blog-posts" class="bg-white py-24 sm:py-32">
    <div class="max-w-6xl mx-auto px-16">
        <div>
            <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Explore Our Latest Blog Posts
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
                Stay informed and empowered with our latest articles on mental health, therapy, and self-improvement. Our blog provides valuable insights, tips, and resources to help you on your journey to better mental health.
            </p>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
            {#if loading}
            <p class="text-gray-600">Loading posts...</p>
            {:else if error}
            <p class="text-red-600">{error}</p>
            {:else if postsData.posts && postsData.posts.length > 0}
            {#each postsData.posts as post}
            <a class="text-xl font-semibold mb-2" href={`/blog/${post.title_text.toLowerCase().replace(/:/g, '').replace(/\s+/g, '-')}`}>
                <div class="group/card">
                    {#if post.image_image}
                    <img src={post.image_image} alt={post.title_text} class="w-full h-48 object-cover mb-4 rounded-lg shadow-sm shadow-gray-100  group-hover/card:shadow-gray-300">
                    {/if}
                    <h3 class="text-lg font-medium text-gray-600 group-hover/card:text-gray-900">{post.title_text}</h3>
                </div>
            </a>
            {/each}
            {:else}
            <p class="text-gray-600">No posts available</p>
            {/if}
        </div>
        <div class="mt-12 text-right">
            <a href="/blog" class="text-sm font-semibold leading-6 text-gray-900" style="scroll-behavior: smooth;">See More Posts<span aria-hidden="true">→</span></a>
        </div>
    </div>
</section>
