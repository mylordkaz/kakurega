<script lang="ts">
	export let isMenuOpen: boolean;
	export let scrollToSection: (sectionId: string) => void;
	export let closeMenu: () => void;

	function handleNavClick(action: 'scroll' | 'link', target: string) {
		closeMenu();
		if (action === 'scroll') {
			scrollToSection(target);
		} else {
			window.location.href = target;
		}
	}
</script>

{#if isMenuOpen}
	<!-- Dropdown Menu -->
	<div class="absolute top-full right-0 z-50 mt-2 w-72 bg-card-dark shadow-2xl rounded-l-lg">
		<nav class="py-6">
			<ul class="space-y-2">
				<li>
					<button 
						on:click={() => handleNavClick('link', '/')}
						class="w-full text-left px-10 py-6 text-2xl font-semibold text-card hover:bg-primary hover:text-light transition-colors"
					>
						ホーム
					</button>
				</li>
				<li>
					<button 
						on:click={() => handleNavClick('link', '/menu')}
						class="w-full text-left px-10 py-6 text-2xl font-semibold text-card hover:bg-primary hover:text-light transition-colors"
					>
						メニュー
					</button>
				</li>
				<li>
					<button 
						on:click={() => handleNavClick('link', '/contact')}
						class="w-full text-left px-10 py-6 text-2xl font-semibold text-card hover:bg-primary hover:text-light transition-colors"
					>
						予約・お問い合わせ
					</button>
				</li>
				<li>
					<button 
						on:click={() => handleNavClick('scroll', 'faq')}
						class="w-full text-left px-10 py-6 text-2xl font-semibold text-card hover:bg-primary hover:text-light transition-colors"
					>
						よくある質問
					</button>
				</li>
				<li>
					<button 
						on:click={() => handleNavClick('link', '/blog')}
						class="w-full text-left px-10 py-6 text-2xl font-semibold text-card hover:bg-primary hover:text-light transition-colors"
					>
						ブログ
					</button>
				</li>
				<li>
					<button 
						on:click={() => handleNavClick('scroll', 'access')}
						class="w-full text-left px-10 py-6 text-2xl font-semibold text-card hover:bg-primary hover:text-light transition-colors"
					>
						アクセス
					</button>
				</li>
				<li>
					<button 
						on:click={() => handleNavClick('link', '/about')}
						class="w-full text-left px-10 py-6 text-2xl font-semibold text-card hover:bg-primary hover:text-light transition-colors"
					>
						自己紹介
					</button>
				</li>
			</ul>
		</nav>
	</div>
{/if}
