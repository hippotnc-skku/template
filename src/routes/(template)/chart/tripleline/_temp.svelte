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

<CodeExampleFrame name="Code">
	<iframe
		title="tripleline"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:313px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fchart%2Ftripleline%2F_temp.svelte%3Fts%3D4%23L1-L13&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on&fetchFromJsDelivr=on"
	></iframe></CodeExampleFrame
>
