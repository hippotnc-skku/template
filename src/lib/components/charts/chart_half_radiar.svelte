<script>
	import { onMount } from 'svelte';
	export let series = [76];
	export let labels = ['Conversion Rate'];
	export let titles = '제목';
	var optionsRadialBar = {
		colors: ['#0ea5e9'],
		series: series,
		chart: {
			type: 'radialBar',
			offsetY: 0,
			fontFamily: 'inherit',
			height: 400,
			sparkline: {
				enabled: true
			}
		},
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				track: {
					opacity: 0.2,
					background: '#0ea5e9',
					strokeWidth: '100%',
					margin: 5, // margin is in pixels
					dropShadow: {
						enabled: true,
						top: 2,
						left: 0,
						color: '#000',
						opacity: 0.1,
						blur: 12
					}
				},
				dataLabels: {
					name: {
						show: true,
						offsetY: -30,
						fontSize: '14px',
						fontWeight: '400'
					},
					value: {
						offsetY: -20,
						fontSize: '20px',
						fontWeight: '700',
						color: 'currentColor'
					}
				}
			}
		},
		title: {
			text: titles
		},
		fill: {
			opacity: 1
		},
		grid: {
			padding: {
				top: -30,
				bottom: 50
			}
		},
		labels: labels
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsRadialBar);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounbded-b-4" />
