<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	export let tooltipSuffix = '';
	export let titles = '';
	export let datas = [
		{
			name: '예시',
			data: [23, 21, 24, 25, 22, 16, 12]
		}
	];
	let chart;
	var optionsSparkLineLine = {
		colors: ['#10b981'],
		series: datas,
		chart: {
			fontFamily: 'inherit',
			type: 'line',
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
			width: 2,
			curve: 'smooth'
		},
		markers: {
			strokeWidth: 5,
			strokeOpacity: 1,
			strokeColors: ['#10b981']
		},
		title: {
			text: titles
		},
		labels: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
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
	<div use:initChart={optionsSparkLineLine} class="rounbded-b-4" />
</HippoWhiteFrame>
