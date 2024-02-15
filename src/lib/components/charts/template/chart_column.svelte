<script lang="ts">
	import {
		getSevenDaysFromToday,
		getSevenWeeksFromToday,
		getSevenMonthFromToday
	} from '$lib/api/function.js';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { HippoButton } from '$lib/components/hippocomponent';

	let chart;
	let duration = 0;

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return (Math.floor(Math.random() * (max - min)) + min) * 10000; //최댓값은 제외, 최솟값은 포함
	}

	export let day = false;
	export let week = false;
	export let month = false;
	export let title = '';
	export let series = [
		{
			name: '월간 매출',
			data: [
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100)
			]
		}
	];

	export let labels = [getSevenDaysFromToday(), getSevenWeeksFromToday(), getSevenMonthFromToday()];

	let optionsActiveUsers;
	$: {
		optionsActiveUsers = {
			series: series,
			chart: {
				height: 'auto',
				type: 'bar',
				fontFamily: 'inherit',
				toolbar: {
					show: false
				},
				zoom: {
					enabled: false
				}
			},
			plotOptions: {
				bar: {
					borderRadius: 10,
					dataLabels: {
						position: 'top' // top, center, bottom
					}
				}
			},
			dataLabels: {
				enabled: true,
				formatter: function (val) {
					return val.toLocaleString() + '원';
				},
				offsetY: -20,
				style: {
					fontSize: '12px',
					colors: ['#304758']
				}
			},

			xaxis: {
				categories: labels[2],
				position: 'bottom',
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				crosshairs: {
					fill: {
						type: 'gradient',
						gradient: {
							colorFrom: '#D8E3F0',
							colorTo: '#BED1E6',
							stops: [0, 100],
							opacityFrom: 0.4,
							opacityTo: 0.5
						}
					}
				},
				tooltip: {
					enabled: true
				}
			},
			yaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				labels: {
					show: false,
					formatter: function (val) {
						return val + '원';
					}
				}
			}
		};
	}

	function initChart(node: HTMLElement, options) {
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
</script>

<HippoWhiteFrame class="p-2 h-full">
	<div class="flex justify-between p-2">
		<h1 class="text-xl">{title}</h1>
		<div>
			{#if day}
				<HippoButton color={duration === 0 ? 'blue' : 'gray'} on:click={() => (duration = 0)}
					>일간</HippoButton
				>
			{/if}
			{#if week}
				<HippoButton color={duration === 1 ? 'blue' : 'gray'} on:click={() => (duration = 1)}
					>주간</HippoButton
				>
			{/if}
			{#if month}
				<HippoButton color={duration === 2 ? 'blue' : 'gray'} on:click={() => (duration = 2)}
					>월간</HippoButton
				>
			{/if}
		</div>
	</div>
	<div use:initChart={optionsActiveUsers} class="rounbded-b-4" />
</HippoWhiteFrame>
