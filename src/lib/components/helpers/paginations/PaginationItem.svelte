<script lang="ts">
	import classNames from 'classnames';
	import { getContext } from 'svelte';
	import './page.css';

	export let href: string | undefined = undefined;
	export let page: string | undefined = undefined;
	export let active: boolean = false;
	export let activeClass: string = 'active';
	export let normalClass: string = 'text-gray-500';
	export let numberClass: string = '';
	const group = getContext('group');
	const table = getContext('table');

	let defaultClass: string;
	$: defaultClass = classNames(
		'block py-1',
		group ? 'px-3' : 'px-3',
		'text-sm font-medium',
		numberClass,
		// table || 'border border-gray-300',
		group || (table ? '' : ''),
		active ? activeClass : normalClass,
		$$props.class
	);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class={active ? activeClass : defaultClass}
	data-page={href ?? page}
	on:blur
	on:change
	on:click
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseenter
	on:mouseleave
	on:mouseover
>
	<slot />
</svelte:element>
