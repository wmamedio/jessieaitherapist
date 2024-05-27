<script>
  import "../app.css";
</script>


<svelte:head>
<!-- Meta tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Jessie AI Therapist - Helping you set meaningful goals and overcome your fears.">

<!-- Title -->
<title>Jessie AI Therapist - Online Therapy</title>

<!-- Favicon -->
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