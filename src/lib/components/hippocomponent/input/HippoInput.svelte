<script lang="ts">
	export let placeholder: string = '';
	export let name: string = '';
	export let value: any = undefined;
	export let type: string = 'text';
	export let padding: string = 'px-3 py-2.5';

	const setType = (node: HTMLInputElement, _type: string) => {
		node.type = _type;
		return {
			update(_type: string) {
				node.type = _type;
			}
		};
	};
</script>

<input
	{...$$restProps}
	use:setType={type}
	{placeholder}
	{name}
	class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding {padding} font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none {$$restProps.class}"
	bind:value
	on:keypress
/>
