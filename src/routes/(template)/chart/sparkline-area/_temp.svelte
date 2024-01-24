<script lang="ts">
	import SparkLineArea from '$lib/components/charts/template/chart_sparkline_area.svelte';
	const example=[{name:'예시', data:[13,18,23,15,19,21,17]}]
</script>

<SparkLineLine tooltipSuffix={"예시"} titles={"예시"} datas={example}/>
