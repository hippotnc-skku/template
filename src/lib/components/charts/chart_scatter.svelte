<script>
	import { onMount } from 'svelte';
	export let titles = '제목';
	export let series = [
		{
			name: 'Sent',
			data: [30, 40, 50, 60, 24, 20, 15]
		},
		{
			name: 'Received',
			data: [7, 12, 14, 17, 10, 13, 8]
		}
	];
	export let labels = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
	var optionsScatter = {
		colors: ['#0ea5e9', '#F43F5E', '#10b981', '#f97316'],
		series: series,
		chart: {
			height: 350,
			type: 'scatter',
			fontFamily: 'inherit',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				// @ts-ignore
				formatter: function (val) {
					return val + ' <span class="fw-normal text-body-secondary">Emails</span>';
				}
			}
		},
		dataLabels: {
			enabled: false
		},
		title: {
			text: titles
		},
		fill: {
			opacity: 1
		},
		labels: labels,
		xaxis: {
			type: 'category',
			axisTicks: {
				show: true
			},
			axisBorder: {
				show: false
			},

			crosshairs: {
				show: true,
				stroke: {
					width: 2,
					dashArray: 0
				}
			}
		},
		yaxis: {
			max: 70,
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			},

			labels: {
				offsetX: 6
			}
		},
		grid: {
			strokeDashArray: 4,
			padding: {
				left: 24,
				bottom: 20,
				right: 30
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsScatter);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounbded-b-4" />
