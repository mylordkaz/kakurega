import { createClient } from 'microcms-js-sdk';
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';

if (!MICROCMS_SERVICE_DOMAIN || !MICROCMS_API_KEY) {
	throw new Error('MicroCMS environment variables are not properly configured. Please check your .env file.');
}

export const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY
});

export interface BlogPost {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	eyecatch?: {
		url: string;
		height: number;
		width: number;
	};
	thumbnail: any[];
}