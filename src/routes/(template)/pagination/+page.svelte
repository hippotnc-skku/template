<script>
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import { HippoPagination, HippoWhiteFrame } from '$lib/components/hippocomponent';
	import HippoInput from '$lib/components/hippocomponent/input/HippoInput.svelte';

	let totalCount = 30;
	let perPage = 5;
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">
		totalCount와 perPage를 조절하여 원하는 pagination을 제작하시면 됩니다.
	</div>
</HippoWhiteFrame>

<div class="flex justify-between mt-10">
	<HippoWhiteFrame class="px-4 py-5 w-[45%] flex justify-between">
		<div class="mx-auto space-y-2">
			<div class="font-bold">총 데이터 수(totalCount)</div>
			<HippoInput name="totalCount" placeholder="총 데이터 개수" bind:value={totalCount} />
		</div>
	</HippoWhiteFrame>

	<HippoWhiteFrame class="px-4 py-5 w-[45%] flex justify-between">
		<div class="mx-auto space-y-2">
			<div class="font-bold">페이지당 데이터 수(perPage)</div>
			<HippoInput name="perPage" placeholder="페이지당 데이터 수" bind:value={perPage} />
		</div>
	</HippoWhiteFrame>
</div>

<CodeExampleFrame>
	<div class="flex justify-center bg-white p-2 rounded-xl">
		<HippoPagination {totalCount} {perPage} />
	</div>
</CodeExampleFrame>
