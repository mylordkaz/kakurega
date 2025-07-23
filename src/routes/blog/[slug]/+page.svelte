<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('ja-JP', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function goBack() {
		history.back();
	}
</script>

<svelte:head>
	<title>{data.post.title} - KAKUREGA Blog</title>
	<meta name="description" content={data.post.title} />
</svelte:head>

<main class="bg-primary min-h-screen pt-20">
	<div class="container mx-auto px-4 py-8">
		<!-- Back Button -->
		<div class="mb-6">
			<button
				on:click={goBack}
				class="text-card flex items-center gap-2 transition-colors hover:text-gray-300"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				戻る
			</button>
		</div>

		<!-- Blog Post -->
		<article class="mx-auto max-w-4xl">
			<div class="bg-card-dark rounded-lg p-6 md:p-8">
				<!-- Post Header -->
				<header class="mb-8">
					<!-- Eyecatch -->
					{#if data.post.eyecatch}
						<div class="mb-6 overflow-hidden rounded-lg">
							<img
								src={data.post.eyecatch.url}
								alt={data.post.title}
								class="h-64 w-full object-cover md:h-80"
							/>
						</div>
					{/if}

					<!-- Post Meta -->
					<div class="mb-4">
						<time class="text-sm text-gray-400">{formatDate(data.post.publishedAt)}</time>
					</div>

					<!-- Post Title -->
					<h1 class="text-card text-2xl font-bold leading-tight md:text-4xl">
						{data.post.title}
					</h1>
				</header>

				<!-- Post Content -->
				<div class="prose prose-invert max-w-none">
					<div class="text-gray-100 leading-relaxed">
						{@html data.post.content}
					</div>
				</div>
			</div>

			<!-- Navigation -->
			<div class="mt-8 text-center">
				<a
					href="/blog"
					class="bg-card text-primary inline-block rounded-full px-8 py-3 font-bold transition-all hover:opacity-80"
				>
					ブログ一覧に戻る
				</a>
			</div>
		</article>
	</div>
</main>