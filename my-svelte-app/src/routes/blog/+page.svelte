<script>
    export let data;
    import { lazyLoad } from '$lib/lazyLoad.js';
</script>

<svelte:head>
<meta name="description" content={"Explore the Jessie Therapist AI blog for expert mental health advice, self-care tips, and the latest updates on AI therapy. Empower yourself with knowledge and improve your well-being today!"}>
<title>Jessie Therapist Blog - Online Therapy AI</title>
</svelte:head>


<div class="p-8">
    <div class="mb-4">
        <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Go Back</a>
    </div>
    
    {#if data.posts.length === 0}
    <p>No posts available.</p>
    {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each data.posts as post}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden post">
            {#if post.image_image}
            <img use:lazyLoad class="w-full h-48 object-cover lazy" data-src={"https:" + post.image_image} alt={post.title_text} />
            {/if}
            <div class="p-6">
                <a class="text-xl font-semibold mb-2" href={`/blog/${post.title_text.toLowerCase().replace(/\s+/g, '-')}`}>{post.title_text}</a>
                <!-- <p class="text-gray-700 mb-2"><strong>Author:</strong> {post.author_name_text}</p>
                    <p class="text-gray-500 mb-4"><strong>Bio:</strong> {post.author_bio_text}</p> -->
            </div>
        </div>
        {/each}
    </div>
    {/if}
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