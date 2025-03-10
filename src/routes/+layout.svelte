<script>
	import Header from './Header.svelte';
    import Footer from './Footer.svelte';

	import '../app.css';
	let { children, data } = $props();
</script>

<div class="w-full max-w-4xl mx-auto py-4 md:py-8">
	<Header />
	<main class="md:px-4 md:py-12 w-full">
		{@render children?.()}
	</main>
</div>
<div class="px-4 py-2 md:px-8 md:py-12">
	<Footer />
</div>