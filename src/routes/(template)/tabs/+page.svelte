<script lang="ts">
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
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

<CodeExampleFrame name="Setup">
	<iframe
		title="setup"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:292px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Ftabs%2F_temp.svelte%3Fts%3D4%23L1-L12&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>

<CodeExampleFrame>
	<HippoWhiteFrame class="px-8 py-5">
		<HippoTabs {items} {tab} on:tabChange={(e) => (selected = options[e.detail.tab])}>
			<svelte:component this={selected.component} />
		</HippoTabs>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame>
	<iframe
		title="default"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:103px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Ftabs%2F_temp.svelte%3Fts%3D4%23L14-L16&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
