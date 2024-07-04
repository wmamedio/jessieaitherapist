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
	},
	preprocess: vitePreprocess({
		postcss: true
	})
};

export default config;
