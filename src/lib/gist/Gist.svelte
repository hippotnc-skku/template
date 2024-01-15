<!-- Gist.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import './gistcss.css';
	export let gistUrl = '';
	export let id;
	let frame;

	// let id = 'githubcode';

	onMount(() => {
		frame.srcdoc = `<script src='${gistUrl}'><${''}/script>`;
		resizeIframe();
	});

	function resizeIframe() {
		let iframe = document.getElementById(id);
		console.log(iframe.contentWindow.document.body.scrollHeight);
		var height = iframe.contentWindow.document;
		console.log(height);
		iframe.style.height = height + 'px';
	}

	function calcHeight() {
		let the_height = document.getElementById(id).contentWindow.document.body.scrollHeight;
		// console.log(the_height);
		// document.getElementById(id).height = the_height;
		// document.getElementById(id).style.overflow = 'hidden';
		// console.log(document.getElementById(id));
		document
			.getElementById(id)
			.contentWindow.document.body.querySelector('.gist-meta').style.display = 'none';
	}
</script>

<iframe {id} src="about:blank" bind:this={frame} title="Gist"></iframe>

<style>
	iframe {
		border: 0;
		width: 100%;
		height: 100%;
	}
</style>
