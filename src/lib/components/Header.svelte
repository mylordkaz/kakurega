<script lang="ts">
	import DropdownMenu from '$lib/components/DropdownMenu.svelte';

	export let scrollToSection: (sectionId: string) => void;

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header
	class="bg-secondary border-primary relative flex items-center justify-between border-b-2 px-6 shadow-md"
>
	<!-- Centered Logo -->
	<div class="flex flex-1 justify-center">
		<img src="/logoblack-nobg.png" alt="Salon Logo" class="h-34 object-contain" />
	</div>

	<!-- Menu Button -->
	<div class="absolute right-6">
		<button aria-label="Open menu" on:click={toggleMenu} class="text-primary focus:outline-none">
			<svg
				class="h-12 w-12"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>

	<!-- Dropdown Component -->
	<DropdownMenu {isMenuOpen} {scrollToSection} {closeMenu} />
</header>
