<script>
	import { onMount } from 'svelte';
	import { labelClass } from '../helpers/forms/Radio.svelte';
	export let titles = '제목';
	export let series = [
		{
			name: '가입',
			data: [147, 190, 230, 198, 274, 190, 366, 277, 173, 209, 164, 190]
		},
		{
			name: '탈퇴',
			data: [-29, -39, -62, -71, -29, -87, -102, -123, -87, -48, -54, -62]
		}
	];
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
	var optionsRevenue = {
		colors: ['#0061ff', '#feaf2c'],
		series: series,
		chart: {
			fontFamily: 'inherit',
			type: 'bar',
			height: 360,
			stacked: true,
			toolbar: {
				show: false
			}
		},
		dataLabels: {
			enabled: false
		},

		plotOptions: {
			bar: {
				columnWidth: '20%',
				startingShapes: 'rounded',
				colors: {
					backgroundBarOpacity: 0
				}
			},
			distributed: true
		},
		grid: {
			strokeDashArray: 6,
			padding: {
				top: 10,
				bottom: 10
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
		tooltip: {
			shared: true,
			intersect: false,
			y: [
				{
					formatter: function (/** @type {number} */ y) {
						if (typeof y !== 'undefined') {
							// return ' $' + y.toFixed(0) + 'K';
							return y.toFixed(0) + '개';
						}
						return y;
					}
				},
				{
					formatter: function (/** @type {number} */ y) {
						if (typeof y !== 'undefined') {
							// return '$' + y.toFixed(0) + 'K';
							return y.toFixed(0) + '개';
						}
						return y;
					}
				}
			]
		},
		title: { text: titles },
		xaxis: {
			categories: labels,

			axisTicks: {
				show: true
			},
			axisBorder: {
				show: false
			},
			tooltip: {
				enabled: true
			}
		},
		yaxis: {
			crosshairs: {
				show: false
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		const chart = new ApexCharts(id, optionsRevenue);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounded-b-4 m-1" />
