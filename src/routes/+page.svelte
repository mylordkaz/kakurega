<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let openFaq = -1;
	let showBackToTop = false;

	let instagramSection: HTMLElement;
	let mapSection: HTMLElement;
	let instagramLoaded = false;
	let mapLoaded = false;

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? -1 : index;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function handleScroll() {
		showBackToTop = window.scrollY > 400;
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('ja-JP', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function truncateContent(content: string, maxLength: number = 150): string {
		const textContent = content.replace(/<[^>]*>/g, '');
		return textContent.length > maxLength
			? textContent.substring(0, maxLength) + '...'
			: textContent;
	}

	function loadInstagram() {
		if (instagramLoaded) return;

		const script = document.createElement('script');
		script.src = 'https://static.elfsight.com/platform/platform.js';
		script.async = true;
		document.head.appendChild(script);
		instagramLoaded = true;
	}

	function setupIntersectionObserver() {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target === instagramSection && !instagramLoaded) {
							loadInstagram();
						}
						if (entry.target === mapSection && !mapLoaded) {
							mapLoaded = true;
						}
					}
				});
			},
			{
				rootMargin: '200px 0px',
				threshold: 0
			}
		);
		if (instagramSection) observer.observe(instagramSection);
		if (mapSection) observer.observe(mapSection);

		return observer;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		const observer = setupIntersectionObserver();
		return () => {
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect();
		};
	});
</script>

<main class="bg-primary min-h-screen pt-20">
	<!-- Hero Section -->
	<section class="bg-primary relative py-20">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-card text-4xl leading-relaxed font-bold md:text-5xl lg:text-6xl">
				「髪を生やすことがゴールじゃない」<br />
				髪を変えれば、人生が変わる。<br />
				理想の自分を、この場所で。
			</h1>
		</div>
	</section>

	<!-- Main Image Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4 text-center">
			<div class="bg-card-dark mx-auto mb-8 h-96 w-full max-w-2xl rounded-lg">
				<div class="text-light flex h-full items-center justify-center text-2xl">画像</div>
			</div>

			<a
				href="/reservation"
				class="bg-card text-primary inline-block rounded-full px-12 py-5 text-2xl font-bold transition-all hover:opacity-80"
			>
				今すぐ予約する
			</a>
		</div>
	</section>

	<!-- Customer Goals Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-card mb-6 text-3xl font-bold">こんなお悩み、抱えていませんか？</h2>
				<ul class="space-y-4 text-xl text-gray-100">
					<li>• 本当はやりたい髪型があるのに、薄毛が気になってオーダーしづらい</li>
					<li>• 写真やSNSの投稿で、つい髪のボリュームを気にしてしまう</li>
					<li>• 仕事や恋愛で、自信を持って人前に立てない</li>
					<li>• 抜け毛が増えてきたが、なにから始めて良いかわからない</li>
					<li>• 「もう何をしても変わらない」と諦めかけている</li>
					<li>• 似合うヘアスタイルまで、一緒に提案してほしい。</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- KAKUREGA Approach Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="card-primary mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-primary mb-4 text-center text-2xl font-bold">
					理想の自分を叶える、<br />
					KAKUREGAだけのアプローチ
				</h2>
				<div class="text-secondary space-y-6">
					<p class="text-center text-lg leading-relaxed">
						"髪が生えるだけ"では、自信も理想の印象も取り戻せません。
					</p>
					<p class="text-center text-lg leading-relaxed">
						KAKUREGAは、"最先端の発毛技術"とプロの理容師による"似合わせカット"を組み合わせた唯一無二のメンズ専門サロンです。
					</p>
					<div class="bg-card-dark rounded-lg p-6">
						<h3 class="text-card mb-4 text-center text-xl font-bold">
							《リアルな結果を追求したKAKUREGA　3つの特徴》
						</h3>
						<div class="space-y-4">
							<h4 class="text-card text-lg font-semibold">
								「リアルで結果を見せる！5日で新毛を確認可能」
							</h4>
							<p class="leading-relaxed text-gray-100">
								プラズマにより眠っていた細胞を活性化させることで、毛根がないところへもアプローチし、毛根を再生復活させます。また、施術時は毎回スコープで確認するので、新毛が生えて伸びていく<span
									class="text-card border-card border-b-2 font-semibold brightness-150"
									>過程を見ながら実感</span
								>いただけます。
							</p>
							<div class="mt-12 text-center">
								<img
									src="/approachImage.webp"
									alt="KAKUREGA発毛技術の様子"
									loading="lazy"
									width="400"
									height="160"
									class="mx-auto h-auto max-w-full rounded-lg shadow-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- First Experience Menu Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark relative mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-card mb-8 text-center text-3xl font-bold">初回体験メニュー</h2>

				<!-- Menu Item -->
				<div class="mb-8">
					<div class=" flex items-center justify-between">
						<h3 class="text-card text-2xl font-bold">≪新毛保障体験≫</h3>
						<span class="text-2xl font-bold text-gray-100">￥16,500</span>
					</div>
					<span class="text-card mt-2 text-xl font-bold">90分</span>
					<div class="mt-4 space-y-2 text-lg leading-relaxed text-gray-100">
						<p>2週間分のホームケア商材付き</p>
						<p>
							7日で新毛が確認できなければ<span
								class="text-card border-card border-b-2 font-semibold brightness-150 filter"
								>全額返金保証</span
							>
						</p>
					</div>
				</div>

				<!-- Reservation Button -->
				<div class="mb-6 text-center">
					<a
						href="/reservation"
						class="bg-card text-primary inline-block rounded-full px-12 py-5 text-2xl font-bold transition-all hover:opacity-80"
					>
						ご予約はこちら
					</a>
				</div>

				<!-- Menu Link Button -->
				<div class="absolute right-4 bottom-4">
					<a href="/menu" class="text-card text-sm underline transition-colors hover:text-gray-100">
						完全なメニューはこちら
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section id="faq" class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-card mb-8 text-center text-3xl font-bold">よくある質問</h2>

				<div class="space-y-4">
					<!-- FAQ Item 1 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(0)}
						>
							<span class="text-card pr-4 text-lg font-semibold">
								薄毛は遺伝だから諦めないといけない？
							</span>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								0
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if openFaq === 0}
							<div class="pb-4 leading-relaxed text-gray-100">
								→ いいえ。両親から受け継ぐのは、大部分が“体質”の遺伝です。<br
								/>“体質”は改善することが可能です。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 2 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(1)}
						>
							<span class="text-card pr-4 text-lg font-semibold">
								毛根が死んでいるともう生えない？
							</span>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								1
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if openFaq === 1}
							<div class="pb-4 leading-relaxed text-gray-100">
								→ いいえ。毛根は死んでいるのではなく、仮死状態なので、復活可能です。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 3 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(2)}
						>
							<span class="text-card pr-4 text-lg font-semibold"> くせ毛は治らない？ </span>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								2
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if openFaq === 2}
							<div class="pb-4 leading-relaxed text-gray-100">
								→ はい。くせ毛は頭皮内部の毛孔という部分の形で形成されます。<br
								/>外側からの改善はできない部分です。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 4 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(3)}
						>
							<span class="text-card pr-4 text-lg font-semibold"> 海藻類は髪に良い？ </span>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								3
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if openFaq === 3}
							<div class="pb-4 leading-relaxed text-gray-100">
								→ はい。ミネラルが豊富なので、髪に必要な成分の一つです。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 5 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(4)}
						>
							<span class="text-card pr-4 text-lg font-semibold"
								>シャンプーは毎日した方が良い？</span
							>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								4
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if openFaq === 4}
							<div class="pb-4 leading-relaxed text-gray-100">
								→
								はい。頭皮の皮脂量は顔の皮脂量の4倍分泌しています。毎日のシャンプーは毛根を健康に保つための重要な役割です。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 6 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(5)}
						>
							<span class="text-card pr-4 text-lg font-semibold">朝シャンは髪に影響ある？</span>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								5
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if openFaq === 5}
							<div class="pb-4 leading-relaxed text-gray-100">
								→
								あります。一日の皮脂やフケ(垢と同じ)は夜にリセットすることで、豊かな毛量が保てます。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 7 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(6)}
						>
							<span class="text-card pr-4 text-lg font-semibold"
								>白髪の多い人は薄毛にならない？</span
							>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								6
									? 'rotate-180'
									: ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{#if openFaq === 6}
							<div class="pb-4 leading-relaxed text-gray-100">
								→ いいえ。薄毛と白髪の因果関係はありません。
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- About/Introduction Section -->
	<section class="bg-primary py-12">
		<div class="container mx-auto px-4">
			<div class="text-center">
				<a
					href="/about"
					class="text-card mb-6 inline-block text-2xl font-bold underline decoration-2 underline-offset-4 transition-colors hover:text-gray-100"
				>
					自己紹介
				</a>
				<div class="bg-card-dark mx-auto mb-4 h-32 w-32 rounded-full">
					<div class="text-light flex h-full items-center justify-center text-sm">画像</div>
				</div>
				<p class="mx-auto max-w-2xl text-gray-100">
					はじめまして【KAKUREGA men's wellness lab】代表のオギワラ アツキです！
				</p>
			</div>
		</div>
	</section>

	<!-- Instagram Section -->
	<section class="bg-primary py-16" bind:this={instagramSection}>
		<div class="container mx-auto px-4">
			<div class="card-primary mx-auto max-w-4xl rounded-lg p-8">
				{#if instagramLoaded}
					<div
						class="elfsight-app-f5bf33f5-bf51-4ea4-99d4-e619a91bda65"
						data-elfsight-app-lazy
					></div>
				{:else}
					<div class="flex items-center justify-center py-16">
						<div class="text-center">
							<div
								class="border-t-primary mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-gray-300"
							></div>
							<p class="text-gray-600">Instagramフィードを読み込み中...</p>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Blog Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark mx-auto max-w-4xl rounded-lg p-8">
				<div class="mb-8 flex items-center justify-between">
					<h2 class="text-card text-3xl font-bold">ブログの最新記事</h2>
					<a href="/blog" class="text-card text-sm underline transition-colors hover:text-gray-100">
						すべての記事を見る
					</a>
				</div>

				{#if data.latestPost}
					<!-- Blog Post -->
					<article class="bg-primary rounded-lg p-6">
						<div class="flex flex-col gap-6 md:flex-row">
							<!-- Blog Image -->
							<div class="md:w-1/3">
								{#if data.latestPost.eyecatch}
									<div class="h-48 w-full overflow-hidden rounded-lg">
										<img
											src={data.latestPost.eyecatch.url}
											alt={data.latestPost.title}
											class="h-full w-full object-cover"
										/>
									</div>
								{:else}
									<div class="bg-card-dark h-48 w-full rounded-lg">
										<div class="text-light flex h-full items-center justify-center text-sm">
											画像
										</div>
									</div>
								{/if}
							</div>

							<!-- Blog Content -->
							<div class="md:w-2/3">
								<div class="mb-2">
									<span class="text-sm text-gray-400"
										>{formatDate(data.latestPost.publishedAt)}</span
									>
								</div>
								<h3 class="text-card mb-3 text-xl font-bold">
									<a
										href="/blog/{data.latestPost.id}"
										class="transition-colors hover:text-gray-300"
									>
										{data.latestPost.title}
									</a>
								</h3>
								<p class="mb-4 leading-relaxed text-gray-100">
									{truncateContent(data.latestPost.content)}
								</p>
								<a
									href="/blog/{data.latestPost.id}"
									class="text-card font-semibold transition-colors hover:text-gray-300"
								>
									続きを読む →
								</a>
							</div>
						</div>
					</article>
				{:else}
					<!-- No blog post available -->
					<div class="bg-primary rounded-lg p-6 text-center">
						<p class="text-gray-100">最新のブログ記事はまだありません。</p>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Location Section -->
	<section id="access" class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-card mb-8 text-center text-3xl font-bold">アクセス</h2>

				<div class="grid gap-8 md:grid-cols-2">
					<!-- Location Info -->
					<div class="space-y-4">
						<div>
							<h3 class="text-card mb-2 text-xl font-bold">KAKUREGA-LAB</h3>
							<div class="space-y-2 text-gray-100">
								<p>〒194-0013</p>
								<p>東京都町田市原町田１丁目１４−４</p>
								<p>グランドール町田 B102</p>
								<p>BARBER STYLES町田 店内</p>
							</div>
						</div>

						<div>
							<h4 class="text-card mb-2 text-lg font-semibold">アクセス</h4>
							<div class="space-y-1 text-gray-100">
								<p>• JR横浜線「町田駅」徒歩3分</p>
								<p>• 小田急線「町田駅」徒歩5分</p>
								<p>• 新宿駅から小田急線で約30分</p>
								<p>• 横浜駅からJR横浜線で約30分</p>
							</div>
						</div>

						<div>
							<h4 class="text-card mb-2 text-lg font-semibold">営業時間</h4>
							<div class="space-y-1 text-gray-100">
								<p>月・水〜日：10:00 - 20:00</p>
								<p>火曜日：10:00 - 14:00</p>
								<p class="text-sm text-gray-400">年中無休</p>
							</div>
						</div>
					</div>

					<!-- Google Map -->
					<div bind:this={mapSection}>
						{#if mapLoaded}
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7826!2d139.4487290846562!3d35.5389995495675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDMyJzIwLjQiTiAxMznCsDI2JzU1LjQiRQ!5e0!3m2!1sja!2sjp!4v1642000000000"
								width="100%"
								height="320"
								class="rounded-lg border-2 border-gray-600"
								style="border:0;"
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
								title="KAKUREGA-LAB Location"
							></iframe>
						{:else}
							<!-- Loading placeholder for map -->
							<div
								class="flex h-80 items-center justify-center rounded-lg border-2 border-gray-600 bg-gray-800"
							>
								<div class="text-center">
									<div
										class="border-t-card mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-300"
									></div>
									<p class="text-card">マップを読み込み中...</p>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Social Media Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4 text-center">
			<h2 class="text-card mb-8 text-2xl font-bold">フォローしてください</h2>
			<div class="flex justify-center space-x-8">
				<!-- LINE -->
				<a href="https://lin.ee/741xg1I" class="transition-all hover:scale-110" aria-label="LINE">
					<img src="/icons/line.svg" alt="LINE" class="h-24 w-24" />
				</a>

				<!-- Instagram -->
				<a
					href="https://www.instagram.com/kakurega.mwl?igsh=MWV3N2ZhNXQzMGRy"
					class="transition-all hover:scale-110"
					aria-label="Instagram"
				>
					<img src="/icons/instagram.svg" alt="Instagram" class="h-24 w-24" />
				</a>
			</div>
		</div>
	</section>
</main>

<!-- Back to Top Button -->
{#if showBackToTop}
	<button
		on:click={scrollToTop}
		class="bg-card border-primary hover:shadow-3xl fixed right-8 bottom-8 z-50 h-16 w-16 rounded-full border-2 shadow-2xl transition-all duration-300 hover:scale-110"
		aria-label="Back to top"
	>
		<svg class="mx-auto h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
		</svg>
	</button>
{/if}
