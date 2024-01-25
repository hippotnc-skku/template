<script>
	import { HippoWhiteFrame, HippoButton } from '$lib/components/hippocomponent';
	import { formatDateKr } from '$lib/api/function.js';
	import { HippoSort } from '$lib/components/hippocomponent';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from '$lib/components/helpers';
	import InfoHead from './InfoHead.svelte';

	const tableHeader = [
		{ name: '할인율', sort: false },
		{ name: '할인 이름', sort: false },
		{ name: '할인 조건', sort: false }
	];

	export let data;

	const service = {
		id: 1,
		addr: 'http://127.0.0.1:4007',
		service_name: 'HippBrainUp',
		service_type: 7970,
		app_key: 'ab4ed8b0-8159-4f7f-9ee4-6240db76f4e0',
		description: '힙브레인은 아동에게 효과적인 VR치료 서비스입니다.',
		fare: 5000,
		inserted_at: '2024-01-01',
		updated_at: '2024-01-01',
		discounts: [
			{
				percent: 50,
				name: '테스트',
				condition: ''
			}
		]
	};

	const serviceInfo = {
		id: '서비스 ID',
		service_type: '서비스 타입',
		description: '서비스 설명',
		app_key: 'App_Key',
		fare: '요금(원)',
		inserted_at: '생성일',
		updated_at: '최근 수정일',
		addr: '서비스 주소'
	};

	function firstClick() {
		console.log('첫번째');
	}

	function secondClick() {
		console.log('두번째');
	}
</script>

<HippoWhiteFrame class="px-7 py-6">
	<InfoHead />
</HippoWhiteFrame>

<div class="flex flex-col space-y-4 2xl:space-y-0 2xl:flex-row 2xl:justify-between mt-4 gap-x-3">
	<HippoWhiteFrame class="py-5 px-8 w-full 2xl:w-1/2">
		<div class="pb-2 font-bold text-xl border-b-2">
			{service.service_name}
		</div>
		<div class="mt-5 w-full space-y-5">
			{#each Object.entries(serviceInfo) as [key, value]}
				{#if ['inserted_at', 'updated_at'].includes(key)}
					<div class="space-y-0.5">
						<div class="text-md font-bold">{value}</div>
						<span class="inline-block font-semibold text-hippNavy"
							>{formatDateKr(service[key])}</span
						>
					</div>
				{:else}
					<div class="space-y-0.5">
						<div class="text-md font-bold">{value}</div>
						<span class="inline-block font-semibold text-hippNavy">{service[key]}</span>
					</div>
				{/if}
			{/each}
		</div>
	</HippoWhiteFrame>

	<HippoWhiteFrame class="py-5 px-8 w-full 2xl:w-1/2">
		<div class="font-bold text-xl pb-2 border-b-2">할인 목록</div>
		<Table hoverable="true">
			<TableHead>
				{#each tableHeader as th}
					{#if th.sort}
						<TableHeadCell textClass="text-[#303030] text-[13px] text-start">
							<HippoSort {data} key={th.key} title={th.name} />
						</TableHeadCell>
					{:else}
						<TableHeadCell textClass="text-[#303030] text-[13px] text-start"
							>{th.name}</TableHeadCell
						>
					{/if}
				{/each}
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				<col width="40%" />
				<col width="30%" />
				<col width="30%" />
				{#each service?.discounts as discount}
					<TableBodyRow color="custom" class="cursor-default">
						<TableBodyCell>{discount.percent}%</TableBodyCell>
						<TableBodyCell>{discount.name}</TableBodyCell>
						<TableBodyCell>{discount.condition ? discount.condition : '없음'}</TableBodyCell>
					</TableBodyRow>
				{:else}
					<tr>
						<td colspan="12" class="text-center text-lg h-[50px]">적용된 할인이 없습니다.</td>
					</tr>
				{/each}
			</TableBody>
		</Table>
	</HippoWhiteFrame>
</div>

<div class="p-3 m-2 flex justify-center">
	<HippoButton class="bg-[#39C261] text-white px-5 py-3 mx-2" on:click={firstClick}
		>첫번째</HippoButton
	>
	<HippoButton class="bg-[#373838] text-white px-5 py-3 mx-2" on:click={secondClick}
		>두번째</HippoButton
	>
</div>
