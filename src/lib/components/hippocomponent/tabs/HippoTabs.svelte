<script lang="ts">
	import classNames from 'classnames';
	import { createEventDispatcher } from 'svelte';
	export let tab: number;
	export let items: string[];
	export let style: 'fixed' | 'full' = 'fixed';

	const dispatch = createEventDispatcher();

	function changeTab(index: number) {
		tab = index;
		dispatch('tabChange', {
			tab: tab
		});
	}

	const tabHeadStyle = {
		fixed: '',
		full: 'w-full '
	};

	const tabStyle = {
		fixed: 'px-12 ',
		full: 'w-full '
	};
</script>

<div class="pb-2">
	<div class="flex items-center justify-between">
		<div class="w-full flex justify-start text-sm font-medium text-center text-gray-500">
			<ul class="flex -mb-px w-full">
				{#each items as item, index}
					<li class={tabHeadStyle[style]}>
						<button
							class={classNames(
								tabStyle[style] +
									'py-3 focus:text-blue-600 focus:border-blue-600 border-b-2 rounded-t-lg active dark:text-blue-500 dark:border-blue-500',
								index === tab ? 'text-blue-600 border-blue-600' : ''
							)}
							on:click={() => {
								changeTab(index);
							}}
							role="tab"
							aria-selected="true"
						>
							<span>{item}</span>
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<slot />
