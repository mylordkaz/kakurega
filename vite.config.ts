import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],

	// Performance optimizations
	build: {
		cssCodeSplit: true,

		// Optimize chunk sizes
		rollupOptions: {
			output: {
				// Create separate chunks for better caching
				manualChunks: {
					// Separate vendor libraries
					vendor: ['svelte']
					// utils: ['microcms-js-sdk']
				},
				// Optimize asset file names for caching
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name?.split('.') || [];
					const extType = info[info.length - 1];
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						return `assets/images/[name]-[hash][extname]`;
					}
					if (/woff2?|eot|ttf|otf/i.test(extType)) {
						return `assets/fonts/[name]-[hash][extname]`;
					}
					return `assets/[name]-[hash][extname]`;
				},
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js'
			}
		},

		target: 'es2020',
		minify: 'esbuild',
		sourcemap: false
	},

	// Optimize dependencies
	optimizeDeps: {
		include: ['microcms-js-sdk']
	},

	// Server optimizations for development
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
		}
	}
});
