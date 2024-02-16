<script>
	import { HippoWhiteFrame, HippoButton, HippoInput } from '$lib/components/hippocomponent';
	import { formatDateKr } from '$lib/api/function.js';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

	export let data;

	const family = {
		id: 1,
		name: '수원 SKKU 정신건강센터',
		registration_name: '(주)SKKU',
		registration_number: '300-10-11011',
		registration_code: 1101,
		phonenum: '032-813-2801',
		country: 'rok',
		sigungu: 'gyeonggido',
		address: 'suwon',
		street: 'seoburo',
		postal_code: '16419',
		description: '대학내 멘탈케어센터',
		inserted_at: '2024-01-01',
		updated_at: '2024-01-01'
	};

	let familyInfo = {
		id: '패밀리 ID',
		name: '패밀리명',
		phonenum: '전화번호',
		mobile: '핸드폰번호',
		address: '주소(우편번호)',
		registration_number: '사업자등록번호',
		inserted_at: '등록일',
		registration_name: '사업자명'
	};

	function firstClick() {
		console.log('첫번째');
	}
</script>

<CodeExampleFrame name="Header에 정보를 넣을 경우">
	<HippoWhiteFrame class="px-7 py-6">
		<div class="flex items-baseline mb-4 pb-2 border-b-2 justify-between">
			<div class="flex items-center">
				<h5 class="mb-0 font-bold px-3 items-baseline text-xl">{family.name}</h5>
				<label class="font-bold text-md text-slate-700" for="First Name">{familyInfo.id}</label>
				<span class="mx-2">{family['id']}</span>
			</div>
			<HippoButton class="px-3 py-2" color="green" on:click={firstClick}
				>패밀리 정보 수정</HippoButton
			>
		</div>
		<div class="grid lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-3">
			<div>
				<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name"
					>{familyInfo.name}</label
				>
				<HippoInput value={family['name']} disabled={true} border="border-0" class="w-full" />
			</div>
			<div>
				<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name"
					>{familyInfo.registration_name}</label
				>
				<HippoInput
					value={family['registration_name']}
					disabled={true}
					border="border-0"
					class="w-full"
				/>
			</div>
			<div>
				<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name"
					>{familyInfo.registration_number}</label
				>
				<HippoInput
					value={family['registration_number']}
					disabled={true}
					border="border-0"
					class="w-full"
				/>
			</div>
			<div>
				<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name"
					>{familyInfo.inserted_at}</label
				>
				<HippoInput
					value={formatDateKr(family['inserted_at'])}
					disabled={true}
					border="border-0"
					class="w-full"
				/>
			</div>
			<div class="md:col-span-2">
				<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name"
					>{familyInfo.address}</label
				>
				<HippoInput
					value={family['sigungu'] +
						' ' +
						family['street'] +
						' ' +
						family['address'] +
						' (' +
						family['postal_code'] +
						')'}
					disabled={true}
					border="border-0"
					class="w-full"
				/>
			</div>
			<div>
				<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name"
					>{familyInfo.phonenum}</label
				>
				<HippoInput value={family['phonenum']} disabled={true} border="border-0" class="w-full" />
			</div>
			<div>
				<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name">
					{familyInfo.mobile}</label
				>
				<HippoInput
					value={!family['mobile'] ? '미등록' : family['mobile']}
					disabled={true}
					border="border-0"
					class="w-full"
				/>
			</div>
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame>
	<iframe
		title="code"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:2686px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Fdetail-readone%2F_temp.svelte%3Fts%3D4%23L1-L126&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
