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

<CodeExampleFrame>
	<HippoWhiteFrame class="px-8 py-5">
		<HippoTabs {items} {tab} on:tabChange={(e) => (selected = options[e.detail.tab])}>
			<svelte:component this={selected.component} />
		</HippoTabs>
	</HippoWhiteFrame>
</CodeExampleFrame>
