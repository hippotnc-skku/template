<script>
	import { formatDateKr } from '$lib/api/function';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Breadcrumb, BreadcrumbItem } from '$lib/components/helpers';
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

<!-- <div class="mt-1">
	<div
		class="top-0 left-0 flex flex-col visible w-full h-auto min-w-0 p-4 break-words border-0 opacity-100 shadow-soft-xl rounded-2xl bg-white"
	>
		<h5 class="mb-0 font-bold px-3">{managerName} 정보</h5>

		<div class="flex flex-wrap mt-4">
			{#each Object.entries(managerInfo) as [key, value]}
				{#if ['inserted_at', 'updated_at'].includes(key)}
					<div class="w-full max-w-full px-3 flex-0 sm:w-6/12 mt-2">
						<label class="mb-1 font-bold text-xs text-slate-700" for="First Name">{value}</label>
						<input
							type="text"
							disabled
							name={key}
							value={formatDateKr(data?.manager[key])}
							class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
						/>
					</div>
				{:else}
					<div class="w-full max-w-full px-3 flex-0 sm:w-6/12 mt-2">
						<label class="mb-1 font-bold text-xs text-slate-700" for="First Name">{value}</label>
						<input
							type="text"
							disabled
							name={key}
							value={data?.manager[key]}
							class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
						/>
					</div>
				{/if}
			{/each}
		</div>
		<div class="pl-1 mt-5 space-x-3">
			<button
				class="inline-block px-6 py-3 mb-4 ml-2 mt-1 font-bold text-center align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft active:opacity-85 active:shadow-soft-xs border-slate-700 text-slate-700 hover:border-slate-700 hover:bg-transparent hover:opacity-75 active:border-slate-700 active:bg-slate-700 active:text-white"
				on:click={() => goto(`/family/${$page.params.id}/manager/${$page.params.managerId}/edit`)}
				>수정</button
			>
			<button
				type="button"
				class="inline-block px-6 py-3 mb-4 ml-2 mt-1 font-bold text-center align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft active:opacity-85 active:shadow-soft-xs border-slate-700 text-slate-700 hover:border-slate-700 hover:bg-transparent hover:opacity-75 active:border-slate-700 active:bg-slate-700 active:text-white"
				on:click={() => goto(`/family/${$page.params.id}`)}>이전</button
			>
		</div>
	</div>
</div> -->
