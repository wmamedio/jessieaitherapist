<script>
    import Header from '../Header.svelte';
    import Footer from '../Footer.svelte';
    
    let name = '';
    let email = '';
    let message = '';
    let submitted = false;

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                alert('Message sent successfully!');
                // Clear the form
                name = '';
                email = '';
                message = '';
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending your message.');
        }
    }
</script>

<Header />

<section class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">We'd love to hear from you! Please fill out the form below.</p>
    </div>
    <form on:submit={handleSubmit} class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                <div class="mt-2.5">
                    <input type="text" name="name" id="name" bind:value={name} class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div class="mt-2.5">
                    <input type="email" name="email" id="email" bind:value={email} class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                <div class="mt-2.5">
                    <textarea name="message" id="message" rows="4" bind:value={message} class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
        </div>
    </form>
    <div class="mt-16 text-center">
        <div class="mt-6 flex justify-center space-x-6">
            <a href="https://www.facebook.com/" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.62h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.62h-3.12V24h6.116c.729 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
                </svg>
            </a>
            <a href="https://www.x.com/" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">X (Twitter)</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.954 4.569c-.885.385-1.833.644-2.825.759a4.932 4.932 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.175a4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.921 4.921 0 0 0 1.523 6.573 4.902 4.902 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.95 4.89a4.935 4.935 0 0 1-2.224.084c.623 1.945 2.431 3.362 4.575 3.403a9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.068a13.951 13.951 0 0 0 7.548 2.212c9.054 0 14-7.496 14-13.986 0-.21-.005-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.616 3H4.384A1.384 1.384 0 0 0 3 4.384v15.232C3 20.903 3.497 21.4 4.384 21.4h15.232C20.503 21.4 21 20.903 21 19.616V4.384A1.384 1.384 0 0 0 19.616 3zM8.47 18.194H5.81V9.273h2.659v8.921zM7.14 8.253c-.839 0-1.519-.68-1.519-1.519 0-.839.68-1.519 1.519-1.519s1.519.68 1.519 1.519c0 .839-.68 1.519-1.519 1.519zm11.055 9.941h-2.659v-4.571c0-1.088-.02-2.491-1.518-2.491-1.518 0-1.749 1.184-1.749 2.41v4.652H9.611V9.273h2.549v1.214h.037c.355-.676 1.222-1.387 2.518-1.387 2.69 0 3.191 1.772 3.191 4.08v5.014z"/>
                </svg>
            </a>
        </div>
    </div>
</section>

<Footer />