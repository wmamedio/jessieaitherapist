<script>
    import AboutUs from './AboutUs.svelte';
    import BlogPosts from './BlogPosts.svelte';
    import CBT from './CBT.svelte';
    import CTA from './CTA.svelte';
    import FAQs from './FAQs.svelte';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import Hero from './Hero.svelte';
    import Pricing from './Pricing.svelte';
    import Testimonials from './Testimonials.svelte';
    import TherapyAssistant from './WhyJessie.svelte';
    // import Features from './Features.svelte';
    // import HowItWorks from './HowItWorks.svelte';
</script>

<svelte:head>
<meta name="description" content="Discover Jessie Therapist for virtual therapy and mental health support. Get confidential online counseling and personalized therapy sessions to boost your well-being. Start your journey today!">
<title>Jessie - Online Therapy</title>
</svelte:head>


<Header/>
<Hero/>
<TherapyAssistant/>
<!-- <Features/> -->
<!-- <HowItWorks/> -->
<Testimonials/>
<CBT/>
<BlogPosts/>
<Pricing/>
<AboutUs/>
<CTA/>
<FAQs/>
<Footer/>