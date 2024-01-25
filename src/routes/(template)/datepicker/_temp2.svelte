<script lang="ts">
	import { formatYearMonth } from '$lib/api/function.js';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { notifications } from '$lib/components/notification/notifications';

	let month = formatYearMonth(new Date());
	function setMonth() {
		notifications.success('DatePicker 함수');
	}
</script>

<HippoWhiteFrame class="p-2 my-2">
	<div class="col-span-11">
		<input
			type="month"
			data-placeholder="날짜를 선택해주세요."
			aria-required="true"
			class=" w-[145px] px-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[44px] {month
				? 'selected'
				: ''}"
			bind:value={month}
			on:change={setMonth}
		/>
	</div>
</HippoWhiteFrame>
