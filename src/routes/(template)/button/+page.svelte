<script lang="ts">
	import HippoWhiteFrame from "$lib/components/hippocomponent/HippoWhiteFrame.svelte";
  import {HippoButton} from "$lib/components/hippocomponent";
	import { notifications } from "$lib/components/notification/notifications";
  import CodeExampleFrame from "$lib/codeboxframe/CodeExampleFrame.svelte";
	import SetupFrame from "$lib/codeboxframe/SetupFrame.svelte";
  import CodeBox from "$lib/codeboxframe/CodeBox.svelte";


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

  function clicked() {
    notifications.success('클릭 됐습니다.', 500)
  }

</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
  <div class="text-lg font-bold">
    크기 변환은 padding을 조절하시면 됩니다.
  </div>
  <div class="text-lg font-bold">
    그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id="id")
  </div>
</HippoWhiteFrame>

<SetupFrame id="script">
  <pre id="script"><code>&lt<span class="script">script</span>&gt</code>
    <code><span class="import-from">import</span> &#123 HippoButton &#125 <span class="import-from">from</span> "$lib/components/hippocomponent";</code>
<code>&lt/<span class="script">script</span>&gt</code></pre>
</SetupFrame>

<CodeExampleFrame name="Colors">
  <HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
    {#each buttonCode as bc, i}
      <HippoButton style="background-color: {bc[0]}" class="{bc[0]} text-{bc[1]} px-3 py-2" on:click={clicked}>버튼 {i+1}</HippoButton>
    {/each}
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox id="buttons" class="mt-10">
  <div id="buttons">
    {#each buttonCode as bc, i}
    <pre id="button{i+1}" class="mt-5"><code>&lt<span class="component">HippoButton</span> class="{bc[0]} text-{bc[1]} px-3 py-2"
      <span class="function-event">on:click=&#123clicked&#125</span>&gt</code><code>버튼 {i+1}</code>
<code>&lt/<span class="component">HippoButton</span>&gt</code></pre>
    {/each}
  </div>
</CodeBox>

