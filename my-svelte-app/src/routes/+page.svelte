<script>
  import AboutUs from './AboutUs.svelte';

  import Footer from './Footer.svelte';

  import FAQs from './FAQs.svelte';

  import CTA from './CTA.svelte';

  import Pricing from './Pricing.svelte';

  import CBT from './CBT.svelte';

    import BlogPosts from './BlogPosts.svelte';
    import Features from './Features.svelte';
    import Header from './Header.svelte';
    import Hero from './Hero.svelte';
    import HowItWorks from './HowItWorks.svelte';
    import Testimonials from './Testimonials.svelte';
    import TherapyAssistant from './TherapyAssistant.svelte';
    
    let annualPricing = true;
    let postsData = { posts: [] };
    let loading = true;
    let error = null;
    
    let faqs = [
    {
        question: "How does Jessie Therapist AI work?",
        answer: "Jessie Therapist AI uses advanced AI technology to provide personalized therapy sessions. It helps you set goals, track progress, and offers techniques and strategies to manage your mental health effectively.",
        open: false
    },
    {
        question: "Is my data safe with Jessie Therapist AI?",
        answer: "Yes, your data is completely safe. We use state-of-the-art encryption and security measures to ensure your privacy and confidentiality.",
        open: false
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Absolutely. You can cancel your subscription at any time with no penalties. Simply go to your account settings and follow the cancellation instructions.",
        open: false
    },
    {
        question: "What if I'm not satisfied with the service?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied with Jessie Therapist AI within the first 30 days, we will provide a full refund.",
        open: false
    },
    {
        question: "How do I get started with Jessie Therapist AI?",
        answer: "Getting started is easy. Sign up, create your profile, and begin your first session. Jessie will guide you through the process and help you set up your personalized therapy plan.",
        open: false
    }
    ];
    
    function toggleMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
    
    function toggle(index) {
        faqs = faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        });
    }
</script>


<svelte:head>
<meta name="description" content="Discover Jessie Therapist AI for virtual therapy and mental health support. Get confidential online counseling and personalized therapy sessions to boost your well-being. Start your journey today!">
<title>Jessie - AI Online Therapy Assistant</title>
</svelte:head>

<div class="bg-white">
    
    <Header/>
    <Hero/>
    <TherapyAssistant/>
    <Features/>
    <HowItWorks/>
    <Testimonials/>
    <CBT/>
    <BlogPosts/>
    
    
    
<Pricing></Pricing>
<AboutUs></AboutUs>    
<CTA></CTA>    
<FAQs></FAQs>    
<Footer></Footer>    

</div>