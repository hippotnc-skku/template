<script lang="ts">
	import classNames from 'classnames';
	import { createEventDispatcher } from 'svelte';
	export let tab: number;
	export let items: string[];

	const dispatch = createEventDispatcher();

	function changeTab(index: number) {
		tab = index;
		dispatch('tabChange', {
			tab: tab
		});
	}
</script>

<div>
	<div class="pb-2">
		<div class="flex items-center justify-between">
			<div
				class="flex justify-start text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
			>
				<div>
					<ul class="flex flex-wrap -mb-px">
						{#each items as item, index}
							<li class="mr-2">
								<button
									class={classNames(
										'inline-block p-4 focus:text-blue-600 focus:border-blue-600 border-b-2 rounded-t-lg active dark:text-blue-500 dark:border-blue-500',
										index === tab ? 'text-blue-600 border-blue-600' : ''
									)}
									on:click={() => {
										changeTab(index);
									}}
									role="tab"
									aria-selected="true"
								>
									<span class="ml-1">{item}</span>
								</button>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>

	<slot />
</div>
