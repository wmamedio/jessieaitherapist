<script>
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


