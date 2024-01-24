<script lang="ts">
	import SparkLineLine from '$lib/components/charts/chart_sparkline_line.svelte';
	const example=[{name:'예시', data:[13,18,23,15,19,21,17]}]
</script>

<SparkLineLine tooltipSuffix={"예시"} titles={"예시"} datas={example}/>
