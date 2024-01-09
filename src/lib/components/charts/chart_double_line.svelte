<script>
	import { onMount } from 'svelte';
	export let titles = '제목';
	export let series = [
		{
			name: 'Direct',
			data: [
				144, 155, 187, 156, 261, 247, 163, 144, 155, 257, 156, 261, 224, 163, 144, 155, 257, 156,
				261, 198, 163, 144, 155, 257, 156, 261, 274, 163, 257, 156
			]
		},
		{
			name: 'Ads',
			data: [
				76, 85, 101, 98, 87, 124, 91, 76, 85, 101, 98, 54, 105, 97, 76, 85, 101, 124, 87, 94, 91,
				76, 85, 101, 78, 104, 135, 104, 98, 87
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

	var optionsSalesOverview = {
		colors: ['#0ea5e9', '#F43F5E'],
		series: series,

		chart: {
			type: 'area',
			height: 350,
			fontFamily: 'Inherit',
			toolbar: {
				show: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 3,
			curve: 'smooth'
		},
		grid: {
			strokeDashArray: 2,
			padding: {
				top: 0,
				bottom: 0,
				right: 20
			},
			xaxis: {
				lines: {
					show: true
				}
			},
			yaxis: {
				lines: {
					show: false
				}
			}
		},
		labels: labels,
		title: {
			text: titles
		},
		yaxis: {
			labels: {
				show: true
			}
		},
		xaxis: {
			tickAmount: 6,
			labels: {
				show: true,
				rotate: 0
			},
			tooltip: {
				enabled: false
			},
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.05,
				opacityTo: 0,
				stops: [0, 100]
			}
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				formatter: function (val) {
					return val + ' <span class="fw-normal text-body-secondary">Products sold</span>';
				}
			}
		},
		markers: {
			strokeWidth: 5,
			strokeOpacity: 1,
			strokeColors: ['inherit', 'inherit', 'inherit']
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsSalesOverview);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounded-b-4 m-1" />
