<script lang="ts">
	import classNames from 'classnames';
	export let asideClass: string =
		'bg-gray-100 fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full overflow-y-auto transition-all duration-200 border-0 shadow-none dark:bg-gray-950 ease-soft-in-out z-30 max-w-[255px]';
</script>

<aside {...$$restProps} class={classNames(asideClass, $$props.class)} aria-label="Sidebar">
	<slot />
</aside>
