<!-- 센터/패밀리 추가 -->
<script>
	import { HippoWhiteFrame, HippoButton, HippoInput } from '$lib/components/hippocomponent';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';

	let family = {
		name: '예시',
		registration_name: '예시',
		phonenum: '02-111-1111',
		intercom: '36',
		fax: '02-111-1111',
		mobile: '010-1111-1111',
		registration_number: '11-11111-11',
		registration_code: 7960,
		country: '대한민국',
		postal_code: '88888',
		sigungu: '히포시',
		street: '히포로',
		address: '히포빌딩',
		business_type: '업태 예시',
		business_item: '종목 예시',
		branch_code: '11',
		employee_code: '228-18',
		area_code: '81',
		product_code: '2222',
		description: '나라의 말이 중국과 달라 문자와 서로 통하지 아니하기에'
	};

	export let form;

	const execDaumPostcode = () => {
		new daum.Postcode({
			oncomplete: function (data) {
				family['sigungu'] = data.sigungu;
				family['street'] = data.roadAddress;
				family['postal_code'] = data.zonecode;
			}
		}).open();
	};
</script>

<svelte:head>
	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</svelte:head>

<CodeExampleFrame name="Sample">
	<HippoWhiteFrame class="p-5">
		<h5 class="mb-0 font-semibold px-3 text-xl">제목</h5>
		<div class="grid grid-cols-3 gap-2 mt-5">
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>패밀리 명<span class="text-sm text-blue-600">*</span></label
				>
				<HippoInput
					disabled={true}
					bind:value={family.name}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>상호 명(사업자등록증)<span class="text-sm text-blue-600">*</span></label
				>
				<HippoInput
					disabled={true}
					bind:value={family.registration_name}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>사업자등록번호<span class="text-sm text-blue-600">*</span></label
				>
				<HippoInput
					disabled={true}
					bind:value={family.registration_number}
					border="border-1 border-gray-300"
					class="w-full"
					placeholder="-를 반드시 포함하여 입력해주세요"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>전화번호<span class="text-sm text-blue-600">*</span></label
				>
				<HippoInput
					disabled={true}
					bind:value={family.phonenum}
					border="border-1 border-gray-300"
					class="w-full"
					placeholder="-를 반드시 포함하여 입력해주세요"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>휴대폰번호<span class="text-sm text-blue-600">*</span></label
				>
				<HippoInput
					disabled={true}
					bind:value={family.mobile}
					border="border-1 border-gray-300"
					class="w-full"
					placeholder="-를 반드시 포함하여 입력해주세요"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>팩스번호</label
				>
				<HippoInput
					disabled={true}
					bind:value={family.fax}
					border="border-1 border-gray-300"
					class="w-full"
					placeholder="-를 반드시 포함하여 입력해주세요"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2 col-span-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>패밀리 주소<span class="text-sm text-blue-600">*</span></label
				>
				<div class="flex">
					<HippoButton class="mr-3 w-24" color="blue" on:click={() => execDaumPostcode()}
						>주소 검색</HippoButton
					>
					<HippoInput
						disabled={true}
						value={family.street ? '(' + family.postal_code + ') ' + family.street : ''}
						placeholder="주소 입력은 왼쪽의 검색 버튼을 이용해주세요"
						border="border-1 border-gray-300"
						class="w-full"
					/>
				</div>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>상세주소<span class="text-sm text-blue-600">*</span></label
				>
				<HippoInput
					disabled={true}
					bind:value={family.address}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>업태<span class="text-sm text-blue-600">*</span></label
				>
				<HippoInput
					disabled={true}
					bind:value={family.business_type}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>종목<span class="text-sm text-blue-600">*</span></label
				>
				<HippoInput
					disabled={true}
					bind:value={family.business_item}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>지사코드</label
				>
				<HippoInput
					disabled={true}
					bind:value={family.branch_code}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>사원코드</label
				>
				<HippoInput
					disabled={true}
					bind:value={family.employee_code}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>지역코드</label
				>
				<HippoInput
					disabled={true}
					bind:value={family.area_code}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>상품코드</label
				>
				<HippoInput
					disabled={true}
					bind:value={family.product_code}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
			<div class="w-full max-w-full px-3 flex-0 mt-2 col-span-3">
				<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
					>패밀리 설명</label
				>
				<HippoInput
					disabled={true}
					bind:value={family.description}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
		</div>
	</HippoWhiteFrame>
</CodeExampleFrame>
