<script lang="ts">
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import TripleLineChart from '$lib/components/charts/template/chart_triple_line.svelte';

	let tooltipSuffix = '원';
	let title = '서비스 별 매출액';
	let series = [];
	let labels = [];
</script>

<CodeExampleFrame name="Sample">
	<TripleLineChart {title} {tooltipSuffix} {series} {labels} />
</CodeExampleFrame>
