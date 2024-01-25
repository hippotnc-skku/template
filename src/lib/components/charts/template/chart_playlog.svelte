<script lang="ts">
	import moment from 'moment-timezone';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import ButtonTooltip from '$lib/components/helpers/buttons/ButtonTooltip.svelte';
	import { onMount } from 'svelte';

	export let title: String = '플레이 로그';
	export let logs = [];
	let originLogs = logs;
	let dateSelect = false;
	let start_date;

	function init() {
		dateSelect = false;
		start_date = moment.tz(new Date(), 'Asia/Seoul').format('YYYY-MM-DD');
		logs = originLogs;
		logs.sort((a, b) => {
			if (a.inserted_at < b.inserted_at) return 1;
			if (a.inserted_at === b.inserted_at) return 0;
			if (a.inserted_at > b.inserted_at) return -1;
		});
	}

	function changeDate() {
		logs = originLogs;
		logs = logs.filter((n) => n.inserted_at.slice(0, 10) == start_date);
		dateSelect = false;
	}

	onMount(() => {
		init();
	});
</script>

<HippoWhiteFrame class="w-[350px] h-full p-2">
	<div class="flex justify-between items-center p-2 pb-0">
		<h6 class="text-md ml-2">{title}</h6>
		<div class="flex items-center">
			<ButtonTooltip
				size="xs"
				outline={true}
				class="text-xs h-full border-0"
				color="light"
				tooltipTxt="초기화"
				on:click={init}
			>
				<i class="fa-solid fa-arrow-rotate-right text-2xl"></i>
			</ButtonTooltip>
			<ButtonTooltip
				size="xs"
				outline={true}
				class="text-xs h-full border-0"
				color="light"
				tooltipTxt="날짜 선택"
				on:click={() => (dateSelect = dateSelect ? false : true)}
			>
				<i class="fa-duotone fa-calendar-days text-3xl"></i>
			</ButtonTooltip>
		</div>
	</div>
	{#if dateSelect}
		<div class="flex justify-end">
			<input
				on:change={changeDate}
				type="date"
				id="start_date"
				name="start_date"
				bind:value={start_date}
				class="mx-1 border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-auto p-2.5"
				placeholder="yyyy-mm-dd"
				required
			/>
		</div>
	{/if}
	<div class=" h-[89%] overflow-auto p-4 pl-2">
		{#if logs.length == 0}
			<div class="text-center">{start_date}에 로그가 없습니다</div>
		{:else}
			{#each logs as log, index}
				<div class="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
					<span
						class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold"
					>
						{#if log.log_code === '101'}
							<div
								class="animate-ping absolute inline-flex h-full w-full rounded-full {log.log_code ===
								'101'
									? 'bg-rose-500'
									: 'bg-green-500'} opacity-50"
							/>
						{/if}
						<div
							class="relative inline-flex rounded-full w-1.5 h-1.5 {log.log_code === '101'
								? 'bg-rose-500'
								: 'bg-green-500'}"
						/>
					</span>
					<div class="ml-12 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
						<div class="flex justify-between">
							<h6 class="mb-0 leading-normal text-sm text-slate-800">
								{log.service_type}-{log.log_code}
							</h6>
							<span class="mt-1 mb-0 leading-tight text-[8pt] text-slate-400"
								>{log.inserted_at}</span
							>
						</div>

						<p class="mt-1 mb-0 leading-tight text-xs text-slate-500">
							{log.log_message}
						</p>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</HippoWhiteFrame>
