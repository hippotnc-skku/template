<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import HippoButton from '$lib/components/hippocomponent/button/HippoButton.svelte';
	import { Dropdown, DropdownItem } from '$components/helpers';
	import type { DropDownItem } from '$lib/interface/templateInterface';

	function clickFunction(i) {
		console.log(i);
	}

	const items: DropDownItem[] = [
		{
			title: '납부자 등록 엑셀',
			icon: 'fa-light fa-folder-arrow-down text-lg',
			link: '링크 1'
		},
		{
			title: '수정 납부자 등록 엑셀',
			icon: 'fa-light fa-folder-arrow-down text-lg',
			link: '링크 2'
		}
	];
</script>

<HippoWhiteFrame class="p-5">
	<div class="flex justify-center gap-6">
		<HippoButton color="white"
			><div class="flex items-center">
				<span>납부자 엑셀</span><span>
					<i class="fa-light fa-folder-arrow-down text-lg ml-2"></i></span
				>
			</div>
		</HippoButton>
		<HippoButton color="gray"
			><div class="flex items-center">
				<span>수정 엑셀</span><span>
					<i class="fa-light fa-folder-arrow-down text-lg ml-2"></i></span
				>
			</div>
		</HippoButton>
		<HippoButton color="blue"
			><div class="flex items-center">
				<span>납부자 등록 엑셀</span><span>
					<i class="fa-light fa-folder-arrow-down text-lg ml-2"></i></span
				>
			</div>
		</HippoButton>
		<HippoButton color="green"
			><div class="flex items-center">
				<span>CMS 등록 엑셀</span><span>
					<i class="fa-light fa-folder-arrow-down text-lg ml-2"></i></span
				>
			</div>
		</HippoButton>
		<HippoButton color="green"
			><div class="flex items-center">
				<span>CMS 등록 엑셀</span><span>
					<i class="fa-light fa-folder-arrow-down text-lg ml-2"></i></span
				>
			</div>
		</HippoButton>
		<HippoButton class="dropdown" color="white"
			><div class="flex justify-center items-center">
				엑셀 <i class="fa-light fa-folder-arrow-down text-lg ml-2"></i>
			</div></HippoButton
		>
	</div>

	<Dropdown triggeredBy=".dropdown">
		{#each items as i}
			<DropdownItem
				defaultClass="font-medium py-2 hover:bg-gray-100 flex justify-center"
				on:click={() => clickFunction(i?.link)}
			>
				<div class="flex items-center gap-2">
					<span class="text-sm">{i?.title}</span> <i class={i?.icon}></i>
				</div>
			</DropdownItem>
		{/each}
	</Dropdown></HippoWhiteFrame
>
