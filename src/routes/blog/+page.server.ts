import { client, type BlogPost } from '$lib/microcms';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async ({ setHeaders }) => {
	// Set cache headers to prevent stale content
	setHeaders({
		'cache-control': 'no-cache, no-store, must-revalidate',
		'pragma': 'no-cache',
		'expires': '0'
	});

	try {
		const response = await client.get({
			endpoint: 'blogs',
			queries: {
				orders: '-publishedAt',
				limit: 20,
				// Add filters to only get published posts
				filters: 'publishedAt[exists]'
			}
		});

		return {
			posts: response.contents as BlogPost[]
		};
	} catch (err) {
		console.error('Failed to fetch blog posts:', err);
		
		// Return empty array instead of throwing error for better UX
		return {
			posts: [] as BlogPost[]
		};
	}
};
