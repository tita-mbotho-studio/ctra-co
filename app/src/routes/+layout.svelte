<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		type="image/svg+xml"
		href="https://ik.imagekit.io/kw8awoqvwi/ctra/logo.png"
	/>
</svelte:head>

{@render children()}