<script lang="ts">
	import CodeBox from '$lib/codeboxframe/CodeBox.svelte';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import SetupFrame from '$lib/codeboxframe/SetupFrame.svelte';
	import { HippoWhiteFrame, HippoTabs } from '$lib/components/hippocomponent';
	import One from './One.svelte';
	import Three from './Three.svelte';
	import Two from './Two.svelte';
	let tab: number = 0;
	let items: string[] = ['히포', '티앤', '씨이'];

	const options = [{ component: One }, { component: Two }, { component: Three }];

	let selected = options[0];
</script>

<HippoWhiteFrame class="text-center py-5 w-full space-y-1">
	<div class="text-lg font-bold">One, Two, Three는 Component이며</div>
	<div class="text-lg font-bold">Component는 따로 import하셔야 합니다.</div>
</HippoWhiteFrame>

<SetupFrame id="script">
	<pre id="script"><code>&lt<span class="script">script</span>&gt</code><code>
	<span class="import-from">import</span> &#123 HippoTabs &#125 <span class="import-from">from</span
			> "$lib/components/hippocomponent";</code
		>
<code>	let tab: number = 0;
	let items: string[] = ['히포', '티앤', '씨이'];
	
	const options = [&#123 component: One &#125, &#123 component: Two &#125, &#123 component: Three &#125];
	
	let selected = options[0];</code
		>
<code>&lt/<span class="script">script</span>&gt</code>
	</pre>
</SetupFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="px-8 py-5">
		<HippoTabs {items} {tab} on:tabChange={(e) => (selected = options[e.detail.tab])}>
			<svelte:component this={selected.component} />
		</HippoTabs>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeBox id="tabs" class="mt-10">
	<pre id="tabs"><code
			>&lt<span class="component">HippoTabs</span
			> &#123 items &#125 &#123 tab &#125 on:tabChange=&#123(e) =&gt (selected = options[e.detail.tab])&#125&gt
	&ltsvelte:component this=&#123selected.component&#125 /&gt
&lt/<span class="component">HippoTabs</span>&gt
</code></pre>
</CodeBox>
