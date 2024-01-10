<script>
	import { HippoInput, HippoWhiteFrame, HippoCheckBox } from '$lib/components/hippocomponent';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';
	import HippoButton from '$lib/components/hippocomponent/button/HippoButton.svelte';
	import ChartArea from '$lib/components/charts/chart_area.svelte';
	import Gist from '$lib/gist/Gist.svelte';
	let titles;
	let xaxis;
	let isDataLabels = false;
	let makeNewChart = false;

	let asdf = '';

	function updateOptions() {
		makeNewChart = makeNewChart ? false : true;
	}

	function getRandomArbitrary(min, max) {
		let series = [];
		for (let i = 0; i < 30; i++) {
			series.push(Math.random() * (max - min) + min);
		}
		return series;
	}
</script>

<HippoWhiteFrame class="py-5 text-center">
	이해 안갈 시 routes/(template)/chart/line/+page.svelte 참조
</HippoWhiteFrame>

<SetupFrame id="script">
	<pre id="script"><code>&lt<span class="script">script</span>&gt</code>
  <code
			><span class="import-from">import</span> LineChart <span class="import-from">from</span
			> "$lib/components/charts/LineChart.svelte";</code
		>
<code>&lt/<span class="script">script</span>&gt</code>
</pre>
</SetupFrame>

<div class="my-5"></div>

<HippoWhiteFrame class="p-3"><ChartArea titles="Sample Chart" /></HippoWhiteFrame>

<CodeExampleFrame name="Options">
	<HippoWhiteFrame class="p-2">
		<div class="grid grid-cols-8 p-2 m-2 items-center">
			<div>title</div>
			<HippoInput name="totalCount" class="w-[80%] col-span-7" bind:value={titles} />
		</div>
		<div class="grid grid-cols-8 p-2 m-2 items-center">
			<div>data label</div>
			<HippoCheckBox
				id={isDataLabels}
				class="text-[#1E2666]"
				name={isDataLabels}
				value={isDataLabels}
				size="w-8 h-8"
				bind:checked={isDataLabels}
			></HippoCheckBox>
		</div>
		<div class="grid grid-cols-8 p-2 m-2 items-center">
			<div>x axis</div>
			<HippoInput name="totalCount" class="w-[80%] col-span-7" bind:value={xaxis} />
		</div>

		<HippoButton class="bg-[#1E2666] text-white px-3 py-2 ml-2" on:click={updateOptions}
			>title 변경</HippoButton
		>
	</HippoWhiteFrame>
</CodeExampleFrame>

{#if makeNewChart}
	<HippoWhiteFrame class="p-3"><ChartArea {titles} {isDataLabels} /></HippoWhiteFrame>
{/if}
<CodeBox class="mt-10" id="input_width">
	<div id="input_width" class="space-y-5">
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="width 100%" class="w-full" /&gt</code
			></pre>
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="width 80%" class="w-[80%]" /&gt</code
			></pre>
	</div>
</CodeBox>

<CodeExampleFrame name="높이 조절">
	<HippoWhiteFrame class="px-4 py-5 w-full"></HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="input_height">
	<div id="input_height" class="space-y-5">
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="높이가 50px" class="w-full h-[50px]" /&gt</code
			></pre>
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="높이가 80px" class="w-full h-20" /&gt</code
			></pre>
	</div>
</CodeBox>

<CodeExampleFrame name="인풋 내 패딩 조절">
	<HippoWhiteFrame class="px-4 py-5 w-full">
		<div class="text-lg font-bold">인풋을 클릭해보세요.(px-10 py-10)</div>
		<HippoInput
			name="totalCount"
			placeholder="패딩조절"
			class="w-full h-full"
			padding="px-10 py-10"
		/>

		<div class="text-lg font-bold mt-10">인풋을 클릭해보세요.(px-20 py-8)</div>
		<HippoInput
			name="totalCount"
			placeholder="패딩조절"
			class="w-full h-full"
			padding="px-20 py-8"
		/>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="input_padding">
	<div id="input_padding" class="space-y-5">
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="패딩조절" class="w-full h-full" padding="px-10 py-10" /&gt</code
			></pre>
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="패딩조절" class="w-full h-full" padding="px-20 py-8" /&gt</code
			></pre>
	</div>
</CodeBox>

<Gist gistUrl="https://gist.github.com/Donggyu-Lee/3420b1d5bac1a2ffb12df89c2d5a8ee2.js" />

<Gist gistUrl="https://gist.github.com/Donggyu-Lee/9ace823402b363c423f7344b0686d276.js" />
