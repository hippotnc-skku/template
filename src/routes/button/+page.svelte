<script lang="ts">
	import HippoWhiteFrame from "$lib/components/hippocomponent/HippoWhiteFrame.svelte";
  import {HippoButton} from "$lib/components/hippocomponent";
	import { notifications } from "$lib/components/notification/notifications";
	import A from "$lib/components/helpers/typography/A.svelte";
	import { onDestroy } from "svelte";


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
 
  //  buttonCode.forEach((c,i) => c.push(`<HippoButton\n class="${c[0]} rounded-lg text-${c[1]} px-3 py-2"\n on:click={clicked}>\n 버튼 ${i+1} \n</HippoButton>`))
  buttonCode.forEach((c,i) => c.push(`<code>&ltHippoButton class="black rounded-lg text-black px-3 py-2"&gt</code><code>버튼</code><code>&ltHippoButton/&gt</code>`))

  function clicked() {
    notifications.success('클릭 됐습니다.', 1000)
  }

  function copyCode(id){
    let text = document.getElementById(id).innerText
    window.navigator.clipboard.writeText(text).then(() => {
      notifications.success('복사되었습니다.', 1000)
    })
  }

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

<div class="flex flex-col items-center mt-10">
  <div>
    <div class="flex justify-between bg-gray-200 font-semibold">
      <div class="bg-gray-300 py-2 px-3">Code</div>
      <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode("script")}>Copy</button>
    </div>
    <div class="py-5 px-4 bg-white">
      <pre id="script"><code>&ltscript&gt</code>
    <code>import &#123HippoButton&#125 from "$lib/components/hippocomponent";</code>
<code>&lt/script&gt</code></pre>
      </div>
  </div>
</div>

<div class="space-y-10 mt-10">
    {#each buttonCode as bc, i}
      <div class="flex items-center justify-between">
        <HippoButton style="background-color: {bc[0]}" class="{bc[0]} text-{bc[1]} px-3 py-2" on:click={clicked}>버튼 {i+1}</HippoButton>
        
        <div>
          <div class="flex justify-between bg-gray-200 font-semibold">
            <div class="bg-gray-300 py-2 px-3">Code</div>
            <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode(`button${i+1}`)}>Copy</button>
          </div>
          <div class="py-5 px-4 bg-white">
            <pre id="button{i+1}" class="text-sm"><code>&ltHippoButton class="{bc[0]} text-{bc[1]} px-3 py-2"
  on:click=&#123clicked&#125&gt</code><code>버튼</code>
<code>&lt/HippoButton&gt</code></pre>
            </div>
        </div>
      </div>
    {/each}
</div>