<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';

	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import Sparkline from '$lib/components/charts/template/chart_sparkline.svelte';

	let tooltipSuffix = '원';
	let title = '서비스 별 매출액';
	// let series = [];
	// let labels = [];
</script>

<CodeExampleFrame name="Sample:line">
	<HippoWhiteFrame class="p-2 my-2">
		<Sparkline types={'line'} />
	</HippoWhiteFrame>
</CodeExampleFrame>
<CodeExampleFrame name="Sample:bar">
	<Sparkline types={'bar'} />
</CodeExampleFrame>
<CodeExampleFrame name="Sample:area">
	<Sparkline types={'area'} />
</CodeExampleFrame>

<CodeExampleFrame name="Code">
	<iframe
		title="tripleline"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:313px;"
		allow="clipboard-write"
		src=""
	></iframe></CodeExampleFrame
>
