<script lang="ts">
	import SparkLineBar from '$lib/components/charts/chart_sparkline_bar.svelte';
	import SparkLineLine from '$lib/components/charts/chart_sparkline_line.svelte';
	import SparkLineArea from '$lib/components/charts/chart_sparkline_area.svelte';

	export let types: 'bar' | 'line' | 'area' = 'bar';
	export let titles = '';
	export let tooltipSuffix = '';
	export let datas;

	let Chart = types === 'bar' ? SparkLineBar : types === 'line' ? SparkLineLine : SparkLineArea;
</script>

<div class="grid grid-cols-3 gap-4">
	<Chart {titles} {tooltipSuffix} {datas} />
</div>
