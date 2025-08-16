import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			platformProxy: {
				configPath: 'wrangler.toml',
				environment: undefined,
				experimentalJsonConfig: false,
				persist: false
			}
		}),
		prerender: {
			handleHttpError: 'warn',
			entries: ['*'],
			concurrency: 1
		},
		csp: {
			mode: 'auto',
			directives: {
				'script-src': [
					'self',
					'unsafe-inline',
					'https://static.elfsight.com',
					'https://fonts.googleapis.com'
				],
				'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
				'font-src': ['self', 'https://fonts.gstatic.com'],
				'img-src': ['self', 'data:', 'https:'],
				'connect-src': ['self', 'https:']
			}
		},
		// Enable service worker for caching
		serviceWorker: {
			register: false // Set to true when using PWA features
		}
	}
};

export default config;
