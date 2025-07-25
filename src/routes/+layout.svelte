<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	function scrollToSection(sectionId: string) {
		const section = document.getElementById(sectionId);
		if (section) {
			const headerHeight = 80; // Account for fixed header height
			const elementPosition = section.offsetTop - headerHeight;
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth'
			});
		}
	}
</script>

<Header {scrollToSection} />
{@render children()}
<Footer />
