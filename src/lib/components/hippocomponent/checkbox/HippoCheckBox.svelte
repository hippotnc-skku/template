<script lang="ts">
	export let checked: any = undefined;
	export let name: string = '';
</script>

<label class="flex items-center {$$restProps.class}">
	<input
		{...$$restProps}
		type="checkbox"
		class="w-4 h-4 text-hippNavy bg-gray-100 border-gray-300 rounded focus:ring-0 focus:ring-offset-0"
		{name}
		bind:checked
		on:click
	/>
	<div class="ml-2 text-[#5d5d5d] select-none">
		<slot />
	</div>
</label>
