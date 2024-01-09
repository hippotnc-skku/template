<script>
	import { onMount } from 'svelte';
	export let series = [
		{
			name: 'Revenue',
			data: [23, 27, 18, 21, 19, 25, 23, 27, 18, 21, 19, 23]
		},
		{
			name: 'Expanses',
			data: [-10, -12, -8, -6, -9, -11, -10, -12, -8, -6, -9, -6]
		}
	];
	export let titles = '제목';
	export let labels = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	var optionsBar = {
		series: series,
		chart: {
			type: 'bar',
			height: 440,
			stacked: true,
			fontFamily: 'inherit',
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			}
		},
		colors: ['#0ea5e9', '#f97316'],
		plotOptions: {
			bar: {
				horizontal: true,
				barHeight: '50%',
				borderRadius: [6, 6]
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 0,
			colors: ['transparent']
		},

		grid: {
			strokeDashArray: 4,
			padding: {
				left: 20,
				right: 30
			},
			xaxis: {
				lines: {
					show: false
				}
			},
			yaxis: {
				lines: {
					show: true
				}
			}
		},
		yaxis: {
			labels: {
				offsetX: 6
			},
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		},
		title: {
			text: titles
		},
		tooltip: {
			shared: true,
			intersect: false,
			x: {
				// @ts-ignore
				formatter: function (val) {
					return val;
				}
			},
			y: {
				// @ts-ignore
				formatter: function (val) {
					return Math.abs(val) + 'K';
				}
			}
		},
		xaxis: {
			categories: labels,
			labels: {
				// @ts-ignore
				formatter: function (val) {
					return Math.abs(Math.round(val)) + 'K';
				}
			},
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsBar);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounbded-b-4" />
