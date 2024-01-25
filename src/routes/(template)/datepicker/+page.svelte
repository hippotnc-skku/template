<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { List, Li, Heading } from 'flowbite-svelte';
	import { notifications } from '$lib/components/notification/notifications';
	import { formatYearMonth } from '$lib/api/function.js';

	let start_date = '';
	let end_date = '';
	let month = formatYearMonth(new Date());
	function setMonth() {
		notifications.success('DatePicker 함수');
	}
</script>

<CodeExampleFrame name="DatePicker-Day Sample">
	<HippoWhiteFrame class="p-2 my-2">
		<div class="col-span-11">
			<input
				type="date"
				id="start_date"
				name="start_date"
				bind:value={start_date}
				class="mx-1 border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-auto p-2.5"
				placeholder="yyyy-mm-dd"
				required
			/>부터
			<input
				type="date"
				id="end_date"
				name="end_date"
				bind:value={end_date}
				class="ml-3 mx-1 border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-auto p-2.5"
				placeholder="yyyy-mm-dd"
				required
			/>까지
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="DatePicker-Day Code">
	<iframe
		frameborder="0"
		scrolling="no"
		style="width:100%; height:628px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fdatepicker%2F_temp.svelte%3Fts%3D4%23L1-L28&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="DatePicker-Month Sample">
	<HippoWhiteFrame class="p-2 my-2">
		<div class="col-span-11">
			<input
				type="month"
				data-placeholder="날짜를 선택해주세요."
				aria-required="true"
				class=" w-[145px] px-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[44px] {month
					? 'selected'
					: ''}"
				bind:value={month}
				on:change={setMonth}
			/>
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="DatePicker-Month Code">
	<iframe
		frameborder="0"
		scrolling="no"
		style="width:100%; height:582px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fdatepicker%2F_temp2.svelte%3Fts%3D4%23L1-L25&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="DatePicker-Month Options">
	<HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>month 형식</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>YYYY-MM (formatYearMonth 함수 사용)</Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>onChange</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li>setMonth와 같은 원하는 함수 적용</Li>
		</List>
	</HippoWhiteFrame>
</CodeExampleFrame>
