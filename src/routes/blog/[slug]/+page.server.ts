import { client, type BlogPost } from '$lib/microcms';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
	try {
		const response = await client.get({
			endpoint: 'blogs',
			contentId: params.slug
		});

		return {
			post: response as BlogPost
		};
	} catch (err) {
		console.error('Failed to fetch blog post:', err);
		throw error(404, {
			message: 'ブログ記事が見つかりませんでした'
		});
	}
};