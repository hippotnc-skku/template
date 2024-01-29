<script lang="ts">
	import { Dropdown, DropdownItem } from '$components/helpers';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { HippoWhiteFrame, HippoButton } from '$lib/components/hippocomponent';
	import type { DropDownItem } from '$lib/interface/templateInterface';

	function clickFunction(i) {
		console.log(i);
	}

	const items: DropDownItem[] = [
		{
			title: '타이틀1',
			link: '링크 1'
		},
		{
			title: '타이틀2',
			link: '링크 2'
		},
		{
			title: '타이틀3',
			link: '링크 3'
		},
		{
			title: '타이틀4',
			link: '링크 4'
		}
	];
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">크기 변환은 size의 width 와 height를(w,h) 조절하시면 됩니다.</div>
	<div class="text-lg font-bold">
		그 이외에 id나 checked등을 넣으시면 적용이됩니다.(ex: id ="id")
	</div>
</HippoWhiteFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="flex justify-center py-8">
		<HippoButton class="dropdown bg-hippNavy px-3 py-2 text-white">드롭다운 버튼</HippoButton>
		<Dropdown triggeredBy=".dropdown">
			{#each items as i}
				<DropdownItem
					defaultClass="font-medium py-2 hover:bg-gray-100 flex justify-center"
					on:click={() => clickFunction(i?.link)}>{i?.title}</DropdownItem
				>
			{/each}
		</Dropdown>
	</HippoWhiteFrame>
</CodeExampleFrame>
