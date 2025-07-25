import { client, type BlogPost } from '$lib/microcms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const response = await client.get({
			endpoint: 'blogs',
			queries: {
				orders: '-publishedAt',
				limit: 1
			}
		});

		return {
			latestPost: response.contents?.[0] as BlogPost | null
		};
	} catch (err) {
		console.error('Failed to fetch latest blog post:', err);
		
		// Return null for better UX if fetching fails
		return {
			latestPost: null
		};
	}
};