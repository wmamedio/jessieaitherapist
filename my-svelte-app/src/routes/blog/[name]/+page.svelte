<script>
    export let data;
    import Footer from './Footer.svelte';
</script>

<svelte:head>
<meta name="description" content={"Read " + data.post.title_text + ". Gain insights on mental health, self-care, and therapy to enhance your well-being."}>
<title>{data.post.title_text} - Jessie Online Therapy</title>
</svelte:head>

<div class="p-8 pb-0 flex justify-center">
    <div class="w-full max-w-2xl">
        <div>
            <a href="/blog" class="text-gray-900 text-sm font-medium">&lt; See All Posts</a>
        </div>
        
        <article class="prose lg:prose-xl mx-auto">
            <div class="bg-white rounded-lg overflow-hidden post">
                {#if data.post.image_image}
                <img class="w-full h-96 object-cover object-top rounded-2xl" src={"https:" + data.post.image_image} alt={data.post.title_text} />
                {/if}
                <div class="pt-6">
                    <div class="prose max-w-none mb-8">{@html data.post.content_text}</div>
                    {#if data.post.author_name_text}
                    <p class="text-gray-700 text-base"><strong>Author:</strong> {data.post.author_name_text}</p>
                    {/if}
                    {#if data.post.author_bio_text}
                    <p class="text-gray-700 text-base"><strong>Bio:</strong> {data.post.author_bio_text}</p>
                    {/if}
                </div>
            </div>
        </article>
    </div>
</div>

<Footer />  