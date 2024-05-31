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
        <a href="/blog" class="text-sm font-semibold leading-6 text-gray-900">Go Back</a>
    </div>
    
    <div class="bg-white rounded-lg shadow-lg overflow-hidden post">
        <img class="w-full h-48 object-cover" src={"https:" + data.post.image_image} alt={data.post.title_text} />
        <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{data.post.title_text}</h2>
            <p class="text-gray-700 mb-2"><strong>Author:</strong> {data.post.author_name_text}</p>
            <p class="text-gray-500 mb-4"><strong>Bio:</strong> {data.post.author_bio_text}</p>
            <p class="text-gray-700">{data.post.content_text}</p>
        </div>
    </div>
</div>
