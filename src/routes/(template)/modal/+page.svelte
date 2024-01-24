<script lang="ts">
	import {HippoWhiteFrame,HippoButton} from '$lib/components/hippocomponent';
	import CodeExampleFrame from '$lib/codeboxframe/CodeExampleFrame.svelte';
	import { List, Li, Heading } from 'flowbite-svelte';
	import { Modal } from '$lib/components/helpers';
	import { notifications } from '$lib/components/notification/notifications';

	let editFamilyModal = false;
	let confirmBillModal=false;
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
	let family={
		name: '',
		registration_name: '',
		phonenum: '',
		intercom: '',
		fax: '',
		mobile: '',
		registration_number: '',
		registration_code: '',
		description: '',
		country: '',
		postal_code: '',
		sigungu: '',
		street: '',
		address: '',
		business_type: '',
		business_item: '',
		branch_code: '',
		product_code: '',
		employee_code: '',
		area_code: '',
		hp: '',
		hfc: ''
	}

	function checkEditFamily() {
		return async ({ result }) => {
			await applyAction(result);
			if (result?.data?.result === 'success') {
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
	function confirmBillState(){
		notifications.success('Modal창이 떴습니다.')
	}
</script>

<CodeExampleFrame name="Sample1">
	<HippoWhiteFrame class="p-2 my-2">
		<HippoButton on:click={()=> (editFamilyModal = true)}>모달창 띄우기</HippoButton>
		<Modal title="모달창 제목" bind:open={editFamilyModal}>
			<div class="text-black">모달창을 띄운 이유 (예시 :패밀리를 수정하시겠습니까?)</div>
		
			<svelte:fragment slot="footer">
				<form method="POST" action="" use:enhance={checkEditFamily}>
					{#each Object.entries(submitFamily) as [key, value]}
						<input type="hidden" name={key} bind:value={family[key]} />
					{/each}
					<HippoButton color="green" type="submit">수정</HippoButton>
				</form>
				<HippoButton color="gray" on:click={() => (editFamilyModal = false)}>닫기</HippoButton>
			</svelte:fragment>
		</Modal>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Code1">
	<iframe frameborder="0" scrolling="no" style="width:100%; height:1216px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fmodal%2F_temp.svelte%3Fts%3D4%23L1-L56&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"></iframe>
</CodeExampleFrame>
<CodeExampleFrame name="Sample2">
	<HippoWhiteFrame class="p-2 my-2">
	<HippoButton on:click={()=> (confirmBillModal = true)}>모달창 띄우기</HippoButton>

		<Modal title="청구 확정" bind:open={confirmBillModal}>
			<div class="w-full max-w-full px-3 flex-0 mt-2 text-black">청구 확정하시겠습니까?</div>
			<HippoButton color="green" on:click={confirmBillState}>청구 확정</HippoButton>
			<HippoButton color="gray" on:click={() => (confirmBillModal = false)}>닫기</HippoButton>
		</Modal>
	</HippoWhiteFrame>
</CodeExampleFrame>

<CodeExampleFrame name="Code2">
	<iframe frameborder="0" scrolling="no" style="width:100%; height:397px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fhippotnc-skku%2Ftemplate%2Fblob%2Fcomponent%2Fsrc%2Froutes%2F%28template%29%2Fmodal%2F_temp2.svelte%3Fts%3D4%23L1-L17&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"></iframe>
</CodeExampleFrame>

<CodeExampleFrame name="Options">
	<HippoWhiteFrame class="p-5 flex flex-wrap gap-5">
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>open (필수)</Heading
		>
		<List tag="ul" class="w-full space-y-1 text-gray-500 dark:text-gray-400">
			<Li>모달창이 나타나게 만드는 조건 </Li>
		</List>
		<Heading tag="h2" customSize="text-lg font-semibold" class="text-lg font-semibold text-gray-900"
			>내용</Heading
		>
		<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
			<Li> div 처리</Li>
			<Li> form 처리</Li>
			<Li> 버튼 처리</Li>
		</List>
	</HippoWhiteFrame>
</CodeExampleFrame>
