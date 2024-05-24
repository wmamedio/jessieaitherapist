<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col justify-between bg-white">
	<header class="absolute inset-x-0 top-0 z-50">
		<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Jessie AI Therapist</span>
					<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo">
				</a>
			</div>
		</nav>
	</header>
	
	<main class="flex-grow px-6 pt-14 lg:px-8">
		<slot />
	</main>
	
	<footer class="text-center py-4 bg-white shadow mt-8 rounded-lg">
		<p class="text-lg text-gray-700 mb-4">
			I'm here to help you set meaningful goals and overcome your fears.<br/>
			Together, we'll define your dreams, set clear objectives, and build productive habits. 
		</p>
		<button class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">
			Start your journey now!
		</button>
	</footer>
</div>

<style lang="postcss">
	:global(html) {
		@apply bg-gray-100;
	}
</style>
