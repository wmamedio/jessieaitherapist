<script>
    export let data;
</script>

<div class="p-8 flex justify-center">
    <div class="w-full max-w-2xl">
        <div class="mb-4">
            <a href="/blog" class="text-sm font-semibold leading-6 text-gray-900">Go Back</a>
        </div>
        
        <div class="bg-white rounded-lg shadow-lg overflow-hidden post">
            {#if data.post.image_image}
                <img class="w-full h-48 object-cover" src={"https:" + data.post.image_image} alt={data.post.title_text} />
            {/if}
            <div class="p-6">
                <div class="prose max-w-none mb-8">{@html data.post.content_text}</div>
                <p class="text-gray-700 mb-2"><strong>Author:</strong> {data.post.author_name_text}</p>
                <p class="text-gray-700"><strong>Bio:</strong> {data.post.author_bio_text}</p>
            </div>
        </div>
    </div>
</div>
