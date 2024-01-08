<script>
	import { HippoInput, HippoWhiteFrame } from '$lib/components/hippocomponent';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">크기 변환은 padding, width을 조절하시면 됩니다.</div>
	<div class="text-lg font-bold">
		그 이외에 id나 type를 넣으시면 적용이됩니다.(ex: type = "submit", id="id")
	</div>
</HippoWhiteFrame>

<SetupFrame id="script">
	<pre id="script"><code>&lt<span class="script">script</span>&gt</code>
  <code
			><span class="import-from">import</span> &#123 HippoInput &#125 <span class="import-from"
				>from</span
			> "$lib/components/hippocomponent";</code
		>
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

<CodeBox class="mt-10" id="input_width">
	<div id="input_width" class="space-y-5">
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="width 100%" class="w-full" /&gt</code
			></pre>
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="width 80%" class="w-[80%]" /&gt</code
			></pre>
	</div>
</CodeBox>

<CodeExampleFrame name="높이 조절">
	<HippoWhiteFrame class="px-4 py-5 w-full">
		<div class="text-lg font-bold">height 50px</div>
		<HippoInput name="totalCount" placeholder="높이가 50px" class="w-full h-[50px]" />

		<div class="text-lg font-bold mt-10">height 80px</div>
		<HippoInput name="totalCount" placeholder="높이가 80px" class="w-full h-20" />
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="input_height">
	<div id="input_height" class="space-y-5">
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="높이가 50px" class="w-full h-[50px]" /&gt</code
			></pre>
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="높이가 80px" class="w-full h-20" /&gt</code
			></pre>
	</div>
</CodeBox>

<CodeExampleFrame name="인풋 내 패딩 조절">
	<HippoWhiteFrame class="px-4 py-5 w-full">
		<div class="text-lg font-bold">인풋을 클릭해보세요.(px-10 py-10)</div>
		<HippoInput
			name="totalCount"
			placeholder="패딩조절"
			class="w-full h-full"
			padding="px-10 py-10"
		/>

		<div class="text-lg font-bold mt-10">인풋을 클릭해보세요.(px-20 py-8)</div>
		<HippoInput
			name="totalCount"
			placeholder="패딩조절"
			class="w-full h-full"
			padding="px-20 py-8"
		/>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="input_padding">
	<div id="input_padding" class="space-y-5">
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="패딩조절" class="w-full h-full" padding="px-10 py-10" /&gt</code
			></pre>
		<pre id="longselect" class="text-sm"><code
				>&lt<span class="component">HippoInput</span
				> name="totalCount" placeholder="패딩조절" class="w-full h-full" padding="px-20 py-8" /&gt</code
			></pre>
	</div>
</CodeBox>
