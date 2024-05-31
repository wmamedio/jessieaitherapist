<script>
    export let data;
</script>

<style>
    .post {
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 8px;
    }
    .post img {
        max-width: 100%;
        height: auto;
    }
</style>

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
            <img class="w-full h-48 object-cover" src={"https:" + post.image_image} alt={post.title_text} />
            <div class="p-6">
                <h2 class="text-xl font-semibold mb-2">{post.title_text}</h2>
                <p class="text-gray-700 mb-2"><strong>Author:</strong> {post.author_name_text}</p>
                <p class="text-gray-500 mb-4"><strong>Bio:</strong> {post.author_bio_text}</p>
                <p class="text-gray-700 mb-4">{post.content_text}</p>
                <a href={`/blog/${post.title_text.toLowerCase().replace(/\s+/g, '-')}`}>Read More</a>
            </div>
        </div>
        {/each}
    </div>
    {/if}
</div>
