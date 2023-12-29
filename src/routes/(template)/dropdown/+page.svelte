<script lang="ts">
	import { Dropdown, DropdownItem } from '$components/helpers';
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import Toggle from '$lib/components/helpers/forms/Toggle.svelte';
	import { HippoWhiteFrame, HippoButton } from '$lib/components/hippocomponent';
	import type { DropDownItem } from '$lib/interface/templateInterface';

	function clickFunction(i) {
		console.log(i);
	}

	const items: DropDownItem[] = [
		{
			title: '타이틀1',
			link: '링크 1'
		},
		{
			title: '타이틀2',
			link: '링크 2'
		},
		{
			title: '타이틀3',
			link: '링크 3'
		},
		{
			title: '타이틀4',
			link: '링크 4'
		}
	];
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">크기 변환은 size의 width 와 height를(w,h) 조절하시면 됩니다.</div>
	<div class="text-lg font-bold">
		그 이외에 id나 checked등을 넣으시면 적용이됩니다.(ex: id ="id")
	</div>
</HippoWhiteFrame>

<SetupFrame id="script">
	<pre id="script"><code>&lt<span class="script">script</span>&gt</code>
    <code
			><span class="import-from">import</span> &#123 Dropdown, DropdownItem &#125 <span
				class="import-from">from</span
			> "$components/helpers";</code
		>
    <code
			><span class="import-from">import</span> &#123 HippoButton &#125 <span class="import-from"
				>from</span
			> "$lib/components/hippocomponent";</code
		>
    <code
			><span class="import-from">import type</span> &#123 DropDownItem &#125 <span
				class="import-from">from</span
			> $lib/interface/templateInterface";</code
		>
    
    <code
			>const items: DropDownItem[] = [
                &#123
                  title: '타이틀1',
                  link: '링크 1'
                &#125,
                &#123
                  title: '타이틀2',
                  link: '링크 2'
                &#125,
                &#123
                  title: '타이틀3',
                  link: '링크 3'
                &#125,
                &#123
                  title: '타이틀4',
                  link: '링크 4'
                &#125
          ];</code
		>
<code>&lt/<span class="script">script</span>&gt</code></pre>
</SetupFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="flex justify-center py-8">
		<HippoButton class="dropdown bg-hippNavy px-3 py-2 text-white">드롭다운 버튼</HippoButton>
		<Dropdown triggeredBy=".dropdown">
			{#each items as i}
				<DropdownItem
					defaultClass="font-medium py-2 hover:bg-gray-100 flex justify-center"
					on:click={() => clickFunction(i?.link)}>{i?.title}</DropdownItem
				>
			{/each}
		</Dropdown>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox class="mt-10" id="dropdown">
	<div id="dropdown">
		<pre><code
				>&lt<span class="component">HippoButton</span
				> class="dropdown bg-hippNavy px-3 py-2 text-white"
      &gt</code
			><code>드롭다운 버튼</code>
<code>&lt/<span class="component">HippoButton</span>&gt</code></pre>
		<pre><code>&lt<span class="component">Dropdown</span> triggeredBy=".dropdown"&gt</code>
  <code>&#123#each items as i &#125</code>
    <code
				>&lt<span class="component">DropdownItem</span
				> defaultClass="font-medium py-2 hover:bg-gray-100 flex justify-center"
        <span class="function-event">on:click=&#123() =&gt clickFunction(i?.link)&#125</span
				>&gt</code
			>
      &#123i?.title&#125
    <code>&lt/<span class="component">DropdownItem</span>&gt</code>
  <code>&#123/each&#125</code>
<code>&lt/<span class="component">Dropdown</span>&gt</code></pre>
	</div>
</CodeBox>
