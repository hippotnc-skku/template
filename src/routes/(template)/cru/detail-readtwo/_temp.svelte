<script>
	import { formatDateKr } from '$lib/api/function';
	import { HippoWhiteFrame } from '$lib/components/hippocomponent';

	export let data;

	let managerInfo = {
		id: '매니저 ID',
		uid: '매니저 uid',
		name: '이름',
		family_id: '패밀리 ID',
		phonenum: '연락처',
		inserted_at: '생성일',
		updated_at: '최근 수정일'
	};

	const managerData = {
		id: '33',
		uid: 'manager_uid',
		name: '매니저 이름',
		family_id: '321',
		phonenum: '010-1234-5678',
		inserted_at: '2023-01-01',
		updated_at: '2023-01-01'
	};
</script>

<div class="mx-auto max-w-[600px]">
	<HippoWhiteFrame class="px-8 py-6 mt-20">
		<div class="pb-2 font-bold text-xl border-b-2">
			{managerData['name']}
		</div>
		<div class="mt-5 w-full space-y-5">
			{#each Object.entries(managerInfo) as [key, value]}
				{#if ['inserted_at', 'updated_at'].includes(key)}
					<div class="space-y-0.5">
						<div class="text-md font-bold">{value}</div>
						<span class="inline-block font-semibold text-hippNavy"
							>{formatDateKr(managerData[key])}</span
						>
					</div>
				{:else}
					<div class="space-y-0.5">
						<div class="text-md font-bold">{value}</div>
						<span class="inline-block font-semibold text-hippNavy">{managerData[key]}</span>
					</div>
				{/if}
			{/each}
		</div>
	</HippoWhiteFrame>
</div>
