<script lang="ts">
	import type { ButtonType, ButtonColor } from '$lib/components/hippocomponent/type';

	export let type: ButtonType = 'button';
	export let color: ButtonColor = 'gray';

	const buttonColor = {
		green: 'bg-[#39C261] text-white px-3 py-2',
		orange: 'bg-[#FF9114] text-white px-3 py-2',
		gray: 'bg-[#373838] text-white px-3 py-2',
		blue: 'bg-[#4175CE] text-white px-3 py-2',
		red: 'bg-[#F15D5D] text-white px-3 py-2'
	};

	const setType = (node: HTMLButtonElement, _type: ButtonType) => {
		node.type = _type;
		return {
			update(_type: ButtonType) {
				node.type = _type;
			}
		};
	};
</script>

<button
	{...$$restProps}
	use:setType={type}
	class="{buttonColor[color]} {$$restProps.class} rounded-lg"
	on:click
	><slot />
</button>
