<script lang="ts">
	export let value: any = undefined;
</script>

<select
	{...$$restProps}
	class="border border-gray-300 text-gray-900 text-sm rounded-1.5 block px-2.5 py-2 rounded-md {$$restProps.class ??
		''}"
	bind:value
>
	<slot />
</select>
