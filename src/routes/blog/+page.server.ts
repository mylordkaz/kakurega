import { client, type BlogPost } from '$lib/microcms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const response = await client.get({
			endpoint: 'blogs',
			queries: {
				orders: '-publishedAt',
				limit: 20
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
