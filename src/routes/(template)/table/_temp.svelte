<script lang="ts">
	import { HippoSort } from '$lib/components/hippocomponent';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from '$lib/components/helpers';

	export let data = {};

	function clicked(e) {
		console.log('클릭');
	}

	const tableHeader = [
		{ name: 'Product name', key: 'Product name', sort: true },
		{ name: 'Color', key: 'Color', sort: true },
		{ name: 'Category', sort: false },
		{ name: 'Price', key: 'Price', sort: true },
		{ name: 'Last', key: 'Last', sort: true }
	];
</script>

<Table hoverable={true}>
	<TableHead>
		{#each tableHeader as th}
			{#if th.sort}
				<TableHeadCell textClass="text-[#303030] text-[13px] text-start">
					<HippoSort {data} key={th.key} title={th.name} />
				</TableHeadCell>
			{:else}
				<TableHeadCell textClass="text-[#303030] text-[13px] text-start">{th.name}</TableHeadCell>
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
