<script>
	import { HippoInput, HippoWhiteFrame } from "$lib/components/hippocomponent";


</script>

<div class="flex flex-col items-center">
  <div class="flex justify-center w-full">
    <HippoWhiteFrame class="text-center py-5 w-[80%] space-y-1">
      <div class="text-lg font-bold">
        크기 변환은 padding, width을 조절하시면 됩니다.
      </div>
      <div class="text-lg font-bold">
        그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id="id")
      </div>
    </HippoWhiteFrame>
  </div>
  
  
  <div class="flex justify-center mt-5 w-[80%]">
    <HippoWhiteFrame class="px-4 py-5 w-full">
      <div>
        input 1
      </div>
      <HippoInput name="totalCount" placeholder="input 1" class="w-full"  />
    </HippoWhiteFrame>
  </div>
</div>