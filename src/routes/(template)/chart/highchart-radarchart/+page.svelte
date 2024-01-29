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

<CodeExampleFrame name="육각형 레이더 차트">
	<div class="mt-10 mb-5 mr-5">
		<div id="container" class="w-[500px] h-full mx-auto" />
	</div>
</CodeExampleFrame>
