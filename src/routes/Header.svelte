<script>
	import * as config from '$lib/config';
</script>

<nav class="flex flex-row justify-between border-b border-accent-dark pb-4 font-sans">
	<a href="/" class="text-xl md:text-3xl hover:text-accent">
		<b>
			{config.title}
		</b>
	</a>

	<ul class="text-sm md:text-2xl">
		<li>
			<a href="/" class="pl-0 hover:pl-4 hover:text-accent">Home</a>
		</li>
	</ul>
</nav>