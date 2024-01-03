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
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';

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

<SetupFrame id="script">
	<pre id="script"><code>&lt<span class="script">script</span>&gt</code>
  <code
			><span class="import-from">import</span
			> &#123 HippoWhiteFrame, HippoSearchHeader, HippoSort, HippoPagination &#125 <span
				class="import-from">from</span
			> "$lib/components/hippocomponent";</code
		>
  <code
			><span class="import-from">import</span> &#123 Table, TableBody, TableBodyCell,
    TableBodyRow, TableHead, TableHeadCell &#125 <span class="import-from">from</span
			> '$lib/components/helpers';</code
		>

  <code>export let data</code>

  <code
			>const tableHeader = [
        &#123name: 'Product name', key: 'Product name', sort: true&#125,
        &#123name: 'Color', key: 'Color', sort: true&#125,
        &#123name: 'Category',  sort: false&#125,
        &#123name: 'Price', key: 'Price', sort: true&#125,
        &#123name: 'Last', key: 'Last', sort: true&#125
      ]</code
		>
  <code>
    function firstFunction()&#123
      console.log("첫번째")
    &#125

    function secondFunction()&#123
      console.log("두번째")
    &#125

    function clicked(e)&#123
      console.log(e)
    &#125
  </code>
  <code>let totalCount = 30</code>
  <code>let perPage = 5</code>
<code>&lt/<span class="script">script</span>&gt</code></pre>
</SetupFrame>

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

<CodeBox class="mt-10" id="create">
	<pre id="create">
<code>&lt<span class="component">HippoWhiteFrame</span> class="p-5 mt-8" &gt</code>
<code>	&ltdiv class="p-2"&gt
		&lt<span class="component">HippoSearchHeader</span>
					firstName="히포"
					secondName="티앤"
					thirdName="씨이"
					hasSecondButton=&#123true&#125
					on:onFirst=&#123firstFunction&#125
					on:onSecond=&#123secondFunction&#125
					&gt버튼
		&lt/<span class="component">HippoSearchHeader</span>&gt
	&lt/div&gt
</code>
  <code>&lt<span class="component">Table</span> hoverable={true}&gt</code>
    <code
			>&lt<span class="component">TableHead</span>&gt
        &#123#each tableHeader as th&#125
          &#123#if th.sort&#125
            &lt<span class="component">TableHeadCell</span
			> textClass="text-[#303030] text-[13px] text-start"&gt
              &lt<span class="component">HippoSort</span
			> &#123data&#125 key=&#123th.key&#125 title=&#123th.name&#125 /&gt
            &lt/<span class="component">TableHeadCell</span>&gt
          &#123:else&#125
            &lt<span class="component">TableHeadCell</span
			> textClass="text-[#303030] text-[13px] text-start"&gt&#123th.name&#125&lt/<span
				class="component">TableHeadCell</span
			>&gt
          &#123/if&#125
        &#123/each&#125
      &lt/<span class="component">TableHead</span>&gt</code
		>
    <code
			>&lt<span class="component">TableBody</span> tableBodyClass="divide-y"&gt
        &lt<span class="component">TableBodyRow</span> color='custom' class="cursor-pointer" <span
				class="function-event">on:click=&#123() =&gt clicked(1)&#125</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gtApple MacBook Pro 17"&lt/<span
				class="component">TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gtSliver&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gtLaptop&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gt$2999&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gt$2999&lt/<span class="component"
				>TableBodyCell</span
			>&gt
        &lt/<span class="component">TableBodyRow</span>&gt
        &lt<span class="component">TableBodyRow</span> color='custom' class="cursor-pointer" <span
				class="function-event">on:click=&#123() =&gt clicked(2)&#125</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gtMicrosoft Surface Pro&lt/<span
				class="component">TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gtWhite&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gtLaptop PC&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gt$1999&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gt$2999&lt/<span class="component"
				>TableBodyCell</span
			>&gt
        &lt/<span class="component">TableBodyRow</span>&gt
        &lt<span class="component">TableBodyRow</span> color='custom' class="cursor-pointer" <span
				class="function-event">on:click=&#123() =&gt clicked(3)&#125</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gtMagic Mouse 2&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gtBlack&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gtAccessories&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gt$99&lt/<span class="component"
				>TableBodyCell</span
			>&gt
          &lt<span class="component">TableBodyCell</span>&gt$2999&lt/<span class="component"
				>TableBodyCell</span
			>&gt
        &lt/<span class="component">TableBodyRow</span>&gt
      &lt/<span class="component">TableBody</span>&gt</code
		>
  <code>&lt/<span class="component">Table</span>&gt</code>

  <code>&ltdiv class="flex justify-center w-full mt-8"&gt</code>
    <code
			>&lt<span class="component">HippoPagination</span
			> &#123totalCount&#125 &#123perPage&#125 /&gt</code
		>
  <code>&lt/div&gt</code>
<code>&lt/<span class="component">HippoWhiteFrame</span> &gt</code>
</pre>
</CodeBox>
