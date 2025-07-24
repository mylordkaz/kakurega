<svelte:head>
	<title>ご予約・お問い合わせ - KAKUREGA-LAB</title>
</svelte:head>

<main class="bg-primary min-h-screen pt-20">
	<!-- Title -->
	<section class="bg-primary pt-32 pb-10">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-card mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">ご予約</h1>
			<h2 class="text-card text-2xl font-bold opacity-90 md:text-3xl">お問い合わせ</h2>
		</div>
	</section>

	<!-- Reservation Info -->
	<section class="bg-primary pb-20">
		<div class="container mx-auto px-4">
			<div
				class="bg-card-dark mx-auto max-w-4xl rounded-lg px-16 py-6 pb-20 text-center shadow-2xl"
			>
				<!-- LINE Logo -->
				<div class="mb-8">
					<img src="/icons/line.svg" alt="LINE" class="mx-auto h-32 w-32" />
				</div>

				<h3 class="text-card mb-8 text-2xl font-bold">LINEでご予約・お問い合わせ</h3>

				<p class="mb-6 text-xl leading-relaxed text-gray-100">
					ご予約・お問い合わせは、<br />
					LINEから承っております。
				</p>

				<p class="mb-20 text-lg leading-relaxed text-gray-100">
					LINEをご登録後、案内に沿って<br />
					必要事項をご入力ください。
				</p>

				<!-- LINE Button -->
				<div class="py-2">
					<a
						href="#"
						class="bg-card text-primary inline-block rounded-full px-12 py-5 text-xl font-bold transition-all hover:opacity-80"
					>
						LINEを追加する
					</a>
				</div>
			</div>
		</div>
	</section>
</main>
