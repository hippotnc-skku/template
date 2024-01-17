<script>
	import { onMount } from 'svelte';
	export let datas = [54, 62, 68, 63, 59, 32, 24];
	export let labels = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
	export let titles = '제목';
	var optionsSparkLineBar = {
		colors: ['#10b981'],
		series: [
			{
				name: 'Conversion',
				data: datas
			}
		],
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
		labels: labels,
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
					return val + '%';
				}
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsSparkLineBar);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounded-b-4 m-1" />
