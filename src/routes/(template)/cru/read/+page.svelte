<script>
	import {
		HippoWhiteFrame,
		HippoSearchHeader,
		HippoSort,
		HippoPagination
	} from '$lib/components/hippocomponent';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from '$lib/components/helpers';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

	const tableHeader = [
		{ name: 'Product name', key: 'Product name', sort: true },
		{ name: 'Color', key: 'Color', sort: true },
		{ name: 'Category', sort: false },
		{ name: 'Price', key: 'Price', sort: true },
		{ name: 'Last', key: 'Last', sort: true }
	];

	export let data;

	function firstFunction() {
		console.log('첫번째');
	}

	function secondFunction() {
		console.log('두번째');
	}

	function clicked(e) {
		console.log(e);
	}

	let totalCount = 30;
	let perPage = 5;
</script>

<CodeExampleFrame name="조회프레임">
	<HippoWhiteFrame class="p-5 mt-8">
		<div class="p-2">
			<HippoSearchHeader
				firstName="히포"
				secondName="티앤"
				thirdName="씨이"
				hasSecondButton={true}
				on:onFirst={firstFunction}
				on:onSecond={secondFunction}
				>버튼
			</HippoSearchHeader>
		</div>
		<Table hoverable="true">
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

		<div class="flex justify-center w-full mt-8">
			<HippoPagination {totalCount} {perPage} />
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>
