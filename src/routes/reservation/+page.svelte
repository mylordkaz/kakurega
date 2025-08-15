<svelte:head>
	<title>ご予約・お問い合わせ - KAKUREGA-LAB</title>
</svelte:head>

<main class="bg-primary min-h-screen pt-20">
	<!-- Title -->
	<section class="bg-primary pt-32 pb-10">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-card mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-center">ご予約</h1>
			<h2 class="text-card text-2xl font-bold opacity-90 md:text-3xl text-center">お問い合わせ</h2>
		</div>
	</section>

	<!-- Reservation Info -->
	<section class="bg-primary pb-20">
		<div class="container mx-auto px-4">
			<div
				class="bg-card-dark mx-auto max-w-4xl rounded-lg px-8 py-6 pb-20 text-center shadow-2xl"
			>
				<!-- LINE Logo -->
				<div class="mb-8">
					<img src="/icons/line.svg" alt="LINE" class="mx-auto h-32 w-32" />
				</div>

				<h3 class="text-card mb-8 text-2xl font-bold text-center">LINEでご予約・お問い合わせ</h3>

				<p class="mb-6 text-xl leading-relaxed text-gray-100 text-center">
					<span class="no-break">ご予約・お問い合わせは、</span><br />
					<span class="no-break">LINEから承っております。</span>
				</p>

				<p class="mb-20 text-lg leading-relaxed text-gray-100 text-center">
					<span class="no-break">LINEをご登録後、案内に沿って</span><br />
					必要事項をご入力ください。
				</p>

				<!-- LINE Button -->
				<div class="py-2">
					<a
						href="https://lin.ee/741xg1I"
						class="bg-card text-primary inline-block rounded-full px-8 py-3 text-lg font-bold transition-all hover:opacity-80 no-break text-center"
					>
						LINEを追加する
					</a>
				</div>
			</div>
		</div>
	</section>
</main>
