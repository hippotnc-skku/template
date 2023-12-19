<script>
  import {HippoPagination, HippoWhiteFrame} from '$lib/components/hippocomponent'
	import HippoInput from '$lib/components/hippocomponent/input/HippoInput.svelte';

  let totalCount = 30
  let perPage = 5

  function copyCode(id){
    let text = document.getElementById(id).innerText
    window.navigator.clipboard.writeText(text).then(() => {
      notifications.success('복사되었습니다.', 1000)
    })
  }
</script>


<div class="flex flex-col items-center mt-5 space-y-10">

  <div class="flex justify-center w-full">
    <HippoWhiteFrame class="text-center py-5 w-[80%] space-y-1">
      <div class="text-lg font-bold">
        totalCount와 perPage를 조절하여 원하는 pagination을 제작하시면 됩니다.
      </div>
    </HippoWhiteFrame>
  </div>

  <div class="flex flex-col items-center mt-10">
    <div>
      <div class="flex justify-between bg-gray-200 font-semibold">
        <div class="bg-gray-300 py-2 px-3">Code</div>
        <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode("script")}>Copy</button>
      </div>
      <div class="py-5 px-4 bg-white">
        <pre id="script"><code>&ltscript&gt</code>
  <code>import &#123HippoPagination&#125 from "$lib/components/hippocomponent";</code>
  <code>let totalCount = 30</code>
  <code>let perPage = 5</code>
<code>&lt/script&gt</code>
</pre>
        </div>
    </div>
  </div>

  <div class="flex flex-col items-center mt-10">
    <div>
      <div class="flex justify-between bg-gray-200 font-semibold">
        <div class="bg-gray-300 py-2 px-3">Code</div>
        <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode("script")}>Copy</button>
      </div>
      <div class="py-5 px-4 bg-white">
        <pre id="script">
  <code>&ltHippoPagination &#123totalCount&#125 &#123perPage&#125 /&gt</code>
</pre>
        </div>
    </div>
  </div>


  <div class="flex gap-5">
    <HippoWhiteFrame class="px-4 py-5">
      <div>
        총 데이터 수(totalCount)
      </div>
      <HippoInput name="totalCount" placeholder="총 데이터 개수" bind:value={totalCount} />
    </HippoWhiteFrame>
  
    <HippoWhiteFrame class="px-4 py-5">
      <div>
        페이지당 데이터 수(perPage)
      </div>
      <HippoInput name="perPage" placeholder="페이지당 데이터 수" bind:value={perPage} />
    </HippoWhiteFrame>
  </div>

  <HippoWhiteFrame class="px-3 py-4">
    <HippoPagination {totalCount} {perPage} />
  </HippoWhiteFrame>
</div>
