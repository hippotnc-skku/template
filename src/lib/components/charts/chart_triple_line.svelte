<script>
	import { onMount } from 'svelte';
	export let titles = '제목';
	export let series = [
		{
			name: 'Mobile',
			data: [28, 29, 33, 36, 32, 32, 33]
		},
		{
			name: 'Desktop',
			data: [21, 17, 21, 20, 24, 21, 19]
		},
		{
			name: 'Tablet',
			data: [8, 5, 9, 7, 11, 8, 4]
		}
	];
	export let labels = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
	var optionsActiveUsers = {
		series: series,
		chart: {
			height: 310,
			type: 'line',
			fontFamily: 'inherit',
			toolbar: {
				show: false
			}
		},
		colors: ['#0ea5e9', '#10b981', '#F43F5E'],
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 3,
			curve: 'smooth'
		},
		grid: {
			strokeDashArray: 4,
			position: 'back',
			padding: {
				right: 30,
				left: 30
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
		markers: {
			strokeWidth: 5,
			strokeOpacity: 1,
			strokeColors: ['inherit', 'inherit', 'inherit']
		},
		title: {
			text: titles
		},
		xaxis: {
			type: 'category',
			categories: labels,
			axisTicks: {
				show: true
			},
			axisBorder: {
				show: false
			}
		},
		yaxis: {
			min: 0,
			max: 40,
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		},
		legend: {
			show: false
		},
		tooltip: {
			y: {
				formatter: function (/** @type {string} */ val) {
					return val + 'k <span class="fw-normal text-body-secondary"> Active users</span>';
				}
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsActiveUsers);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounbded-b-4" />
