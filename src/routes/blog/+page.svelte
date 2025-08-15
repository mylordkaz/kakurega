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
</script>

<svelte:head>
	<title>ブログ - KAKUREGA</title>
	<meta name="description" content="KAKUREGAのブログ記事一覧" />
</svelte:head>

<main class="bg-primary min-h-screen">
	<!-- Title -->
	<section class="bg-primary content-after-header pt-16 pb-10">
		<div class="container mx-auto px-6 text-center">
			<h1 class="text-card text-4xl font-bold md:text-5xl lg:text-6xl">ブログ</h1>
		</div>
	</section>

	<!-- Blog Posts List -->
	<section class="bg-primary pb-24">
		<div class="container mx-auto px-6">
			<div class="mx-auto max-w-4xl">
				{#if data.posts.length > 0}
					<div class="space-y-6">
						{#each data.posts as post (post.id)}
							<article
								class="bg-card-dark rounded-lg p-4 transition-all hover:scale-[1.02] hover:shadow-lg"
							>
								<a href="/blog/{post.id}" class="block">
									<div class="flex gap-4">
										<!-- Eyecatch -->
										<div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg md:h-24 md:w-24">
											{#if post.eyecatch}
												<img
													src={post.eyecatch.url}
													alt={post.title}
													class="h-full w-full object-cover"
													loading="lazy"
												/>
											{:else}
												<div class="bg-primary flex h-full w-full items-center justify-center">
													<div class="text-card text-xs">画像</div>
												</div>
											{/if}
										</div>

										<!-- Content -->
										<div class="flex-1 overflow-hidden">
											<div class="mb-1">
												<span class="text-sm text-gray-400">{formatDate(post.publishedAt)}</span>
											</div>
											<h2 class="text-card text-lg leading-tight font-bold md:text-xl">
												{post.title}
											</h2>
										</div>
									</div>
								</a>
							</article>
						{/each}
					</div>
				{:else}
					<!-- Empty State -->
					<div class="bg-card-dark rounded-lg p-8 text-center">
						<div class="text-card mb-4 text-2xl font-bold">ブログ記事がありません</div>
						<p class="text-gray-100">現在、表示できるブログ記事がありません。</p>
					</div>
				{/if}
			</div>
		</div>
	</section>
</main>

