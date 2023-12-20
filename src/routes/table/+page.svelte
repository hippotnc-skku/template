<script lang="ts">
	import { HippoWhiteFrame, HippoSort } from "$lib/components/hippocomponent";
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from '$lib/components/helpers';
	import { notifications } from "$lib/components/notification/notifications";
	import CodeBox from "$lib/codeboxframe/CodeBox.svelte";
	import SetupFrame from "$lib/codeboxframe/SetupFrame.svelte";
	import CodeExampleFrame from "$lib/codeboxframe/CodeExampleFrame.svelte";

  export let data = {}

  function clicked(e) {
    notifications.success(`${e}클릭 됐습니다.`, 500)
  }

  const tableHeader = [
    {name: 'Product name', key: 'Product name', sort: true},
    {name: 'Color', key: 'Color', sort: true},
    {name: 'Category',  sort: false},
    {name: 'Price', key: 'Price', sort: true},
    {name: 'Last', key: 'Last', sort: true}
  ]
</script>



<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
  <div class="text-lg font-bold">
    flowbite-svelte를 참고하여 가져왔습니다.
  </div>
  <div class="text-lg font-bold">
    <a class="text-blue-500" target="_blank" href="https://flowbite-svelte.com/docs/components/table#sidebar-label">https://flowbite-svelte.com/docs/components/table#sidebar-label</a> 
  </div>
</HippoWhiteFrame>

<SetupFrame id="script">
    <pre id="script" class="text-sm"><code>&ltscript&gt</code>
  <code>import &#123 HippoSort &#125 from "$lib/components/hippocomponent";</code>
  <code>import &#123 Table, TableBody, TableBodyCell,
    TableBodyRow, TableHead, TableHeadCell &#125 from '$lib/components/helpers';</code>
    <code>const tableHeader = [
      &#123name: 'Product name', key: 'Product name', sort: true&#125,
      &#123name: 'Color', key: 'Color', sort: true&#125,
      &#123name: 'Category',  sort: false&#125,
      &#123name: 'Price', key: 'Price', sort: true&#125,
      &#123name: 'Last', key: 'Last', sort: true&#125
    ]</code>
<code>&lt/script&gt</code></pre>
</SetupFrame>


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
            <TableHeadCell textClass="text-[#303030] text-[13px] text-start">{th.name}</TableHeadCell>
          {/if}
        {/each}
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        <TableBodyRow color='custom' class="cursor-pointer" on:click={() => clicked(1)}>
          <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
          <TableBodyCell>Sliver</TableBodyCell>
          <TableBodyCell>Laptop</TableBodyCell>
          <TableBodyCell>$2999</TableBodyCell>
          <TableBodyCell>$2999</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow color='custom' class="cursor-pointer" on:click={() => clicked(2)}>
          <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
          <TableBodyCell>White</TableBodyCell>
          <TableBodyCell>Laptop PC</TableBodyCell>
          <TableBodyCell>$1999</TableBodyCell>
          <TableBodyCell>$2999</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow color='custom' class="cursor-pointer" on:click={() => clicked(3)}>
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

<CodeBox class="mt-10" id="default">
  <pre id="default"><code>&ltTable hoverable={true}&gt</code>
  <code>&ltTableHead&gt
    &#123#each tableHeader as th&#125
      &#123#if th.sort&#125
        &ltTableHeadCell textClass="text-[#303030] text-[13px] text-start"&gt
          &ltHippoSort &#123data&#125 key=&#123th.key&#125 title=&#123th.name&#125 /&gt
        &lt/TableHeadCell&gt
        &#123:else&#125
        &ltTableHeadCell textClass="text-[#303030] text-[13px] text-start"&gt&#123th.name&#125&lt/TableHeadCell&gt
      &#123/if&#125
    &#123/each&#125
  &lt/TableHead&gt</code>
  <code>&ltTableBody tableBodyClass="divide-y"&gt
    &ltTableBodyRow color='custom' class="cursor-pointer" on:click=&#123() =&gt clicked(1)&#125&gt
      &ltTableBodyCell&gtApple MacBook Pro 17"&lt/TableBodyCell&gt
      &ltTableBodyCell&gtSliver&lt/TableBodyCell&gt
      &ltTableBodyCell&gtLaptop&lt/TableBodyCell&gt
      &ltTableBodyCell&gt$2999&lt/TableBodyCell&gt
      &ltTableBodyCell&gt$2999&lt/TableBodyCell&gt
    &lt/TableBodyRow&gt
    &ltTableBodyRow color='custom' class="cursor-pointer" on:click=&#123() =&gt clicked(2)&#125&gt
      &ltTableBodyCell&gtMicrosoft Surface Pro&lt/TableBodyCell&gt
      &ltTableBodyCell&gtWhite&lt/TableBodyCell&gt
      &ltTableBodyCell&gtLaptop PC&lt/TableBodyCell&gt
      &ltTableBodyCell&gt$1999&lt/TableBodyCell&gt
      &ltTableBodyCell&gt$2999&lt/TableBodyCell&gt
    &lt/TableBodyRow&gt
    &ltTableBodyRow color='custom' class="cursor-pointer" on:click=&#123() =&gt clicked(3)&#125&gt
      &ltTableBodyCell&gtMagic Mouse 2&lt/TableBodyCell&gt
      &ltTableBodyCell&gtBlack&lt/TableBodyCell&gt
      &ltTableBodyCell&gtAccessories&lt/TableBodyCell&gt
      &ltTableBodyCell&gt$99&lt/TableBodyCell&gt
      &ltTableBodyCell&gt$2999&lt/TableBodyCell&gt
    &lt/TableBodyRow&gt
  &lt/TableBody&gt</code>
<code>&lt/Table&gt</code>
</CodeBox>




