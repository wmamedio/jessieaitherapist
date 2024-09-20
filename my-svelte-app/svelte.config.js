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
        }),
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore 404 errors for blog posts
                if (path.startsWith('/blog/') && message.includes('404')) {
                    console.warn(`Ignoring 404 error for ${path} (referred from ${referrer})`);
                    return;
                }
                
                // Throw on other errors
                throw new Error(message);
            }
        }
    },
    preprocess: vitePreprocess({
        postcss: true
    })
};

export default config;