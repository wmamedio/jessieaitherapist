import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: [
					'/_app/*',
					'/571653aa1e234e78a8faffcdb1047449.txt',
					'/BingSiteAuth.xml',
					'/favicon.ico',
					'/favicon.png',
					'/',
					'/__data.json',
					'/blog',
					'/blog/*',
					'/sitemap.xml'
				]
			}
		})
		// ,
		// prerender: {
		// 	entries: ['*', '/sitemap.xml'], // Ensure sitemap.xml is included in prerendering
		// 	handleHttpError: ({ path, referrer, message }) => {
		// 		if (path === '/sitemap.xml') {
		// 			console.warn('sitemap.xml not found during prerendering');
		// 			return { status: 200, body: '' }; // Suppress the error
		// 		}
		// 		throw new Error(message);
		// 	}
		// }
	},
	preprocess: vitePreprocess({
		postcss: true
	})
};

export default config;
