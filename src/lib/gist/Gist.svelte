<!-- Gist.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	export let gistUrl = '';
	let frame;

	// let id = 'githubcode';

	onMount(() => {
		frame.srcdoc = `<script src='${gistUrl}'><${''}/script>`;
	});
</script>

<iframe id="github" src="about:blank" bind:this={frame} title="Gist"></iframe>

<style>
	iframe {
		border: 0;
		width: 100%;
		height: 100%;
		min-height: 300px;
	}
</style>
