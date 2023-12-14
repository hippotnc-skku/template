<script lang="ts">
	import { page } from '$app/stores';
	import Sort from '$lib/components/helpers/sort.svelte';
	import { goto } from '$app/navigation';

	export let data;
	export let key;
	export let title;

	let load: boolean = false;

	const selectTagChange = (sort_order) => (sort_by) => {
		if (load) return;
		load = true;
		$page.url.searchParams.set('sort_by', sort_by);
		$page.url.searchParams.set('sort_order', sort_order);
		goto(`${$page.url.pathname}${$page.url.search}`, { invalidateAll: true });
		load = false;
	};

	const sortUp = selectTagChange('asc');
	const sortDown = selectTagChange('desc');

	const checkSorted = (sort_by) => (sort_order) => {
		return sort_by === data.sort_by && sort_order === data.sort_order;
	};
</script>

<div class="flex justify-center items-center">
	<div>{title}</div>
	<div class="flex flex-col justify-center ml-2.5 pb-1.5">
		{#key data.sort_order}
			{#key data.sort_by}
				<button
					on:click={() => (checkSorted(key)('desc') ? sortUp(key) : sortDown(key))}
					class="w-2 h-2"
				>
					<Sort desc={checkSorted(key)('desc')} asc={checkSorted(key)('asc')} />
				</button>
			{/key}
		{/key}
	</div>
</div>
