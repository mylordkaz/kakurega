<script lang="ts">
	import { page } from '$app/stores';

	export let isMenuOpen: boolean;
	export let scrollToSection: (sectionId: string) => void;
	export let closeMenu: () => void;

	function handleNavClick(action: 'scroll' | 'link', target: string) {
		closeMenu();
		if (action === 'scroll') {
			// Check if we're on the home page
			if ($page.url.pathname === '/') {
				// We're on home page, scroll to section
				scrollToSection(target);
			} else {
				// We're on another page, navigate to home with anchor
				window.location.href = `/#${target}`;
			}
		} else {
			window.location.href = target;
		}
	}
</script>

{#if isMenuOpen}
	<!-- Dropdown Menu -->
	<div class="bg-card-dark absolute top-full right-0 z-50 mt-2 w-72 rounded-l-lg shadow-2xl">
		<nav class="py-6">
			<ul class="space-y-2">
				<li>
					<button
						on:click={() => handleNavClick('link', '/')}
						class="text-card hover:bg-primary hover:text-light w-full px-10 py-6 text-left text-2xl font-semibold transition-colors"
					>
						ホーム
					</button>
				</li>
				<li>
					<button
						on:click={() => handleNavClick('link', '/menu')}
						class="text-card hover:bg-primary hover:text-light w-full px-10 py-6 text-left text-2xl font-semibold transition-colors"
					>
						メニュー
					</button>
				</li>
				<li>
					<button
						on:click={() => handleNavClick('link', '/reservation')}
						class="text-card hover:bg-primary hover:text-light w-full px-10 py-6 text-left text-2xl font-semibold transition-colors"
					>
						予約・お問い合わせ
					</button>
				</li>
				<li>
					<button
						on:click={() => handleNavClick('scroll', 'faq')}
						class="text-card hover:bg-primary hover:text-light w-full px-10 py-6 text-left text-2xl font-semibold transition-colors"
					>
						よくある質問
					</button>
				</li>
				<li>
					<button
						on:click={() => handleNavClick('link', '/blog')}
						class="text-card hover:bg-primary hover:text-light w-full px-10 py-6 text-left text-2xl font-semibold transition-colors"
					>
						ブログ
					</button>
				</li>
				<li>
					<button
						on:click={() => handleNavClick('scroll', 'access')}
						class="text-card hover:bg-primary hover:text-light w-full px-10 py-6 text-left text-2xl font-semibold transition-colors"
					>
						アクセス
					</button>
				</li>
				<li>
					<button
						on:click={() => handleNavClick('link', '/about')}
						class="text-card hover:bg-primary hover:text-light w-full px-10 py-6 text-left text-2xl font-semibold transition-colors"
					>
						自己紹介
					</button>
				</li>
			</ul>
		</nav>
	</div>
{/if}
