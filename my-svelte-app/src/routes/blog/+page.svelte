<script>
    import { lazyLoad } from '$lib/lazyLoad.js';
    export let data;
</script>

<svelte:head>
    <meta name="description" content="Explore expert mental health advice, self-care tips, and the latest updates on therapy.">
    <title>Jessie Online Therapy Blog</title>
</svelte:head>

<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Online Therapy Insights, Mental Health Tips, and Self-Care Advice</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">Discover valuable insights and tips to improve your mental well-being.</p>
        </div>
        {#if !data.posts || data.posts.length === 0}
        <p class="mt-16 text-center text-gray-500 text-xl">No posts available.</p>
        {:else}
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {#each data.posts as post}
            <a href={`/blog/${post.title_text.toLowerCase().replace(/:/g, '').replace(/\s+/g, '-')}`} class="group">
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
        {/if}
    </div>
</div>

<style>
    .lazy {
        opacity: 0;
        transition: opacity 0.5s;
    }
    
    img:not(.lazy) {
        opacity: 1;
    }
</style>