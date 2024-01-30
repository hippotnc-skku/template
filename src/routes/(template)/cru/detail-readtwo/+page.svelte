<script>
	import { formatDateKr } from '$lib/api/function';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Breadcrumb, BreadcrumbItem } from '$lib/components/helpers';
	import { HippoWhiteFrame } from '$lib/components/hippocomponent';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

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

<CodeExampleFrame name="Sample">
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
</CodeExampleFrame>
<CodeExampleFrame name="Code">
	<iframe
		title="default"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:1111px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Fdetail-readtwo%2F_temp.svelte%3Fts%3D4%23L1-L51&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
