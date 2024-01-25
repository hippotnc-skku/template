<!-- 센터/패밀리 추가 -->
<script>
	import { goto } from '$app/navigation';
	import { notifications } from '$lib/components/notification/notifications';
	import { page } from '$app/stores';
	import { Modal } from '$lib/components/helpers';
	import { applyAction, enhance } from '$app/forms';
	import { HippoWhiteFrame, HippoButton, HippoInput } from '$lib/components/hippocomponent';

	let editFamilyModal = false;
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

	const execDaumPostcode = () => {
		new daum.Postcode({
			oncomplete: function (data) {
				family['sigungu'] = data.sigungu;
				family['street'] = data.roadAddress;
				family['postal_code'] = data.zonecode;
			}
		}).open();
	};

	let submitFamily = {
		name: '이름',
		registration_name: '상호명',
		phonenum: '센터 전화',
		intercom: '내선 번호',
		fax: '팩스 번호',
		mobile: '휴대폰 번호',
		registration_number: '사업자등록번호',
		registration_code: '서비스',
		description: '패밀리 설명',
		country: '국가',
		postal_code: '우편번호',
		sigungu: '시/군/구',
		street: '도로',
		address: '상세 주소',
		business_type: '업태',
		business_item: '종목',
		branch_code: '지사 코드',
		product_code: '상품 코드',
		employee_code: '사원 코드',
		area_code: '지역 코드',
		hp: '포인트',
		hfc: '크레딧'
	};

	function checkEditFamily() {
		return 0;
		return async ({ result }) => {
			await applyAction(result);
			if (result?.data?.result === 'success') {
				goto(`/family/${$page.params.id}`);
				notifications.success('수정이 완료되었습니다.', 1500);
			} else {
				notifications.warning('수정이 실패하였습니다.', 1500);
				if (form?.errors) {
					Object.keys(form?.errors).forEach((key) => {
						family[key] = form?.errors[key];
					});
				}
				editFamilyModal = false;
			}
		};
	}
</script>

<svelte:head>
	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</svelte:head>

<Modal title="패밀리 수정" bind:open={editFamilyModal}>
	<div class="text-black">패밀리를 수정하시겠습니까?</div>

	<svelte:fragment slot="footer">
		<form method="POST" action="" use:enhance={checkEditFamily}>
			{#each Object.entries(submitFamily) as [key, value]}
				<input type="hidden" name={key} bind:value={family[key]} />
			{/each}
			<HippoButton color="green" on:click={() => notifications.success('수정', 500)}
				>수정</HippoButton
			>
		</form>
		<HippoButton color="gray" on:click={() => (editFamilyModal = false)}>닫기</HippoButton>
	</svelte:fragment>
</Modal>

<HippoWhiteFrame class="p-5">
	<h5 class="mb-0 font-semibold px-3 text-xl">
		패밀리 수정<span class="ml-5 text-xs text-blue-600">*</span><span
			class="text-xs text-gray-500 font-light">은 필수 입력값입니다</span
		>
	</h5>
	<div></div>
	<div class="grid grid-cols-3 gap-2 mt-5">
		<div class="w-full max-w-full px-3 flex-0 mt-2">
			<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
				>패밀리 명<span class="text-sm text-blue-600">*</span></label
			>
			<HippoInput bind:value={family.name} border="border-1 border-gray-300" class="w-full" />
		</div>
		<div class="w-full max-w-full px-3 flex-0 mt-2">
			<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
				>상호 명(사업자등록증)<span class="text-sm text-blue-600">*</span></label
			>
			<HippoInput
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
					value={family.street ? '(' + family.postal_code + ') ' + family.street : ''}
					placeholder="주소 입력은 왼쪽의 검색 버튼을 이용해주세요"
					disabled={true}
					border="border-1 border-gray-300"
					class="w-full"
				/>
			</div>
		</div>
		<div class="w-full max-w-full px-3 flex-0 mt-2">
			<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
				>상세주소<span class="text-sm text-blue-600">*</span></label
			>
			<HippoInput bind:value={family.address} border="border-1 border-gray-300" class="w-full" />
		</div>
		<div class="w-full max-w-full px-3 flex-0 mt-2">
			<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
				>업태<span class="text-sm text-blue-600">*</span></label
			>
			<HippoInput
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
				bind:value={family.employee_code}
				border="border-1 border-gray-300"
				class="w-full"
			/>
		</div>
		<div class="w-full max-w-full px-3 flex-0 mt-2">
			<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
				>지역코드</label
			>
			<HippoInput bind:value={family.area_code} border="border-1 border-gray-300" class="w-full" />
		</div>
		<div class="w-full max-w-full px-3 flex-0 mt-2">
			<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
				>상품코드</label
			>
			<HippoInput
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
				bind:value={family.description}
				border="border-1 border-gray-300"
				class="w-full"
			/>
		</div>
	</div>
	<div class="flex justify-center gap-5 mt-8 mb-4">
		<HippoButton color="green" size="lg" on:click={() => (editFamilyModal = true)}>수정</HippoButton
		>
		<HippoButton color="gray" size="lg" on:click={() => goto(`/family/${data.families.id}`)}
			>이전</HippoButton
		>
	</div>
</HippoWhiteFrame>
