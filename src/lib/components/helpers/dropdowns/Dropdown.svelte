<script lang="ts">
	import classNames from 'classnames';
	import Popper from '$lib/components/helpers/utils/Popper.svelte';

	export let open: boolean = false;
	export let frameClass: string = '';

	export let changeTrigger: string = 'onmouse';

	$: {
		// set default values
		$$restProps.arrow = $$restProps.arrow ?? false;
		$$restProps.trigger = $$restProps.trigger ?? changeTrigger;
		$$restProps.placement = $$restProps.placement ?? 'bottom';
		$$restProps.color = $$restProps.color ?? 'dropdown';
		$$restProps.shadow = $$restProps.shadow ?? true;
		$$restProps.rounded = $$restProps.rounded ?? true;
	}

	// dropdown 박스 최소 크기 150px로 지정
	let popoverClass: string;
	$: popoverClass = classNames(
		'divide-y divide-gray-100 dark:divide-gray-600 min-w-[150px]',
		frameClass
	);
</script>

<Popper activeContent {...$$restProps} class={popoverClass} on:show bind:open>
	{#if $$slots.header}
		<div class="py-1 overflow-hidden rounded-t">
			<slot name="header" />
		</div>
	{/if}
	<ul class={$$props.class ?? 'py-1 px-3'}>
		<slot />
	</ul>
	{#if $$slots.footer}
		<div class="py-1  overflow-hidden rounded-b">
			<slot name="footer" />
		</div>
	{/if}
</Popper>
