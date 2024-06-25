<script>
    import { onMount } from 'svelte';
	import BlogPosts from './BlogPosts.svelte';
    
    let mobileMenuOpen = false;
    let annualPricing = true;
    let postsData = { posts: [] };
    let loading = true;
    let error = null;
    
    const navigation = [
    { name: 'Product', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Marketplace', href: '/' },
    { name: 'Company', href: '/' },
    ];
    
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
    
    <!-- Header/Menu -->
    
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Jessie AI Therapy Assistant</span>
                    <img class="stripe-link h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" on:click={toggleMenu}>
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="https://buy.stripe.com/9AQ16KfIJ9g89C84gj" class="stripe-link text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
        {#if mobileMenuOpen}
        <div class="lg:hidden fixed inset-0 z-50">
            <div class="fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Jessie AI Therapy Assistant</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={toggleMenu}>
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="py-6">
                            <a href="https://buy.stripe.com/9AQ16KfIJ9g89C84gj" class="stripe-link -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/if}
    </header>
    
    <!-- Section 1: Hero -->
    
    <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[/ff80b5] to-[/9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-900 sm:text-6xl" style="line-height: 1.1;">I'm Jessie!<br/>Your AI Therapy Assistant.</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">Hi there! Whether you're feeling overwhelmed, anxious, or need someone to talk to, I'm here to help.</p>
                <p class="text-lg leading-8 text-gray-600">I'll support you between therapy sessions, helping you set goals, tackle challenges, and build healthy habits.</p>
                <p class="text-lg leading-8 text-gray-600">Stay on track and make the most of your next appointment.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="https://buy.stripe.com/9AQ16KfIJ9g89C84gj" class="stripe-link rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                    <a href="/blog" class="text-sm font-semibold leading-6 text-gray-900">Learn more<span aria-hidden="true">→</span></a> 
                </div>
            </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[/ff80b5] to-[/9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
    </div>
</div>  

<!-- Section 2: Your Personal Online Therapist -->


<section class="bg-gray-900 py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-400">Welcome to Jessie AI Therapy Assistant</h2>
            <p class="mt-2 text-3xl font-bold text-white sm:text-4xl">Your Personal Online Therapist</p>
            <p class="mt-6 text-lg leading-8 text-gray-300">Are you struggling with stress, anxiety, or just need someone to talk to? Jessie Therapist AI is here to support you. As your personal online therapist, Jessie is designed to help you navigate life's challenges and achieve your mental health goals. With Jessie, you have access to a supportive and understanding companion who is available anytime, anywhere.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                        <svg iconname="shield-check.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Personalized Support
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">
                        Tailored sessions to meet your unique needs and goals.
                    </dd>
                </div>
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                        <svg iconname="lock-closed.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Confidential and Secure
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">
                        Your privacy is our top priority. Enjoy safe and secure therapy sessions from the comfort of your home.
                    </dd>
                </div>
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                        <svg iconname="clock.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        24/7 Availability
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">
                        Get support whenever you need it. Jessie is here for you around the clock.
                    </dd>
                </div>
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                        <svg iconname="flag.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Goal Setting and Tracking
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">
                        Define your dreams, set clear objectives, and build productive habits with guided support.
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</section>

<!-- Section 3: Features -->

<section class="bg-gray-50 py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">Explore the Powerful Features</h2>
            <p class="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Jessie Therapist AI</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Discover a range of features designed to provide personalized, secure, and accessible therapy sessions.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg iconname="user.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Personalized Therapy Sessions
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        Receive tailored therapy sessions designed specifically for your unique needs and personal goals. Experience a therapy approach that adapts to your progress and evolves with you, ensuring the best support.
                    </dd>
                </div>
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg iconname="lock-closed.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Confidential and Secure
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        Your privacy and security are our top priorities. All sessions are encrypted and completely confidential. Feel safe and secure knowing your personal information and conversations are protected.
                    </dd>
                </div>
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg iconname="clock.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        24/7 Accessibility
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        Access Jessie Therapist AI anytime, anywhere. Get the support you need when it fits your schedule. Enjoy the flexibility of having a virtual therapist available around the clock, no matter where you are.
                    </dd>
                </div>
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg iconname="flag.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Goal Setting and Progress Tracking
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        Set clear goals and track your progress over time. Jessie helps you stay focused and motivated. Achieve your dreams with structured guidance and continuous feedback, ensuring you stay on the right path.
                    </dd>
                </div>
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg iconname="chat.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Interactive and Engaging
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        Engage in interactive sessions that keep you involved and committed. Jessie uses dynamic techniques to keep the process interesting. Stay motivated and engaged with therapy that feels more like a conversation than a clinical session.
                    </dd>
                </div>
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <!-- <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg iconname="academic-cap.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Evidence-Based Techniques
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        Jessie utilizes proven, evidence-based therapeutic techniques to ensure effective outcomes. Benefit from methods that are backed by research and have been shown to improve mental health and well-being.
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</section>


<!-- Section 4: How It Works -->

<section class="bg-gray-900 py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                How Jessie Therapist AI Works
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">
                Discover how easy it is to start your mental health journey with Jessie Therapist AI. Follow these simple steps to begin receiving personalized support.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <!-- <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500">
                        <svg iconname="user-add.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Sign Up and Create Your Profile
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">
                        Start by creating an account and filling out a brief profile about yourself and your mental health goals.
                        <br><br>
                        This helps Jessie personalize your therapy sessions to better meet your unique needs.
                    </dd>
                </div>
                
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <!-- <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500">
                        <svg iconname="chat-alt-2.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Begin Your First Session
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">
                        Once your profile is set up, you can start your first therapy session with Jessie. Answer some initial questions to help Jessie understand your current state of mind.
                        <br><br>
                        This initial assessment ensures that the support you receive is tailored to your immediate needs.
                    </dd>
                </div>
                
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <!-- <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500">
                        <svg iconname="flag.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Set Goals and Track Progress
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">
                        Together with Jessie, set clear, achievable goals for your mental health journey. Jessie will help you track your progress and adjust your goals as needed.
                        <br><br>
                        Stay motivated and see your improvements over time with structured goal setting and progress tracking.
                    </dd>
                </div>
                
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <!-- <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500">
                        <svg iconname="clipboard-check.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Receive Personalized Therapy Sessions
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">
                        Engage in interactive therapy sessions designed to address your specific concerns and objectives. Jessie uses evidence-based techniques to provide effective support.
                        <br><br>
                        Enjoy therapy sessions that are customized to your needs, ensuring you get the most out of each session.
                    </dd>
                </div>
                
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <!-- <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500">
                        <svg iconname="device-mobile.svg" class="h-6 w-6 text-white"></svg>
                        </div> -->
                        Access Anytime, Anywhere
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">
                        Jessie is available 24/7, so you can access your therapy sessions whenever you need them, from any device.
                        <br><br>
                        Get support on your schedule, whether you're at home, at work, or on the go.
                    </dd>
                </div>
                
            </dl>
        </div>
    </div>
</section>


<!-- Section 5: What Users Say -->

<section class="bg-white py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What Our Users Say
            </h2>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:mt-24 lg:max-w-4xl lg:grid-cols-3">
            <!-- Testimonial 1 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <div class="flex items-center">
                    <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Martinez">
                    <div class="ml-4">
                        <p class="text-lg font-medium text-gray-900">Alex Martinez</p>
                        <p class="text-yellow-400">★★★★★</p>
                    </div>
                </div>
                <p class="mt-4 text-gray-600">"Jessie Therapist AI has been a game-changer for my mental health. The personalized sessions and goal tracking have helped me immensely. I feel more in control of my life and my emotions."</p>
            </div>
            
            <!-- Testimonial 2 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <div class="flex items-center">
                    <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Thompson">
                    <div class="ml-4">
                        <p class="text-lg font-medium text-gray-900">Sarah Thompson</p>
                        <p class="text-yellow-400">★★★★★</p>
                    </div>
                </div>
                <p class="mt-4 text-gray-600">"I love how I can access therapy anytime I need it. Jessie makes it so easy to stay on track with my mental health goals. The flexibility and support are unparalleled."</p>
            </div>
            
            <!-- Testimonial 3 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <div class="flex items-center">
                    <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/65.jpg" alt="David Lee">
                    <div class="ml-4">
                        <p class="text-lg font-medium text-gray-900">David Lee</p>
                        <p class="text-yellow-400">★★★★☆</p>
                    </div>
                </div>
                <p class="mt-4 text-gray-600">"Jessie Therapist AI offers a unique and effective approach to therapy. The sessions are interactive and engaging, and I've seen a significant improvement in my anxiety levels."</p>
            </div>
            
            <!-- Testimonial 4 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <div class="flex items-center">
                    <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Richards">
                    <div class="ml-4">
                        <p class="text-lg font-medium text-gray-900">Emily Richards</p>
                        <p class="text-yellow-400">★★★★★</p>
                    </div>
                </div>
                <p class="mt-4 text-gray-600">"I was skeptical at first, but Jessie has exceeded my expectations. The confidentiality and security of the platform give me peace of mind, and the therapy sessions are truly personalized."</p>
            </div>
            
            <!-- Testimonial 5 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <div class="flex items-center">
                    <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="Michael Johnson">
                    <div class="ml-4">
                        <p class="text-lg font-medium text-gray-900">Michael Johnson</p>
                        <p class="text-yellow-400">★★★★★</p>
                    </div>
                </div>
                <p class="mt-4 text-gray-600">"Using Jessie Therapist AI has been an amazing experience. The sessions are always available when I need them, and I’ve made significant progress in managing my stress and anxiety."</p>
            </div>
            
            <!-- Testimonial 6 -->
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <div class="flex items-center">
                    <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/85.jpg" alt="Olivia Brown">
                    <div class="ml-4">
                        <p class="text-lg font-medium text-gray-900">Olivia Brown</p>
                        <p class="text-yellow-400">★★★★★</p>
                    </div>
                </div>
                <p class="mt-4 text-gray-600">"Jessie Therapist AI has provided me with the support and guidance I needed during a tough time. The interactive sessions are engaging, and I always feel better after using it."</p>
            </div>
        </div>
        <p class="mt-16 text-center text-sm text-gray-500">
            Note: To maintain confidentiality and protect our users' privacy, we have changed the names and photos in these testimonials.
        </p>      
    </div>
</section>


<!-- Section 6: Benefits of CBT -->

<section class="bg-gray-900 py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-4xl font-extrabold text-indigo-400 sm:text-5xl">
                The Benefits of Cognitive Behavioral Therapy (CBT)
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-400">
                Cognitive Behavioral Therapy (CBT) is a highly effective, evidence-based form of psychotherapy that focuses on identifying and changing negative thought patterns and behaviors. It is widely used to treat a variety of mental health conditions, including anxiety, depression, stress, and more.
            </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:mt-24 lg:max-w-5xl lg:grid-cols-3 lg:gap-y-16">
            <!-- Benefits of CBT -->
            <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-indigo-300">Benefits of CBT</h3>
                <ul class="mt-4 text-gray-400 space-y-4">
                    <li><strong>Effective for Multiple Conditions:</strong> CBT is proven to be effective in treating a wide range of mental health issues.</li>
                    <li><strong>Skill Development:</strong> Helps you develop practical skills to manage stress, anxiety, and other challenges.</li>
                    <li><strong>Short-Term Treatment:</strong> Often provides significant results in a relatively short period.</li>
                    <li><strong>Empowering:</strong> Empowers you to take control of your thoughts and behaviors, leading to long-term improvements.</li>
                </ul>
            </div>
            
            <!-- Why It’s Used -->
            <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-indigo-300">Why It’s Used</h3>
                <p class="mt-4 text-gray-400">
                    CBT is used because it is structured, goal-oriented, and focuses on the present. It helps individuals understand the connection between their thoughts, feelings, and behaviors, and teaches them how to modify unhelpful patterns.
                </p>
            </div>
            
            <!-- Research and Statistics Supporting CBT -->
            <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-indigo-300">Research and Statistics Supporting CBT</h3>
                <ul class="mt-4 text-gray-400 space-y-4">
                    <li><strong>Proven Effectiveness:</strong> Studies show that CBT is as effective as, or more effective than, other forms of psychological therapy or psychiatric medications.</li>
                    <li><strong>High Success Rate:</strong> Approximately 60-80% of individuals who complete CBT experience significant improvements in their symptoms.</li>
                    <li><strong>Long-Lasting Results:</strong> Research indicates that the benefits of CBT are long-lasting and can prevent relapse.</li>
                </ul>
            </div>
        </div>
    </div>
</section>


<!-- Section 7: Explore Our Latest Blog Posts -->

<BlogPosts/>



<!-- Section 8: Pricing Plans -->

<section class="bg-gray-900 py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
                Pricing plans for all needs
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-400">
                Find the perfect plan that suits your needs and budget. Our pricing is simple and transparent, offering you the best value for comprehensive mental health support. Start your journey with Jessie Therapist AI today and enjoy a special offer on our plans.
            </p>
            <div class="mt-6 flex justify-center">
                <div class="relative inline-flex self-center">
                    <button class="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" on:click={() => annualPricing = false}>
                        Monthly
                    </button>
                    <button class="relative -ml-px inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded-r-md hover:bg-indigo-500 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" on:click={() => annualPricing = true}>
                        Annually
                    </button>
                </div>
            </div>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            <!-- Basic Plan -->
            <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-white">Basic Plan</h3>
                {#if annualPricing}
                <p class="mt-4 text-gray-400"><span class="text-2xl font-extrabold text-white">$19</span>/month</p>
                <p class="text-gray-400 text-xs">(billed annually)</p>
                {:else}
                <p class="mt-4 text-gray-400"><span class="text-2xl font-extrabold text-white">$29</span>/month</p>
                {/if}
                <ul class="mt-4 text-gray-400 space-y-2">
                    <li>Personalized Therapy Sessions</li>
                    <li>24/7 Access</li>
                    <li>Goal Setting and Tracking</li>
                </ul>
                <p class="mt-6">
                    <a href="https://buy.stripe.com/9AQ16KfIJ9g89C84gj" class="stripe-link inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign Up Now
                    </a>              
                </p>
            </div>
            
            <!-- Premium Plan -->
            <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-white">Premium Plan</h3>
                {#if annualPricing}
                <p class="mt-4 text-gray-400"><span class="text-2xl font-extrabold text-white">$39</span>/month</p>
                <p class="text-gray-400 text-xs">(billed annually)</p>
                {:else}
                <p class="mt-4 text-gray-400"><span class="text-2xl font-extrabold text-white">$49</span>/month</p>
                {/if}
                <ul class="mt-4 text-gray-400 space-y-2">
                    <li>All Basic Features</li>
                    <li>Priority Support</li>
                    <li>Additional Resources and Tools</li>
                </ul>
                <p class="mt-6">
                    <a href="https://buy.stripe.com/9AQ16KfIJ9g89C84gj" class="stripe-link inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign Up Now
                    </a>              
                </p>
            </div>
            
            <!-- Enterprise Plan -->
            <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-white">Enterprise Plan</h3>
                <p class="mt-4 text-gray-400">Contact us for a quote and to discuss how we can customize a plan to meet your organization's needs.</p>
                <ul class="mt-4 text-gray-400 space-y-2">
                    <li>All Premium Features</li>
                    <li>Customized Support</li>
                    <li>Team Management Tools</li>
                    <li>Advanced Analytics</li>
                </ul>
                <p class="mt-6">
                    <a href="/contact" class="stripe-link inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Contact Us
                    </a>
                </p>
            </div>
        </div>
        
        <div class="mt-10 text-center">
            <p class="text-gray-400">Try Jessie Therapist AI risk-free. If you're not satisfied within the first 30 days, we offer a full money-back guarantee.</p>
        </div>
    </div>
</section>

<!-- Section 10: About Us -->

<section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
            <p class="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Learn more about Jessie Therapist AI</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">We are dedicated to providing accessible mental health support to everyone.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <!-- Company History -->
                <div class="relative pl-16">
                    <dd class="mt-2 text-base leading-7 text-gray-600">Jessie Therapist AI was founded with the vision of making high-quality mental health support accessible to everyone. Our team of experts has worked tirelessly to develop a platform that combines advanced AI technology with proven therapeutic techniques.</dd>
                </div>
                
                <!-- Mission Statement -->
                <div class="relative pl-16">
                    <dd class="mt-2 text-base leading-7 text-gray-600">Our mission is to empower individuals to take control of their mental health through personalized, accessible, and effective therapy. We believe in the power of technology to transform mental health care and are committed to making a positive impact on the lives of our users.</dd>
                </div>
            </dl>
        </div>
    </div>
</section>



<!-- Section 12: Call To Action -->

<!-- Section 12: Call To Action -->

<section class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div class="max-w-lg mx-auto lg:max-w-3xl">
            <h2 class="text-3xl font-bold text-white sm:text-4xl">Take the First Step Towards Better Mental Health</h2>
            <p class="mt-4 text-lg leading-8 text-gray-300">Join Jessie Therapist AI today and start your journey to a healthier, happier you. Sign up now and take advantage of our limited-time offer.</p>
        </div>
        <div class="mt-12">
            <ul class="text-left mx-auto max-w-lg text-gray-300 space-y-6">
                <li class="flex items-start">
                    <svg class="flex-shrink-0 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.586 4.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clip-rule="evenodd"/>
                    </svg>
                    <span class="ml-3">Personalized therapy sessions</span>
                </li>
                <li class="flex items-start">
                    <svg class="flex-shrink-0 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.586 4.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clip-rule="evenodd"/>
                    </svg>
                    <span class="ml-3">24/7 access to mental health support</span>
                </li>
                <li class="flex items-start">
                    <svg class="flex-shrink-0 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.586 4.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clip-rule="evenodd"/>
                    </svg>
                    <span class="ml-3">Proven techniques to manage anxiety, depression, and more</span>
                </li>
                <li class="flex items-start">
                    <svg class="flex-shrink-0 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.586 4.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clip-rule="evenodd"/>
                    </svg>
                    <span class="ml-3">Affordable plans with a 30-day money-back guarantee</span>
                </li>
            </ul>
        </div>
        <div class="mt-12">
            <a href="https://buy.stripe.com/9AQ16KfIJ9g89C84gj" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100">
                Get Started Now
            </a>
        </div>
    </div>
    <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
</section>





<!-- Section 9: FAQs -->

<section class="bg-white py-24 sm:py-32">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Frequently Asked Questions
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
                We've compiled a list of frequently asked questions to help you understand more about Jessie Therapist AI and how it can support your mental health journey. If you have any other questions, feel free to contact us.
            </p>
        </div>
        <div class="mt-16 space-y-8">
            {#each faqs as faq, index}
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
                <button type="button" class="w-full text-left flex justify-between items-center" on:click={() => toggle(index)} aria-expanded={faq.open}>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {faq.question}
                    </h3>
                    <svg class="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class:rotate-180={faq.open}>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {#if faq.open}
                <p class="mt-4 text-base text-gray-600">
                    {faq.answer}
                </p>
                {/if}
            </div>
            {/each}
        </div>
        <div class="mt-16 text-center">
            <p class="text-lg text-gray-600">
                If you have any other questions or need further assistance, please contact us at <a href="mailto:support@jessietherapist.com" class="text-indigo-600 hover:text-indigo-500">support@jessietherapist.com</a>.
            </p>
        </div>
    </div>
</section>



<!-- Section 13: Footer -->

<!-- Section: Footer -->
<section class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Quick Links -->
            <div>
                <h3 class="text-lg font-semibold">Quick Links</h3>
                <ul class="mt-4 space-y-2">
                    <li><a href="/" class="text-gray-400 hover:text-gray-200 text-base">Home</a></li>
                    <li><a href="/about" class="text-gray-400 hover:text-gray-200 text-base">About Us</a></li>
                    <li><a href="/blog" class="text-gray-400 hover:text-gray-200 text-base">Blog</a></li>
                    <li><a href="/contact" class="text-gray-400 hover:text-gray-200 text-base">Contact</a></li>
                </ul>
            </div>
            <!-- Legal -->
            <div>
                <h3 class="text-lg font-semibold">Legal</h3>
                <ul class="mt-4 space-y-2">
                    <li><a href="/privacy" class="text-gray-400 hover:text-gray-200 text-base">Privacy Policy</a></li>
                    <li><a href="/terms" class="text-gray-400 hover:text-gray-200 text-base">Terms of Service</a></li>
                </ul>
            </div>
            <!-- Placeholder for additional content (empty columns to match layout) -->
        </div>
        <div class="mt-12 border-t border-gray-700 pt-8 text-center">
            <p class="text-base text-gray-400">&copy; 2024 Jessie Therapist AI. All rights reserved.</p>
        </div>
    </div>
</section>
