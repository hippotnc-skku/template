<script>
	import { onMount } from 'svelte';
	import { HippoWhiteFrame } from '$lib/components/hippocomponent';

	let id;
	export let options;

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, options);
		chart.render();
	});
</script>

<HippoWhiteFrame class="p-3">
	<div bind:this={id} />
</HippoWhiteFrame>
