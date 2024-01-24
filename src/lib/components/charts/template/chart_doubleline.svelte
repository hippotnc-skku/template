<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	export let titles = '';
	export let series = [
		{
			name: 'Direct',
			data: [
				144, 155, 187, 156, 261, 247, 163, 144, 155, 257, 156, 261, 224, 163, 144, 155, 257, 156,
				261, 198, 163, 144, 155, 257, 156, 261, 274, 163, 257, 156
			]
		},
		{
			name: 'Ads',
			data: [
				76, 85, 101, 98, 87, 124, 91, 76, 85, 101, 98, 54, 105, 97, 76, 85, 101, 124, 87, 94, 91,
				76, 85, 101, 78, 104, 135, 104, 98, 87
			]
		}
	];
	export let labels = [
		'Jan 1',
		'Jan 2',
		'Jan 3',
		'Jan 4',
		'Jan 5',
		'Jan 6',
		'Jan 7',
		'Jan 8',
		'Jan 9',
		'Jan 10',
		'Jan 11',
		'Jan 12',
		'Jan 13',
		'Jan 14',
		'Jan 15',
		'Jan 16',
		'Jan 17',
		'Jan 18',
		'Jan 19',
		'Jan 20',
		'Jan 21',
		'Jan 22',
		'Jan 23',
		'Jan 24',
		'Jan 25',
		'Jan 26',
		'Jan 27',
		'Jan 28',
		'Jan 29',
		'Jan 30'
	];

	let optionsActiveUsers;
	$: {
		optionsActiveUsers = {
			colors: ['#0ea5e9', '#F43F5E'],
			series: series,

			chart: {
				type: 'area',
				height: 350,
				fontFamily: 'Inherit',
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 3,
				curve: 'smooth'
			},
			grid: {
				strokeDashArray: 2,
				padding: {
					top: 0,
					bottom: 0,
					right: 20
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
			labels: labels,
			title: {
				text: titles
			},
			yaxis: {
				labels: {
					show: true
				}
			},
			xaxis: {
				tickAmount: 6,
				labels: {
					show: true,
					rotate: 0
				},
				tooltip: {
					enabled: false
				},
				axisTicks: {
					show: false
				},
				axisBorder: {
					show: false
				}
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.05,
					opacityTo: 0,
					stops: [0, 100]
				}
			},
			tooltip: {
				shared: true,
				intersect: false,
				formatter: function (/** @type {string} */ val) {
					return (
						val.toLocaleString('ko-KR') +
						'<span class="fw-normal text-body-secondary">' +
						'원' +
						'</span>'
					);
				}
			},
			markers: {
				strokeWidth: 5,
				strokeOpacity: 1,
				strokeColors: ['inherit', 'inherit', 'inherit']
			},
			legend: {
				show: true,
				position: 'bottom',
				horizontalAlign: 'center'
			}
		};
	}

	function initChart(node: HTMLElement, options) {
		let chart;
		async function asyncInitChart() {
			const ApexCharts = (await import('apexcharts')).default;
			chart = new ApexCharts(node, options);
			chart.render();
		}

		asyncInitChart();

		return {
			update(options) {
				chart && chart.updateOptions(options);
			},
			destroy() {
				chart && chart.destroy();
			}
		};
	}
	export let title = '총 유저 수';
	export let value = 120;
	export let unit = '명';
	export let change = 30;
	export let changeUnit = '명';
	let arrow;
	let color;
	if (change > 0) {
		color = 'text-green-500';
		arrow = '↑';
	} else if (change < 0) {
		color = 'text-red-500';
		arrow = '↓';
	} else {
		change = null;
		arrow = '';
	}
</script>

<HippoWhiteFrame class="p-2">
	<div class="p-2 flex justify-between">
		<h1 class="text-2xl">{title}</h1>
		<div class="flex gap-2">
			<div class="flex items-center ml-3">
				<div>
					<div class="text-sm">{title}</div>
					<div class="flex">
						<div class="text-2xl mt-1">{value.toLocaleString('ko-KR')}</div>
						<div class="flex items-end">
							<div class="text-xl ml-1">{unit}</div>
						</div>

						<div class="flex items-end">
							<div class="text-xs pb-1 ml-3 text-green {color}">{arrow}{change}{changeUnit}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex items-center ml-3">
				<div>
					<div class="text-sm">{title}</div>
					<div class="flex">
						<div class="text-2xl mt-1">{value.toLocaleString('ko-KR')}</div>
						<div class="flex items-end">
							<div class="text-xl ml-1">{unit}</div>
						</div>

						<div class="flex items-end">
							<div class="text-xs pb-1 ml-3 text-green {color}">{arrow}{change}{changeUnit}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div use:initChart={optionsActiveUsers} class="rounbded-b-4 w-full" />
</HippoWhiteFrame>
