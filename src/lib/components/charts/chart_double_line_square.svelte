<script>
	import { onMount } from 'svelte';
	export let titles = '제목';
	export let series = [
		{
			name: 'Visitors',
			data: [140, 181, 205, 283, 249, 162, 249, 164, 248, 174, 219, 141]
		},
		{
			name: 'Registrations',
			data: [54, 29, 74, 31, 73, 27, 52, 81, 41, 86, 48, 91]
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
	// @ts-ignore
	var optionsLine = {
		colors: ['#0ea5e9', '#10b981'],
		series: series,
		chart: {
			height: 350,
			type: 'line',
			fontFamily: 'inherit',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'stepline',
			width: 3
		},
		grid: {
			strokeDashArray: 4,
			padding: {
				left: 24,
				right: 30,
				bottom: 20
			}
		},
		xaxis: {
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			},
			categories: labels
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
		tooltip: {
			shared: true,
			intersect: false,
			y: [
				{
					// @ts-ignore
					formatter: function (y) {
						if (typeof y !== 'undefined') {
							return y.toFixed(0) + 'K';
						}
						return y;
					}
				},
				{
					// @ts-ignore
					formatter: function (y) {
						if (typeof y !== 'undefined') {
							return y.toFixed(0) + 'K';
						}
						return y;
					}
				}
			]
		},
		title: {
			text: titles
		},
		markers: {
			strokeWidth: 5,
			strokeOpacity: 1,
			strokeColors: ['#F3F5FF', '#F3F5FF', '#F3F5FF']
		}
	};
	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		// @ts-ignore
		let chart = new ApexCharts(id, optionsLine);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounbded-b-4" />
