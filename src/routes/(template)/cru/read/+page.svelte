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

<CodeExampleFrame name="Setup">
	<iframe
		title="setup"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:901px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Fread%2F_temp.svelte%3Fts%3D4%23L1-L41&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="조회프레임">
	<HippoWhiteFrame class="p-5 mt-8">
		<div class="p-2">
			<HippoSearchHeader
				firstName="히포"
				secondName="티앤"
				hasSecondButton={true}
				on:onFirst={firstFunction}
				on:onSecond={secondFunction}
			></HippoSearchHeader>
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

<CodeExampleFrame>
	<iframe
		title="default"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:1111px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Fread%2F_temp.svelte%3Fts%3D4%23L43-L93&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
