<!-- 센터/패밀리 추가 -->
<script>
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { notifications } from '$lib/components/notification/notifications.js';
	import { Modal, Button, Select } from '$lib/components/helpers';
	import HippoWhiteFrame from '$lib/components/hippocomponent/HippoWhiteFrame.svelte';
	import { HippoSelect, HippoInput, HippoButton } from '$lib/components/hippocomponent';
	export let data;
	export let form;

	let managerInfo = {
		name: {
			title: '이름',
			placeholder: '최소 2자 최대 32자 입력 부탁드립니다.',
			type: 'text'
		},
		uid: {
			title: 'ID',
			placeholder: '최소 6자 최대 64자 입력 부탁드립니다.',
			type: 'text'
		},
		password: {
			title: '비밀번호',
			placeholder: '비밀번호는 최소 8자 최대 32자 입력 부탁드립니다.',
			type: 'password'
		},
		password_confirmation: {
			title: '비밀번호 확인',
			placeholder: '비밀번호는 최소 8자 최대 32자 입력 부탁드립니다.',
			type: 'password'
		},
		phonenum: {
			title: '연락처',
			placeholder: '000-0000-0000(하이픈 추가해서 입력 부탁드립니다.)',
			type: 'text'
		},
		service_id: {
			title: '서비스'
		}
	};

	function checkManagerAdd() {
		return;

		return async ({ result }) => {
			await applyAction(result);
			if (result?.data?.result === 'success') {
				goto(`/family/${$page.params.id}`);
				notifications.success('생성 완료되었습니다.', 1500);
			} else {
				notifications.warning('생성에 문제가 발생했습니다.', 1500);
				if (form?.errors) {
					Object.keys(form?.errors).forEach((key) => {
						manager[key] = form?.errors[key];
					});
				}
				addManagerModal = false;
			}
		};
	}

	let manager = {
		name: '',
		uid: '',
		password: '',
		password_confirmation: '',
		phonenum: '',
		service_id: ''
	};

	let addManagerModal = false;

	const services = [
		{
			id: 1,
			service_name: '서비스 1',
			service_type: '1111'
		},
		{
			id: 2,
			service_name: '서비스 2',
			service_type: '2222'
		},
		{
			id: 3,
			service_name: '서비스 3',
			service_type: '3333'
		},
		{
			id: 4,
			service_name: '서비스 4',
			service_type: '4444'
		},
		{
			id: 5,
			service_name: '서비스 5',
			service_type: '5555'
		}
	];
</script>

<Modal title="매니저 생성" bind:open={addManagerModal}>
	<div class="text-black">매니저를 생성하시겠습니까?</div>

	<svelte:fragment slot="footer">
		<form
			method="POST"
			action="/family/{$page.params.id}/manager/add/?/create"
			use:enhance={checkManagerAdd}
		>
			{#each Object.entries(managerInfo) as [key, value]}
				<input type="hidden" name={key} bind:value={manager[key]} />
			{/each}
			<Button type="submit">저장</Button>
		</form>
		<Button color="alternative" on:click={() => (addManagerModal = false)}>닫기</Button>
	</svelte:fragment>
</Modal>

<div class="mx-auto max-w-[600px]">
	<HippoWhiteFrame class="px-8 py-6 mt-10">
		<h5 class="mb-0 font-bold text-2xl">매니저 생성</h5>

		<div class="mt-4">
			{#each Object.entries(managerInfo) as [key, value]}
				{#if ['service_id'].includes(key)}
					<div class="w-full max-w-full flex-0 mt-3">
						<label class="mb-1 font-bold text-sm text-slate-700" for="service_id"
							>{value?.title}</label
						>
						<HippoSelect name={key} class="border-[#3561AC] focus:border-[#3561AC] w-full">
							<option selected>서비스를 선택해주세요.</option>
							{#each services as service}
								<option value={service?.id}>{service.service_name}-{service.service_type}</option>
							{/each}
						</HippoSelect>
					</div>
				{:else}
					<div class="w-full max-w-full flex-0 mt-3">
						<label class="mb-1 font-bold text-sm text-slate-700" for="First Name"
							>{value?.title}</label
						>
						<HippoInput
							type={value?.type}
							name={key}
							placeholder={value?.placeholder}
							bind:value={manager[key]}
							class="w-full border-[#3561AC]"
						/>
					</div>
				{/if}
			{/each}
		</div>
		<div class="mt-12 flex justify-between">
			<HippoButton
				class="bg-[#39C261] text-white px-4 py-4"
				on:click={() => (addManagerModal = true)}
			>
				매니저 가입
			</HippoButton>
			<HippoButton
				class="bg-[#1349A5] text-white px-4 py-4"
				on:click={() => goto(`/family/${$page.params.id}`)}
			>
				돌아가기
			</HippoButton>
		</div>
	</HippoWhiteFrame>
</div>
