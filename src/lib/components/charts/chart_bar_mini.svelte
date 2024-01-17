<script>
	import { onMount } from 'svelte';
	export let titles = '제목';
	export let series = [{ name: 'Visitors', data: [87, 82, 68, 49, 41] }];
	export let labels = ['USA', 'India', 'UK', 'France', 'Canada'];
	var countryColors = [
		'#F43F5E', // 빨
		'#f97316', // 주
		'#fff200', // 노
		'#10b981', // 초
		'#0ea5e9' // 파
	];
	var optionsCountries = {
		series: series,
		chart: {
			type: 'bar',
			height: 300,
			fontFamily: 'inherit',
			toolbar: {
				show: false
			}
		},
		legend: {
			show: false
		},
		colors: countryColors,
		grid: {
			strokeDashArray: 4,
			position: 'back',
			padding: {
				right: 30,
				left: 10,
				bottom: -10
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
		plotOptions: {
			bar: {
				columnWidth: '30%',
				horizontal: false,
				distributed: true,
				borderRadius: 6,
				dataLabels: {
					position: 'top'
				}
			}
		},
		labels: {
			show: false
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: false
		},
		title: {
			text: titles
		},
		xaxis: {
			categories: labels,
			axisTicks: {
				show: true
			},
			axisBorder: {
				show: false
			}
		},
		yaxis: {
			labels: {
				show: true
			},
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		},
		tooltip: {
			y: {
				// @ts-ignore
				formatter: function (val) {
					return val + 'k <span class="fw-normal text-body-secondary"></span>';
				}
			}
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, optionsCountries);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounded-b-4 m-1" />
