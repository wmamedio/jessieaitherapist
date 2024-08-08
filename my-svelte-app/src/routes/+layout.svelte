<script context="module">
    export async function load({ fetch }) {
        const apiUrl = 'https://simplifying.bubbleapps.io/version-test/api/1.1/obj/jtblogpost';
        
        let cursor = 0;
        let hasMore = true;
        let posts = [];
        
        try {
            while (hasMore) {
                const response = await fetch(`${apiUrl}?limit=100&cursor=${cursor}`);
                const data = await response.json();
                
                if (data.response.results.length > 0) {
                    posts = posts.concat(data.response.results);
                    cursor = cursor + data.response.results.length;
                    hasMore = data.response.remaining > 0;
                } else {
                    hasMore = false;
                }
            }
            
            if (posts.length === 0) {
                throw new Error('No posts available');
            }
            
            return { allPosts: posts };
        } catch (error) {
            console.error('Failed to fetch posts:', error);
            throw new Error('Failed to fetch posts or no posts available');
        }
    }
</script>

<script>
    import "../app.css";
    import { onMount } from 'svelte';
    
    onMount(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    });
</script>

<svelte:head>
<link rel="icon" href="/favicon.ico">

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1N106JM0M8"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1N106JM0M8');
</script>
</svelte:head>

<slot />
