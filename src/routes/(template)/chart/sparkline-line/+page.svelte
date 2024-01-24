<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { List, Li, Heading } from 'flowbite-svelte';
	import ChartCard from '$lib/components/charts/template/chart_card.svelte';
	import SparkLineLine from '$lib/components/charts/chart_sparkline_line.svelte';
	let cardOptions1 = {
		icon: 'fa-solid fa-users',
		title: '총 패밀리 수',
		value: 123,
		change: 3,
		changeUnit: ''
	};
	let cardOptions2 = {
		icon: 'fa-solid fa-chart-mixed-up-circle-dollar',
		title: '월간 매출액',
		value: 15000000,
		unit: '원',
		change: -20,
		changeUnit: '%'
	};
	let cardOptions3 = {
		icon: 'fa-solid fa-chart-pie-simple-circle-dollar',
		title: '월간 매출 예상액',
		value: 22340000,
		unit: '원',
		change: 10,
		changeUnit: '%'
	};
	let cardOptions4 = {
		icon: 'fa-solid fa-head-side-goggles',
		title: '월간 플레이 수',
		value: 234,
		unit: '회'
	};
</script>

<CodeExampleFrame name="Sample">
	<HippoWhiteFrame><SparkLineLine /></HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Source Code">
	<iframe
		frameborder="0"
		scrolling="no"
		style="width:100%; height:1405px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fchart%2Fcard%2F_temp.svelte%3Fts%3D4%23L1-L65&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on&fetchFromJsDelivr=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="Options">
	<HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>icon</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>type : string</Li>
			<Li>Font Awesome Icon의 class 복사 후 붙여넣기</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>title</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>type : string</Li>
			<Li>Card의 Title</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>value (필수)</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>type : any</Li>
			<Li>Title 밑에 표시되는 value 값</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>unit</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>type : string</Li>
			<Li>value의 단위 표시</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>change</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>type : number</Li>
			<Li>value의 변동량</Li>
			<Li>미기입 혹은 값이 0일 경우 미표시</Li>
			<Li>양수일 경우 위로 화살표 및 초록색, 음수일 경우 아래로 화살표 및 빨간색 표시</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>changeUnit</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>type : string</Li>
			<Li>change의 단위</Li>
		</List>
	</HippoWhiteFrame>
</CodeExampleFrame>
