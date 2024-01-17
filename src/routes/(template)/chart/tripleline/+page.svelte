<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { HippoButton } from '$lib/components/hippocomponent';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import {
		getSevenDaysFromToday,
		getSevenWeeksFromToday,
		getSevenMonthFromToday
	} from '$lib/datehelper/function';
	import { List, Li, Heading } from 'flowbite-svelte';
	import TripleLineChart from '$lib/components/charts/template/chart_triple_line.svelte';

	let duration = 0;
	let tooltipSuffix = '원';

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return (Math.floor(Math.random() * (max - min)) + min) * 10000; //최댓값은 제외, 최솟값은 포함
	}

	let series = [
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

	let threelabels = [getSevenDaysFromToday(), getSevenWeeksFromToday(), getSevenMonthFromToday()];
</script>

<CodeExampleFrame name="Sample">
	<HippoWhiteFrame class="p-2 my-2">
		<div class="p-2 flex justify-between">
			<h1 class="text-2xl">서비스 별 매출액</h1>
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
		<TripleLineChart labels={threelabels[duration]} series={series[duration]} {tooltipSuffix} />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Code">
	<iframe
		title=""
		frameborder="0"
		scrolling="no"
		style="width:100%; height:1657px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fchart%2Fline%2F_temp.svelte%3Fts%3D4%23L1-L77&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on&fetchFromJsDelivr=on"
	></iframe>
</CodeExampleFrame>
