<svelte:head>
	<title>Menu - KAKUREGA-LAB</title>
</svelte:head>

<main class="bg-primary min-h-screen">
	<!-- Title -->
	<section class="bg-primary content-after-header pt-16 pb-10">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-card text-4xl font-bold md:text-5xl lg:text-6xl">メニュー</h1>
		</div>
	</section>

	<!-- Menu Images -->
	<section class="bg-primary py-16">
		<div class="container mx-auto px-4">
			<div class="flex flex-col gap-8 max-w-2xl mx-auto">
				<div class="w-full">
					<img src="/menu1.webp" alt="メニュー1" class="w-full h-auto object-cover rounded-lg" />
				</div>
				<div class="w-full">
					<img src="/menu2.webp" alt="メニュー2" class="w-full h-auto object-cover rounded-lg" />
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
						【KAKUREGA men's wellness lab】は、男性専用の頭皮ケア専門サロンです。<br />
						バーバーサロン内に半個室として併設されている店舗ですので、同店舗内でカットやパーマの施術も可能です。
					</p>
					<p class="leading-relaxed">
						カット　4,400円(税込)
					</p>
					<p class="leading-relaxed">
						メニューに関してのお問い合わせは、LINEから承っております。<br />
						どんなことでもお気軽にご相談ください。
					</p>
					<div class="text-center mt-8">
						<a href="https://lin.ee/741xg1I" class="inline-flex items-center space-x-2 bg-card text-primary font-bold py-3 px-6 rounded-full transition-all hover:opacity-80" aria-label="LINE問い合わせ">
							<img src="/icons/line.svg" alt="LINE" class="h-6 w-6" />
							<span class="text-lg">LINEで問い合わせる</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

