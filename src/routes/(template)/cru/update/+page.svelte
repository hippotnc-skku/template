<!-- 센터/패밀리 추가 -->
<script>
	import { goto } from '$app/navigation';
	import { notifications } from '$lib/components/notification/notifications';
	import { page } from '$app/stores';
	import { Modal } from '$lib/components/helpers';
	import { applyAction, enhance } from '$app/forms';
	import { HippoWhiteFrame, HippoButton, HippoInput } from '$lib/components/hippocomponent';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { autoAddHyphen } from '$lib/api/function';

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

	function updateData() {
		document.getElementById('submitButton').click();
		editFamilyModal = false;
	}
</script>

<svelte:head>
	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</svelte:head>

<Modal title="패밀리 수정" bind:open={editFamilyModal}>
	<div class="text-black">패밀리를 수정하시겠습니까?</div>

	<svelte:fragment slot="footer">
		<HippoButton color="green" on:click={updateData}>수정</HippoButton>
		<HippoButton color="gray" on:click={() => (editFamilyModal = false)}>닫기</HippoButton>
	</svelte:fragment>
</Modal>
<CodeExampleFrame name="Sample">
	<HippoWhiteFrame class="p-5">
		<form
			action="?/update"
			method="POST"
			use:enhance={() => {
				return async ({ result }) => {
					await applyAction(result);
				};
			}}
		>
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
					<HippoInput name="name" bind:value={family.name} class="w-full" />
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>상호 명(사업자등록증)<span class="text-sm text-blue-600">*</span></label
					>
					<HippoInput
						name="registration_name"
						bind:value={family.registration_name}
						class="w-full"
					/>
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>사업자등록번호<span class="text-sm text-blue-600">*</span></label
					>
					<HippoInput
						name="registration_number"
						bind:value={family.registration_number}
						class="w-full"
						placeholder="-를 반드시 포함하여 입력해주세요"
					/>
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>전화번호<span class="text-sm text-blue-600">*</span></label
					>
					<HippoInput
						on:input={(e) => {
							family.phonenum = autoAddHyphen(e);
						}}
						name="phonenum"
						bind:value={family.phonenum}
						class="w-full"
						placeholder="-를 반드시 포함하여 입력해주세요"
					/>
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>휴대폰번호<span class="text-sm text-blue-600">*</span></label
					>
					<HippoInput
						on:input={(e) => {
							family.mobile = autoAddHyphen(e);
						}}
						name="mobile"
						bind:value={family.mobile}
						class="w-full"
						placeholder="-를 반드시 포함하여 입력해주세요"
					/>
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>팩스번호</label
					>
					<HippoInput
						name="fax"
						bind:value={family.fax}
						class="w-full"
						placeholder="-를 반드시 포함하여 입력해주세요"
					/>
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>업태<span class="text-sm text-blue-600">*</span></label
					>
					<HippoInput name="business_type" bind:value={family.business_type} class="w-full" />
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>종목<span class="text-sm text-blue-600">*</span></label
					>
					<HippoInput name="business_item" bind:value={family.business_item} class="w-full" />
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>지사코드</label
					>
					<HippoInput name="branch_code" bind:value={family.branch_code} class="w-full" />
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>사원코드</label
					>
					<HippoInput name="employee_code" bind:value={family.employee_code} class="w-full" />
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>지역코드</label
					>
					<HippoInput name="area_code" bind:value={family.area_code} class="w-full" />
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>상품코드</label
					>
					<HippoInput name="product_code" bind:value={family.product_code} class="w-full" />
				</div>
				<div class="w-full max-w-full px-3 flex-0 mt-2 col-span-3">
					<label class="mb-1 font-semibold text-md text-slate-700 ml-2" for="First Name my-1"
						>패밀리 설명</label
					>
					<HippoInput name="description" bind:value={family.description} class="w-full" />
				</div>
			</div>
			<div class="flex justify-center gap-5 mt-8 mb-4">
				<HippoButton color="green" size="lg" on:click={() => (editFamilyModal = true)}
					>수정</HippoButton
				>
				<HippoButton color="green" size="lg" type="submit" id="submitButton" class="hidden"
					>수정</HippoButton
				>
				<HippoButton color="gray" size="lg" on:click={() => console.log('이전')}>이전</HippoButton>
			</div>
		</form>
	</HippoWhiteFrame>
</CodeExampleFrame>
<CodeExampleFrame name="Code">
	<iframe
		title="code"
		frameborder="0"
		scrolling="no"
		style="width:100%; height:6025px;"
		allow="clipboard-write"
		src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fcru%2Fupdate%2F_temp.svelte%3Fts%3D4%23L2-L286&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"
	></iframe>
</CodeExampleFrame>
