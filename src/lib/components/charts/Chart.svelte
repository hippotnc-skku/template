<script>
	import { browser } from '$app/environment';
	import Highcharts from 'highcharts';
	import HighchartsMore from 'highcharts/highcharts-more';
	import { onMount, onDestroy } from 'svelte';

	export let canvasOption;
	export let chartOption;

	export let sizeOfChart;

	// csr(html이 적용되는 시점)에 Highchart에 추가 옵션(다양한 차트 표현 가능하게)을 넣는다.
	if (browser) {
		HighchartsMore(Highcharts);
	}

	let showThisChart;

	// 그래프를 그리고 변수에 할당
	function showChart() {
		showThisChart = Highcharts.chart(chartOption);
	}

	// 페이지 종료시 그래프를 삭제한다.
	function DestroyChart() {
		if (showThisChart) {
			showThisChart.destroy();
		}
	}

	onMount(showChart);
	onDestroy(DestroyChart);
</script>

<div id={canvasOption} class={sizeOfChart} />
