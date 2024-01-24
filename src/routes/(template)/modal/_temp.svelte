<script lang="ts">
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { Modal } from '$lib/components/helpers';
	let editFamilyModal = false;
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
<HippoWhiteFrame>
	<Modal title="모달창 제목" bind:open={editFamilyModal}>
		<div class="text-black">모달창을 띄운 이유 (예시 :패밀리를 수정하시겠습니까?)</div>

		<svelte:fragment slot="footer">
			<form method="POST" action="/family/{$page.params.id}/edit/?/put" use:enhance={checkEditFamily}>
				{#each Object.entries(submitFamily) as [key, value]}
					<input type="hidden" name={key} bind:value={family[key]} />
				{/each}
				<HippoButton color="green" type="submit">수정</HippoButton>
			</form>
			<HippoButton color="gray" on:click={() => (editFamilyModal = false)}>닫기</HippoButton>
		</svelte:fragment>
	</Modal>
</HippoWhiteFrame>
