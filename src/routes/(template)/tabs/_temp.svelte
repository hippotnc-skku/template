<script lang="ts">
	import { HippoTabs } from '$lib/components/hippocomponent';
	import One from './One.svelte';
	import Three from './Three.svelte';
	import Two from './Two.svelte';
	let tab: number = 0;
	let items: string[] = ['히포', '티앤', '씨이'];

	const options = [{ component: One }, { component: Two }, { component: Three }];

	let selected = options[0];
</script>

<HippoTabs {items} {tab} on:tabChange={(e) => (selected = options[e.detail.tab])}>
	<svelte:component this={selected.component} />
</HippoTabs>
