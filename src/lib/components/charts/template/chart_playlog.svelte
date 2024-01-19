<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';

	export let title: String = '플레이 로그';
	export let logs = [];
</script>

<HippoWhiteFrame class="w-[350px] h-[800px] overflow-auto p-2">
	<div class="flex justify-between items-center p-2 mx-2">
		<h6 class="text-md">{title}</h6>
		<div class="flex items-center gap-3">
			<i class="fa-solid fa-arrow-rotate-right text-2xl"></i>
			<i class="fa-duotone fa-calendar-days text-3xl"></i>
		</div>
	</div>
	<div class="flex-auto p-4">
		<div
			class="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px"
		>
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
		</div>
	</div>
</HippoWhiteFrame>
