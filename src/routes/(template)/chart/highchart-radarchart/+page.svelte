<script>
	import { onMount, onDestroy } from 'svelte';
	import Highcharts from 'highcharts';
	import HighchartsMore from 'highcharts/highcharts-more';
	import { setRadarA } from './radarchart';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

	let radarChart;
	export let graphResult = [10, 20, 30, 40, 50, 60];
	onMount(() => drawChart());

	export async function drawChart() {
		HighchartsMore(Highcharts);

		if (radarChart) {
			radarChart.destroy();
		}
		radarChart = Highcharts.chart(setRadarA(graphResult));
	}
	function DestroyChart() {
		if (radarChart) {
			radarChart.destroy();
		}
	}

	onDestroy(DestroyChart);
</script>

<CodeExampleFrame name="레이더 차트 js파일">
	<iframe
		title="js"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:1909px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fchart%2Fhighchart-radarchart%2Fradarchart.js%3Fts%3D4%23L1-L89&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="육각형 레이더 차트">
	<div class="mt-10 mb-5 mr-5">
		<div id="container" class="w-[500px] h-full mx-auto" />
	</div>
</CodeExampleFrame>

<CodeExampleFrame>
	<iframe
		title="code"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:670px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fchart%2Fhighchart-radarchart%2F_temp.svelte%3Fts%3D4%23L1-L30&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
