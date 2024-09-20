<script>
    import Footer from './Footer.svelte';
    import RandomPostSuggestions from '../RandomPostSuggestions.svelte';
    import { slugify } from '$lib/slugify'
    
    export let data;
</script>

<svelte:head>
    {#if data.post}
        <meta name="description" content={"Read " + data.post.title_text + ". Gain insights on mental health, self-care, and therapy to enhance your well-being."}>
        <title>{data.post.title_text} - Jessie Online Therapy</title>
    {:else}
        <meta name="description" content="Explore expert mental health advice and therapy insights.">
        <title>Blog Post - Jessie Online Therapy</title>
    {/if}
</svelte:head>

<div class="p-8 pb-0 mt-16 flex justify-center">
    <div class="w-full max-w-4xl">
        {#if data.post}
        <article class="prose lg:prose-2xl mx-auto">
            <div class="bg-white rounded-lg overflow-hidden post">
                {#if data.post.image_image}
                <img class="w-full h-64 lg:h-[32rem] object-cover object-top rounded-2xl" src={"https:" + data.post.image_image} alt={data.post.title_text} />
                {/if}
                <div>
                    <a href="/blog" class="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block">← All Posts</a>
                    <div class="prose max-w-none mb-8">{@html data.post.content_text}</div>
                </div>
            </div>
        </article>
        {:else}
        <p>Post not found or still loading...</p>
        {/if}
        <RandomPostSuggestions posts={data.allPosts} currentPostSlug={slugify(data.post.title_text)} />
    </div>
</div>

<Footer />