
<svelte:head>
	<title>Menu - KAKUREGA-LAB</title>
</svelte:head>

<main class="bg-primary min-h-screen pt-20">
	<!-- Title -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-card text-4xl font-bold md:text-5xl lg:text-6xl">Menu</h1>
		</div>
	</section>

	<!-- Image -->
	<section class="bg-primary py-8">
		<div class="container mx-auto px-4 text-center">
			<div class="bg-card-dark mx-auto h-96 w-full max-w-2xl rounded-lg">
				<div class="text-light flex h-full items-center justify-center text-2xl">画像</div>
			</div>
		</div>
	</section>

	<!-- Menu Table -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark mx-auto max-w-4xl rounded-lg p-8">
				<div class="overflow-x-auto">
					<table class="w-full text-left">
						<thead>
							<tr class="border-b border-gray-600">
								<th class="text-card pb-4 pr-4 text-lg font-bold">Service</th>
								<th class="text-card pb-4 pr-4 text-lg font-bold">Time</th>
								<th class="text-card pb-4 text-lg font-bold">Price</th>
							</tr>
						</thead>
						<tbody class="text-gray-100">
							<tr class="border-b border-gray-700">
								<td class="py-4 pr-4 font-semibold">プレミアムカット</td>
								<td class="py-4 pr-4">60分</td>
								<td class="py-4">¥8,800</td>
							</tr>
							<tr class="border-b border-gray-700">
								<td class="py-4 pr-4 font-semibold">プレミアムカット＆スタイリング</td>
								<td class="py-4 pr-4">90分</td>
								<td class="py-4">¥10,800</td>
							</tr>
							<tr class="border-b border-gray-700">
								<td class="py-4 pr-4 font-semibold">カラーリング</td>
								<td class="py-4 pr-4">120分</td>
								<td class="py-4">¥12,000</td>
							</tr>
							<tr class="border-b border-gray-700">
								<td class="py-4 pr-4 font-semibold">カット＆カラー</td>
								<td class="py-4 pr-4">150分</td>
								<td class="py-4">¥18,000</td>
							</tr>
							<tr class="border-b border-gray-700">
								<td class="py-4 pr-4 font-semibold">パーマ</td>
								<td class="py-4 pr-4">150分</td>
								<td class="py-4">¥15,000</td>
							</tr>
							<tr class="border-b border-gray-700">
								<td class="py-4 pr-4 font-semibold">ストレートパーマ</td>
								<td class="py-4 pr-4">180分</td>
								<td class="py-4">¥18,000</td>
							</tr>
							<tr class="border-b border-gray-700">
								<td class="py-4 pr-4 font-semibold">ヘッドスパ</td>
								<td class="py-4 pr-4">45分</td>
								<td class="py-4">¥6,000</td>
							</tr>
							<tr>
								<td class="py-4 pr-4 font-semibold">フェイシャルトリートメント</td>
								<td class="py-4 pr-4">60分</td>
								<td class="py-4">¥8,000</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>

	<!-- Menu Description -->
	<section class="bg-primary pb-16">
		<div class="container mx-auto px-4">
			<div class="bg-card-dark mx-auto max-w-4xl rounded-lg p-8">
				<h2 class="text-card mb-6 text-center text-2xl font-bold">メニュー説明</h2>
				<div class="space-y-6 text-gray-100">
					<p class="leading-relaxed">
						KAKUREGA-LABでは、お客様一人ひとりの髪質や骨格、ライフスタイルに合わせた最適なサービスをご提供しています。
					</p>
					<p class="leading-relaxed">
						経験豊富なスタイリストが丁寧なカウンセリングを行い、お客様の理想を実現するためのヘアスタイルをご提案いたします。すべてのメニューには、シャンプー・ブローが含まれております。
					</p>
					<p class="leading-relaxed">
						初回のお客様には特別価格でのご案内も可能です。どのメニューが最適かお悩みの場合は、お気軽にご相談ください。
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4 text-center">
			<a
				href="/reservation"
				class="bg-card text-primary rounded-full px-12 py-5 text-2xl font-bold transition-all hover:opacity-80 inline-block"
			>
				今すぐ予約する
			</a>
		</div>
	</section>
</main>