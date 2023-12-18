<script>
  import {HippoPagination, HippoWhiteFrame} from '$lib/components/hippocomponent'
	import HippoInput from '$lib/components/hippocomponent/input/HippoInput.svelte';

  let totalCount = 30
  let perPage = 5

  const codeString = "<HippoPagination {totalCount} {perPage} />"
</script>


<div class="flex flex-col items-center mt-5 space-y-10">

  <div class="flex justify-center w-full">
    <HippoWhiteFrame class="text-center py-5 w-[80%] space-y-1">
      <div class="text-lg font-bold">
        totalCount와 perPage를 조절하여 원하는 pagination을 제작하시면 됩니다.
      </div>
    </HippoWhiteFrame>
  </div>


  <HippoWhiteFrame class="px-4 py-2">
      {codeString}
  </HippoWhiteFrame>


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
