<script>
  import {HippoCheckBox} from "$lib/components/hippocomponent";
  import HippoWhiteFrame from "$lib/components/hippocomponent/HippoWhiteFrame.svelte";
	import { notifications } from "$lib/components/notification/notifications";

  function onChange() {
    notifications.success('체크 변화 감지', 1000)
  }
   
  const checkboxCode = [
      ['text-[#1E2666]', 'white'],
      ['text-[#205CC2]', 'white'],
      ['text-[#DB0F26]', 'white'],
      ['text-[#3561AC]', 'white'],
      ['text-[#FF9114]', 'white'],
      ['text-[#39C261]', 'white'],
      ['text-[#F15D5D]', 'white'],
      ['text-[#373838]', 'white'],
      ['text-[#BCBCBC]', 'white'],
      ['text-[#1D58BD]', 'white'],
      ['text-[#4175CE]', 'white'],
      ['text-[#1349A5]', 'white'],
      ['text-[#7B7B7B]', 'white'],
      ['text-[#303030]', 'white'],
      ['text-[#DEDEDE]', 'black']
    ]
  
    checkboxCode.forEach((c,i) => c.push(`<HippoCheckBox\n id="id" class="${c[0]}" name="name"\n value=1 checked size="w-8 h-8" on:change={onChange}>\n 체크박스 ${i+1}\n</HippoCheckBox>`))


    const unchecked = `<HippoCheckBox\n id="id" class="text-black" name="name"\n value=1 checked size="w-8 h-8" on:change={onChange}>\n 체크박스 \n</HippoCheckBox>`

    const small = `<HippoCheckBox\n id="id" class="text-black" name="name"\n value=1 checked size="w-4 h-4" on:change={onChange}>\n 체크박스 \n</HippoCheckBox>`

    const farDistance = `<HippoCheckBox\n id="id" class="text-black" name="name"\n distance="ml-4" value=1 checked size="w-8 h-8"\n on:change={onChange}>\n 체크박스 \n</HippoCheckBox>`

    function copyCode(id){
    let text = document.getElementById(id).innerText
    window.navigator.clipboard.writeText(text).then(() => {
      notifications.success('복사되었습니다.', 1000)
    })
  }

</script>

<div class="flex flex-col">
  <HippoWhiteFrame class="text-center py-5 w-[80%] space-y-1 mx-auto">
    <div class="text-lg font-bold">
      크기 변환은 size의 width 와 height를(w,h) 조절하시면 됩니다.
    </div>
    <div class="text-lg font-bold">
      그 이외에 id나 checked등을 넣으시면 적용이됩니다.(ex: id="id")
    </div>
  </HippoWhiteFrame>

<div class="flex flex-col items-center mt-10">
    <div>
      <div class="flex justify-between bg-gray-200 font-semibold">
        <div class="bg-gray-300 py-2 px-3">Code</div>
        <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode("script")}>Copy</button>
      </div>
    <div class="py-5 px-4 bg-white">
        <pre id="script"><code>&ltscript&gt</code>
  <code>import &#123HippoCheckBox&#125 from "$lib/components/hippocomponent";</code>
<code>&lt/script&gt</code></pre>
      </div>
  </div>
</div>


  <div class="space-y-3 mt-10">
    <div class="flex items-center justify-between">
      <HippoCheckBox
        class="text-black"
        id="id" 
        name="name"
        value=0
        size="w-8 h-8"
        on:change={onChange}
        >기본 체크
      </HippoCheckBox>
      <div>
        <div class="flex justify-between bg-gray-200 font-semibold">
          <div class="bg-gray-300 py-2 px-3">Code</div>
          <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode("bigcheckbox")}>Copy</button>
        </div>
        <div class="py-5 px-4 bg-white">
          <pre id="bigcheckbox" class="text-sm"><code>&ltHippoCheckBox id="id"
  class="text-black" name="name"
  value=1 size="w-8 h-8"
  on:change=&#123onChange&#125&gt</code><code>기본 체크</code>
<code>&lt/HippoCheckBox&gt</code></pre>
          </div>
      </div>
    </div>
  </div>
  

  <div class="space-y-3 mt-10">
    <div class="flex items-center justify-between">
      <HippoCheckBox
        class="text-black"
        id="id"
        name="name"
        value=0
        size="w-4 h-4"
        on:change={onChange}
        >작은 체크
      </HippoCheckBox>
      <div>
        <div class="flex justify-between bg-gray-200 font-semibold">
          <div class="bg-gray-300 py-2 px-3">Code</div>
          <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode("smallcheckbox")}>Copy</button>
        </div>
        <div class="py-5 px-4 bg-white">
          <pre id="smallcheckbox" class="text-sm"><code>&ltHippoCheckBox id="id"
  class="text-black" name="name"
  value=1 size="w-4 h-4"
  on:change=&#123onChange&#125&gt</code><code>작은 체크</code>
<code>&lt/HippoCheckBox&gt</code></pre>
          </div>
      </div>
    </div>
  </div>

  <div class="space-y-3 mt-10">
    <div class="flex items-center justify-between">
      <HippoCheckBox
        class="text-black"
        id="id"
        name="name"
        value=0
        size="w-4 h-4"
        distance="ml-4"
        on:change={onChange}
        >레이블 거리 먼 체크
      </HippoCheckBox>
      <div>
        <div class="flex justify-between bg-gray-200 font-semibold">
          <div class="bg-gray-300 py-2 px-3">Code</div>
          <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode("farcheckbox")}>Copy</button>
        </div>
        <div class="py-5 px-4 bg-white">
          <pre id="farcheckbox" class="text-sm"><code>&ltHippoCheckBox id="id"
  class="text-black" name="name"
  value=1 size="w-4 h-4" distance="ml-4"
  on:change=&#123onChange&#125&gt</code><code>레이블 거리 먼 체크</code>
<code>&lt/HippoCheckBox&gt</code></pre>
          </div>
      </div>
    </div>
  </div>
  

  <div class="space-y-10 mt-10">
      {#each checkboxCode as cb, i}
        <div class="flex items-center justify-between">
          <HippoCheckBox
            class={cb[0]}
            id="id"
            name="name"
            value=0
            checked
            size="w-8 h-8"
            on:change={onChange}
            >체크박스 {i+1}
          </HippoCheckBox>
          <div>
            <div class="flex justify-between bg-gray-200 font-semibold">
              <div class="bg-gray-300 py-2 px-3">Code</div>
              <button class="bg-gray-300 p-2 px-3 hover:text-red-400" on:click={() => copyCode(`checkbox${i+1}`)}>Copy</button>
            </div>
            <div class="py-5 px-4 bg-white">
              <pre id="checkbox{i+1}" class="text-sm"><code>&ltHippoCheckBox id="id"
  class="{cb[0]}" name="name"
  value=1 size="w-8 h-8" checked
  on:change=&#123onChange&#125&gt</code><code>체크박스 {i+1}</code>
<code>&lt/HippoCheckBox&gt</code></pre>
              </div>
          </div>
        </div>
      {/each}
  </div>
</div>
