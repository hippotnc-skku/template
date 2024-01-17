<script lang="ts">
	export let checked: any = undefined;
	export let name: string = '';
	export let size: string = 'w-4 h-4'
	export let rounded:string = 'rounded-md'
	export let distance:string = 'ml-2'
</script>

<label class="flex items-center">
	<input
		{...$$restProps}
		type="checkbox"
		class="{size} bg-gray-100 border-gray-300 {rounded} focus:ring-0 focus:ring-offset-0 {$$restProps.class}"
		{name}
		bind:checked
		on:click
		on:change
	/>
	<div class="{distance} text-[#5d5d5d] select-none">
		<slot />
	</div>
</label>
