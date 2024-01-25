<!-- 센터/패밀리 추가 -->
<script>
	import { goto } from '$app/navigation';
	import { notifications } from '$lib/components/notification/notifications';

	import { Modal } from '$lib/components/helpers';
	import { applyAction, enhance } from '$app/forms';
	import { HippoWhiteFrame, HippoButton, HippoInput } from '$lib/components/hippocomponent';

	let registFamilyModal = false;

	let family = {
		name: '',
		registration_name: '',
		phonenum: '',
		intercom: '',
		fax: '',
		mobile: '',
		registration_number: '',
		registration_code: 7960,
		country: '대한민국',
		postal_code: '',
		sigungu: '',
		street: '',
		address: '',
		business_type: '',
		business_item: '',
		branch_code: '',
		employee_code: '',
		area_code: '',
		product_code: '',
		description: ''
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

	function checkRegistFamily() {
		notifications.success('모달 함수 확인', 500);
		return 0;
		return async ({ result }) => {
			await applyAction(result);
			if (result?.data?.result === 'success') {
				goto(`/family`);
				notifications.success('신규 패밀리 생성이 정상적으로 완료되었습니다', 1500);
			} else {
				notifications.warning('신규 패밀리 생성에 실패하였습니다', 1500);
				if (form?.errors) {
					Object.keys(form?.errors).forEach((key) => {
						family[key] = form?.errors[key];
					});
				}
				registFamilyModal = false;
			}
		};
	}
</script>

<svelte:head>
	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</svelte:head>

<Modal title="패밀리 생성" bind:open={registFamilyModal}>
	<div class="text-black">패밀리를 생성하시겠습니까?</div>

	<svelte:fragment slot="footer">
		<form method="POST" action="" use:enhance={checkRegistFamily}>
			{#each Object.entries(family) as [key, value]}
				<input type="hidden" name={key} bind:value={family[key]} />
			{/each}
			<HippoButton color="green" type="submit">생성</HippoButton>
		</form>
		<HippoButton color="gray" on:click={() => (registFamilyModal = false)}>닫기</HippoButton>
	</svelte:fragment>
</Modal>
<HippoWhiteFrame class="p-5">
	<h5 class="mb-0 font-semibold px-3 text-xl">
		패밀리 생성<span class="ml-5 text-xs text-blue-600">*</span><span
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
		<HippoButton color="green" size="lg" on:click={() => (registFamilyModal = true)}
			>생성</HippoButton
		>
		<HippoButton
			color="gray"
			size="lg"
			on:click={() => {
				notifications.success('이전 클릭', 500);
			}}>이전</HippoButton
		>
	</div>
</HippoWhiteFrame>
