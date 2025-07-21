<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let openFaq = -1;
	let showBackToTop = false;

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? -1 : index;
	}

	function scrollToSection(sectionId: string) {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function handleScroll() {
		showBackToTop = window.scrollY > 400;
	}

	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<Header {scrollToSection} />

<main class="bg-primary min-h-screen">
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

			<button
				class="bg-card text-primary rounded-full px-12 py-5 text-2xl font-bold transition-all hover:opacity-80"
			>
				今すぐ予約する
			</button>
		</div>
	</section>

	<!-- Customer Goals Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-card mb-6 text-3xl font-bold">こんな理想をお持ちではありませんか？</h2>
				<ul class="space-y-4 text-xl text-gray-100">
					<li>• スタイリッシュで洗練された髪型にしたい</li>
					<li>• 自分に似合うヘアスタイルを見つけたい</li>
					<li>• プロフェッショナルな仕上がりを求めている</li>
					<li>• 毎日のスタイリングが楽になる髪型にしたい</li>
					<li>• 自信を持てる外見に変身したい</li>
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
				<p class="text-secondary text-center">（ここは説明文や画像を記載）</p>
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
					<div class="mb-4 flex items-center justify-between">
						<h3 class="text-card text-2xl font-bold">プレミアムカット＆スタイリング</h3>
						<span class="text-2xl font-bold text-gray-100">¥8,800</span>
					</div>
					<p class="text-lg leading-relaxed text-gray-100">
						経験豊富なスタイリストによる丁寧なカウンセリングから始まり、お客様の骨格や髪質を分析した上で最適なカットをご提案。シャンプー、カット、ブロー、スタイリングまで含まれた贅沢な体験をお楽しみください。
					</p>
				</div>

				<!-- Reservation Button -->
				<div class="mb-6 text-center">
					<button
						class="bg-card text-primary rounded-full px-12 py-5 text-2xl font-bold transition-all hover:opacity-80"
					>
						ご予約はこちら
					</button>
				</div>

				<!-- Menu Link Button -->
				<div class="absolute right-4 bottom-4">
					<button class="text-card text-sm underline transition-colors hover:text-gray-100">
						完全なメニューはこちら
					</button>
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
								予約はどのようにすればよいですか？
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
								お電話、または当サイトのオンライン予約システムからご予約いただけます。初回のお客様は事前にカウンセリングのお時間を設けますので、余裕を持ってお時間をいただいております。キャンセルは前日までにお願いいたします。
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
								施術時間はどのくらいかかりますか？
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
								カットのみの場合は約60分、カット＆スタイリングは約90分を目安としております。初回のお客様はカウンセリング時間を含めて通常より30分程度長くお時間をいただく場合がございます。お急ぎの場合は予約時にお申し付けください。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 3 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(2)}
						>
							<span class="text-card pr-4 text-lg font-semibold">
								支払い方法は何が利用できますか？
							</span>
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
								現金、各種クレジットカード（VISA、MasterCard、JCB、AMEX）、電子マネー（交通系IC、QUICPay、iD）、QRコード決済（PayPay、LINE
								Pay、楽天ペイ）に対応しております。事前決済をご希望の場合はご予約時にお申し付けください。
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
					KAKUREGA代表の山田太郎です。15年の経験を活かし、お客様一人ひとりに最適なスタイルをご提案いたします。
				</p>
			</div>
		</div>
	</section>

	<!-- Instagram Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="card-primary mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-primary mb-6 text-center text-2xl font-bold">インスタグラムの投稿写真</h2>
				<div class="grid grid-cols-3 gap-4">
					{#each Array(6) as _, i}
						<div class="border-secondary bg-card aspect-square rounded-lg border-2 shadow-md"></div>
					{/each}
				</div>
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

				<!-- Blog Post -->
				<article class="bg-primary rounded-lg p-6">
					<div class="flex flex-col gap-6 md:flex-row">
						<!-- Blog Image -->
						<div class="md:w-1/3">
							<div class="bg-card-dark h-48 w-full rounded-lg">
								<div class="text-light flex h-full items-center justify-center text-sm">画像</div>
							</div>
						</div>

						<!-- Blog Content -->
						<div class="md:w-2/3">
							<div class="mb-2">
								<span class="text-sm text-gray-400">2025年1月15日</span>
							</div>
							<h3 class="text-card mb-3 text-xl font-bold">
								<a
									href="/blog/winter-hair-trends-2025"
									class="transition-colors hover:text-gray-300"
								>
									2025年冬のヘアトレンド：今季注目のメンズスタイル
								</a>
							</h3>
							<p class="mb-4 leading-relaxed text-gray-100">
								寒い季節に映える、洗練されたメンズヘアスタイルをご紹介。ビジネスシーンからカジュアルまで、幅広いシーンで活躍するトレンドスタイルと、自宅でのスタイリングテクニックを詳しく解説します...
							</p>
							<a
								href="/blog/winter-hair-trends-2025"
								class="text-card font-semibold transition-colors hover:text-gray-300"
							>
								続きを読む →
							</a>
						</div>
					</div>
				</article>
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
								<p>〒150-0001</p>
								<p>東京都渋谷区神宮前3-15-7</p>
								<p>第2原宿ビル 2F</p>
							</div>
						</div>

						<div>
							<h4 class="text-card mb-2 text-lg font-semibold">アクセス</h4>
							<div class="space-y-1 text-gray-100">
								<p>• JR山手線「原宿駅」徒歩8分</p>
								<p>• 東京メトロ「表参道駅」徒歩5分</p>
								<p>• 東京メトロ「明治神宮前駅」徒歩7分</p>
							</div>
						</div>

						<div>
							<h4 class="text-card mb-2 text-lg font-semibold">営業時間</h4>
							<div class="space-y-1 text-gray-100">
								<p>平日：10:00 - 20:00</p>
								<p>土日祝：9:00 - 19:00</p>
								<p class="text-sm text-gray-400">定休日：毎週月曜日</p>
							</div>
						</div>
					</div>

					<!-- Map Placeholder -->
					<div>
						<div class="bg-card-dark h-80 w-full rounded-lg border-2 border-gray-600">
							<div class="text-light flex h-full items-center justify-center text-lg">
								Googleマップ<br />
								<span class="text-sm text-gray-400">表参道エリア</span>
							</div>
						</div>
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
				<a href="#" class="transition-all hover:scale-110" aria-label="LINE">
					<img src="/icons/line.svg" alt="LINE" class="h-24 w-24" />
				</a>

				<!-- Instagram -->
				<a href="#" class="transition-all hover:scale-110" aria-label="Instagram">
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
		class="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-card shadow-2xl border-2 border-primary transition-all duration-300 hover:scale-110 hover:shadow-3xl"
		aria-label="Back to top"
	>
		<svg
			class="h-7 w-7 mx-auto text-white"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 15l7-7 7 7"
			/>
		</svg>
	</button>
{/if}

<Footer />
