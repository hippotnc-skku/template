<script>
	import { onMount } from 'svelte';
	export let titles = '제목';
	export let series = [44, 55, 13];
	export let labels = ['Facebook', 'Twitter', 'Instagram'];
	var optionsPie = {
		colors: ['#0ea5e9', '#10b981', '#f97316'],
		series: series,
		chart: {
			type: 'donut',
			fontFamily: 'inherit'
		},
		labels: labels,
		plotOptions: {
			pie: {
				expandOnClick: false,
				size: 200,
				donut: {
					size: '65%'
				}
			}
		},
		dataLabels: {
			enabled: false,
			dropShadow: {
				enabled: false
			}
		},
		legend: {
			show: false
		},
		title: {
			text: titles
		},
		tooltip: {
			y: {
				// @ts-ignore
				formatter: function (val) {
					return val + '<span class="fw-normal small">명</span>';
				}
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsPie);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounbded-b-4" />
