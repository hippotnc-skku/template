<script>
	import { onMount } from 'svelte';
	export let series = [
		{
			name: 'Working Hours',
			data: [48, 36, 29, 39, 54]
		},
		{
			name: 'Tasks Completed',
			data: [214, 198, 121, 111, 139]
		}
	];
	export let labels = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri'];
	export let titles = '제목';
	var options = {
		colors: ['#0ea5e9', '#10b981'],
		series: series,
		chart: {
			fontFamily: 'inherit',
			height: 350,
			type: 'bar',
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			}
		},
		stroke: {
			width: 0,
			dashArray: [4, 0],
			curve: 'smooth'
		},
		markers: {
			strokeWidth: 5,
			strokeOpacity: 1,
			strokeColors: ['inherit', 'inherit']
		},
		plotOptions: {
			bar: {
				borderRadiusApplication: 'around',
				borderRadiusWhenStacked: 'last',
				columnWidth: '30%',
				distributed: false,
				borderRadius: 11,
				rangeBarOverlap: false,
				rangeBarGroupRows: true
			}
		},
		legend: {
			position: 'top'
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'dark',
				gradientToColors: ['#0ea5e9', '#10b981'],
				// gradientToColors: [utils.getColor('primary'), utils.getColor('success')],
				shadeIntensity: 0.1,
				type: 'horizontal',
				opacityFrom: 0.95,
				opacityTo: 1,
				stops: [0, 100, 100, 100]
			}
		},
		xaxis: {
			type: 'category',
			categories: labels,
			tickAmount: 5,

			tooltip: {
				enabled: false
			},
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			},
			labels: {
				offsetX: 0
			}
		},
		yaxis: {
			max: 260,
			min: 0,
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			},
			labels: {
				offsetX: -16
			}
		},
		grid: {
			show: true,
			strokeDashArray: 5,
			padding: {
				left: 0,
				bottom: 0,
				right: 0,
				top: 0
			},
			xaxis: {
				lines: {
					show: false
				}
			},
			yaxis: {
				lines: {
					show: false
				}
			}
		},
		title: {
			text: titles
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: [
				{
					formatter: function (/** @type {number} */ y) {
						if (typeof y !== 'undefined') {
							return ' : ' + y.toFixed(0) + 'h';
						}
						return y;
					}
				},
				{
					formatter: function (/** @type {number} */ y) {
						if (typeof y !== 'undefined') {
							return ' : ' + y.toFixed(0) + ' Tasks';
						}
						return y;
					}
				}
			]
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		let chart = new ApexCharts(id, options);
		chart.render();
	});
	let id;
</script>

<div bind:this={id} class="rounbded-b-4" />
