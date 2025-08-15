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

<main class="bg-primary min-h-screen">
	<!-- Main Image Section -->
	<section class="content-after-header w-full">
		<img src="image1.webp" alt="" class="h-auto w-full object-cover" />
	</section>

	<!-- Reservation Button Section -->
	<section class="bg-primary py-8">
		<div class="container mx-auto px-4 text-center">
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

	<!-- Previous Hair Loss Treatments Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="card-primary mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-primary mb-6 text-center text-3xl font-bold">
					今までの薄毛対策　メリットとデメリット
				</h2>
				<div class="space-y-8">
					<p class="text-secondary text-center text-lg leading-relaxed">
						今までの薄毛対策は、内服薬や外用薬の使用が一般的でした。<br />
						当店で使用する最先端科学のエステティックプラズマによる施術は、<br />
						薬・サプリメントを使用しないので、副作用が一切ありません。
					</p>

					<div class="text-center">
						<img
							src="/table.webp"
							alt="薄毛対策比較表"
							loading="lazy"
							class="mx-auto h-auto w-full max-w-5xl shadow-lg"
						/>
					</div>

					<div class="bg-card-dark rounded-lg p-6">
						<p class="text-center text-lg leading-relaxed text-white">
							<span class="text-card border-card border-b-2 font-semibold brightness-150"
								>薬・サプリメントは一切不使用</span
							><br />
							KAKUREGA men's wellness labは、<span
								class="text-card border-card border-b-2 font-semibold brightness-150"
								>"最先端の発毛技術"</span
							>と<br />
							現役理容師による<span
								class="text-card border-card border-b-2 font-semibold brightness-150"
								>"似合わせカット"</span
							>を組み合わせた<br />
							唯一無二のメンズ専門サロンです。
						</p>
					</div>
				</div>
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

							<div class="mt-12 text-center">
								<img
									src="/approachImage2.webp"
									alt="24Hカプセル技術"
									loading="lazy"
									width="400"
									height="160"
									class="mx-auto h-auto max-w-full rounded-lg shadow-lg"
								/>
							</div>

							<div class="mt-8 space-y-4">
								<h4 class="text-card text-lg font-semibold">
									「副作用なし！薬を使わず、ずっと続ける必要がありません」
								</h4>
								<p class="leading-relaxed text-gray-100">
									国家プロジェクトでの技術開発から誕生した24Hカプセル(ゆっくり長時間成分を放出し続ける特殊カプセル)によって、通常1〜2時間しか毛穴に滞在できない有効成分を、<span
										class="text-card border-card border-b-2 font-semibold brightness-150"
										>24時間毛穴に留める</span
									>ことが可能になりました。<br />
									薬やサプリメントを使用せず、より効果的に毛根レベルまで改善をしていくので、新毛が定着した後は施術をやめても再び抜けてしまうことはありません。頭皮ケアも<span
										class="text-card border-card border-b-2 font-semibold brightness-150"
										>徐々にフェードアウト</span
									>していくことが可能です。
								</p>
							</div>

							<div class="mt-12 flex flex-col justify-center gap-6 md:flex-row">
								<img
									src="/approachImage3.webp"
									alt="施術の様子3"
									loading="lazy"
									class="h-auto max-w-full rounded-lg shadow-lg md:w-1/2"
								/>
								<img
									src="/approachImage4.webp"
									alt="施術の様子4"
									loading="lazy"
									class="h-auto max-w-full rounded-lg shadow-lg md:w-1/2"
								/>
							</div>

							<div class="mt-8 space-y-4">
								<h4 class="text-card text-lg font-semibold">
									「唯一無二！現役理容師と頭皮専門家の融合」
								</h4>
								<p class="leading-relaxed text-gray-100">
									<span class="text-card border-card border-b-2 font-semibold brightness-150"
										>3万人</span
									>近くの頭皮診断を行ってきた専門家と、<span
										class="text-card border-card border-b-2 font-semibold brightness-150"
										>毎月200名</span
									>以上のメンズカットを担当する理容師が力を合わせることで、圧倒的な知識と経験から生まれる、今までになかった<span
										class="text-card border-card border-b-2 font-semibold brightness-150"
										>オーダーメイド</span
									>のケアとヘアスタイル提案が実現。<br />
									バーバーショップ内に併設のため、骨格・髪質・毛量に合わせたヘアカットや、ご自宅でのセットのやり方までわかりやすくお伝えさせていただきます。<br
									/>
									頭皮専門家と連携しながら、お客様が正しい知識を身につけ、ご自身の力で未来の髪を守り育てていけるよう、丁寧にサポートとアドバイスを行っています。
								</p>
							</div>

							<div class="mt-12 flex flex-col justify-center gap-4 md:flex-row">
								<img
									src="/approachImage5.webp"
									alt="理容師によるカット"
									loading="lazy"
									class="h-auto max-w-full rounded-lg shadow-lg md:w-1/3"
								/>
								<img
									src="/approachImage6.webp"
									alt="頭皮診断の様子"
									loading="lazy"
									class="h-auto max-w-full rounded-lg shadow-lg md:w-1/3"
								/>
								<img
									src="/approachImage7.webp"
									alt="カウンセリング"
									loading="lazy"
									class="h-auto max-w-full rounded-lg shadow-lg md:w-1/3"
								/>
							</div>

							<div class="mt-8">
								<p class="text-card text-center text-lg leading-relaxed font-semibold">
									「あなたが本当に手に入れたいのは、"生える髪"ではなく、<span
										class="border-card border-b-2 brightness-150">"似合う髪"</span
									> ではありませんか？」
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Recommendation Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-card mb-8 text-center text-3xl font-bold">こんな方にお勧めです</h2>
				
				<ul class="space-y-4 text-lg text-gray-100 mb-8">
					<li>・本当は挑戦したい髪型があるのに、選択肢が狭くなったと感じている方</li>
					<li>・理美容室で髪型のオーダーをしづらくなった方</li>
					<li>・仕事や恋愛で第一印象をもっと良くしたいと思っている方</li>
					<li>・写真やSNSに写る自分に自信を持ちたい方</li>
					<li>・薬やサプリに頼らず、自分の髪を取り戻したい方</li>
					<li>・年齢を重ねても清潔感のあるヘアスタイルを維持し続けたい方</li>
				</ul>
				
				<div class="text-center space-y-6">
					<p class="text-card text-xl font-semibold">
						「一つでも当てはまった方、まずは密度＆毛根診断からお試しください。」
					</p>
					<div>
						<a href="https://lin.ee/741xg1I" class="inline-flex items-center space-x-3 bg-card text-primary font-bold py-4 px-8 rounded-full transition-all hover:opacity-80" aria-label="LINE診断">
							<img src="/icons/line.svg" alt="LINE" class="h-8 w-8" />
							<span class="text-xl">初回診断の詳細はこちら</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- First Experience Menu Section -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-card mb-8 text-center text-3xl font-bold">初回体験メニュー</h2>

				<div class="text-center space-y-8">
					<img
						src="/firstExpImage.webp"
						alt="初回体験メニュー"
						loading="lazy"
						class="mx-auto h-auto max-w-full rounded-lg shadow-lg"
					/>
					
					<div>
						<a href="https://lin.ee/741xg1I" class="inline-flex items-center space-x-3 bg-card text-primary font-bold py-4 px-8 rounded-full transition-all hover:opacity-80" aria-label="LINE診断">
							<img src="/icons/line.svg" alt="LINE" class="h-8 w-8" />
							<span class="text-xl">今すぐ診断する</span>
						</a>
					</div>
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
								本当に効果はありますか？ どれくらいで実感できますか？
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
								初回の密度＆毛根診断の結果をもとに、どの程度の効果が見込めるのかを具体的にお伝えさせていただいております。施術によって生えてきた新毛は、5～7日で確認が可能です。
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
								初回体験だけでも大丈夫ですか？ 押し売りはありませんか？
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
								もちろん初回体験のみでも大歓迎です。改善のためのアドバイスはお伝えさせていただいておりますが、無理な押し売りは一切行っておりませんのでご安心ください。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 3 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(2)}
						>
							<span class="text-card pr-4 text-lg font-semibold">料金はどれくらいかかりますか？</span>
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
								メニューページに記載がございますので、そちらをご確認ください。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 4 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(3)}
						>
							<span class="text-card pr-4 text-lg font-semibold">支払い方法は何がありますか？ 分割払い・クレジット払いは可能ですか？</span>
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
								現金、クレジットカード、分割払いに対応しています。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 5 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(4)}
						>
							<span class="text-card pr-4 text-lg font-semibold">他の発毛サロンとの違いは何ですか？</span>
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
								効果をリアルに見ながらご体感いただけることと、現役理容師によるヘアスタイルと合わせたご提案をできることが最大の特徴です。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 6 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(5)}
						>
							<span class="text-card pr-4 text-lg font-semibold">副作用やリスクはありますか？</span>
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
								薬やサプリメントを一切使用しなので副作用はございません。施術に使う機器は医療用メスと同じ素材を使用しているので、金属アレルギーの方でもご利用いただけます。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 7 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(6)}
						>
							<span class="text-card pr-4 text-lg font-semibold">カットやスタイリングも同時にお願いできますか？</span>
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
								もちろんです。当店はバーバーサロン内に併設しており、現役の理容師がカウンセリングから施術までマンツーマンでご対応いたします。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 8 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(7)}
						>
							<span class="text-card pr-4 text-lg font-semibold">予約は必要ですか？ 当日予約は可能ですか？</span>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								7
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
						{#if openFaq === 7}
							<div class="pb-4 leading-relaxed text-gray-100">
								密度＆毛根診断は事前のご予約が必須となります。カット＋お悩みのご相談に関しましては、当日のご予約も可能です。ご予約枠に限りがございますので、お早めのご予約がおすすめです。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 9 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(8)}
						>
							<span class="text-card pr-4 text-lg font-semibold">他のお客さんに会いたくないのですが、プライバシーは守られますか？</span>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								8
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
						{#if openFaq === 8}
							<div class="pb-4 leading-relaxed text-gray-100">
								施術中は半個室になりますので、他のお客様から見られることはございません。入退店時も他のお客様にお会いされたくない場合は、個別対応も行っておりますので、お気軽にご相談ください。
							</div>
						{/if}
					</div>

					<!-- FAQ Item 10 -->
					<div class="border-b border-gray-600">
						<button
							class="flex w-full items-center justify-between py-4 text-left focus:outline-none"
							on:click={() => toggleFaq(9)}
						>
							<span class="text-card pr-4 text-lg font-semibold">どんな人が担当しますか？ 専門家や理容師の実績は？</span>
							<svg
								class="text-card h-6 w-6 flex-shrink-0 transition-transform duration-200 {openFaq ===
								9
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
						{#if openFaq === 9}
							<div class="pb-4 leading-relaxed text-gray-100">
								代表のオギワラは、毎月200名以上の男性を担当している現役理容師であり、これまでに延べ3万人近くの頭皮を診てきた専門家のサポートも受けながら、お客様一人ひとりに根拠のあるアドバイスと丁寧なケアを行っています。
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
				<div class="mx-auto h-40 w-40">
					<a href="/about" class="block transition-all hover:scale-105">
						<img src="/owner.webp" alt="代表オギワラ アツキ" class="h-full w-full rounded-full object-cover" />
					</a>
				</div>
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
