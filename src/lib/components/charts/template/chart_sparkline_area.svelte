<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	// @ts-ignore
	export let datas = [
		{
			name: '예시',
			data: [44, 32, 37, 42, 28, 39, 35]
		}
	];
	export let titles = '';
	export let tooltipSuffix = '';

	let chart;
	var optionsSparkLineArea = {
		colors: ['#10b981'],
		series: datas,
		chart: {
			fontFamily: 'inherit',
			type: 'area',
			height: 120,
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false
			},
			sparkline: {
				enabled: true
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 0,
			curve: 'smooth'
		},
		markers: {
			strokeWidth: 5,
			strokeOpacity: 1,
			strokeColors: ['#10b981']
		},
		xaxis: {
			type: 'category'
		},
		yaxis: {
			opposite: true
		},
		fill: {
			type: 'solid',
			gradient: {}
		},
		title: {
			text: titles
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				// @ts-ignore
				formatter: function (val) {
					return (
						val.toLocaleString('ko-KR') +
						'<span class="fw-normal text-body-secondary">' +
						tooltipSuffix +
						'</span>'
					);
				}
			}
		}
	};
	function initChart(node: HTMLElement, options) {
		async function asyncInitChart() {
			const ApexCharts = (await import('apexcharts')).default;
			chart = new ApexCharts(node, options);
			chart.render();
		}

		asyncInitChart();

		return {
			update(options) {
				chart && chart.updateOptions(options);
			},
			destroy() {
				chart && chart.destroy();
			}
		};
	}
</script>

<HippoWhiteFrame class="p-2 my-2">
	<div use:initChart={optionsSparkLineArea} class="rounbded-b-4" />
</HippoWhiteFrame>
