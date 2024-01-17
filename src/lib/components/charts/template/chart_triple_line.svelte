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

	export let tooltipSuffix = '';
	export let title = '';
	export let series = [
		[
			{
				name: '버디랑 놀자',
				data: [
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200)
				]
			},
			{
				name: 'CogMoTest',
				data: [
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200)
				]
			},
			{
				name: 'CogMoUp',
				data: [
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200),
					getRandomInt(50, 200)
				]
			}
		],
		[
			{
				name: '버디랑 놀자',
				data: [
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000)
				]
			},
			{
				name: 'CogMoTest',
				data: [
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000)
				]
			},
			{
				name: 'CogMoUp',
				data: [
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000),
					getRandomInt(800, 1000)
				]
			}
		],
		[
			{
				name: '버디랑 놀자',
				data: [
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500)
				]
			},
			{
				name: 'CogMoTest',
				data: [
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500)
				]
			},
			{
				name: 'CogMoUp',
				data: [
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500),
					getRandomInt(2000, 2500)
				]
			}
		]
	];

	export let labels = [getSevenDaysFromToday(), getSevenWeeksFromToday(), getSevenMonthFromToday()];

	let optionsActiveUsers;
	$: {
		optionsActiveUsers = {
			series: series[duration],
			chart: {
				height: 310,
				type: 'line',
				fontFamily: 'inherit',
				toolbar: {
					show: false
				},
				zoom: {
					enabled: false
				}
			},
			colors: ['#0ea5e9', '#10b981', '#F43F5E'],
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 3,
				curve: 'straight'
			},
			grid: {
				strokeDashArray: 4,
				position: 'back',
				padding: {
					right: 30,
					left: 30
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
			markers: {
				strokeWidth: 2,
				strokeOpacity: 1,
				strokeColors: ['inherit', 'inherit', 'inherit'],
				hover: {
					size: 5,
					sizeOffset: 3
				}
			},
			xaxis: {
				type: 'category',
				categories: labels[duration],
				axisTicks: {
					show: true
				},
				axisBorder: {
					show: false
				}
			},
			yaxis: {
				min: function (min) {
					return min;
				},
				max: function (max) {
					return max;
				},
				axisTicks: {
					show: false
				},
				axisBorder: {
					show: false
				}
			},
			legend: {
				show: true,
				position: 'top',
				horizontalAlign: 'center'
			},
			tooltip: {
				y: {
					formatter: function (/** @type {string} */ val) {
						return (
							val.toLocaleString('ko-KR') +
							'<span class="fw-normal text-body-secondary">' +
							tooltipSuffix +
							'</span>'
						);
					}
				}
			},
			animations: {
				enabled: false,
				easing: 'easeinout',
				speed: 1,
				animateGradually: {
					enabled: true,
					delay: 150
				},
				dynamicAnimation: {
					enabled: true,
					speed: 350
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

<HippoWhiteFrame class="p-2 my-2">
	<div class="p-2 flex justify-between">
		<h1 class="text-2xl">{title}</h1>
		<div>
			<HippoButton class="bg-[#3561AC] text-white px-3 py-2" on:click={() => (duration = 0)}
				>일간</HippoButton
			>
			<HippoButton class="bg-[#3561AC] text-white px-3 py-2" on:click={() => (duration = 1)}
				>주간</HippoButton
			>
			<HippoButton class="bg-[#3561AC] text-white px-3 py-2" on:click={() => (duration = 2)}
				>월간</HippoButton
			>
		</div>
	</div>
	<div use:initChart={optionsActiveUsers} class="rounbded-b-4" />
</HippoWhiteFrame>
