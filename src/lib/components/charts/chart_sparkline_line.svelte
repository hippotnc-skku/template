<script>
	import { onMount } from 'svelte';
	export let titles = '제목';
	export let series = [
		{
			name: 'Earnings',
			data: [23, 21, 24, 25, 22, 16, 12]
		}
	];
	var optionsSparkLineLine = {
		colors: ['#10b981'],
		series: series,
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
				formatter: function (/** @type {string} */ val) {
					return '$' + val + 'K <span class="fw-normal text-body-secondary"> Thousands</span>';
				}
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsSparkLineLine);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounded-b-4 m-1" />
