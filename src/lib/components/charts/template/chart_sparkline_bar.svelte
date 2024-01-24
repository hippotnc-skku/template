<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';

	export let datas = [{ name: '예시', data: [55, 22, 11, 30, 43, 27, 51] }];
	export let titles = '';
	export let tooltipSuffix = '';
	let chart;

	var optionsSparkLineBar = {
		colors: ['#10b981'],
		series: datas,
		chart: {
			fontFamily: 'inherit',
			type: 'bar',
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
		plotOptions: {
			bar: {
				columnWidth: '40%',
				borderRadius: 4
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 0,
			color: 'transparent'
		},
		title: {
			text: titles
		},
		xaxis: {
			type: 'category'
		},
		yaxis: {
			opposite: true
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
	<div use:initChart={optionsSparkLineBar} class="rounbded-b-4" />
</HippoWhiteFrame>
