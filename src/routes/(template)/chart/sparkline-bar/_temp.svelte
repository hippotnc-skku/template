<script lang="ts">
	import SparkLineBar from '$lib/components/charts/chart_sparkline_bar.svelte';
	const example=[{name:'예시', data:[13,18,23,15,19,21,17]}]
</script>

<SparkLineBar tooltipSuffix={"예시"} titles={"예시"} datas={example}/>
