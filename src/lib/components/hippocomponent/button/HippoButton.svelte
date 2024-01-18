<script lang="ts">
	import type { ButtonType, ButtonColor, ButtonSize } from '$lib/components/hippocomponent/type';

	export let type: ButtonType = 'button';
	export let color: ButtonColor = 'gray';
	export let size: ButtonSize = 'md';

	const buttonColor = {
		green: 'bg-[#39C261] text-white hover:bg-[#298c46]',
		orange: 'bg-[#FF9114] text-white hover:bg-[#854b0b]',
		gray: 'bg-[#373838] text-white hover:bg-[#202121]',
		blue: 'bg-[#4175CE] text-white hover:bg-[#244275]',
		red: 'bg-[#F15D5D] text-white hover:bg-[#8f3636]'
	};

	const buttonSize = {
		sm: 'text-xs px-2.5 py-1.5',
		md: 'text-sm px-3 py-2',
		lg: 'text-md px-4 py-2.5'
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
	class="{buttonColor[color]} {buttonSize[size]} {$$restProps.class} rounded-lg"
	on:click
	><slot />
</button>
