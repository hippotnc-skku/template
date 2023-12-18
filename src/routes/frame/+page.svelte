<script>
  import {HippoWhiteFrame} from "$lib/components/hippocomponent";
</script>


<div class="space-y-10">
  <div>
    HippoWhiteFrame의 기본 class값
  </div>

  <div class="flex justify-center">
    <HippoWhiteFrame class="text-center py-5 w-full space-y-1">
      <div class="text-lg font-bold">
        bg-white md:rounded-2xl bg-clip-border shadow-soft-sm
      </div>
      <div class="text-lg font-bold">
        기본 클래스를 제외하고 나머지 부분들을 모두 수정할 수 있습니다.
      </div>
    </HippoWhiteFrame>
  </div>

  <div>
    너비 full인 경우
  </div>
  <div class="flex justify-center">
    <HippoWhiteFrame class="text-center py-5 w-full space-y-1">
      <div class="text-lg font-bold">
          width: 100%인 경우
      </div>
    </HippoWhiteFrame>
  </div>

  <div>
    너비 80%인 경우
  </div>
  
  <div class="flex justify-center">
    <HippoWhiteFrame class="text-center py-5 w-[80%] space-y-1">
      <div class="text-lg font-bold">
        네이버
      </div>
      <div class="text-lg font-bold">
        <a class="text-blue-500" target="_blank" href="https://www.naver.com">https://www.naver.com</a> 
      </div>
    </HippoWhiteFrame>
  </div>

  <div>
    padding 40px로 한 경우
  </div>
  
  <div class="flex justify-center">
    <HippoWhiteFrame class="text-center p-10 w-[80%] space-y-1">
      <div class="text-lg font-bold">
        네이버
      </div>
      <div class="text-lg font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laborum dolorem repellat distinctio facere autem iste, asperiores at dicta qui est, totam corrupti et perferendis minus consequuntur illo suscipit doloribus.
      </div>
    </HippoWhiteFrame>
  </div>
</div>