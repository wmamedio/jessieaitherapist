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