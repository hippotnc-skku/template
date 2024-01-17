<script>
	import { onMount } from 'svelte';
	export let titles = '제목';
	export let series = [
		{
			name: 'FrontEnd',
			type: 'column',
			data: [
				23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 44, 22, 30, 23, 11, 22, 27,
				13, 22, 37, 21, 44, 22, 30
			]
		},
		{
			name: 'Backend',
			type: 'area',
			data: [
				44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 44, 55, 41, 67, 22, 56, 27, 43, 44, 55, 41, 67,
				22, 43, 21, 41, 56, 27, 43
			]
		},
		{
			name: 'Graphics',
			type: 'line',
			data: [
				30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 36, 30,
				45, 35, 64, 52, 59, 36, 39
			]
		}
	];
	export let labels = [
		'Jan 1',
		'Jan 2',
		'Jan 3',
		'Jan 4',
		'Jan 5',
		'Jan 6',
		'Jan 7',
		'Jan 8',
		'Jan 9',
		'Jan 10',
		'Jan 11',
		'Jan 12',
		'Jan 13',
		'Jan 14',
		'Jan 15',
		'Jan 16',
		'Jan 17',
		'Jan 18',
		'Jan 19',
		'Jan 20',
		'Jan 21',
		'Jan 22',
		'Jan 23',
		'Jan 24',
		'Jan 25',
		'Jan 26',
		'Jan 27',
		'Jan 28',
		'Jan 29',
		'Jan 30'
	];
	var optionsMixed = {
		colors: ['#0ea5e9', '#10b981', '#f97316'],
		series: series,
		chart: {
			height: 350,
			type: 'line',
			stacked: false,
			fontFamily: 'inherit',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		stroke: {
			width: [0, 0, 3],
			curve: 'smooth'
		},
		plotOptions: {
			bar: {
				columnWidth: '60%',
				borderRadius: 4
			}
		},

		fill: {
			opacity: [0.85, 0.25, 1],
			gradient: {
				inverseColors: false,
				shade: 'light',
				type: 'vertical',
				opacityFrom: 0,
				opacityTo: 0.5,
				stops: [0, 100, 100, 100]
			}
		},
		labels: labels,

		markers: {
			strokeWidth: 5,
			strokeOpacity: 1,
			strokeColors: ['#F3F5FF', '#F3F5FF', '#F3F5FF']
		},
		title: {
			text: titles
		},
		xaxis: {
			type: 'category',
			tickAmount: 6,
			labels: {
				show: true,
				rotate: 0
			},
			tooltip: {
				enabled: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			min: 0,
			labels: {
				offsetX: 6
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				// @ts-ignore
				formatter: function (y) {
					if (typeof y !== 'undefined') {
						return y.toFixed(0) + 'h worked';
					}
					return y;
				}
			}
		},
		grid: {
			strokeDashArray: 4,
			padding: {
				left: 24,
				right: 24,
				bottom: 10,
				top: 0
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsMixed);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounded-b-4 m-1" />
