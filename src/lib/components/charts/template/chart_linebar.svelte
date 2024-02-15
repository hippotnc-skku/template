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
		return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
	}

	export let day = false;
	export let week = false;
	export let month = false;
	export let title = '';
	export let series = [
		{
			name: 'CogMoTest',
			type: 'column',

			data: [
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100),
				getRandomInt(1, 100)
			]
		},
		{
			name: 'CogMoUp',
			type: 'line',

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
				height: 350,
				type: 'line',
				fontFamily: 'inherit',
				toolbar: {
					show: false
				},
				zoom: {
					enabled: false
				}
			},
			stroke: {
				width: [0, 4]
			},

			dataLabels: {
				enabled: true,
				enabledOnSeries: [0, 1]
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
			yaxis: [
				{
					title: {
						text: 'CogMoTest 플레이 수'
					}
				},
				{
					opposite: true,
					title: {
						text: 'CogMoUp 플레이 수'
					}
				}
			]
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

<HippoWhiteFrame class="p-2">
	<div class="flex justify-between">
		<h1 class="text-xl">{title}</h1>
		<div>
			{#if day}
				<HippoButton color={duration === 0 ? 'blue' : 'lightgray'} on:click={() => (duration = 0)}
					>일간</HippoButton
				>
			{/if}
			{#if week}
				<HippoButton color={duration === 1 ? 'blue' : 'lightgray'} on:click={() => (duration = 1)}
					>주간</HippoButton
				>
			{/if}
			{#if month}
				<HippoButton color={duration === 2 ? 'blue' : 'lightgray'} on:click={() => (duration = 2)}
					>월간</HippoButton
				>
			{/if}
		</div>
	</div>
	<div use:initChart={optionsActiveUsers} class="rounbded-b-4" />
</HippoWhiteFrame>
