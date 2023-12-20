<script>
  import CodeBox from "$lib/codeboxframe/CodeBox.svelte";
  import CodeExampleFrame from "$lib/codeboxframe/CodeExampleFrame.svelte";
  import SetupFrame from "$lib/codeboxframe/SetupFrame.svelte";
  import {HippoCheckBox} from "$lib/components/hippocomponent";
  import HippoWhiteFrame from "$lib/components/hippocomponent/HippoWhiteFrame.svelte";
	import { notifications } from "$lib/components/notification/notifications";

  function onChange() {
    notifications.success('체크 변화 감지', 500)
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

</script>


<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
  <div class="text-lg font-bold">
    크기 변환은 size의 width 와 height를(w,h) 조절하시면 됩니다.
  </div>
  <div class="text-lg font-bold">
    그 이외에 id나 checked등을 넣으시면 적용이됩니다.(ex: id ="id")
  </div>
</HippoWhiteFrame>

<SetupFrame id="script">
  <pre id="script"><code>&lt<span class="script">script</span>&gt</code>
    <code><span class="import-from">import</span> &#123HippoCheckBox&#125 <span class="import-from">from</span> "$lib/components/hippocomponent";</code>
<code>&lt/<span class="script">script</span>&gt</code></pre>
</SetupFrame>

<CodeExampleFrame>
  <HippoWhiteFrame class="mt-10 p-5 flex">
    <div class="flex gap-5 mx-auto">
      <HippoCheckBox
        class="text-black"
        id="id" 
        name="name"
        value=0
        size="w-8 h-8"
        on:change={onChange}
        >큰 체크
      </HippoCheckBox>
      
      <HippoCheckBox
          class="text-black"
          id="id"
          name="name"
          value=0
          size="w-4 h-4"
          on:change={onChange}
          >작은 체크
        </HippoCheckBox>
  
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
    </div>
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox id="default" class="mt-10">
  <pre id="default" class="text-sm"><code>&lt<span class="componentcolor">HippoCheckBox</span> id="id" class="text-black" name="name"
  value=1 size="w-8 h-8" <span class="function-event">on:change=&#123onChange&#125</span>&gt</code>
  <code>큰 체크</code>
<code>&lt/<span class="componentcolor">HippoCheckBox</span>&gt</code>

<code>&lt<span class="componentcolor">HippoCheckBox</span> id="id"
  class="text-black" name="name" value=1 size="w-8 h-8"
  <span class="function-event">on:change=&#123onChange&#125</span>&gt</code><code>작은 체크</code>
<code>&lt/<span class="componentcolor">HippoCheckBox</span>&gt</code>

<code>&lt<span class="componentcolor">HippoCheckBox</span> id="id"
  class="text-black" name="name" value=1 size="w-4 h-4"
  distance="ml-4" <span class="function-event">on:change=&#123onChange&#125</span>&gt</code>
  <code>레이블 거리 먼 체크</code>
<code>&lt/<span class="componentcolor">HippoCheckBox</span>&gt</code></pre>
</CodeBox>



<CodeExampleFrame>
  <HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
    {#each checkboxCode as cb, i}
      <HippoCheckBox
        class={cb[0]}
        id="id"
        name="name"
        value=0
        checked
        size="w-8 h-8"
        on:change={onChange}
        ><span class="font-bold">체크박스 {i+1}</span>
      </HippoCheckBox>
    {/each}
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox id="checkboxes" class="mt-10">
  <div id="checkboxes">
    {#each checkboxCode as cb, i}
    <pre class="mt-5"><code>&lt<span class="componentcolor">HippoCheckBox</span> id="id"
      class="{cb[0]}" name="name"
      value=1 size="w-8 h-8" checked
      <span class="function-event">on:change=&#123onChange&#125</span>&gt</code><code>체크박스 {i+1}</code>
<code>&lt/<span class="componentcolor">HippoCheckBox</span>&gt</code></pre>
    {/each}
  </div>
</CodeBox>

