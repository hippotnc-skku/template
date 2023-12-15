<script lang="ts">
	import HippoWhiteFrame from "$lib/components/hippocomponent/HippoWhiteFrame.svelte";
  import {HippoButton} from "$lib/components/hippocomponent";
	import { notifications } from "$lib/components/notification/notifications";


  const buttonCode = [
     ['bg-[#1E2666]', 'white'],
     ['bg-[#205CC2]', 'white'],
     ['bg-[#DB0F26]', 'white'],
     ['bg-[#3561AC]', 'white'],
     ['bg-[#FF9114]', 'white'],
     ['bg-[#39C261]', 'white'],
     ['bg-[#F15D5D]', 'white'],
     ['bg-[#373838]', 'white'],
     ['bg-[#BCBCBC]', 'white'],
     ['bg-[#F8F8F8]', 'black'],
     ['bg-[#FFFFFF]', 'black'],
     ['bg-[#1D58BD]', 'white'],
     ['bg-[#4175CE]', 'white'],
     ['bg-[#1349A5]', 'white'],
     ['bg-[#D3DDEE]', 'black'],
     ['bg-[#FCDEDE]', 'black'],
     ['bg-[#7B7B7B]', 'white'],
     ['bg-[#303030]', 'white'],
     ['bg-[#DEDEDE]', 'black']
   ]
 
   buttonCode.forEach((c,i) => c.push(`<HippoButton\n class="${c[0]} rounded-lg text-${c[1]} px-3 py-2"\n on:click={clicked}>\n 버튼 ${i+1} \n</HippoButton>`))

  function clicked() {
    notifications.success('클릭 됐습니다.', 1000)
  }

  const importElement =  `\n          import {HippoButton} from "$lib/components/hippocomponent"\n        `

</script>

<div class="flex justify-center">
  <HippoWhiteFrame class="text-center py-5 w-[80%] space-y-1">
    <div class="text-lg font-bold">
      크기 변환은 padding을 조절하시면 됩니다.
    </div>
    <div class="text-lg font-bold">
      그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id="id")
    </div>
  </HippoWhiteFrame>
</div>

<div class="flex justify-center mt-5">
  <HippoWhiteFrame class="text-center py-4 w-[80%]">
    <pre class="text-lg font-bold text-start flex justify-center">
        &lt;script&gt;{importElement}&ltscript&gt</pre>
  </HippoWhiteFrame>
</div>

<div class="space-y-3 mt-10">
    {#each buttonCode as bc, i}
      <div class="flex items-center justify-around">
        <HippoButton style="background-color: {bc[0]}" class="{bc[0]} rounded-lg text-{bc[1]} px-3 py-2" on:click={clicked}>버튼 {i+1}</HippoButton>
        <HippoWhiteFrame class="px-8 py-4">
        <main>
          <pre class="2xl:text-xl">{bc[2]}</pre>
        </main>
        </HippoWhiteFrame>
      </div>
    {/each}
</div>


