<script>
	import { HippoInput, HippoWhiteFrame } from "$lib/components/hippocomponent";
  import SetupFrame from "$lib/codeboxframe/SetupFrame.svelte";
	import CodeExampleFrame from "$lib/codeboxframe/CodeExampleFrame.svelte";
	import CodeBox from "$lib/codeboxframe/CodeBox.svelte";

</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
  <div class="text-lg font-bold">
    크기 변환은 padding, width을 조절하시면 됩니다.
  </div>
  <div class="text-lg font-bold">
    그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id="id")
  </div>
</HippoWhiteFrame>
  
<SetupFrame id="script">
  <pre id="script"><code>&lt<span class="script">script</span>&gt</code>
  <code><span class="import-from">import</span> &#123 HippoInput &#125 <span class="import-from">from</span> "$lib/components/hippocomponent";</code>
<code>&lt/<span class="script">script</span>&gt</code>
</pre>
</SetupFrame>
  
<CodeExampleFrame>
  <HippoWhiteFrame class="px-4 py-5 w-full">
    <div class="text-lg font-bold">width 100%</div>
    <HippoInput name="totalCount" placeholder="길이가 긴" class="w-full" />

    <div class="text-lg font-bold mt-10">width 80%</div>
    <HippoInput name="totalCount" placeholder="길이가 짧은" class="w-[80%]" />
  </HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="inputs">
  <div id="inputs" class="space-y-5">
    <pre id="longselect" class="text-sm"><code>&lt<span class="component">HippoInput</span> name="totalCount" placeholder="width 100%" class="w-full" /&gt</code></pre>
    <pre id="longselect" class="text-sm"><code>&lt<span class="component">HippoInput</span> name="totalCount" placeholder="width 80%" class="w-[80%]" /&gt</code></pre>
  </div>
</CodeBox>
