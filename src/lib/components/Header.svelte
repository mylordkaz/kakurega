<script lang="ts">
	import DropdownMenu from '$lib/components/DropdownMenu.svelte';
	import { onMount } from 'svelte';

	export let scrollToSection: (sectionId: string) => void;

	let isMenuOpen = false;
	let headerElement: HTMLElement;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (isMenuOpen && headerElement && !headerElement.contains(event.target as Node)) {
			closeMenu();
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<header
	bind:this={headerElement}
	class="bg-secondary border-primary fixed top-0 right-0 left-0 z-40 flex items-center justify-between border-b-2 px-6 shadow-md"
>
	<!-- Centered Logo -->
	<div class="flex flex-1 justify-center">
		<a href="/" class="transition-opacity hover:opacity-80">
			<img src="/logoblack-nobg.webp" alt="Salon Logo" class="h-34 object-contain" />
		</a>
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
