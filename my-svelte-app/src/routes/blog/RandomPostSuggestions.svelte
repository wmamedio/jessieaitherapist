<script>
    import { lazyLoad } from '$lib/lazyLoad.js';
    import { slugify } from '$lib/slugify';
    export let posts = [];
    export let currentPostSlug = '';
    
    // Filter out the current post and get 3 random posts
    $: randomPosts = posts
        .filter(post => slugify(post.title_text) !== currentPostSlug)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
</script>

<div class="mt-16">
    <h2 class="text-2xl font-bold mb-8">You might also like:</h2>
    <div class="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
        {#each randomPosts as post}
        <a href={`/blog/${slugify(post.title_text)}`} class="group">
            <article class="flex flex-col items-start h-full">
                <div class="relative w-full">
                    {#if post.image_image}
                    <img use:lazyLoad 
                    class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] lazy" 
                    data-src={"https:" + post.image_image} 
                    alt={post.title_text} />
                    {/if}
                </div>
                <div class="max-w-xl flex-grow">
                    <div class="relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            {post.title_text}
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                            {#if post.content_text}
                            {@html post.content_text.replace(/<[^>]*>/g, '').slice(0, 150)}...
                            {:else}
                            No content available
                            {/if}
                        </p>
                    </div>
                </div>
            </article>
        </a>
        {/each}
    </div>
</div>