<script>
	import { formatDateKr } from '$lib/api/function.js';
	import { HippoInput } from '$lib/components/hippocomponent';

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
</script>

<div class="flex items-baseline mb-4 pb-2 border-b-2 justify-between">
	<h5 class="mb-0 font-bold px-3 items-baseline text-xl">{family.name}</h5>
	<div>
		<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
			>{familyInfo.id}</label
		>
		<span class="mx-2">{family['id']}</span>
	</div>
</div>
<div class="grid lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-3">
	<div>
		<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
			>{familyInfo.name}</label
		>
		<HippoInput value={family['name']} disabled={true} border="border-0" class="w-full" />
	</div>
	<div>
		<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
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
		<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1 ml-3"
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
		<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
			>{familyInfo.inserted_at}</label
		>
		<HippoInput
			value={formatDateKr(family['inserted_at'])}
			disabled={true}
			border="border-0"
			class="w-full"
		/>
	</div>
	<div class="col-span-2">
		<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
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
		<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1"
			>{familyInfo.phonenum}</label
		>
		<HippoInput value={family['phonenum']} disabled={true} border="border-0" class="w-full" />
	</div>
	<div>
		<label class="mb-1 font-bold text-md text-slate-700 ml-3" for="First Name my-1">
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

<!-- <div class="flex justify-end">
	<div class="pl-1 mt-5 space-x-3">
		<HippoButton class="bg-[#39C261] text-white px-3 py-2" on:click={firstClick}
			>패밀리 정보 수정
		</HippoButton>
	</div>
</div> -->
