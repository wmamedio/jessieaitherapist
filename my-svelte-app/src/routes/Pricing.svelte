<script>
        let annualPricing = true;
</script>

<section class="bg-gray-900 py-24 sm:py-32">
    <div class="max-w-6xl mx-auto px-16">
        <div class="text-left">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
                Pricing plans for all needs
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-400">
                Find the perfect plan that suits your needs and budget. Our pricing is simple and transparent, offering you the best value for comprehensive mental health support. Start your journey with Jessie Therapist today and enjoy a special offer on our plans.
            </p>
            <div class="mt-12 flex justify-center">
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
                    <a href="https://buy.stripe.com/fZecNOcbwfFLfD2fYY" class="stripe-link inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                    <a href="https://buy.stripe.com/fZecNOcbwfFLfD2fYY" class="stripe-link inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
            <p class="text-gray-400">Try Jessie Therapist risk-free. If you're not satisfied within the first 30 days, we offer a full money-back guarantee.</p>
        </div>
    </div>
</section>

