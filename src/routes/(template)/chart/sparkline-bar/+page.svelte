<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { List, Li, Heading } from 'flowbite-svelte';
	import SparkLineBar from '$lib/components/charts/chart_sparkline_bar.svelte';
</script>

<CodeExampleFrame name="Sample">
	<HippoWhiteFrame><SparkLineBar /></HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Source Code">
	<iframe frameborder="0" scrolling="no" style="width:100%; height:166px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fchart%2Fsparkline-bar%2F_temp.svelte%3Fts%3D4%23L1-L6&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="Options">
	<HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>tooltip</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>type : string</Li>
			<Li>그래프에 마우스를 올리면 나타나는 정보</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>title</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>type : string</Li>
			<Li>그래프의 Title</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>datas (필수)</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>name</Li>
			<Li>type : string</Li>
			<Li>그래프 데이터의 의미</Li>
		</List>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>data</Li>
			<Li>type : list</Li>
			<Li>그래프 데이터를 이루는 숫자 요소</Li>
		</List>
	</HippoWhiteFrame>
</CodeExampleFrame>
