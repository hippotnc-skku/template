<script>
	import { onMount } from 'svelte';

	export let title;
	export let value;
	export let unit;
	export let change;
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

<div class="flex w-[380px] h-[90px] bg-white shadow-md rounded-lg">
	<div class="flex items-end ml-4">
		<!-- <i class="fa-solid fa-users text-7xl text-gray-200"></i> -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="object-fill w-[50px] h-[100px]"
			viewBox="0 0 640 512"
			><path
				d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
			/></svg
		>
	</div>
	<div class="flex items-center ml-5">
		<div>
			<div class="text-sm font-semibold">{title}</div>
			<div class="flex">
				<div class="text-2xl mt-1 font-semibold">{value.toLocaleString('ko-KR')}</div>
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
