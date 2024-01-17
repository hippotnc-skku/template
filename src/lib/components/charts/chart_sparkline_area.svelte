<script>
	import { onMount } from 'svelte';
	// @ts-ignore
	export let series = [
		{
			name: 'Sales',
			data: [44, 32, 37, 42, 28, 39, 35]
		}
	];
	export let titles = '제목';
	export let labels = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
	var optionsSparkLineArea = {
		colors: ['#10b981'],
		series: series,
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
		labels: labels,
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
					return val + 'K <span class="fw-normal text-body-secondary"> Sales</span>';
				}
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		// @ts-ignore
		let chart = new ApexCharts(id, optionsSparkLineArea);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounded-b-4 m-1" />
