<script>
	import { onMount } from 'svelte';
	export let titles = '제목';
	export let series = [
		{
			name: 'Visitors',
			data: [180, 150, 130, 140, 205, 140]
		},
		{
			name: 'Unique visitors',
			data: [78, 102, 69, 58, 132, 98]
		}
	];
	export let labels = [
		{
			name: 'Visitors',
			data: [180, 150, 130, 140, 205, 140]
		},
		{
			name: 'Unique visitors',
			data: [78, 102, 69, 58, 132, 98]
		}
	];
	var optionsRadar = {
		colors: ['#E3E6F2', '#0ea5e9'],
		series: series,
		chart: {
			height: 400,
			type: 'radar',
			fontFamily: 'inherit',
			dropShadow: {
				enabled: true,
				blur: 12,
				left: 0,
				top: 4,
				opacity: 0.05
			},
			toolbar: {
				show: false
			}
		},
		stroke: {
			width: 0
		},
		title: {
			text: titles
		},
		fill: {
			opacity: 1
		},
		markers: {
			size: 0
		},
		xaxis: {
			strokeWidth: 0,
			categories: labels
		},
		yaxis: {
			show: false
		},
		plotOptions: {
			radar: {
				polygons: {
					strokeWidth: 0
				}
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsRadar);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounbded-b-4" />
