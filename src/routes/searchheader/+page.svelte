<script lang="ts">
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
  import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
  import { HippoWhiteFrame, HippoSearchHeader } from '$lib/components/hippocomponent';
	import { notifications } from '$lib/components/notification/notifications';

  function firstFunction(){
    notifications.success("첫번째", 500)
  }

  function secondFunction(){
    notifications.success("두번째", 500)
  }

  function thirdFunction(){
    notifications.success("세번째", 500)
  }
</script>


<HippoWhiteFrame class="text-center py-5 px-10 w-full space-y-2">
  <div class="text-lg font-bold">
    needButtons으로 우측의 button group의 존재유무를 정할 수 있습니다.
  </div>
  <div class="text-start">
    <div class="mb-4 mt-5 font-bold">
      Default값
    </div>
    <div class="text-sm space-y-1">
      <div>
        needButtons: true (버튼 그룹 유무)
      </div>
      <div>
        firstName: "첫번째" (버튼 유무)
      </div>
      <div>
        secondName: "두번째" (버튼 유무)
      </div>
      <div>
        thirdName: "세번째" (버튼 유무)
      </div>
      <div>
        hasSecondButton: false (두번째 버튼 유무)
      </div>
      <div>
        hasThirdButton: false (세번째 버튼 유무)
      </div>
      <div>
        onFirst: function (첫번째 버튼 이벤트 함수설정)
      </div>
      <div>
        onSecond: function (두번째 버튼 이벤트 함수설정)
      </div>
      <div>
        onThird: function (세번째 버튼 이벤트 함수설정)
      </div>
      <div>
        secondColor: "bg-[#303030] text-white" (두번째 버튼 색선정)
      </div>
      <div>
        thirdColor: "bg-[#303030] text-white" (세번째 버튼 색선정)
      </div>
      <div>
        placeholder: "검색..." (placeholder 선정)
      </div>
    </div>
  </div>
</HippoWhiteFrame>

<SetupFrame>
  <pre id="script"><code>&lt<span class="script">script</span>&gt</code>
  <code><span class="import-from">import</span> &#123 HippoSearchHeader &#125 <span class="import-from">from</span> "$lib/components/hippocomponent";</code>
  <code>
    function firstFunction()&#123
      console.log("첫번째")
    &#125

    function secondFunction()&#123
      console.log("두번째")
    &#125

    function thirdFunction()&#123
      console.log("세번째")
    &#125
</code><code>&lt/<span class="script">script</span>&gt</code>
</pre>
</SetupFrame>

<CodeExampleFrame>
  <HippoWhiteFrame class="px-8 py-6 mt-10">
    <HippoSearchHeader on:onFirst={firstFunction} />
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="single">
  <pre id="single"><code>&lt<span class="component">HippoSearchHeader</span> <span class="function-event">on:onFirst=&#123firstFunction&#125&gt</span></code><code>버튼 </code>
<code>&lt/<span class="component">HippoSearchHeader</span>&gt</code></pre>
</CodeBox>

<CodeExampleFrame name="버튼 2개일 경우">
  <HippoWhiteFrame class="px-8 py-6 mt-10">
    <HippoSearchHeader firstName="히포" secondName="티앤" hasSecondButton={true}
    on:onFirst={firstFunction} on:onSecond={secondFunction} />
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="dual">
  <pre id="dual"><code>&lt<span class="component">HippoSearchHeader</span> firstName="히포" secondName="티앤" thirdName="씨이"
    hasSecondButton=&#123true&#125 <span class="function-event">on:onFirst=&#123firstFunction&#125</span>
    <span class="function-event">on:onSecond=&#123secondFunction&#125</span>&gt</code><code>버튼 </code>
<code>&lt/<span class="component">HippoSearchHeader</span>&gt</code></pre>
</CodeBox>

<CodeExampleFrame name="버튼 3개일 경우">
  <HippoWhiteFrame class="px-8 py-6 mt-10">
    <HippoSearchHeader firstName="히포" secondName="티앤" thirdName="씨이" hasSecondButton={true} hasThirdButton={true}
    on:onFirst={firstFunction} on:onSecond={secondFunction} on:onThird={thirdFunction} />
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="triple">
  <pre id="triple"><code>&lt<span class="component">HippoSearchHeader</span> firstName="히포" secondName="티앤" thirdName="씨이"
    hasSecondButton=&#123true&#125 hasThirdButton=&#123true&#125 <span class="function-event">on:onFirst=&#123firstFunction&#125</span>
    <span class="function-event">on:onSecond=&#123secondFunction&#125</span><span class="function-event"> on:onThird=&#123thirdFunction&#125</span>&gt</code><code>버튼 </code>
<code>&lt/<span class="component">HippoSearchHeader</span>&gt</code></pre>
</CodeBox>

<CodeExampleFrame name="버튼이 없는 경우">
  <HippoWhiteFrame class="px-8 py-6 mt-10">
    <HippoSearchHeader needButtons={false} />
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="nobutton">
  <pre id="nobutton"><code>&lt<span class="component">HippoSearchHeader</span>&gt</code><code>버튼</code><code>&lt/<span class="component">HippoSearchHeader</span>&gt</code></pre>
</CodeBox>