<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/images/favicon-96x96.png" />
</svelte:head>

{@render children()}
