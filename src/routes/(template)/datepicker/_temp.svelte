<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	let start_date = '';
	let end_date = '';
</script>

<HippoWhiteFrame class="p-2 my-2">
	<div class="col-span-11">
		<input
			type="date"
			id="start_date"
			name="start_date"
			bind:value={start_date}
			class="mx-1 border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-auto p-2.5"
			placeholder="yyyy-mm-dd"
			required
		/>부터
		<input
			type="date"
			id="end_date"
			name="end_date"
			bind:value={end_date}
			class="ml-3 mx-1 border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-auto p-2.5"
			placeholder="yyyy-mm-dd"
			required
		/>까지
	</div>
</HippoWhiteFrame>
