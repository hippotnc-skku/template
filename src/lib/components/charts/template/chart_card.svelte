<script>
	import { onMount } from 'svelte';

	export let icon = '';
	export let title = '';
	export let value;
	export let unit = '';
	export let change = 0;
	export let changeUnit = '';
	let arrow;
	let color;
	onMount(() => {
		if (change > 0) {
			color = 'text-green-500';
			arrow = '↑';
		} else if (change < 0) {
			color = 'text-red-500';
			arrow = '↓';
		} else {
			change = '-';
			arrow = '';
		}
	});
</script>

<div class="flex w-[370px] h-[90px] bg-white shadow-md rounded-lg">
	<div class="flex items-end ml-1">
		<i class="{icon} text-7xl scale-x-[90%] text-gray-200"></i>
	</div>
	<div class="flex items-center ml-3">
		<div>
			<div class="text-sm">{title}</div>
			<div class="flex">
				<div class="text-2xl mt-1">{value.toLocaleString('ko-KR')}</div>
				<div class="flex items-end">
					<div class="text-xl ml-1">{unit}</div>
				</div>

				<div class="flex items-end">
					<div class="text-xs pb-1 ml-3 text-green {color}">{arrow}{change}{changeUnit}</div>
				</div>
			</div>
		</div>
	</div>
</div>
