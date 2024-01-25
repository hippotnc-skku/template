<script lang="ts">
	import { HippoWhiteFrame, HippoSort } from '$lib/components/hippocomponent';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from '$lib/components/helpers';
	import { notifications } from '$lib/components/notification/notifications';
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

	export let data = {};

	function clicked(e) {
		notifications.success(`${e}클릭 됐습니다.`, 500);
	}

	const tableHeader = [
		{ name: 'Product name', key: 'Product name', sort: true },
		{ name: 'Color', key: 'Color', sort: true },
		{ name: 'Category', sort: false },
		{ name: 'Price', key: 'Price', sort: true },
		{ name: 'Last', key: 'Last', sort: true }
	];
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">flowbite-svelte를 참고하여 가져왔습니다.</div>
	<div class="text-lg font-bold">
		<a
			class="text-blue-500"
			target="_blank"
			href="https://flowbite-svelte.com/docs/components/table#sidebar-label"
			>https://flowbite-svelte.com/docs/components/table#sidebar-label</a
		>
	</div>
</HippoWhiteFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="px-6 py-10">
		<Table hoverable={true}>
			<TableHead>
				{#each tableHeader as th}
					{#if th.sort}
						<TableHeadCell textClass="text-[#303030] text-[13px] text-start">
							<HippoSort {data} key={th.key} title={th.name} />
						</TableHeadCell>
					{:else}
						<TableHeadCell textClass="text-[#303030] text-[13px] text-start"
							>{th.name}</TableHeadCell
						>
					{/if}
				{/each}
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<TableBodyRow color="custom" class="cursor-pointer" on:click={() => clicked(1)}>
					<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
					<TableBodyCell>Sliver</TableBodyCell>
					<TableBodyCell>Laptop</TableBodyCell>
					<TableBodyCell>$2999</TableBodyCell>
					<TableBodyCell>$2999</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow color="custom" class="cursor-pointer" on:click={() => clicked(2)}>
					<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
					<TableBodyCell>White</TableBodyCell>
					<TableBodyCell>Laptop PC</TableBodyCell>
					<TableBodyCell>$1999</TableBodyCell>
					<TableBodyCell>$2999</TableBodyCell>
				</TableBodyRow>
				<TableBodyRow color="custom" class="cursor-pointer" on:click={() => clicked(3)}>
					<TableBodyCell>Magic Mouse 2</TableBodyCell>
					<TableBodyCell>Black</TableBodyCell>
					<TableBodyCell>Accessories</TableBodyCell>
					<TableBodyCell>$99</TableBodyCell>
					<TableBodyCell>$2999</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>
	</HippoWhiteFrame>
</CodeExampleFrame>
