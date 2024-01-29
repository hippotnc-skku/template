<script lang="ts">
	import { Dropdown, DropdownItem } from '$components/helpers';
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
